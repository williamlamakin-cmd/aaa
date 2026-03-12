// 产品数据 - 电子产品、医疗辅助、五金产品
const products = [
    // ========== 电子产品类 ==========
    {
        id: 1,
        title: { zh: "无线蓝牙耳机 Pro", en: "Wireless Bluetooth Headphones Pro" },
        price: 29.99,
        originalPrice: 59.99,
        category: "electronics",
        subcategory: "phone_accessories",
        image: "https://picsum.photos/seed/headphones/280/250",
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
        }
    },
    {
        id: 2,
        title: { zh: "智能运动手表", en: "Smart Sports Watch" },
        price: 45.99,
        originalPrice: 99.99,
        category: "electronics",
        subcategory: "wearable",
        image: "https://picsum.photos/seed/smartwatch/280/250",
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
        }
    },
    {
        id: 3,
        title: { zh: "便携式充电宝 20000mAh", en: "Portable Power Bank 20000mAh" },
        price: 18.99,
        originalPrice: 39.99,
        category: "electronics",
        subcategory: "phone_accessories",
        image: "https://picsum.photos/seed/powerbank/280/250",
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
        }
    },
    {
        id: 4,
        title: { zh: "便携式蓝牙音箱", en: "Portable Bluetooth Speaker" },
        price: 27.99,
        originalPrice: 59.99,
        category: "electronics",
        subcategory: "audio",
        image: "https://picsum.photos/seed/speaker/280/250",
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
        }
    },
    {
        id: 5,
        title: { zh: "平板电脑支架 铝合金", en: "Tablet Stand Aluminum Alloy" },
        price: 19.99,
        originalPrice: 39.99,
        category: "electronics",
        subcategory: "tablet_accessories",
        image: "https://picsum.photos/seed/tabletstand/280/250",
        description: { 
            zh: "可折叠平板支架，铝合金材质，多角度调节，兼容各种平板和手机，稳固防滑。", 
            en: "Foldable tablet stand, aluminum alloy material, multi-angle adjustment, compatible with various tablets and phones, stable and non-slip." 
        },
        specs: {
            zh: {
                "材质": "铝合金+硅胶",
                "适用设备": "4-13英寸",
                "可调角度": "0-270度",
                "折叠尺寸": "18cm x 12cm",
                "重量": "250g"
            },
            en: {
                "Material": "Aluminum Alloy + Silicone",
                "Compatible Devices": "4-13 inch",
                "Adjustable Angle": "0-270 degrees",
                "Folded Size": "18cm x 12cm",
                "Weight": "250g"
            }
        }
    },
    {
        id: 6,
        title: { zh: "USB-C多功能扩展坞", en: "USB-C Multiport Hub" },
        price: 35.99,
        originalPrice: 69.99,
        category: "electronics",
        subcategory: "computer_accessories",
        image: "https://picsum.photos/seed/usbhub/280/250",
        description: { 
            zh: "7合1 USB-C扩展坞，支持HDMI 4K输出、USB3.0、SD卡读取、PD快充，即插即用。", 
            en: "7-in-1 USB-C hub with HDMI 4K output, USB3.0, SD card reader, PD fast charging, plug and play." 
        },
        specs: {
            zh: {
                "接口": "HDMI x1, USB3.0 x3, SD/TF x2, PD",
                "HDMI输出": "4K@30Hz",
                "传输速度": "5Gbps",
                "材质": "铝合金外壳",
                "线长": "15cm"
            },
            en: {
                "Ports": "HDMI x1, USB3.0 x3, SD/TF x2, PD",
                "HDMI Output": "4K@30Hz",
                "Transfer Speed": "5Gbps",
                "Material": "Aluminum Alloy",
                "Cable Length": "15cm"
            }
        }
    },
    // ========== 医疗辅助类 ==========
    {
        id: 7,
        title: { zh: "轻便折叠轮椅", en: "Lightweight Foldable Wheelchair" },
        price: 199.99,
        originalPrice: 399.99,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://picsum.photos/seed/wheelchair/280/250",
        description: { 
            zh: "轻便铝合金轮椅，可折叠设计，舒适坐垫，安全刹车，承重100kg，方便出行。", 
            en: "Lightweight aluminum alloy wheelchair, foldable design, comfortable seat cushion, safe braking, 100kg weight capacity, convenient for travel." 
        },
        specs: {
            zh: {
                "材质": "铝合金车架",
                "承重": "100kg",
                "净重": "15kg",
                "展开尺寸": "100cm x 62cm x 90cm",
                "折叠尺寸": "85cm x 30cm x 70cm"
            },
            en: {
                "Material": "Aluminum Alloy Frame",
                "Weight Capacity": "100kg",
                "Net Weight": "15kg",
                "Open Size": "100cm x 62cm x 90cm",
                "Folded Size": "85cm x 30cm x 70cm"
            }
        }
    },
    {
        id: 8,
        title: { zh: "可调节拐杖 轻便型", en: "Adjustable Crutches Lightweight" },
        price: 29.99,
        originalPrice: 59.99,
        category: "medical",
        subcategory: "crutch",
        image: "https://picsum.photos/seed/crutches/280/250",
        description: { 
            zh: "铝合金拐杖，高度可调，防滑脚垫，人体工学手柄，适合老人及康复使用。", 
            en: "Aluminum alloy crutches, adjustable height, non-slip foot pads, ergonomic handle, suitable for elderly and rehabilitation." 
        },
        specs: {
            zh: {
                "材质": "铝合金",
                "高度范围": "72-95cm",
                "承重": "120kg",
                "重量": "0.5kg/支",
                "颜色": "银色、蓝色"
            },
            en: {
                "Material": "Aluminum Alloy",
                "Height Range": "72-95cm",
                "Weight Capacity": "120kg",
                "Weight": "0.5kg/pair",
                "Colors": "Silver, Blue"
            }
        }
    },
    {
        id: 9,
        title: { zh: "电子血压计 智能款", en: "Electronic Blood Pressure Monitor Smart" },
        price: 45.99,
        originalPrice: 89.99,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://picsum.photos/seed/bloodpressure/280/250",
        description: { 
            zh: "全自动电子血压计，大屏幕显示，记忆存储，心律不齐检测，操作简单准确。", 
            en: "Fully automatic electronic blood pressure monitor, large screen display, memory storage, arrhythmia detection, easy and accurate operation." 
        },
        specs: {
            zh: {
                "测量范围": "0-299mmHg",
                "精度": "±3mmHg",
                "记忆组数": "2组各60组",
                "电源": "电池/USB",
                "臂带周长": "22-42cm"
            },
            en: {
                "Measurement Range": "0-299mmHg",
                "Accuracy": "±3mmHg",
                "Memory Groups": "2 groups x 60 readings",
                "Power": "Battery/USB",
                "Cuff Circumference": "22-42cm"
            }
        }
    },
    {
        id: 10,
        title: { zh: "血氧仪 指夹式", en: "Pulse Oximeter Finger Type" },
        price: 19.99,
        originalPrice: 39.99,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://picsum.photos/seed/oximeter/280/250",
        description: { 
            zh: "便携式指夹血氧仪，实时监测血氧饱和度和脉搏，LED大屏显示，一键操作。", 
            en: "Portable finger pulse oximeter, real-time monitoring of blood oxygen saturation and pulse, large LED display, one-button operation." 
        },
        specs: {
            zh: {
                "血氧测量": "70%-100%",
                "脉搏范围": "30-250bpm",
                "显示方式": "OLED双彩屏",
                "电源": "2节AAA电池",
                "重量": "50g"
            },
            en: {
                "SpO2 Range": "70%-100%",
                "Pulse Range": "30-250bpm",
                "Display": "OLED Dual Color Screen",
                "Power": "2x AAA Batteries",
                "Weight": "50g"
            }
        }
    },
    {
        id: 11,
        title: { zh: "助行器 老人步行器", en: "Walker for Elderly" },
        price: 69.99,
        originalPrice: 139.99,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://picsum.photos/seed/walker/280/250",
        description: { 
            zh: "可折叠助行器，加宽底盘，防滑脚垫，高度可调，适合老人康复训练使用。", 
            en: "Foldable walker, widened base, non-slip foot pads, adjustable height, suitable for elderly rehabilitation training." 
        },
        specs: {
            zh: {
                "材质": "高强度钢管",
                "高度范围": "78-96cm",
                "承重": "150kg",
                "重量": "4.5kg",
                "特点": "可折叠、带刹车"
            },
            en: {
                "Material": "High-strength Steel",
                "Height Range": "78-96cm",
                "Weight Capacity": "150kg",
                "Weight": "4.5kg",
                "Features": "Foldable, With Brakes"
            }
        }
    },
    {
        id: 12,
        title: { zh: "电子体温枪 非接触式", en: "Infrared Thermometer Non-contact" },
        price: 25.99,
        originalPrice: 49.99,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://picsum.photos/seed/thermometer/280/250",
        description: { 
            zh: "红外线体温枪，非接触式测量，秒速测温，高温报警，记忆功能，适合家庭使用。", 
            en: "Infrared thermometer, non-contact measurement, instant reading, high temperature alarm, memory function, suitable for home use." 
        },
        specs: {
            zh: {
                "测量范围": "32-42.9℃",
                "精度": "±0.2℃",
                "测量距离": "3-5cm",
                "测量时间": "1秒",
                "记忆组数": "32组"
            },
            en: {
                "Measurement Range": "32-42.9℃",
                "Accuracy": "±0.2℃",
                "Distance": "3-5cm",
                "Reading Time": "1 second",
                "Memory": "32 readings"
            }
        }
    },
    // ========== 五金产品类 ==========
    {
        id: 13,
        title: { zh: "多功能工具钳 12合1", en: "Multi-tool Pliers 12-in-1" },
        price: 24.99,
        originalPrice: 49.99,
        category: "hardware",
        subcategory: "tools",
        image: "https://picsum.photos/seed/multitool/280/250",
        description: { 
            zh: "12合1多功能工具钳，不锈钢材质，包含钳子、刀、螺丝刀、开瓶器等，便携实用。", 
            en: "12-in-1 multi-tool pliers, stainless steel, includes pliers, knife, screwdriver, bottle opener, etc., portable and practical." 
        },
        specs: {
            zh: {
                "材质": "不锈钢",
                "工具数量": "12种",
                "展开长度": "16cm",
                "折叠长度": "10cm",
                "重量": "280g"
            },
            en: {
                "Material": "Stainless Steel",
                "Tools": "12 types",
                "Open Length": "16cm",
                "Folded Length": "10cm",
                "Weight": "280g"
            }
        }
    },
    {
        id: 14,
        title: { zh: "家用工具套装 28件", en: "Home Tool Set 28 Pieces" },
        price: 39.99,
        originalPrice: 79.99,
        category: "hardware",
        subcategory: "tool_set",
        image: "https://picsum.photos/seed/toolset/280/250",
        description: { 
            zh: "家用工具套装，包含扳手、螺丝刀、锤子、卷尺等28件常用工具，收纳箱包装。", 
            en: "Home tool set including wrenches, screwdrivers, hammer, tape measure and 28 common tools, storage box included." 
        },
        specs: {
            zh: {
                "件数": "28件",
                "包含工具": "扳手、螺丝刀、锤子、卷尺等",
                "收纳箱": "塑料工具箱",
                "适用场景": "家庭维修、DIY",
                "重量": "2.5kg"
            },
            en: {
                "Pieces": "28 pieces",
                "Includes": "Wrenches, Screwdrivers, Hammer, Tape, etc.",
                "Storage": "Plastic Tool Box",
                "Usage": "Home repair, DIY",
                "Weight": "2.5kg"
            }
        }
    },
    {
        id: 15,
        title: { zh: "电钻冲击钻 家用款", en: "Electric Impact Drill Home Use" },
        price: 49.99,
        originalPrice: 99.99,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://picsum.photos/seed/drill/280/250",
        description: { 
            zh: "家用冲击钻，可调速正反转，LED照明，配多种钻头，适合木材、金属、混凝土。", 
            en: "Home impact drill, variable speed with reverse, LED light, includes various drill bits, suitable for wood, metal, concrete." 
        },
        specs: {
            zh: {
                "功率": "550W",
                "转速": "0-3000rpm",
                "钻夹头": "13mm",
                "功能": "平钻/冲击钻",
                "重量": "1.8kg"
            },
            en: {
                "Power": "550W",
                "Speed": "0-3000rpm",
                "Chuck Size": "13mm",
                "Modes": "Drilling/Impact",
                "Weight": "1.8kg"
            }
        }
    },
    {
        id: 16,
        title: { zh: "测量卷尺 5米", en: "Measuring Tape 5m" },
        price: 8.99,
        originalPrice: 18.99,
        category: "hardware",
        subcategory: "measuring",
        image: "https://picsum.photos/seed/tapemeasure/280/250",
        description: { 
            zh: "专业测量卷尺，5米长度，双面刻度，自动回卷，锁扣设计，耐磨外壳。", 
            en: "Professional measuring tape, 5m length, dual-sided scale, auto-retract, lock button, durable casing." 
        },
        specs: {
            zh: {
                "长度": "5米",
                "宽度": "19mm",
                "材质": "优质钢带",
                "外壳": "ABS+TPE",
                "精度": "±0.5mm"
            },
            en: {
                "Length": "5m",
                "Width": "19mm",
                "Material": "Premium Steel Blade",
                "Casing": "ABS+TPE",
                "Accuracy": "±0.5mm"
            }
        }
    },
    {
        id: 17,
        title: { zh: "不锈钢扳手套装 12件", en: "Stainless Steel Wrench Set 12 Pieces" },
        price: 34.99,
        originalPrice: 69.99,
        category: "hardware",
        subcategory: "wrench",
        image: "https://picsum.photos/seed/wrench/280/250",
        description: { 
            zh: "开口扳手套装，12件套，铬钒钢材质，双向开口，规格齐全，适合各种维修。", 
            en: "Open-end wrench set, 12 pieces, chrome vanadium steel, double-ended, complete specifications, suitable for various repairs." 
        },
        specs: {
            zh: {
                "件数": "12件",
                "材质": "铬钒钢",
                "规格": "6-22mm",
                "表面处理": "镀铬",
                "收纳袋": "帆布卷袋"
            },
            en: {
                "Pieces": "12 pieces",
                "Material": "Chrome Vanadium Steel",
                "Sizes": "6-22mm",
                "Finish": "Chrome Plated",
                "Storage": "Canvas Roll Pouch"
            }
        }
    },
    {
        id: 18,
        title: { zh: "水平尺 3气泡", en: "Spirit Level 3 Bubble" },
        price: 12.99,
        originalPrice: 25.99,
        category: "hardware",
        subcategory: "measuring",
        image: "https://picsum.photos/seed/level/280/250",
        description: { 
            zh: "铝合金水平尺，3气泡设计（水平、垂直、45度），高精度，带磁吸功能。", 
            en: "Aluminum spirit level, 3 bubble design (horizontal, vertical, 45°), high precision, magnetic strip included." 
        },
        specs: {
            zh: {
                "长度": "40cm",
                "材质": "铝合金",
                "气泡数": "3个",
                "精度": "0.5mm/m",
                "特点": "磁吸、挂孔"
            },
            en: {
                "Length": "40cm",
                "Material": "Aluminum Alloy",
                "Bubbles": "3",
                "Accuracy": "0.5mm/m",
                "Features": "Magnetic, Hanging Hole"
            }
        }
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
    medical: { zh: "医疗辅助", en: "Medical Aids" },
    hardware: { zh: "五金产品", en: "Hardware" }
};

// 初始化购物车
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 初始化订单
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// 初始化代找产品请求
let findProductRequests = JSON.parse(localStorage.getItem('findProductRequests')) || [];
