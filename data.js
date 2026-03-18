// data.js
// 全局配置
let globalCurrency = localStorage.getItem('globalCurrency') || 'USD';
const exchangeRates = {
    USD: 1,
    CNY: 7.2,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150
};

// 模拟产品数据
// 价格策略：低于 Amazon/eBay (约 $600-$800)，高于 1688/淘宝 (约 ¥3000-4000 -> $420-$550)
// 设定售价区间：$480 - $550 (手机类)
const products = [
    {
        id: 1,
        title: { zh: "三星 Galaxy S9+ 智能手机", en: "Samsung Galaxy S9+ Smartphone" },
        price: 520.00,          // 修正：合理美元价格
        originalPrice: 750.00,  // 修正：参考原价 (Amazon价)
        category: "electronics",
        stock: 15,
        // 修正：使用不同的图片占位符，避免重复
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80", 
        description: {
            zh: "高性能智能手机，超长续航，高清摄像。",
            en: "High-performance smartphone with long battery life and HD camera."
        }
    },
    {
        id: 2,
        title: { zh: "荣耀 Magic6 智能手机", en: "Honor Magic6 Smartphone" },
        price: 580.00,
        originalPrice: 820.00,
        category: "electronics",
        stock: 20,
        // 修正：不同的图片
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff70?auto=format&fit=crop&w=500&q=80",
        description: {
            zh: "最新旗舰机型，AI摄影大师。",
            en: "Latest flagship model with AI photography mastery."
        }
    },
    {
        id: 21,
        title: { zh: "Panasonic 打印机 966", en: "Panasonic Printer 966" },
        price: 180.00,   // 修正：打印机合理价格
        originalPrice: 280.00,
        category: "electronics",
        stock: 50,
        // 修正：不同的图片
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=80",
        description: {
            zh: "高效办公打印机，支持无线连接。",
            en: "Efficient office printer with wireless connectivity."
        }
    },
    {
        id: 22,
        title: { zh: "Sony 智能手表 198", en: "Sony Smartwatch 198" },
        price: 120.00,   // 修正：手表合理价格
        originalPrice: 199.00,
        category: "electronics",
        stock: 30,
        // 修正：不同的图片
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
        description: {
            zh: "时尚智能手表，健康监测助手。",
            en: "Stylish smartwatch with health monitoring features."
        }
    },
    {
        id: 31,
        title: { zh: "多功能螺丝刀套装", en: "Multi-piece Screwdriver Set" },
        price: 15.50,    // 修正：工具合理价格
        originalPrice: 25.00,
        category: "tools",
        stock: 100,
        // 修正：不同的图片
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80",
        description: {
            zh: "家用维修必备，精工材质。",
            en: "Essential for home repair, made of precision materials."
        }
    },
    {
        id: 40,
        title: { zh: "医用轮椅 (轻便型)", en: "Medical Wheelchair (Lightweight)" },
        price: 150.00,   // 修正：医疗器械合理价格
        originalPrice: 250.00,
        category: "medical",
        stock: 10,
        // 修正：不同的图片
        image: "https://images.unsplash.com/photo-1584515933487-9d3005c017aa?auto=format&fit=crop&w=500&q=80",
        description: {
            zh: "轻便折叠，适合老人出行。",
            en: "Lightweight and foldable, suitable for elderly travel."
        }
    }
];

// 获取产品列表
function getProducts() {
    return products;
}

// 获取单个产品
function getProductById(id) {
    return products.find(p => p.id === id);
}

// 获取分类列表
function getCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    return categories.map(cat => ({
        id: cat,
        name: {
            zh: cat === 'electronics' ? '电子产品' : cat === 'tools' ? '五金工具' : cat === 'medical' ? '医疗器械' : '其他',
            en: cat === 'electronics' ? 'Electronics' : cat === 'tools' ? 'Tools' : cat === 'medical' ? 'Medical' : 'Others'
        }
    }));
}

// 汇率转换
function convertPrice(price, targetCurrency) {
    const rate = exchangeRates[targetCurrency] || 1;
    return (price * rate).toFixed(2);
}

// 格式化货币
function formatCurrency(amount, currency) {
    const symbols = { USD: '$', CNY: '¥', EUR: '€', GBP: '£', JPY: '¥' };
    return `${symbols[currency] || '$'}${amount}`;
}

// 自动更新逻辑 (已禁用以防止闪烁)
/*
let productUpdateInterval;
let lastPriceUpdate;

function updateHotProducts() {
    console.log("Updating hot products...");
    // 这里原本有随机修改价格和替换产品的逻辑，已注释
    // 如果必须开启，请确保不要频繁调用 renderProducts()
}

function initProductAutoUpdate() {
    // const oneWeek = 7 * 24 * 60 * 60 * 1000;
    // productUpdateInterval = setInterval(() => {
    //     updateHotProducts();
    // }, oneWeek);
    // lastPriceUpdate = new Date();
    console.log("Auto-update disabled to prevent flickering.");
}
*/

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getProducts,
        getProductById,
        getCategories,
        convertPrice,
        formatCurrency,
        exchangeRates,
        globalCurrency
        // initProductAutoUpdate 已移除
    };
}