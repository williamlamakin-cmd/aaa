// 产品数据
const products = [
    {
        id: 1,
        title: { zh: "无线蓝牙耳机 Pro", en: "Wireless Bluetooth Headphones Pro" },
        price: 29.99,
        originalPrice: 59.99,
        category: "electronics",
        supplier: "1688",
        supplierId: "1688_SUP001",
        image: "https://via.placeholder.com/280x250/1890ff/ffffff?text=Wireless+Headphones",
        description: { 
            zh: "高品质无线蓝牙耳机，支持主动降噪，30小时续航，快速充电，舒适佩戴体验。", 
            en: "High-quality wireless Bluetooth headphones with active noise cancellation, 30-hour battery life, fast charging, and comfortable wearing experience." 
        },
        specs: {
            zh: {
                "蓝牙版本": "5.2",
                "续航时间": "30小时",
                "充电接口": "Type-C",
                "重量": "45g",
                "防水等级": "IPX5"
            },
            en: {
                "Bluetooth Version": "5.2",
                "Battery Life": "30 hours",
                "Charging Port": "Type-C",
                "Weight": "45g",
                "Water Resistance": "IPX5"
            }
        },
        supplierRating: 4.8,
        supplierOrders: 50000,
        supplierName: "深圳市音悦电子科技有限公司"
    },
    {
        id: 2,
        title: { zh: "智能运动手表", en: "Smart Sports Watch" },
        price: 45.99,
        originalPrice: 99.99,
        category: "electronics",
        supplier: "1688",
        supplierId: "1688_SUP002",
        image: "https://via.placeholder.com/280x250/52c41a/ffffff?text=Smart+Watch",
        description: { 
            zh: "多功能智能手表，支持心率监测、血氧检测、睡眠分析，50米防水，14天续航。", 
            en: "Multi-functional smartwatch with heart rate monitoring, blood oxygen detection, sleep analysis, 50m water resistance, and 14-day battery life." 
        },
        specs: {
            zh: {
                "屏幕尺寸": "1.4英寸",
                "续航时间": "14天",
                "防水等级": "5ATM",
                "重量": "48g",
                "传感器": "心率、血氧、睡眠"
            },
            en: {
                "Screen Size": "1.4 inch",
                "Battery Life": "14 days",
                "Water Resistance": "5ATM",
                "Weight": "48g",
                "Sensors": "Heart rate, SpO2, Sleep"
            }
        },
        supplierRating: 4.7,
        supplierOrders: 35000,
        supplierName: "杭州智科科技有限公司"
    },
    {
        id: 3,
        title: { zh: "时尚简约背包", en: "Fashion Simple Backpack" },
        price: 22.99,
        originalPrice: 49.99,
        category: "clothing",
        supplier: "1688",
        supplierId: "1688_SUP003",
        image: "https://via.placeholder.com/280x250/fa8c16/ffffff?text=Backpack",
        description: { 
            zh: "大容量多功能背包，防水材质，人体工学设计，适合通勤、旅行、上学。", 
            en: "Large capacity multi-functional backpack, waterproof material, ergonomic design, suitable for commuting, travel, and school." 
        },
        specs: {
            zh: {
                "材质": "防水尼龙",
                "容量": "25L",
                "重量": "550g",
                "颜色": "黑色、灰色、蓝色",
                "尺寸": "45cm x 30cm x 15cm"
            },
            en: {
                "Material": "Waterproof Nylon",
                "Capacity": "25L",
                "Weight": "550g",
                "Colors": "Black, Gray, Blue",
                "Dimensions": "45cm x 30cm x 15cm"
            }
        },
        supplierRating: 4.6,
        supplierOrders: 42000,
        supplierName: "义乌市佳品箱包厂"
    },
    {
        id: 4,
        title: { zh: "便携式充电宝 20000mAh", en: "Portable Power Bank 20000mAh" },
        price: 18.99,
        originalPrice: 39.99,
        category: "electronics",
        supplier: "1688",
        supplierId: "1688_SUP004",
        image: "https://via.placeholder.com/280x250/722ed1/ffffff?text=Power+Bank",
        description: { 
            zh: "大容量移动电源，支持PD快充，双USB输出，LED电量显示，安全多重保护。", 
            en: "High capacity power bank with PD fast charging, dual USB output, LED display, and multi-protection safety features." 
        },
        specs: {
            zh: {
                "容量": "20000mAh",
                "快充协议": "PD、QC3.0",
                "输出接口": "USB-A x2, Type-C",
                "重量": "420g",
                "输入功率": "18W"
            },
            en: {
                "Capacity": "20000mAh",
                "Fast Charging": "PD, QC3.0",
                "Output Ports": "USB-A x2, Type-C",
                "Weight": "420g",
                "Input Power": "18W"
            }
        },
        supplierRating: 4.9,
        supplierOrders: 68000,
        supplierName: "深圳市创联电子有限公司"
    },
    {
        id: 5,
        title: { zh: "LED台灯护眼灯", en: "LED Eye-Care Desk Lamp" },
        price: 25.99,
        originalPrice: 59.99,
        category: "home",
        supplier: "1688",
        supplierId: "1688_SUP005",
        image: "https://via.placeholder.com/280x250/eb2f96/ffffff?text=LED+Lamp",
        description: { 
            zh: "护眼LED台灯，无频闪，多档亮度调节，USB充电，可折叠便携设计。", 
            en: "Eye-care LED desk lamp, flicker-free, multi-level brightness adjustment, USB charging, foldable portable design." 
        },
        specs: {
            zh: {
                "光源": "LED无频闪",
                "亮度档位": "5档",
                "续航时间": "4-20小时",
                "充电接口": "USB",
                "色温": "3000K-6000K"
            },
            en: {
                "Light Source": "Flicker-free LED",
                "Brightness Levels": "5 levels",
                "Battery Life": "4-20 hours",
                "Charging Port": "USB",
                "Color Temperature": "3000K-6000K"
            }
        },
        supplierRating: 4.5,
        supplierOrders: 28000,
        supplierName: "中山市光明灯饰厂"
    },
    {
        id: 6,
        title: { zh: "纯棉T恤 多色可选", en: "Pure Cotton T-Shirt Multi-Color" },
        price: 9.99,
        originalPrice: 24.99,
        category: "clothing",
        supplier: "1688",
        supplierId: "1688_SUP006",
        image: "https://via.placeholder.com/280x250/13c2c2/ffffff?text=T-Shirt",
        description: { 
            zh: "100%纯棉T恤，透气舒适，多色可选，经典版型，适合日常穿着。", 
            en: "100% pure cotton t-shirt, breathable and comfortable, multiple colors available, classic fit, perfect for daily wear." 
        },
        specs: {
            zh: {
                "材质": "100%纯棉",
                "颜色": "白色、黑色、灰色、蓝色、红色",
                "尺码": "S-XXL",
                "厚度": "220g",
                "工艺": "精梳棉"
            },
            en: {
                "Material": "100% Cotton",
                "Colors": "White, Black, Gray, Blue, Red",
                "Sizes": "S-XXL",
                "Thickness": "220g",
                "Process": "Combed Cotton"
            }
        },
        supplierRating: 4.7,
        supplierOrders: 78000,
        supplierName: "广州时尚制衣厂"
    },
    {
        id: 7,
        title: { zh: "面部精华液 30ml", en: "Facial Serum 30ml" },
        price: 15.99,
        originalPrice: 35.99,
        category: "beauty",
        supplier: "1688",
        supplierId: "1688_SUP007",
        image: "https://via.placeholder.com/280x250/f759ab/ffffff?text=Serum",
        description: { 
            zh: "保湿抗皱面部精华，含透明质酸和维生素C，滋养肌肤，改善细纹。", 
            en: "Moisturizing anti-wrinkle facial serum with hyaluronic acid and vitamin C, nourishes skin and reduces fine lines." 
        },
        specs: {
            zh: {
                "容量": "30ml",
                "主要成分": "透明质酸、维生素C",
                "功效": "保湿、抗皱、提亮",
                "适用肌肤": "所有肤质",
                "保质期": "3年"
            },
            en: {
                "Volume": "30ml",
                "Key Ingredients": "Hyaluronic Acid, Vitamin C",
                "Benefits": "Moisturizing, Anti-wrinkle, Brightening",
                "Skin Type": "All skin types",
                "Shelf Life": "3 years"
            }
        },
        supplierRating: 4.8,
        supplierOrders: 45000,
        supplierName: "上海美妆生物科技有限公司"
    },
    {
        id: 8,
        title: { zh: "厨房多用刀具套装", en: "Kitchen Knife Set Multi-Purpose" },
        price: 34.99,
        originalPrice: 79.99,
        category: "home",
        supplier: "1688",
        supplierId: "1688_SUP008",
        image: "https://via.placeholder.com/280x250/faad14/ffffff?text=Knife+Set",
        description: { 
            zh: "5件套厨房刀具，不锈钢材质，锋利耐用，包含菜刀、水果刀、面包刀等。", 
            en: "5-piece kitchen knife set, stainless steel, sharp and durable, includes chef knife, fruit knife, bread knife, etc." 
        },
        specs: {
            zh: {
                "材质": "440C不锈钢",
                "套件数量": "5件",
                "包含刀具": "菜刀、水果刀、面包刀、剪刀、磨刀棒",
                "硬度": "HRC58-60",
                "手柄材质": "防滑ABS"
            },
            en: {
                "Material": "440C Stainless Steel",
                "Pieces": "5 pieces",
                "Includes": "Chef knife, Fruit knife, Bread knife, Scissors, Sharpening rod",
                "Hardness": "HRC58-60",
                "Handle Material": "Non-slip ABS"
            }
        },
        supplierRating: 4.6,
        supplierOrders: 32000,
        supplierName: "阳江市鑫华刀具厂"
    },
    {
        id: 9,
        title: { zh: "便携式蓝牙音箱", en: "Portable Bluetooth Speaker" },
        price: 27.99,
        originalPrice: 59.99,
        category: "electronics",
        supplier: "1688",
        supplierId: "1688_SUP009",
        image: "https://via.placeholder.com/280x250/2f54eb/ffffff?text=Bluetooth+Speaker",
        description: { 
            zh: "便携式无线音箱，360度环绕音效，防水设计，12小时续航，支持TWS连接。", 
            en: "Portable wireless speaker with 360° surround sound, waterproof design, 12-hour battery life, TWS pairing support." 
        },
        specs: {
            zh: {
                "功率": "10W x 2",
                "续航时间": "12小时",
                "防水等级": "IPX7",
                "连接方式": "蓝牙5.0",
                "重量": "320g"
            },
            en: {
                "Power": "10W x 2",
                "Battery Life": "12 hours",
                "Water Resistance": "IPX7",
                "Connectivity": "Bluetooth 5.0",
                "Weight": "320g"
            }
        },
        supplierRating: 4.7,
        supplierOrders: 38000,
        supplierName: "深圳市声韵电子有限公司"
    },
    {
        id: 10,
        title: { zh: "天然护肤套装", en: "Natural Skincare Set" },
        price: 42.99,
        originalPrice: 89.99,
        category: "beauty",
        supplier: "1688",
        supplierId: "1688_SUP010",
        image: "https://via.placeholder.com/280x250/eb2f96/ffffff?text=Skincare+Set",
        description: { 
            zh: "三件套天然护肤套装，包含洁面乳、爽肤水、乳液，温和无刺激，适合敏感肌。", 
            en: "3-piece natural skincare set including cleanser, toner, and lotion, gentle and non-irritating, suitable for sensitive skin." 
        },
        specs: {
            zh: {
                "包含": "洁面乳100ml + 爽肤水150ml + 乳液100ml",
                "成分": "天然植物提取物",
                "功效": "清洁、保湿、滋养",
                "适用肌肤": "敏感肌、所有肤质",
                "保质期": "3年"
            },
            en: {
                "Includes": "Cleanser 100ml + Toner 150ml + Lotion 100ml",
                "Ingredients": "Natural plant extracts",
                "Benefits": "Cleansing, Moisturizing, Nourishing",
                "Skin Type": "Sensitive skin, All skin types",
                "Shelf Life": "3 years"
            }
        },
        supplierRating: 4.9,
        supplierOrders: 56000,
        supplierName: "杭州天然美妆科技有限公司"
    },
    {
        id: 11,
        title: { zh: "智能温控水杯", en: "Smart Temperature Control Mug" },
        price: 32.99,
        originalPrice: 69.99,
        category: "home",
        supplier: "1688",
        supplierId: "1688_SUP011",
        image: "https://via.placeholder.com/280x250/13c2c2/ffffff?text=Smart+Mug",
        description: { 
            zh: "智能温控保温杯，LED温度显示，可设定温度，保温长达12小时，不锈钢材质。", 
            en: "Smart temperature control mug with LED display, customizable temperature, keeps warm for up to 12 hours, stainless steel." 
        },
        specs: {
            zh: {
                "容量": "450ml",
                "材质": "316不锈钢",
                "保温时间": "12小时",
                "温控范围": "40-90℃",
                "充电接口": "USB"
            },
            en: {
                "Capacity": "450ml",
                "Material": "316 Stainless Steel",
                "Insulation Time": "12 hours",
                "Temperature Range": "40-90℃",
                "Charging Port": "USB"
            }
        },
        supplierRating: 4.8,
        supplierOrders: 41000,
        supplierName: "永康市智造家居用品厂"
    },
    {
        id: 12,
        title: { zh: "运动鞋 轻便透气", en: "Sports Shoes Lightweight Breathable" },
        price: 38.99,
        originalPrice: 79.99,
        category: "clothing",
        supplier: "1688",
        supplierId: "1688_SUP012",
        image: "https://via.placeholder.com/280x250/fa8c16/ffffff?text=Sneakers",
        description: { 
            zh: "轻便透气运动鞋，鞋底防滑耐磨，记忆鞋垫，适合跑步、健身、日常穿着。", 
            en: "Lightweight breathable sneakers with non-slip durable sole, memory foam insole, perfect for running, fitness, and daily wear." 
        },
        specs: {
            zh: {
                "材质": "网布 + EVA鞋底",
                "重量": "单只约280g",
                "颜色": "白色、黑色、红色、蓝色",
                "尺码": "36-45",
                "特点": "透气、防滑、轻便"
            },
            en: {
                "Material": "Mesh + EVA Sole",
                "Weight": "Approx. 280g each",
                "Colors": "White, Black, Red, Blue",
                "Sizes": "36-45",
                "Features": "Breathable, Non-slip, Lightweight"
            }
        },
        supplierRating: 4.6,
        supplierOrders: 52000,
        supplierName: "泉州运动鞋业有限公司"
    }
];

// 货币汇率
const exchangeRates = {
    USD: 1,
    CNY: 7.2,
    HKD: 7.8,
    EUR: 0.92,
    JPY: 149.5,
    KRW: 1320,
    SGD: 1.34,
    MYR: 4.72,
    THB: 35.8,
    VND: 24300,
    PHP: 56.5,
    IDR: 15800
};

// 货币符号
const currencySymbols = {
    USD: "$",
    CNY: "¥",
    HKD: "HK$",
    EUR: "€",
    JPY: "¥",
    KRW: "₩",
    SGD: "S$",
    MYR: "RM",
    THB: "฿",
    VND: "₫",
    PHP: "₱",
    IDR: "Rp"
};

// 银行账户配置
const bankAccounts = {
    HK: {
        bankName: "Hong Kong Bank",
        accountNumber: "123-456789-001",
        accountName: "GlobalChoice Limited",
        swiftCode: "HKBAHKHH"
    },
    SG: {
        bankName: "DBS Bank Singapore",
        accountNumber: "003-123456-0",
        accountName: "GlobalChoice Pte Ltd",
        swiftCode: "DBSSSGSG"
    },
    MY: {
        bankName: "Maybank Malaysia",
        accountNumber: "123456789012",
        accountName: "GlobalChoice Sdn Bhd",
        swiftCode: "MBBEMYKL"
    },
    TH: {
        bankName: "Bangkok Bank",
        accountNumber: "123-4-56789-0",
        accountName: "GlobalChoice Co., Ltd.",
        swiftCode: "BKKBTHBK"
    },
    VN: {
        bankName: "Vietcombank",
        accountNumber: "1234567890",
        accountName: "GlobalChoice Vietnam",
        swiftCode: "BFTVVNVX"
    },
    PH: {
        bankName: "BDO",
        accountNumber: "1234567890",
        accountName: "GlobalChoice Philippines",
        swiftCode: "BNORPHMM"
    },
    ID: {
        bankName: "BCA",
        accountNumber: "1234567890",
        accountName: "GlobalChoice Indonesia",
        swiftCode: "CENAIDJA"
    }
};

// 订单状态
const orderStatuses = {
    pending: {
        text: "待处理",
        textEn: "Pending",
        color: "#fa8c16"
    },
    processing: {
        text: "处理中",
        textEn: "Processing",
        color: "#1890ff"
    },
    purchased: {
        text: "已采购",
        textEn: "Purchased",
        color: "#722ed1"
    },
    shipped: {
        text: "已发货",
        textEn: "Shipped",
        color: "#52c41a"
    },
    delivered: {
        text: "已送达",
        textEn: "Delivered",
        color: "#52c41a"
    },
    cancelled: {
        text: "已取消",
        textEn: "Cancelled",
        color: "#ff4d4f"
    }
};

// 分类翻译
const categoryTranslations = {
    electronics: { zh: "电子产品", en: "Electronics" },
    clothing: { zh: "服装配饰", en: "Clothing & Accessories" },
    home: { zh: "家居生活", en: "Home & Living" },
    beauty: { zh: "美妆个护", en: "Beauty & Personal Care" }
};

// 初始化购物车
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 初始化订单
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// 初始化代找产品请求
let findProductRequests = JSON.parse(localStorage.getItem('findProductRequests')) || [];

