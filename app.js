// app.js
let currentCategory = 'all';
let currentSearch = '';
let currentPage = 1;
const itemsPerPage = 12;

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupEventListeners();
    renderCategories();
    renderProducts();
    updateLanguage();
}

function setupEventListeners() {
    // 分类筛选
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-filter').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            currentPage = 1;
            renderProducts();
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            currentPage = 1;
            renderProducts();
        });
    }

    // 语言切换
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            localStorage.setItem('preferredLanguage', e.target.value);
            updateLanguage();
            renderProducts(); // 重新渲染以更新文本
        });
    }
    
    // 货币切换
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) {
        currencySelect.addEventListener('change', (e) => {
            localStorage.setItem('globalCurrency', e.target.value);
            window.globalCurrency = e.target.value; // 更新全局变量
            renderProducts(); // 重新渲染以更新价格
        });
    }
}

function renderCategories() {
    const container = document.getElementById('category-filters');
    if (!container) return;

    const categories = getCategories();
    let html = `<button class="category-filter active" data-category="all">${getCurrentText('全部', 'All')}</button>`;
    
    categories.forEach(cat => {
        const name = getCurrentText(cat.name.zh, cat.name.en);
        html += `<button class="category-filter" data-category="${cat.id}">${name}</button>`;
    });
    
    container.innerHTML = html;
}

function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    let allProducts = getProducts();

    // 筛选
    if (currentCategory !== 'all') {
        allProducts = allProducts.filter(p => p.category === currentCategory);
    }
    if (currentSearch) {
        const lang = localStorage.getItem('preferredLanguage') || 'zh';
        allProducts = allProducts.filter(p => 
            p.title[lang].toLowerCase().includes(currentSearch) || 
            p.description[lang].toLowerCase().includes(currentSearch)
        );
    }

    // 分页
    const totalPages = Math.ceil(allProducts.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = allProducts.slice(start, start + itemsPerPage);

    if (paginatedProducts.length === 0) {
        container.innerHTML = `<div class="no-products">${getCurrentText('暂无产品', 'No products found')}</div>`;
        return;
    }

    const currency = window.globalCurrency || 'USD';
    
    // 构建HTML (使用文档片段提高性能，减少闪烁)
    const fragment = document.createDocumentFragment();
    const grid = document.createElement('div');
    grid.className = 'products-grid-inner'; // 确保CSS针对此内部容器
    
    paginatedProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const lang = localStorage.getItem('preferredLanguage') || 'zh';
        const title = product.title[lang];
        const desc = product.description[lang];
        const price = convertPrice(product.price, currency);
        const origPrice = convertPrice(product.originalPrice, currency);
        const formattedPrice = formatCurrency(price, currency);
        const formattedOrigPrice = formatCurrency(origPrice, currency);

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${title}" loading="lazy" class="product-image">
                ${product.stock < 10 ? '<span class="stock-badge low-stock">Low Stock</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <p class="product-desc">${desc.substring(0, 60)}...</p>
                <div class="product-price">
                    <span class="current-price">${formattedPrice}</span>
                    <span class="original-price">${formattedOrigPrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    ${getCurrentText('加入购物车', 'Add to Cart')}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // 清空并追加，减少重绘次数
    container.innerHTML = '';
    container.appendChild(grid);
    
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    if (!container || totalPages <= 1) {
        if(container) container.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    container.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(productId) {
    // 简单的购物车逻辑示意
    alert(getCurrentText('已添加到购物车', 'Added to cart'));
    // 实际项目中应调用 chat.js 或专门的 cart 模块
}

function getCurrentText(zh, en) {
    return (localStorage.getItem('preferredLanguage') || 'zh') === 'zh' ? zh : en;
}

function updateLanguage() {
    const lang = localStorage.getItem('preferredLanguage') || 'zh';
    document.documentElement.lang = lang;
    
    // 更新静态文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        // 这里需要一个翻译字典，简化处理，实际应从 translations.js 获取
        // 示例：el.textContent = translations[lang][key];
    });
    
    // 刷新动态内容
    renderCategories();
    renderProducts();
}

// 暴露给全局作用域供HTML调用
window.addToCart = addToCart;
window.goToPage = goToPage;