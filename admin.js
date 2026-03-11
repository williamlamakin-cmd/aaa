// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
});

// 页面切换
function showAdminPage(pageName) {
    document.querySelectorAll('.admin-page').forEach(page => {
        page.style.display = 'none';
    });
    document.querySelectorAll('.admin-menu a').forEach(link => {
        link.classList.remove('active');
    });

    const targetPage = document.getElementById(`admin-${pageName}`);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    event.target.classList.add('active');

    // 加载页面数据
    switch(pageName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'products':
            loadProducts();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'suppliers':
            loadSuppliers();
            break;
        case 'analytics':
            loadAnalytics();
            break;
    }
}

// 加载管理数据
function loadAdminData() {
    loadDashboard();
    loadProducts();
    loadOrders();
    loadSuppliers();
}

// 仪表盘
function loadDashboard() {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const pendingOrders = orders.filter(order => order.status === 'pending').length;

    document.getElementById('stat-orders').textContent = totalOrders;
    document.getElementById('stat-revenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('stat-products').textContent = products.length;
    document.getElementById('stat-pending').textContent = pendingOrders;

    // 最新订单
    const recentOrders = orders.slice(0, 5);
    document.getElementById('recent-orders').innerHTML = recentOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer.name}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${getOrderStatusText(order.status)}</span></td>
            <td>${formatDate(order.date)}</td>
        </tr>
    `).join('');
}

// 产品管理
function loadProducts() {
    document.getElementById('products-table').innerHTML = products.map(product => `
        <tr>
            <td><img src="${product.image}" alt="${product.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;" onerror="this.src='https://via.placeholder.com/50x50'"></td>
            <td>${product.title}</td>
            <td>${getCategoryText(product.category)}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.supplier}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-small" onclick="editProduct(${product.id})">编辑</button>
                    <button class="btn-small" onclick="deleteProduct(${product.id})" style="color: #ff4d4f;">删除</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function getCategoryText(category) {
    const categories = {
        electronics: '电子产品',
        clothing: '服装配饰',
        home: '家居生活',
        beauty: '美妆个护'
    };
    return categories[category] || category;
}

function openProductModal(productId = null) {
    const modal = document.getElementById('product-modal');
    const title = document.getElementById('product-modal-title');

    if (productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        title.textContent = '编辑产品';
        document.getElementById('product-id').value = product.id;
        document.getElementById('product-title').value = product.title;
        document.getElementById('product-category').value = product.category;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-original-price').value = product.originalPrice;
        document.getElementById('product-supplier').value = product.supplier;
        document.getElementById('product-supplier-id').value = product.supplierId;
        document.getElementById('product-supplier-name').value = product.supplierName;
        document.getElementById('product-supplier-rating').value = product.supplierRating;
        document.getElementById('product-supplier-orders').value = product.supplierOrders;
        document.getElementById('product-description').value = product.description;
        document.getElementById('product-image').value = product.image;
    } else {
        title.textContent = '添加产品';
        document.getElementById('product-form').reset();
        document.getElementById('product-id').value = '';
    }

    modal.classList.add('active');
}

function editProduct(productId) {
    openProductModal(productId);
}

function saveProduct(event) {
    event.preventDefault();

    const productId = document.getElementById('product-id').value;
    const productData = {
        title: document.getElementById('product-title').value,
        category: document.getElementById('product-category').value,
        price: parseFloat(document.getElementById('product-price').value),
        originalPrice: parseFloat(document.getElementById('product-original-price').value),
        supplier: document.getElementById('product-supplier').value,
        supplierId: document.getElementById('product-supplier-id').value,
        supplierName: document.getElementById('product-supplier-name').value,
        supplierRating: parseFloat(document.getElementById('product-supplier-rating').value),
        supplierOrders: parseInt(document.getElementById('product-supplier-orders').value) || 0,
        description: document.getElementById('product-description').value,
        image: document.getElementById('product-image').value || 'https://via.placeholder.com/280x250/cccccc/666666?text=No+Image',
        specs: {}
    };

    if (productId) {
        // 编辑现有产品
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index > -1) {
            products[index] = { ...products[index], ...productData };
        }
        showToast('产品更新成功');
    } else {
        // 添加新产品
        const newId = Math.max(...products.map(p => p.id)) + 1;
        products.push({
            id: newId,
            ...productData
        });
        showToast('产品添加成功');
    }

    closeModal();
    loadProducts();
    localStorage.setItem('admin_products', JSON.stringify(products));
}

function deleteProduct(productId) {
    if (!confirm('确定要删除此产品吗？')) return;

    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        products.splice(index, 1);
        loadProducts();
        showToast('产品删除成功');
        localStorage.setItem('admin_products', JSON.stringify(products));
    }
}

// 订单管理
function loadOrders() {
    document.getElementById('orders-table').innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer.name}</td>
            <td>${order.customer.country}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${getOrderStatusText(order.status)}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-small" onclick="viewOrderDetails('${order.id}')">详情</button>
                    <button class="btn-small" onclick="updateOrderStatus('${order.id}')">更新状态</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const details = `
订单号: ${order.id}
客户: ${order.customer.name}
邮箱: ${order.customer.email}
电话: ${order.customer.phone}
地址: ${order.customer.address}, ${order.customer.city}, ${order.customer.country}
币种: ${order.customer.currency}

订单商品:
${order.items.map(item => `- ${item.title} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

小计: $${order.subtotal.toFixed(2)}
运费: $${order.shipping.toFixed(2)}
总计: $${order.total.toFixed(2)}

订单状态: ${getOrderStatusText(order.status)}
下单时间: ${formatDate(order.date)}
    `;

    alert(details);
}

function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const statusOptions = [
        { value: 'pending', text: '待处理' },
        { value: 'processing', text: '处理中' },
        { value: 'purchased', text: '已采购' },
        { value: 'shipped', text: '已发货' },
        { value: 'delivered', text: '已送达' },
        { value: 'cancelled', text: '已取消' }
    ];

    const status = prompt(
        '选择新状态:\n' + statusOptions.map((opt, i) => `${i + 1}. ${opt.text}`).join('\n'),
        '1'
    );

    if (status && statusOptions[parseInt(status) - 1]) {
        const newStatus = statusOptions[parseInt(status) - 1].value;
        updateOrderStatusInternal(orderId, newStatus);
        loadOrders();
        loadDashboard();
        showToast('订单状态已更新');
    }
}

function updateOrderStatusInternal(orderId, newStatus, note = '') {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = newStatus;
    order.tracking.steps.push({
        status: newStatus,
        date: new Date().toISOString(),
        note: note || `状态更新为: ${getOrderStatusText(newStatus)}`
    });

    saveOrders();
}

// 供应商管理
function loadSuppliers() {
    const suppliers = {};

    products.forEach(product => {
        const key = product.supplierId;
        if (!suppliers[key]) {
            suppliers[key] = {
                id: product.supplierId,
                name: product.supplierName,
                platform: product.supplier,
                rating: product.supplierRating,
                orders: product.supplierOrders,
                products: []
            };
        }
        suppliers[key].products.push(product);
    });

    document.getElementById('suppliers-table').innerHTML = Object.values(suppliers).map(supplier => `
        <tr>
            <td>${supplier.id}</td>
            <td>${supplier.name}</td>
            <td>${supplier.platform}</td>
            <td>${supplier.rating} ★</td>
            <td>${supplier.orders.toLocaleString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-small" onclick="viewSupplierProducts('${supplier.id}')">查看产品 (${supplier.products.length})</button>
                    <button class="btn-small" onclick="openSupplierUrl('${supplier.platform}', '${supplier.id}')">访问平台</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function viewSupplierProducts(supplierId) {
    const supplierProducts = products.filter(p => p.supplierId === supplierId);
    const productList = supplierProducts.map(p => `- ${p.title} ($${p.price})`).join('\n');
    alert(`供应商 ${supplierId} 的产品:\n\n${productList}`);
}

function openSupplierUrl(platform, supplierId) {
    const urls = {
        '1688': `https://1688.com/shop/${supplierId}`,
        'taobao': `https://taobao.com/shop/${supplierId}`,
        'alibaba': `https://alibaba.com/suppliers/${supplierId}`,
        'other': '#'
    };

    window.open(urls[platform] || '#', '_blank');
}

// 数据分析
function loadAnalytics() {
    // 销售分布（按产品）
    const productSales = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            if (!productSales[item.id]) {
                productSales[item.id] = {
                    title: item.title,
                    quantity: 0,
                    revenue: 0
                };
            }
            productSales[item.id].quantity += item.quantity;
            productSales[item.id].revenue += item.price * item.quantity;
        });
    });

    const sortedProducts = Object.values(productSales).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    const maxRevenue = Math.max(...sortedProducts.map(p => p.revenue), 1);

    document.getElementById('sales-chart').innerHTML = sortedProducts.map(product => {
        const height = (product.revenue / maxRevenue * 100);
        return `
            <div style="flex: 1; text-align: center;">
                <div style="height: ${height}%; background: #1890ff; border-radius: 4px 4px 0 0; min-height: 20px;"></div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${product.title}
                </div>
                <div style="font-size: 0.75rem; color: #666;">
                    $${product.revenue.toFixed(0)}
                </div>
            </div>
        `;
    }).join('');

    // 分类销售占比
    const categorySales = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                if (!categorySales[product.category]) {
                    categorySales[product.category] = 0;
                }
                categorySales[product.category] += item.price * item.quantity;
            }
        });
    });

    const totalCategoryRevenue = Object.values(categorySales).reduce((sum, val) => sum + val, 0);

    document.getElementById('category-chart').innerHTML = Object.entries(categorySales).map(([category, revenue]) => {
        const percentage = (revenue / totalCategoryRevenue * 100).toFixed(1);
        return `
            <div style="margin-bottom: 0.5rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                    <span>${getCategoryText(category)}</span>
                    <span>$${revenue.toFixed(2)} (${percentage}%)</span>
                </div>
                <div style="height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; background: #52c41a; width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// 工具函数
function getOrderStatusText(status) {
    const statusInfo = orderStatuses[status];
    return statusInfo ? statusInfo.text : status;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function showToast(message) {
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

    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 点击模态框外部关闭
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
