// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAuth();
    renderProducts();
    updateCartCount();
    renderCart();
    renderOrders();
});

// 页面切换
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 页面特定初始化
    switch(pageName) {
        case 'products':
            renderProducts();
            break;
        case 'cart':
            renderCart();
            break;
        case 'orders':
            renderOrders();
            break;
        case 'checkout':
            renderCheckout();
            break;
        case 'profile':
            renderProfile();
            break;
    }
}

// 产品相关函数
function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const categoryFilter = document.getElementById('category-filter')?.value || 'all';
    const priceFilter = document.getElementById('price-filter')?.value || 'all';

    let filteredProducts = products.filter(product => {
        // 分类过滤
        if (categoryFilter !== 'all' && product.category !== categoryFilter) {
            return false;
        }
        // 价格过滤
        if (priceFilter !== 'all') {
            if (priceFilter === '0-50' && product.price > 50) return false;
            if (priceFilter === '50-100' && (product.price <= 50 || product.price > 100)) return false;
            if (priceFilter === '100+' && product.price <= 100) return false;
        }
        return true;
    });

    const lang = currentLanguage;
    container.innerHTML = filteredProducts.map(product => {
        const title = typeof product.title === 'object' ? (product.title[lang] || product.title.en) : product.title;
        return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.image}" alt="${title}" class="product-image" onerror="this.src='https://via.placeholder.com/280x250/cccccc/666666?text=No+Image'">
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <div class="product-meta">
                    <div>
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <span class="product-original-price">${formatPrice(product.originalPrice)}</span>
                    </div>
                </div>
                <div class="product-tags">
                    <span class="product-tag">${translate('save')} ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                    <span class="product-tag">${translate('quality_assured')}</span>
                </div>
                <button class="add-to-cart-button" onclick="event.stopPropagation(); addToCart(${product.id})">
                    ${translate('add_to_cart')}
                </button>
            </div>
        </div>
    `}).join('');
}

function filterProducts() {
    renderProducts();
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const lang = currentLanguage;
    const title = typeof product.title === 'object' ? (product.title[lang] || product.title.en) : product.title;
    const description = typeof product.description === 'object' ? (product.description[lang] || product.description.en) : product.description;
    const specs = typeof product.specs === 'object' && product.specs[lang] ? product.specs[lang] : product.specs;

    const modal = document.getElementById('product-modal');
    const detailContent = document.getElementById('modal-product-detail');

    detailContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-header">
                <img src="${product.image}" alt="${title}" class="product-detail-image" onerror="this.src='https://via.placeholder.com/600x600/cccccc/666666?text=No+Image'">
                <div class="product-detail-info">
                    <h1>${title}</h1>
                    <div class="product-detail-price">
                        ${formatPrice(product.price)}
                        <span style="font-size: 1rem; color: #999; text-decoration: line-through; margin-left: 1rem;">
                            ${formatPrice(product.originalPrice)}
                        </span>
                    </div>
                    <p class="product-detail-description">${description}</p>

                    <div class="quantity-selector">
                        <span>${translate('quantity')}</span>
                        <button onclick="adjustModalQuantity(-1)">-</button>
                        <input type="number" id="modal-quantity" value="1" min="1" max="99" readonly>
                        <button onclick="adjustModalQuantity(1)">+</button>
                    </div>

                    <button class="add-to-cart-button" style="padding: 1rem 2rem; font-size: 1.1rem;" onclick="addToCartFromModal(${product.id})">
                        ${translate('add_to_cart')}
                    </button>
                </div>
            </div>

            <div class="product-specs">
                <h3>${translate('product_specs')}</h3>
                <ul>
                    ${Object.entries(specs).map(([key, value]) => `
                        <li><strong>${key}:</strong> ${value}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
}

function adjustModalQuantity(delta) {
    const input = document.getElementById('modal-quantity');
    let value = parseInt(input.value) + delta;
    value = Math.max(1, Math.min(99, value));
    input.value = value;
}

function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('modal-quantity').value);
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    closeModal();
}

// 购物车相关函数
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showToast('已添加到购物车');
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
    }
    saveCart();
    updateCartCount();
    renderCart();
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 2rem; color: #999;">${translate('empty_cart')}</p>`;
        document.getElementById('cart-total-price').textContent = formatPrice(0);
        return;
    }

    const lang = currentLanguage;
    container.innerHTML = cart.map(item => {
        const title = typeof item.title === 'object' ? (item.title[lang] || item.title.en) : item.title;
        return `
        <div class="cart-item">
            <img src="${item.image}" alt="${title}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/100x100/cccccc/666666?text=No+Image'">
            <div class="cart-item-info">
                <h3>${title}</h3>
                <p>${formatPrice(item.price)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="removeFromCart(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="addToCart(${item.id})">+</button>
            </div>
            <div class="cart-item-remove" onclick="removeCartItem(${item.id})">✕</div>
        </div>
    `}).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total-price').textContent = formatPrice(total);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('购物车为空');
        return;
    }
    showPage('checkout');
}

// 结算相关函数
function renderCheckout() {
    const container = document.getElementById('checkout-items');
    if (!container) return;

    if (cart.length === 0) {
        showPage('products');
        return;
    }

    const lang = currentLanguage;
    container.innerHTML = cart.map(item => {
        const title = typeof item.title === 'object' ? (item.title[lang] || item.title.en) : item.title;
        return `
        <div class="summary-row">
            <span>${title} x ${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `}).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const total = subtotal + shipping;

    document.getElementById('checkout-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkout-shipping').textContent = formatPrice(shipping);
    document.getElementById('checkout-total').textContent = formatPrice(total);

    // 更新运费说明
    updateShippingNote();
}

function updateShippingNote() {
    const shippingNoteEl = document.getElementById('shipping-note');
    if (shippingNoteEl) {
        shippingNoteEl.textContent = translate('shipping_note_estimate');
    }
}

function calculateShipping(subtotal) {
    // 固定运费：500人民币 ≈ 70美元（估计）
    // 实际运费可能有所不同，多退少补
    const baseShippingCNY = 500;
    const baseShippingUSD = baseShippingCNY / exchangeRates.CNY;
    return baseShippingUSD;
}

function submitOrder(event) {
    event.preventDefault();

    const orderId = generateOrderId();
    const currency = document.getElementById('checkout-currency').value;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const total = subtotal + shipping;

    const orderData = {
        id: orderId,
        date: new Date().toISOString(),
        status: 'pending',
        paymentStatus: 'pending',
        customer: {
            name: document.getElementById('checkout-name').value,
            email: document.getElementById('checkout-email').value,
            phone: document.getElementById('checkout-phone').value,
            address: document.getElementById('checkout-address').value,
            city: document.getElementById('checkout-city').value,
            country: document.getElementById('checkout-country').value,
            currency: currency
        },
        items: cart.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        })),
        subtotal: subtotal,
        shipping: shipping,
        total: total,
        tracking: {
            steps: [
                { status: 'received', date: new Date().toISOString(), note: currentLanguage === 'en' ? 'Order received, awaiting payment' : '订单已接收，等待付款' }
            ]
        }
    };

    orders.unshift(orderData);
    saveOrders();

    // 清空购物车
    cart = [];
    saveCart();
    updateCartCount();

    // 显示支付信息
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('payment-instruction').style.display = 'block';
    document.getElementById('order-number-display').textContent = orderId;

    // 更新最终的银行信息（显示转换后的金额）
    const bankInfoDiv = document.getElementById('final-bank-info');
    const country = document.getElementById('checkout-country').value;
    const lang = currentLanguage;

    const bankNameLabel = lang === 'en' ? 'Bank Name' : '银行名称';
    const accountNumLabel = lang === 'en' ? 'Account Number' : '账户号码';
    const accountNameLabel = lang === 'en' ? 'Account Name' : '账户名称';
    const swiftLabel = lang === 'en' ? 'SWIFT Code' : 'SWIFT代码';
    const amountLabel = lang === 'en' ? 'Payment Amount' : '支付金额';

    if (bankAccounts[country]) {
        const account = bankAccounts[country];
        bankInfoDiv.innerHTML = `
            <div class="bank-details" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                <p><strong>🏦 ${bankNameLabel}:</strong> ${account.bankName}</p>
                <p><strong>💳 ${accountNumLabel}:</strong> ${account.accountNumber}</p>
                <p><strong>👤 ${accountNameLabel}:</strong> ${account.accountName}</p>
                <p><strong>🔄 ${swiftLabel}:</strong> ${account.swiftCode}</p>
                <hr style="margin: 1rem 0;">
                <p style="font-size: 1.2rem; color: #1890ff;"><strong>💰 ${amountLabel}: ${formatPrice(total, currency)}</strong></p>
            </div>
        `;
    } else {
        bankInfoDiv.innerHTML = `
            <div class="bank-details" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                <p><strong>🏦 ${bankNameLabel}:</strong> International Bank</p>
                <p><strong>💳 ${accountNumLabel}:</strong> INT-1234567890</p>
                <p><strong>👤 ${accountNameLabel}:</strong> GlobalChoice International</p>
                <p><strong>🔄 ${swiftLabel}:</strong> INTBKXXXX</p>
                <hr style="margin: 1rem 0;">
                <p style="font-size: 1.2rem; color: #1890ff;"><strong>💰 ${amountLabel}: ${formatPrice(total, currency)}</strong></p>
            </div>
        `;
    }

    // 模拟订单处理流程（当确认收款后）
    setTimeout(() => {
        simulateOrderProcessing(orderId);
    }, 2000);

    showToast(lang === 'en' ? 'Order submitted! Please complete payment' : '订单提交成功！请完成付款');
}

function generateOrderId() {
    return 'GC' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
}

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// 模拟订单处理
function simulateOrderProcessing(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const lang = currentLanguage;

    // 5分钟后标记为处理中
    setTimeout(() => {
        const note = lang === 'en' ? 'Payment confirmed, processing order' : '付款确认，订单处理中';
        updateOrderStatus(orderId, 'processing', note);
    }, 5 * 60 * 1000);

    // 30分钟后标记为已采购
    setTimeout(() => {
        const note = lang === 'en' ? 'Product sourced from premium suppliers' : '已从优质供应商采购商品';
        updateOrderStatus(orderId, 'purchased', note);
    }, 30 * 60 * 1000);

    // 1小时后标记为已发货
    setTimeout(() => {
        const note = lang === 'en' ? 'Shipped to international logistics center' : '商品已发货至国际物流中心';
        updateOrderStatus(orderId, 'shipped', note);
    }, 60 * 60 * 1000);

    // 3天后标记为已送达（实际场景需要真实时间）
    setTimeout(() => {
        const note = lang === 'en' ? 'Delivered' : '商品已送达';
        updateOrderStatus(orderId, 'delivered', note);
    }, 3 * 24 * 60 * 60 * 1000);
}

function updateOrderStatus(orderId, status, note) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = status;
    order.tracking.steps.push({
        status: status,
        date: new Date().toISOString(),
        note: note
    });

    saveOrders();
}

// 订单相关函数
function renderOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 2rem; color: #999;">${translate('empty_orders')}</p>`;
        return;
    }

    const lang = currentLanguage;
    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <span class="order-number">${translate('order_number')} ${order.id}</span>
                <span class="order-date">${translate('order_date')} ${formatDate(order.date)}</span>
                <span class="order-status ${order.status}">${getOrderStatusText(order.status)}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => {
                    const product = products.find(p => p.id === item.id);
                    const title = product ? (typeof product.title === 'object' ? (product.title[lang] || product.title.en) : product.title) : item.title;
                    return `
                    <div class="order-item">
                        <img src="${product?.image || 'https://via.placeholder.com/60x60'}" alt="${title}" class="order-item-image" onerror="this.src='https://via.placeholder.com/60x60/cccccc/666666?text=No+Image'">
                        <div class="order-item-info">
                            <h4>${title}</h4>
                            <p>${formatPrice(item.price)} x ${item.quantity}</p>
                        </div>
                    </div>
                `}).join('')}
            </div>
            <div class="order-footer">
                <button onclick="trackOrder('${order.id}')" style="padding: 0.5rem 1rem; background: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    ${translate('order_tracking')}
                </button>
                <span class="order-total">${translate('order_total')} ${formatPrice(order.total)}</span>
            </div>
        </div>
    `).join('');
}

function getOrderStatusText(status) {
    const statusInfo = orderStatuses[status];
    return currentLanguage === 'zh' ? statusInfo.text : statusInfo.textEn;
}

// 订单追踪
function trackOrder(orderId) {
    if (!orderId) {
        orderId = document.getElementById('tracking-input').value.trim();
    }

    if (!orderId) {
        showToast('请输入订单号');
        return;
    }

    const order = orders.find(o => o.id === orderId);
    if (!order) {
        showTrackingResult(null);
        return;
    }

    showTrackingResult(order);
}

function showTrackingResult(order) {
    const container = document.getElementById('tracking-result');
    if (!container) return;

    if (!order) {
        container.innerHTML = `<p style="text-align: center; padding: 2rem; color: #999;">${translate('no_result')}</p>`;
        return;
    }

    const trackingSteps = [
        { key: 'received', label: translate('tracking_steps').received },
        { key: 'processing', label: translate('tracking_steps').processing },
        { key: 'purchased', label: translate('tracking_steps').purchased },
        { key: 'quality_check', label: translate('tracking_steps').quality_check },
        { key: 'shipped', label: translate('tracking_steps').shipped },
        { key: 'in_transit', label: translate('tracking_steps').in_transit },
        { key: 'delivered', label: translate('tracking_steps').delivered }
    ];

    const statusIndex = trackingSteps.findIndex(step => step.key === order.status);

    container.innerHTML = `
        <div style="margin-bottom: 2rem; padding: 1rem; background: #f9f9f9; border-radius: 8px;">
            <h3 style="margin-bottom: 0.5rem;">${translate('order_number')} ${order.id}</h3>
            <p>${translate('order_date')} ${formatDate(order.date)}</p>
            <p style="color: var(--primary-color); font-weight: bold;">${getOrderStatusText(order.status)}</p>
        </div>

        <div class="tracking-timeline">
            ${order.tracking.steps.map((step, index) => `
                <div class="tracking-step ${index <= statusIndex ? 'completed' : ''} ${index === statusIndex ? 'active' : ''}">
                    <div class="tracking-step-date">${formatDate(step.date)}</div>
                    <div class="tracking-step-title">${translate('tracking_steps')[step.status] || step.status}</div>
                    <div class="tracking-step-description">${step.note}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// 工具函数
function formatPrice(price, currency = null) {
    const curr = currency || document.getElementById('checkout-currency')?.value || 'USD';
    const symbol = currencySymbols[curr];
    const rate = exchangeRates[curr];
    const convertedPrice = price * rate;

    switch (curr) {
        case 'JPY':
        case 'KRW':
        case 'VND':
            return `${symbol}${Math.round(convertedPrice).toLocaleString()}`;
        case 'IDR':
            return `${symbol}${Math.round(convertedPrice).toLocaleString()}`;
        default:
            return `${symbol}${convertedPrice.toFixed(2)}`;
    }
}

// 根据国家自动更新货币
function updateCurrencyByCountry() {
    const country = document.getElementById('checkout-country').value;
    const currencyMap = {
        'CN': 'CNY',
        'HK': 'HKD',
        'SG': 'SGD',
        'MY': 'MYR',
        'TH': 'THB',
        'VN': 'VND',
        'PH': 'PHP',
        'ID': 'IDR',
        'US': 'USD',
        'GB': 'EUR',
        'JP': 'JPY',
        'KR': 'KRW'
    };

    if (currencyMap[country]) {
        document.getElementById('checkout-currency').value = currencyMap[country];
        showBankInfo();
    }

    renderCheckout();
}

// 显示银行信息
function showBankInfo() {
    const country = document.getElementById('checkout-country').value;
    const currency = document.getElementById('checkout-currency').value;
    const bankInfoDiv = document.getElementById('bank-details');
    const lang = currentLanguage;

    const bankNameLabel = lang === 'en' ? 'Bank Name' : '银行名称';
    const accountNumLabel = lang === 'en' ? 'Account Number' : '账户号码';
    const accountNameLabel = lang === 'en' ? 'Account Name' : '账户名称';
    const swiftLabel = lang === 'en' ? 'SWIFT Code' : 'SWIFT代码';
    const noteLabel = lang === 'en' ? 'Please include order number in transfer reference' : '请在转账时备注订单号';

    let bankInfo = '';

    if (bankAccounts[country]) {
        const account = bankAccounts[country];
        bankInfo = `
            <div class="bank-details">
                <p><strong>${bankNameLabel}:</strong> ${account.bankName}</p>
                <p><strong>${accountNumLabel}:</strong> ${account.accountNumber}</p>
                <p><strong>${accountNameLabel}:</strong> ${account.accountName}</p>
                <p><strong>${swiftLabel}:</strong> ${account.swiftCode}</p>
                <p style="margin-top: 1rem; color: #1890ff;">
                    <strong>💡 ${noteLabel}</strong>
                </p>
            </div>
        `;
    } else if (currency === 'CNY') {
        bankInfo = `
            <div class="bank-details">
                <p><strong>${bankNameLabel}:</strong> ICBC</p>
                <p><strong>${accountNumLabel}:</strong> 6222 0200 1234 5678 901</p>
                <p><strong>${accountNameLabel}:</strong> GlobalChoice Technology Co., Ltd.</p>
                <p><strong>${lang === 'en' ? 'Branch' : '开户行'}:</strong> Shenzhen Branch</p>
                <p style="margin-top: 1rem; color: #1890ff;">
                    <strong>💡 ${noteLabel}</strong>
                </p>
            </div>
        `;
    } else {
        bankInfo = `
            <div class="bank-details">
                <p><strong>${bankNameLabel}:</strong> International Bank</p>
                <p><strong>${accountNumLabel}:</strong> INT-1234567890</p>
                <p><strong>${accountNameLabel}:</strong> GlobalChoice International</p>
                <p><strong>${swiftLabel}:</strong> INTBKXXXX</p>
                <p style="margin-top: 1rem; color: #1890ff;">
                    <strong>💡 ${noteLabel}</strong>
                </p>
            </div>
        `;
    }

    bankInfoDiv.innerHTML = bankInfo;
}

// 继续购物
function continueShopping() {
    document.getElementById('checkout-form').reset();
    document.getElementById('payment-instruction').style.display = 'none';
    document.getElementById('checkout-form').style.display = 'block';
    showPage('home');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString(currentLanguage === 'zh' ? 'zh-CN' : 'en-US', options);
}

function showToast(message) {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    toast.textContent = message;

    // 添加动画样式
    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // 3秒后移除
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 点击模态框外部关闭
document.getElementById('product-modal').addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') {
        closeModal();
    }
});

// 代找产品功能
let uploadedImages = [];

function handleImageUpload(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('image-preview-container');

    if (files.length + uploadedImages.length > 3) {
        showToast('最多只能上传3张图片');
        return;
    }

    for (let file of files) {
        if (uploadedImages.length >= 3) break;

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result;
            uploadedImages.push(imageData);

            const previewDiv = document.createElement('div');
            previewDiv.className = 'image-preview';
            previewDiv.innerHTML = `
                <img src="${imageData}" alt="产品图片">
                <button type="button" class="remove-image" onclick="removeImage(${uploadedImages.length - 1})">×</button>
            `;
            previewContainer.appendChild(previewDiv);

            // 隐藏上传占位符
            if (uploadedImages.length >= 3) {
                document.querySelector('.upload-placeholder').style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}

function removeImage(index) {
    uploadedImages.splice(index, 1);
    renderImagePreviews();

    // 显示上传占位符
    if (uploadedImages.length < 3) {
        document.querySelector('.upload-placeholder').style.display = 'block';
    }
}

function renderImagePreviews() {
    const previewContainer = document.getElementById('image-preview-container');
    previewContainer.innerHTML = '';

    uploadedImages.forEach((imageData, index) => {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'image-preview';
        previewDiv.innerHTML = `
            <img src="${imageData}" alt="产品图片">
            <button type="button" class="remove-image" onclick="removeImage(${index})">×</button>
        `;
        previewContainer.appendChild(previewDiv);
    });
}

function submitFindProduct(event) {
    event.preventDefault();

    const requestId = 'FP' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();

    const requestData = {
        id: requestId,
        date: new Date().toISOString(),
        status: 'pending',
        images: uploadedImages,
        description: document.getElementById('product-description').value,
        quantity: document.getElementById('product-quantity').value,
        budget: document.getElementById('budget-range').value,
        notes: document.getElementById('additional-notes').value,
        customer: {
            name: document.getElementById('find-name').value,
            email: document.getElementById('find-email').value,
            phone: document.getElementById('find-phone').value,
            country: document.getElementById('find-country').value
        }
    };

    // 保存到localStorage
    let findProductRequests = JSON.parse(localStorage.getItem('findProductRequests')) || [];
    findProductRequests.unshift(requestData);
    localStorage.setItem('findProductRequests', JSON.stringify(findProductRequests));

    // 显示结果
    document.getElementById('find-product-form').style.display = 'none';
    document.getElementById('find-product-result').style.display = 'block';
    document.getElementById('find-request-number').textContent = requestId;

    showToast('请求提交成功！');
}

function resetFindProduct() {
    uploadedImages = [];
    document.getElementById('find-product-form').reset();
    document.getElementById('image-preview-container').innerHTML = '';
    document.querySelector('.upload-placeholder').style.display = 'block';
    document.getElementById('find-product-form').style.display = 'block';
    document.getElementById('find-product-result').style.display = 'none';
}

