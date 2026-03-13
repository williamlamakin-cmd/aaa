// 产品数据 - 电子产品、医疗辅助、五金产品
// 使用用户提供的产品图片 (Douyin/淘宝图片)
// 图片使用官方品牌产品照片
const products = [
    // ========== 电子产品类 - 使用用户提供的产品图片 ==========
    {
        id: 1,
        title: { zh: "三星Galaxy S9+ 智能手机", en: "Samsung Galaxy S9+ Smartphone" },
        price: 4999.00,
        originalPrice: 5999.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/74064ad1e14b48178e39f480727554f1~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "韩国三星电子推出的新一代智能手机产品，配备双摄像头和高清屏幕。", 
            en: "Samsung's latest smartphone with dual camera and HD display." 
        },
        specs: {
            zh: { "屏幕": "6.2英寸", "存储": "128GB", "摄像头": "双1200万像素", "电池": "3500mAh" },
            en: { "Screen": "6.2 inch", "Storage": "128GB", "Camera": "12MP Dual", "Battery": "3500mAh" }
        }
    },
    {
        id: 2,
        title: { zh: "荣耀Magic6 智能手机", en: "Honor Magic6 Smartphone" },
        price: 5699.00,
        originalPrice: 6839.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/34f9249b6141457bbb26f113d44c86e9~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "荣耀发布的智能手机产品，搭载最新处理器和先进摄像系统。", 
            en: "Honor smartphone with latest processor and advanced camera system." 
        },
        specs: {
            zh: { "屏幕": "6.8英寸", "存储": "256GB", "摄像头": "5000万像素三摄", "电池": "5600mAh" },
            en: { "Screen": "6.8 inch", "Storage": "256GB", "Camera": "50MP Triple", "Battery": "5600mAh" }
        }
    },
    {
        id: 3,
        title: { zh: "iQOO Z8 智能手机", en: "iQOO Z8 Smartphone" },
        price: 2499.00,
        originalPrice: 2999.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/1c208c4aa8ac43ae94eed304c7909526~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "iQOO于2023年8月发布的智能手机产品，主打游戏性能和快速充电。", 
            en: "iQOO smartphone launched in August 2023, focusing on gaming performance and fast charging." 
        },
        specs: {
            zh: { "屏幕": "6.44英寸", "存储": "128GB", "摄像头": "6400万像素三摄", "电池": "4500mAh" },
            en: { "Screen": "6.44 inch", "Storage": "128GB", "Camera": "64MP Triple", "Battery": "4500mAh" }
        }
    },
    {
        id: 4,
        title: { zh: "小米12 Pro 智能手机", en: "Xiaomi 12 Pro Smartphone" },
        price: 3999.00,
        originalPrice: 4799.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/d2b39034e0754bb59213f3eb1cbfa93a~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "小米于2021年发布的智能手机产品，高端旗舰机型。", 
            en: "Xiaomi smartphone launched in 2021, premium flagship model." 
        },
        specs: {
            zh: { "屏幕": "6.73英寸", "存储": "256GB", "摄像头": "5000万像素三摄", "电池": "4600mAh" },
            en: { "Screen": "6.73 inch", "Storage": "256GB", "Camera": "50MP Triple", "Battery": "4600mAh" }
        }
    },
    {
        id: 5,
        title: { zh: "ThinkPad X1 Carbon 笔记本电脑", en: "ThinkPad X1 Carbon Laptop" },
        price: 9999.00,
        originalPrice: 11999.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/d8cdbd63db8556f0ba3edd5fe4b927d0~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "联想ThinkPad系列高端商务笔记本，轻薄便携，性能强劲。", 
            en: "Lenovo ThinkPad premium business laptop, lightweight and portable with powerful performance." 
        },
        specs: {
            zh: { "屏幕": "14英寸 2.8K", "处理器": "Intel i7", "内存": "16GB", "存储": "1TB SSD" },
            en: { "Display": "14 inch 2.8K", "Processor": "Intel i7", "Memory": "16GB", "Storage": "1TB SSD" }
        }
    },
    {
        id: 6,
        title: { zh: "Surface Laptop 笔记本电脑", en: "Surface Laptop" },
        price: 8888.00,
        originalPrice: 10666.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p11-doubao-search-sign.byteimg.com/labis/a5e8eb443b9106c7f541aa609c6e7fb7~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "微软Surface系列笔记本电脑，设计精美，触控屏支持。", 
            en: "Microsoft Surface laptop with elegant design and touchscreen support." 
        },
        specs: {
            zh: { "屏幕": "13.5英寸 PixelSense", "处理器": "Intel i5", "内存": "8GB", "存储": "256GB SSD" },
            en: { "Display": "13.5 inch PixelSense", "Processor": "Intel i5", "Memory": "8GB", "Storage": "256GB SSD" }
        }
    },
    {
        id: 7,
        title: { zh: "MacBook Air 笔记本电脑", en: "MacBook Air" },
        price: 7999.00,
        originalPrice: 9599.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/9bf0727c909ded3e753184bf038e48ee~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "苹果MacBook Air系列轻薄笔记本，搭载M系列芯片。", 
            en: "Apple MacBook Air lightweight laptop with M-series chip." 
        },
        specs: {
            zh: { "屏幕": "13.3英寸 Retina", "处理器": "Apple M2", "内存": "8GB", "存储": "256GB SSD" },
            en: { "Display": "13.3 inch Retina", "Processor": "Apple M2", "Memory": "8GB", "Storage": "256GB SSD" }
        }
    },
    {
        id: 8,
        title: { zh: "HP Pavilion 笔记本电脑", en: "HP Pavilion Laptop" },
        price: 5499.00,
        originalPrice: 6599.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/7823ab6e48dc7e49cb417cf1d2fb2322~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "惠普Pavilion系列家用笔记本电脑，性价比高，适合日常使用。", 
            en: "HP Pavilion home laptop with high cost performance, suitable for daily use." 
        },
        specs: {
            zh: { "屏幕": "15.6英寸 FHD", "处理器": "Intel i5", "内存": "16GB", "存储": "512GB SSD" },
            en: { "Display": "15.6 inch FHD", "Processor": "Intel i5", "Memory": "16GB", "Storage": "512GB SSD" }
        }
    },
    {
        id: 9,
        title: { zh: "HUAWEI MatePad Pro 13.2 平板电脑", en: "HUAWEI MatePad Pro 13.2" },
        price: 6499.00,
        originalPrice: 7799.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/243ac09bcbba4613b419ebc95a588c94~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "2023华为发布的平板电脑产品，大屏高性能，支持手写笔。", 
            en: "HUAWEI tablet launched in 2023 with large screen, high performance, stylus support." 
        },
        specs: {
            zh: { "屏幕": "13.2英寸 OLED", "处理器": "麒麟9000S", "内存": "12GB", "存储": "256GB" },
            en: { "Display": "13.2 inch OLED", "Processor": "Kirin 9000S", "Memory": "12GB", "Storage": "256GB" }
        }
    },
    {
        id: 10,
        title: { zh: "荣耀平板MagicPad 2", en: "Honor MagicPad 2" },
        price: 3699.00,
        originalPrice: 4439.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/6c7903975bba4405a0982fca62f28153~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "2024年7月荣耀发布的平板电脑，轻薄设计，高清屏幕。", 
            en: "Honor tablet launched July 2024 with lightweight design and HD display." 
        },
        specs: {
            zh: { "屏幕": "11.5英寸 LCD", "处理器": "骁龙8+", "内存": "8GB", "存储": "256GB" },
            en: { "Display": "11.5 inch LCD", "Processor": "Snapdragon 8+", "Memory": "8GB", "Storage": "256GB" }
        }
    },
    // ========== 医疗辅助类 ==========
    // ========== 医疗辅助类 - 使用用户提供的产品图片 ==========
    {
        id: 11,
        title: { zh: "互邦老人轮椅L21", en: "Hubang Lightweight Wheelchair L21" },
        price: 880.00,
        originalPrice: 1056.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/a4453863fcf3b0d3f470e5a9374e6416~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "互邦老人轮椅铝合金超轻折叠轻便行动不便残疾人辅助医疗器械。", 
            en: "Hubang elderly wheelchair, aluminum alloy ultra-light foldable, for disabled and mobility impaired." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "100kg", "重量": "12kg", "可折叠": true },
            en: { "Material": "Aluminum Alloy", "Capacity": "100kg", "Weight": "12kg", "Foldable": true }
        }
    },
    {
        id: 12,
        title: { zh: "邦福辅助站立式电动轮椅", en: "Bangfu Electric Wheelchair" },
        price: 12800.00,
        originalPrice: 15360.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p26-doubao-search-sign.byteimg.com/ecom-shop-material/PBBpyfEy_m_a2f0a2065cf7f5863d03a0218588a74e_sx_452929_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "智能全自动老年人残疾人代步车康复训练电动轮椅。", 
            en: "Smart automatic electric wheelchair for elderly and disabled, rehabilitation training." 
        },
        specs: {
            zh: { "材质": "钢管+铝合金", "承重": "120kg", "重量": "65kg", "电池": "锂电池 20Ah" },
            en: { "Material": "Steel+Aluminum", "Capacity": "120kg", "Weight": "65kg", "Battery": "Lithium 20Ah" }
        }
    },
    {
        id: 13,
        title: { zh: "康倍星手动轮椅助行器", en: "Kangbeixing Manual Walker" },
        price: 399.00,
        originalPrice: 479.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/png_m_6de66934a3950ea1b8b698e2fa0b6a1b_sx_135379_www652-652~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "腿伤骨折康复辅助行走器单腿代步手推车。", 
            en: "Leg injury and fracture rehabilitation walker, single-leg mobility aid." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "100kg", "重量": "4.5kg", "可折叠": true },
            en: { "Material": "Aluminum Alloy", "Capacity": "100kg", "Weight": "4.5kg", "Foldable": true }
        }
    },
    {
        id: 14,
        title: { zh: "康倍星多功能走路辅助器", en: "Kangbeixing Multi-functional Walker" },
        price: 599.00,
        originalPrice: 719.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/kbzEqWUm_m_f70de01228b29c25a90cb77efd9364ae_sx_115598_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "老人手动轮椅车助行器多功能走路辅助器可坐可手推购物车。", 
            en: "Multi-functional walking aid for elderly, can sit and push with shopping basket." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "120kg", "重量": "5.8kg", "特点": "可坐可推带购物篮" },
            en: { "Material": "Aluminum Alloy", "Capacity": "120kg", "Weight": "5.8kg", "Features": "Seat, Shopping Basket" }
        }
    },
    {
        id: 15,
        title: { zh: "Aicare耳背式助听器", en: "Aicare Behind-ear Hearing Aid" },
        price: 1299.00,
        originalPrice: 1559.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/jpeg_m_f9483252f281d0166041c94e0cc43687_sx_101648_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "医用中老年人辅助耳朵补偿听力改善下降无线隐形耳蜗声音放大充电耳机降噪。", 
            en: "Medical hearing aid for elderly, wireless, noise reduction, rechargeable." 
        },
        specs: {
            zh: { "类型": "耳背式", "电源": "充电式", "通道": "8通道", "特点": "降噪、无线" },
            en: { "Type": "Behind-ear", "Power": "Rechargeable", "Channels": "8", "Features": "Noise Reduction, Wireless" }
        }
    },
    {
        id: 16,
        title: { zh: "隐形助听器OTC", en: "Invisible Hearing Aid OTC" },
        price: 2499.00,
        originalPrice: 2999.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/ba7b95ad9d10469aac34f2f580d65c19~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "耳内隐藏的8通道认证隐形助听器耳聋听力保护医疗辅助设备。", 
            en: "Invisible 8-channel hearing aid, certified for hearing protection." 
        },
        specs: {
            zh: { "类型": "耳内式", "电源": "电池式", "通道": "8通道", "特点": "隐形设计" },
            en: { "Type": "In-ear", "Power": "Battery", "Channels": "8", "Features": "Invisible Design" }
        }
    },
    {
        id: 17,
        title: { zh: "蓝牙医疗助听器", en: "Bluetooth Medical Hearing Aid" },
        price: 3699.00,
        originalPrice: 4439.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/image/2b9e0d7c06da56dd8b323be11bb8076b~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "新型BTE最佳耳助听器可充电蓝牙医疗助听器最小助听器耳背。", 
            en: "New BTE hearing aid, rechargeable, Bluetooth, minimal design behind ear." 
        },
        specs: {
            zh: { "类型": "耳背式", "电源": "充电式", "连接": "蓝牙5.0", "特点": "APP控制、自适应降噪" },
            en: { "Type": "Behind-ear", "Power": "Rechargeable", "Connectivity": "Bluetooth 5.0", "Features": "APP Control, Adaptive ANC" }
        }
    },
    {
        id: 18,
        title: { zh: "护大夫不锈钢拐杖", en: "Hudaifu Stainless Steel Crutch" },
        price: 129.00,
        originalPrice: 155.00,
        category: "medical",
        subcategory: "crutch",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/png_m_06e299af1a20ef908bb25251a44f252c_sx_960381_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "骨折康复防滑胶头助行器伸缩轻便腋下拐病人医用拐单只。", 
            en: "Fracture rehabilitation anti-slip crutch, adjustable, lightweight underarm crutch." 
        },
        specs: {
            zh: { "材质": "不锈钢", "可调节": true, "高度范围": "110-140cm", "特点": "防滑胶头" },
            en: { "Material": "Stainless Steel", "Adjustable": true, "Height Range": "110-140cm", "Features": "Anti-slip Tip" }
        }
    },
    {
        id: 19,
        title: { zh: "鱼跃四脚助步器", en: "Yuyue Four-legged Walker" },
        price: 199.00,
        originalPrice: 239.00,
        category: "medical",
        subcategory: "crutch",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/WtnsmaP_m_ef47e1fc441ceec7479568ef22bbad50_sx_137994_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "老人拐杖手杖防滑稳固四脚助步器铝合金手杖。", 
            en: "Elderly cane with anti-slip stable four legs, aluminum alloy." 
        },
        specs: {
            zh: { "材质": "铝合金", "类型": "四脚拐杖", "可调节": true, "特点": "防滑底座" },
            en: { "Material": "Aluminum Alloy", "Type": "Four-legged Cane", "Adjustable": true, "Features": "Anti-slip Base" }
        }
    },
    {
        id: 20,
        title: { zh: "吉家医用肘拐", en: "Jijia Medical Elbow Crutch" },
        price: 259.00,
        originalPrice: 311.00,
        category: "medical",
        subcategory: "crutch",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/HLLArQEy_m_99631cad4f20fa7be11a40ad248289ad_sx_173617_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "便携式拐杖铝合金可伸缩调节腋下肘拐老人助行器。", 
            en: "Portable aluminum crutch, adjustable, elbow crutch for elderly." 
        },
        specs: {
            zh: { "材质": "铝合金", "类型": "肘拐", "可调节": true, "特点": "多角度调节" },
            en: { "Material": "Aluminum Alloy", "Type": "Elbow Crutch", "Adjustable": true, "Features": "Multi-angle Adjustment" }
        }
    },
    // 五金产品类 - 使用用户提供的产品图片 ==========
    {
        id: 21,
        title: { zh: "Panasonic 打印机 966", en: "Panasonic Printer 966" },
        price: 3019.00,
        originalPrice: 3623.00,
        category: "electronics",
        subcategory: "printer",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/34f9249b6141457bbb26f113d44c86e9~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Panasonic推出的打印机，高性能，高品质，满足日常使用需求。", 
            en: "Panasonic printer, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "523g", "功率": "19W", "颜色": "白色" },
            en: { "Material": "Aluminum Alloy", "Weight": "523g", "Power": "19W", "Color": "White" }
        }
    },
    {
        id: 22,
        title: { zh: "Sony 智能手表 198", en: "Sony Smartwatch 198" },
        price: 1993.00,
        originalPrice: 2392.00,
        category: "electronics",
        subcategory: "wearable",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/74064ad1e14b48178e39f480727554f1~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Sony推出的智能手表，高性能，高品质，满足日常使用需求。", 
            en: "Sony smartwatch, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "463g", "功率": "12W", "颜色": "黑色" },
            en: { "Material": "Plastic", "Weight": "463g", "Power": "12W", "Color": "Black" }
        }
    },
    {
        id: 23,
        title: { zh: "Dell 智能手机 815", en: "Dell Smartphone 815" },
        price: 2665.00,
        originalPrice: 3198.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/1c208c4aa8ac43ae94eed304c7909526~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Dell推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "Dell smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "5.6英寸", "存储": "256GB", "摄像头": "1600万像素", "电池": "3241mAh" },
            en: { "Screen": "5.6 inch", "Storage": "256GB", "Camera": "16MP", "Battery": "3241mAh" }
        }
    },
    {
        id: 24,
        title: { zh: "荣耀 移动电源 233", en: "Honor Power Bank 233" },
        price: 6816.00,
        originalPrice: 8179.00,
        category: "electronics",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/243ac09bcbba4613b419ebc95a588c94~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "荣耀推出的移动电源，高性能，高品质，满足日常使用需求。", 
            en: "Honor power bank, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "172g", "功率": "20W", "颜色": "银色" },
            en: { "Material": "Aluminum Alloy", "Weight": "172g", "Power": "20W", "Color": "Silver" }
        }
    },
    {
        id: 25,
        title: { zh: "HP 耳机 786", en: "HP Headphones 786" },
        price: 2629.00,
        originalPrice: 3155.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/9bf0727c909ded3e753184bf038e48ee~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "HP推出的耳机，高性能，高品质，满足日常使用需求。", 
            en: "HP headphones, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "974g", "功率": "23W", "颜色": "白色" },
            en: { "Material": "Plastic", "Weight": "974g", "Power": "23W", "Color": "White" }
        }
    },
    {
        id: 26,
        title: { zh: "Surface 平板电脑 47", en: "Surface Tablet 47" },
        price: 9899.00,
        originalPrice: 11879.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/6c7903975bba4405a0982fca62f28153~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Surface推出的平板电脑，高性能，高品质，满足日常使用需求。", 
            en: "Surface tablet, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "8.4英寸 LCD", "处理器": "麒麟9000S", "内存": "16GB", "存储": "64GB" },
            en: { "Display": "8.4 inch LCD", "Processor": "Kirin 9000S", "Memory": "16GB", "Storage": "64GB" }
        }
    },
    {
        id: 27,
        title: { zh: "Canon 扫描仪 26", en: "Canon Scanner 26" },
        price: 8763.00,
        originalPrice: 10516.00,
        category: "electronics",
        subcategory: "printer",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/7823ab6e48dc7e49cb417cf1d2fb2322~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Canon推出的扫描仪，高性能，高品质，满足日常使用需求。", 
            en: "Canon scanner, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "879g", "功率": "20W", "颜色": "黑色" },
            en: { "Material": "Plastic", "Weight": "879g", "Power": "20W", "Color": "Black" }
        }
    },
    {
        id: 28,
        title: { zh: "Surface 打印机 59", en: "Surface Printer 59" },
        price: 9417.00,
        originalPrice: 11300.00,
        category: "electronics",
        subcategory: "printer",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/9bf0727c909ded3e753184bf038e48ee~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Surface推出的打印机，高性能，高品质，满足日常使用需求。", 
            en: "Surface printer, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "551g", "功率": "19W", "颜色": "蓝色" },
            en: { "Material": "Aluminum Alloy", "Weight": "551g", "Power": "19W", "Color": "Blue" }
        }
    },
    {
        id: 29,
        title: { zh: "Acer 智能手表 479", en: "Acer Smartwatch 479" },
        price: 3596.00,
        originalPrice: 4315.00,
        category: "electronics",
        subcategory: "wearable",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/34f9249b6141457bbb26f113d44c86e9~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Acer推出的智能手表，高性能，高品质，满足日常使用需求。", 
            en: "Acer smartwatch, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "976g", "功率": "5W", "颜色": "白色" },
            en: { "Material": "Plastic", "Weight": "976g", "Power": "5W", "Color": "White" }
        }
    },
    {
        id: 30,
        title: { zh: "OPPO 麦克风 456", en: "OPPO Microphone 456" },
        price: 1510.00,
        originalPrice: 1812.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-xv4ileqgde/6c7903975bba4405a0982fca62f28153~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "OPPO推出的麦克风，高性能，高品质，满足日常使用需求。", 
            en: "OPPO microphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "1067g", "功率": "15W", "颜色": "蓝色" },
            en: { "Material": "Aluminum Alloy", "Weight": "1067g", "Power": "15W", "Color": "Blue" }
        }
    },
    // ========== 五金产品类 - 使用用户提供的产品图片 ==========
    {
        id: 31,
        title: { zh: "多功能螺丝刀套装", en: "Multi-piece Screwdriver Set" },
        price: 29.90,
        originalPrice: 35.88,
        category: "hardware",
        subcategory: "tools",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815295632900252~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "五金工具螺丝刀，多用途十字一字螺丝批手动螺丝刀，多规格螺丝刀。", 
            en: "Multi-purpose screwdriver set, Phillips and flathead, various sizes." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "件数": "6件套", "类型": "十字+一字", "手柄": "PP+TPR双色" },
            en: { "Material": "CR-V Alloy Steel", "Pieces": "6-piece Set", "Types": "Phillips+Flathead", "Handle": "PP+TPR Dual Color" }
        }
    },
    {
        id: 32,
        title: { zh: "专业螺丝刀套装", en: "Professional Screwdriver Set" },
        price: 45.90,
        originalPrice: 55.08,
        category: "hardware",
        subcategory: "tools",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/6a1e21357294713ed027b4526e774ddb~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "精密螺丝刀套装，适用于电子产品维修，多规格批头。", 
            en: "Precision screwdriver set for electronics repair, multiple bit sizes." 
        },
        specs: {
            zh: { "材质": "S2合金钢", "件数": "12件套", "类型": "十字+一字+星形", "手柄": "防滑橡胶" },
            en: { "Material": "S2 Alloy Steel", "Pieces": "12-piece Set", "Types": "Phillips+Flathead+Torx", "Handle": "Anti-slip Rubber" }
        }
    },
    {
        id: 33,
        title: { zh: "工业级螺丝刀", en: "Industrial Grade Screwdriver" },
        price: 35.50,
        originalPrice: 42.60,
        category: "hardware",
        subcategory: "tools",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/2ab9a54821225301e71147ed7df72fa9~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "重型螺丝刀，工业级强度，适用于高强度作业。", 
            en: "Heavy-duty screwdriver, industrial grade for heavy-duty applications." 
        },
        specs: {
            zh: { "材质": "高碳钢", "件数": "4件套", "类型": "十字+一字", "手柄": "耐油防滑" },
            en: { "Material": "High Carbon Steel", "Pieces": "4-piece Set", "Types": "Phillips+Flathead", "Handle": "Oil-resistant Anti-slip" }
        }
    },
    {
        id: 34,
        title: { zh: "开口扳手套装", en: "Open End Wrench Set" },
        price: 89.90,
        originalPrice: 107.88,
        category: "hardware",
        subcategory: "wrench",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815347074203652~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "五金工具扳手，开口扳手，多规格呆扳手。", 
            en: "Open end wrench set, multiple sizes for various applications." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "件数": "8件套", "规格": "8-24mm", "表面处理": "镜面抛光" },
            en: { "Material": "CR-V Alloy Steel", "Pieces": "8-piece Set", "Size Range": "8-24mm", "Finish": "Mirror Polish" }
        }
    },
    {
        id: 35,
        title: { zh: "两用扳手", en: "Combination Wrench Set" },
        price: 65.80,
        originalPrice: 78.96,
        category: "hardware",
        subcategory: "wrench",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/e82c802edd279e6be7a43d04bb9418e5~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "厂家直销两用扳手，扳手开口扳手五金汽修板手梅开呆扳手工具套装。", 
            en: "Combination wrench, both open-end and ring ends, for auto repair." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "件数": "6件套", "类型": "梅花+开口两用", "表面处理": "喷砂镀铬" },
            en: { "Material": "CR-V Alloy Steel", "Pieces": "6-piece Set", "Type": "Ring+Open End", "Finish": "Sandblasted Chrome" }
        }
    },
    {
        id: 36,
        title: { zh: "单支开口扳手", en: "Single Open End Wrench" },
        price: 12.50,
        originalPrice: 15.00,
        category: "hardware",
        subcategory: "wrench",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/c0b269e5b6a987986483e46b7d10d9e6~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "五金工具两用开口扳手，多规格呆扳手，汽修手动工具两用扳手。", 
            en: "Single open end wrench, multiple sizes for mechanical repair." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "规格": "19mm", "类型": "单支开口", "表面处理": "抛光" },
            en: { "Material": "CR-V Alloy Steel", "Size": "19mm", "Type": "Single Open End", "Finish": "Polished" }
        }
    },
    {
        id: 37,
        title: { zh: "SHK手电钻", en: "SHK Corded Drill" },
        price: 199.00,
        originalPrice: 238.80,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/be389b17d2d88e1865a6061b8df7e23c~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "正反转手电钻钻孔机电动手枪钻家用五金有线电动工具电钻。", 
            en: "Reversible corded drill, electric hand drill for home and workshop." 
        },
        specs: {
            zh: { "功率": "500W", "转速": "0-2800rpm", "夹头": "10mm", "功能": "正反转、调速" },
            en: { "Power": "500W", "Speed": "0-2800rpm", "Chuck": "10mm", "Features": "Forward/Reverse, Variable Speed" }
        }
    },
    {
        id: 38,
        title: { zh: "锂电钻充电式", en: "Cordless Lithium Drill" },
        price: 299.00,
        originalPrice: 358.80,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p11-doubao-search-sign.byteimg.com/labis/bb2eea0aba526fd57115bc9a7bc4ce70~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "五金工具无刷手枪钻手钻电钻充电13mm电动小型锂电钻。", 
            en: "Cordless brushless drill, 13mm chuck, compact lithium drill." 
        },
        specs: {
            zh: { "电压": "20V", "电池": "2.0Ah锂电", "夹头": "13mm", "功能": "无刷电机、双速" },
            en: { "Voltage": "20V", "Battery": "2.0Ah Lithium", "Chuck": "13mm", "Features": "Brushless Motor, Dual Speed" }
        }
    },
    {
        id: 39,
        title: { zh: "畅熠锂电钻", en: "Changyi Cordless Drill" },
        price: 159.00,
        originalPrice: 190.80,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p11-doubao-search-sign.byteimg.com/labis/bbb7172a77697627c8c21e93b704449d~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "畅熠锂电钻家用电动螺丝刀多功能手持电钻五金工具12v手电钻。", 
            en: "Changyi cordless drill, multi-functional for home use, 12V." 
        },
        specs: {
            zh: { "电压": "12V", "电池": "1.5Ah锂电", "夹头": "10mm", "功能": "多功能、轻便" },
            en: { "Voltage": "12V", "Battery": "1.5Ah Lithium", "Chuck": "10mm", "Features": "Multi-functional, Lightweight" }
        }
    },
    {
        id: 40,
        title: { zh: "无刷冲击钻", en: "Brushless Impact Drill" },
        price: 499.00,
        originalPrice: 598.80,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p11-doubao-search-sign.byteimg.com/ecom-shop-material/jpeg_m_f7315ff3387addf1cb9ba9c3b87464df_sx_184740_www800-800~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "新款大功率无刷锂电钻冲击钻充电式手枪钻冰钻13mm手电钻电钻。", 
            en: "New high-power brushless impact drill, 13mm chuck, cordless." 
        },
        specs: {
            zh: { "电压": "21V", "电池": "4.0Ah锂电", "夹头": "13mm", "功能": "冲击功能、无刷电机" },
            en: { "Voltage": "21V", "Battery": "4.0Ah Lithium", "Chuck": "13mm", "Features": "Impact Function, Brushless Motor" }
        }
    },
    // ========== 更多电子产品 (来自 products.json) ==========
    {
        id: 41,
        title: { zh: "Canon 麦克风 835", en: "Canon Microphone 835" },
        price: 7147.00,
        originalPrice: 8576.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852268402901008~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Canon推出的麦克风，高性能，高品质，满足日常使用需求。", 
            en: "Canon microphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "158g", "功率": "18W", "颜色": "白色" },
            en: { "Material": "Plastic", "Weight": "158g", "Power": "18W", "Color": "White" }
        }
    },
    {
        id: 42,
        title: { zh: "HP 麦克风 372", en: "HP Microphone 372" },
        price: 9840.00,
        originalPrice: 11808.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852216864997387~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "HP推出的麦克风，高性能，高品质，满足日常使用需求。", 
            en: "HP microphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "980g", "功率": "18W", "颜色": "黑色" },
            en: { "Material": "Plastic", "Weight": "980g", "Power": "18W", "Color": "Black" }
        }
    },
    {
        id: 43,
        title: { zh: "Sony 移动电源 124", en: "Sony Power Bank 124" },
        price: 9725.00,
        originalPrice: 11670.00,
        category: "electronics",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/910059778591948874~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Sony推出的移动电源，高性能，高品质，满足日常使用需求。", 
            en: "Sony power bank, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "902g", "功率": "17W", "颜色": "黑色" },
            en: { "Material": "Aluminum Alloy", "Weight": "902g", "Power": "17W", "Color": "Black" }
        }
    },
    {
        id: 44,
        title: { zh: "Nikon 智能手机 724", en: "Nikon Smartphone 724" },
        price: 2495.00,
        originalPrice: 2994.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1055067701506736188~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Nikon推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "Nikon smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.7英寸", "存储": "64GB", "摄像头": "2300万像素", "电池": "4233mAh" },
            en: { "Screen": "6.7 inch", "Storage": "64GB", "Camera": "23MP", "Battery": "4233mAh" }
        }
    },
    {
        id: 45,
        title: { zh: "Microsoft 智能手表 273", en: "Microsoft Smartwatch 273" },
        price: 5330.00,
        originalPrice: 6396.00,
        category: "electronics",
        subcategory: "wearable",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968519935774294097~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Microsoft推出的智能手表，高性能，高品质，满足日常使用需求。", 
            en: "Microsoft smartwatch, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "942g", "功率": "14W", "颜色": "银色" },
            en: { "Material": "Plastic", "Weight": "942g", "Power": "14W", "Color": "Silver" }
        }
    },
    {
        id: 46,
        title: { zh: "HP 智能音箱 743", en: "HP Smart Speaker 743" },
        price: 5076.00,
        originalPrice: 6091.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/919257829013848146~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "HP推出的智能音箱，高性能，高品质，满足日常使用需求。", 
            en: "HP smart speaker, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "541g", "功率": "19W", "颜色": "银色" },
            en: { "Material": "Plastic", "Weight": "541g", "Power": "19W", "Color": "Silver" }
        }
    },
    {
        id: 47,
        title: { zh: "三星 鼠标 759", en: "Samsung Mouse 759" },
        price: 1578.00,
        originalPrice: 1894.00,
        category: "electronics",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852268402901008~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "三星推出的鼠标，高性能，高品质，满足日常使用需求。", 
            en: "Samsung mouse, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "180g", "功率": "19W", "颜色": "蓝色" },
            en: { "Material": "Plastic", "Weight": "180g", "Power": "19W", "Color": "Blue" }
        }
    },
    {
        id: 48,
        title: { zh: "Nikon 鼠标 309", en: "Nikon Mouse 309" },
        price: 1012.00,
        originalPrice: 1214.00,
        category: "electronics",
        subcategory: "accessory",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852216864997387~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Nikon推出的鼠标，高性能，高品质，满足日常使用需求。", 
            en: "Nikon mouse, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "866g", "功率": "15W", "颜色": "银色" },
            en: { "Material": "Aluminum Alloy", "Weight": "866g", "Power": "15W", "Color": "Silver" }
        }
    },
    {
        id: 49,
        title: { zh: "Google 智能手表 297", en: "Google Smartwatch 297" },
        price: 6286.00,
        originalPrice: 7543.00,
        category: "electronics",
        subcategory: "wearable",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/910059778591948874~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Google推出的智能手表，高性能，高品质，满足日常使用需求。", 
            en: "Google smartwatch, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "253g", "功率": "8W", "颜色": "蓝色" },
            en: { "Material": "Plastic", "Weight": "253g", "Power": "8W", "Color": "Blue" }
        }
    },
    {
        id: 50,
        title: { zh: "联想 耳机 349", en: "Lenovo Headphones 349" },
        price: 6430.00,
        originalPrice: 7716.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1055067701506736188~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "联想推出的耳机，高性能，高品质，满足日常使用需求。", 
            en: "Lenovo headphones, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "1086g", "功率": "11W", "颜色": "黑色" },
            en: { "Material": "Aluminum Alloy", "Weight": "1086g", "Power": "11W", "Color": "Black" }
        }
    },
    // ========== 医疗辅助产品 (来自 products.json) ==========
    {
        id: 51,
        title: { zh: "罗氏助听器41", en: "Roche Hearing Aid 41" },
        price: 12381.00,
        originalPrice: 14857.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903168761265127465~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "罗氏生产的助听器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Roche hearing aid, medical grade, reliable quality, comfortable to wear." 
        },
        specs: {
            zh: { "类型": "耳背式", "电源": "电池式", "通道": "8通道", "特点": "隐形设计" },
            en: { "Type": "Behind-ear", "Power": "Battery", "Channels": "8", "Features": "Invisible Design" }
        }
    },
    {
        id: 52,
        title: { zh: "斯达克血压计67", en: "Starkey Blood Pressure Monitor 67" },
        price: 6430.00,
        originalPrice: 7716.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1050916967685947407~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "斯达克生产的血压计，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Starkey blood pressure monitor, medical grade, reliable quality." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "5088g", "尺寸": "19x13cm", "颜色": "蓝色" },
            en: { "Material": "Plastic", "Weight": "5088g", "Size": "19x13cm", "Color": "Blue" }
        }
    },
    {
        id: 53,
        title: { zh: "优利康护理床53", en: "Unitron Nursing Bed 53" },
        price: 2425.00,
        originalPrice: 2910.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817573953601545~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "优利康生产的护理床，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Unitron nursing bed, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "4524g", "尺寸": "23x13cm", "颜色": "灰色" },
            en: { "Material": "Aluminum Alloy", "Weight": "4524g", "Size": "23x13cm", "Color": "Gray" }
        }
    },
    {
        id: 54,
        title: { zh: "罗氏助行器35", en: "Roche Walker 35" },
        price: 12041.00,
        originalPrice: 14449.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968256757358264347~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "罗氏生产的助行器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Roche walker, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "可调节": true, "高度范围": "115-136cm", "特点": "防滑底座" },
            en: { "Material": "Aluminum Alloy", "Adjustable": true, "Height Range": "115-136cm", "Features": "Anti-slip Base" }
        }
    },
    {
        id: 55,
        title: { zh: "瑞声达助行器63", en: "Resound Walker 63" },
        price: 10750.00,
        originalPrice: 12900.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817616889905160~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "瑞声达生产的助行器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Resound walker, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "不锈钢", "可调节": true, "高度范围": "106-141cm", "特点": "防滑底座" },
            en: { "Material": "Stainless Steel", "Adjustable": true, "Height Range": "106-141cm", "Features": "Anti-slip Base" }
        }
    },
    {
        id: 56,
        title: { zh: "欧姆龙坐便器44", en: "Omron Toilet Seat 44" },
        price: 7191.00,
        originalPrice: 8629.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/33ea65e717631e0d5cb98a0001ba826c~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "欧姆龙生产的坐便器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Omron toilet seat, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "3477g", "尺寸": "12x16cm", "颜色": "灰色" },
            en: { "Material": "Aluminum Alloy", "Weight": "3477g", "Size": "12x16cm", "Color": "Gray" }
        }
    },
    {
        id: 57,
        title: { zh: "斯达克洗澡椅90", en: "Starkey Shower Chair 90" },
        price: 1894.00,
        originalPrice: 2273.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903168761265127465~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "斯达克生产的洗澡椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Starkey shower chair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "硅胶", "重量": "2514g", "尺寸": "7x17cm", "颜色": "灰色" },
            en: { "Material": "Silicone", "Weight": "2514g", "Size": "7x17cm", "Color": "Gray" }
        }
    },
    {
        id: 58,
        title: { zh: "优利康医用手套95", en: "Unitron Medical Gloves 95" },
        price: 14630.00,
        originalPrice: 17556.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1050916967685947407~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "优利康生产的医用手套，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Unitron medical gloves, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "硅胶", "重量": "2306g", "尺寸": "22x13cm", "颜色": "黑色" },
            en: { "Material": "Silicone", "Weight": "2306g", "Size": "22x13cm", "Color": "Black" }
        }
    },
    {
        id: 59,
        title: { zh: "鱼跃医用手套68", en: "Yuyue Medical Gloves 68" },
        price: 7091.00,
        originalPrice: 8509.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817573953601545~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "鱼跃生产的医用手套，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Yuyue medical gloves, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "3533g", "尺寸": "21x22cm", "颜色": "灰色" },
            en: { "Material": "Aluminum Alloy", "Weight": "3533g", "Size": "21x22cm", "Color": "Gray" }
        }
    },
    {
        id: 60,
        title: { zh: "瑞声达洗澡椅83", en: "Resound Shower Chair 83" },
        price: 1944.00,
        originalPrice: 2333.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968256757358264347~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "瑞声达生产的洗澡椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Resound shower chair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "2011g", "尺寸": "12x14cm", "颜色": "白色" },
            en: { "Material": "Aluminum Alloy", "Weight": "2011g", "Size": "12x14cm", "Color": "White" }
        }
    },
    // ========== 更多医疗辅助产品 ==========
    {
        id: 61,
        title: { zh: "Siemens助听器29", en: "Siemens Hearing Aid 29" },
        price: 13489.00,
        originalPrice: 16187.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817616889905160~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Siemens生产的助听器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Siemens hearing aid, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "类型": "耳背式", "电源": "充电式", "通道": "9通道", "特点": "降噪、无线" },
            en: { "Type": "Behind-ear", "Power": "Rechargeable", "Channels": "9", "Features": "Noise Reduction, Wireless" }
        }
    },
    {
        id: 62,
        title: { zh: "邦福尿壶80", en: "Bangfu Urinal 80" },
        price: 13327.00,
        originalPrice: 15992.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/33ea65e717631e0d5cb98a0001ba826c~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "邦福生产的尿壶，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Bangfu urinal, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "1183g", "尺寸": "20x10cm", "颜色": "白色" },
            en: { "Material": "Stainless Steel", "Weight": "1183g", "Size": "20x10cm", "Color": "White" }
        }
    },
    {
        id: 63,
        title: { zh: "峰力医用手套3", en: "Phonak Medical Gloves 3" },
        price: 1743.00,
        originalPrice: 2092.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903168761265127465~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "峰力生产的医用手套，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Phonak medical gloves, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "3805g", "尺寸": "15x12cm", "颜色": "白色" },
            en: { "Material": "Stainless Steel", "Weight": "3805g", "Size": "15x12cm", "Color": "White" }
        }
    },
    {
        id: 64,
        title: { zh: "鱼跃助行器20", en: "Yuyue Walker 20" },
        price: 4765.00,
        originalPrice: 5718.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1050916967685947407~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "鱼跃生产的助行器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Yuyue walker, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "可调节": true, "高度范围": "115-142cm", "特点": "防滑底座" },
            en: { "Material": "Aluminum Alloy", "Adjustable": true, "Height Range": "115-142cm", "Features": "Anti-slip Base" }
        }
    },
    {
        id: 65,
        title: { zh: "瑞声达电动轮椅16", en: "Resound Electric Wheelchair 16" },
        price: 9133.00,
        originalPrice: 10960.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817573953601545~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "瑞声达生产的电动轮椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Resound electric wheelchair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "重量": "45kg", "承重": "103kg", "可折叠": true },
            en: { "Material": "Aluminum Alloy", "Weight": "45kg", "Capacity": "103kg", "Foldable": true }
        }
    },
    {
        id: 66,
        title: { zh: "互邦理疗仪12", en: "Hubang Therapy Device 12" },
        price: 12972.00,
        originalPrice: 15566.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968256757358264347~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "互邦生产的理疗仪，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Hubang therapy device, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "硅胶", "重量": "4535g", "尺寸": "19x20cm", "颜色": "黑色" },
            en: { "Material": "Silicone", "Weight": "4535g", "Size": "19x20cm", "Color": "Black" }
        }
    },
    {
        id: 67,
        title: { zh: "斯达克坐便器77", en: "Starkey Toilet Seat 77" },
        price: 5915.00,
        originalPrice: 7098.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817616889905160~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "斯达克生产的坐便器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Starkey toilet seat, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "硅胶", "重量": "2821g", "尺寸": "11x17cm", "颜色": "黑色" },
            en: { "Material": "Silicone", "Weight": "2821g", "Size": "11x17cm", "Color": "Black" }
        }
    },
    {
        id: 68,
        title: { zh: "邦福血糖仪83", en: "Bangfu Blood Glucose Meter 83" },
        price: 4502.00,
        originalPrice: 5402.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/33ea65e717631e0d5cb98a0001ba826c~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "邦福生产的血糖仪，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Bangfu blood glucose meter, medical grade, reliable quality." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "3493g", "尺寸": "24x9cm", "颜色": "白色" },
            en: { "Material": "Stainless Steel", "Weight": "3493g", "Size": "24x9cm", "Color": "White" }
        }
    },
    {
        id: 69,
        title: { zh: "三诺便盆53", en: "Sannuo Bedpan 53" },
        price: 14922.00,
        originalPrice: 17906.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903168761265127465~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "三诺生产的便盆，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Sannuo bedpan, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "塑料", "重量": "4041g", "尺寸": "11x22cm", "颜色": "黑色" },
            en: { "Material": "Plastic", "Weight": "4041g", "Size": "11x22cm", "Color": "Black" }
        }
    },
    {
        id: 70,
        title: { zh: "三诺成人纸尿裤66", en: "Sannuo Adult Diaper 66" },
        price: 1894.00,
        originalPrice: 2273.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1050916967685947407~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "三诺生产的成人纸尿裤，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Sannuo adult diaper, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "2292g", "尺寸": "7x24cm", "颜色": "蓝色" },
            en: { "Material": "Stainless Steel", "Weight": "2292g", "Size": "7x24cm", "Color": "Blue" }
        }
    },
    // ========== 更多五金产品 (来自 products.json) ==========
    {
        id: 71,
        title: { zh: "小强锯子41", en: "Xiaoqiang Saw 41" },
        price: 364.00,
        originalPrice: 437.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815347074203652~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "小强生产的锯子，高品质，耐用，适用于各种工作场景。", 
            en: "Xiaoqiang saw, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "4548g", "尺寸": "8cm", "表面处理": "氧化处理" },
            en: { "Material": "Stainless Steel", "Weight": "4548g", "Size": "8cm", "Finish": "Oxidation Treatment" }
        }
    },
    {
        id: 72,
        title: { zh: "艾威博尔板牙40", en: "Iviper Threading Die 40" },
        price: 1733.00,
        originalPrice: 2080.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004814754467020866~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "艾威博尔生产的板牙，高品质，耐用，适用于各种工作场景。", 
            en: "Iviper threading die, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "2967g", "尺寸": "7cm", "表面处理": "氧化处理" },
            en: { "Material": "Stainless Steel", "Weight": "2967g", "Size": "7cm", "Finish": "Oxidation Treatment" }
        }
    },
    {
        id: 73,
        title: { zh: "得伟电钻39", en: "DeWalt Drill 39" },
        price: 1670.00,
        originalPrice: 2004.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/920609841768955921~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "得伟生产的电钻，高品质，耐用，适用于各种工作场景。", 
            en: "DeWalt drill, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "功率": "883W", "转速": "3984rpm", "夹头": "13mm", "功能": "无刷电机、双速" },
            en: { "Power": "883W", "Speed": "3984rpm", "Chuck": "13mm", "Features": "Brushless Motor, Dual Speed" }
        }
    },
    {
        id: 74,
        title: { zh: "东成扳手1", en: "Dongcheng Wrench 1" },
        price: 526.00,
        originalPrice: 631.00,
        category: "hardware",
        subcategory: "wrench",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815295632900252~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "东成生产的扳手，高品质，耐用，适用于各种工作场景。", 
            en: "Dongcheng wrench, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "件数": "1件套", "类型": "梅花+开口两用", "手柄": "PP+TPR双色" },
            en: { "Material": "CR-V Alloy Steel", "Pieces": "1-piece Set", "Type": "Ring+Open End", "Handle": "PP+TPR Dual Color" }
        }
    },
    {
        id: 75,
        title: { zh: "日立工具箱26", en: "Hitachi Tool Box 26" },
        price: 1481.00,
        originalPrice: 1777.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1017633780165771342~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "日立生产的工具箱，高品质，耐用，适用于各种工作场景。", 
            en: "Hitachi tool box, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "重量": "4305g", "尺寸": "8cm", "表面处理": "喷砂镀铬" },
            en: { "Material": "CR-V Alloy Steel", "Weight": "4305g", "Size": "8cm", "Finish": "Sandblasted Chrome" }
        }
    },
    {
        id: 76,
        title: { zh: "捷科电焊机39", en: "Jieke Welding Machine 39" },
        price: 2038.00,
        originalPrice: 2446.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004814745885474825~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "捷科生产的电焊机，高品质，耐用，适用于各种工作场景。", 
            en: "Jieke welding machine, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "重量": "4424g", "尺寸": "9cm", "表面处理": "发黑处理" },
            en: { "Material": "CR-V Alloy Steel", "Weight": "4424g", "Size": "9cm", "Finish": "Blackening Treatment" }
        }
    },
    {
        id: 77,
        title: { zh: "老A钳子48", en: "LaoA Pliers 48" },
        price: 847.00,
        originalPrice: 1016.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815347074203652~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "老A生产的钳子，高品质，耐用，适用于各种工作场景。", 
            en: "LaoA pliers, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "高碳钢", "重量": "2453g", "尺寸": "27cm", "表面处理": "喷砂镀铬" },
            en: { "Material": "High Carbon Steel", "Weight": "2453g", "Size": "27cm", "Finish": "Sandblasted Chrome" }
        }
    },
    {
        id: 78,
        title: { zh: "卡夫威尔板牙71", en: "Kawfee Threading Die 71" },
        price: 900.00,
        originalPrice: 1080.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004814754467020866~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "卡夫威尔生产的板牙，高品质，耐用，适用于各种工作场景。", 
            en: "Kawfee threading die, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "4753g", "尺寸": "33cm", "表面处理": "发黑处理" },
            en: { "Material": "Stainless Steel", "Weight": "4753g", "Size": "33cm", "Finish": "Blackening Treatment" }
        }
    },
    {
        id: 79,
        title: { zh: "博世扳手77", en: "Bosch Wrench 77" },
        price: 1151.00,
        originalPrice: 1381.00,
        category: "hardware",
        subcategory: "wrench",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/920609841768955921~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "博世生产的扳手，高品质，耐用，适用于各种工作场景。", 
            en: "Bosch wrench, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "CR-V合金钢", "件数": "8件套", "类型": "十字+一字", "手柄": "PP+TPR双色" },
            en: { "Material": "CR-V Alloy Steel", "Pieces": "8-piece Set", "Types": "Phillips+Flathead", "Handle": "PP+TPR Dual Color" }
        }
    },
    {
        id: 80,
        title: { zh: "绿林丝锥32", en: "Lvlin Tap 32" },
        price: 513.00,
        originalPrice: 616.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815295632900252~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "绿林生产的丝锥，高品质，耐用，适用于各种工作场景。", 
            en: "Lvlin tap, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "不锈钢", "重量": "3728g", "尺寸": "13cm", "表面处理": "喷砂镀铬" },
            en: { "Material": "Stainless Steel", "Weight": "3728g", "Size": "13cm", "Finish": "Sandblasted Chrome" }
        }
    },
    // ========== 更多电子产品 ==========
    {
        id: 81,
        title: { zh: "小米智能手机 158", en: "Xiaomi Smartphone 158" },
        price: 3567.00,
        originalPrice: 4280.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/919257829013848146~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "小米推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "Xiaomi smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.7英寸", "存储": "128GB", "摄像头": "6400万像素", "电池": "5000mAh" },
            en: { "Screen": "6.7 inch", "Storage": "128GB", "Camera": "64MP", "Battery": "5000mAh" }
        }
    },
    {
        id: 82,
        title: { zh: "OPPO智能手机 282", en: "OPPO Smartphone 282" },
        price: 4123.00,
        originalPrice: 4948.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852216864997387~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "OPPO推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "OPPO smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.5英寸", "存储": "256GB", "摄像头": "5000万像素", "电池": "4500mAh" },
            en: { "Screen": "6.5 inch", "Storage": "256GB", "Camera": "50MP", "Battery": "4500mAh" }
        }
    },
    {
        id: 83,
        title: { zh: "vivo智能手机 391", en: "vivo Smartphone 391" },
        price: 3890.00,
        originalPrice: 4668.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852268402901008~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "vivo推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "vivo smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.6英寸", "存储": "128GB", "摄像头": "4800万像素", "电池": "4600mAh" },
            en: { "Screen": "6.6 inch", "Storage": "128GB", "Camera": "48MP", "Battery": "4600mAh" }
        }
    },
    {
        id: 84,
        title: { zh: "一加智能手机 445", en: "OnePlus Smartphone 445" },
        price: 4567.00,
        originalPrice: 5480.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1055067701506736188~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "一加推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "OnePlus smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.8英寸", "存储": "256GB", "摄像头": "5000万像素", "电池": "5000mAh" },
            en: { "Screen": "6.8 inch", "Storage": "256GB", "Camera": "50MP", "Battery": "5000mAh" }
        }
    },
    {
        id: 85,
        title: { zh: "realme智能手机 567", en: "realme Smartphone 567" },
        price: 2789.00,
        originalPrice: 3347.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/910059778591948874~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "realme推出的智能手机，高性能，高品质，满足日常使用需求。", 
            en: "realme smartphone, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "6.4英寸", "存储": "128GB", "摄像头": "6400万像素", "电池": "4500mAh" },
            en: { "Screen": "6.4 inch", "Storage": "128GB", "Camera": "64MP", "Battery": "4500mAh" }
        }
    },
    {
        id: 86,
        title: { zh: "联想笔记本电脑 678", en: "Lenovo Laptop 678" },
        price: 7234.00,
        originalPrice: 8681.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968519935774294097~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "联想推出的笔记本电脑，高性能，高品质，满足日常使用需求。", 
            en: "Lenovo laptop, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "15.6英寸", "处理器": "Intel i7", "内存": "16GB", "存储": "512GB SSD" },
            en: { "Display": "15.6 inch", "Processor": "Intel i7", "Memory": "16GB", "Storage": "512GB SSD" }
        }
    },
    {
        id: 87,
        title: { zh: "华硕笔记本电脑 789", en: "Asus Laptop 789" },
        price: 6543.00,
        originalPrice: 7852.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/919257829013848146~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "华硕推出的笔记本电脑，高性能，高品质，满足日常使用需求。", 
            en: "Asus laptop, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "14英寸", "处理器": "AMD R7", "内存": "16GB", "存储": "512GB SSD" },
            en: { "Display": "14 inch", "Processor": "AMD R7", "Memory": "16GB", "Storage": "512GB SSD" }
        }
    },
    {
        id: 88,
        title: { zh: "Acer笔记本电脑 891", en: "Acer Laptop 891" },
        price: 5432.00,
        originalPrice: 6518.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852268402901008~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Acer推出的笔记本电脑，高性能，高品质，满足日常使用需求。", 
            en: "Acer laptop, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "15.6英寸", "处理器": "Intel i5", "内存": "8GB", "存储": "256GB SSD" },
            en: { "Display": "15.6 inch", "Processor": "Intel i5", "Memory": "8GB", "Storage": "256GB SSD" }
        }
    },
    {
        id: 89,
        title: { zh: "华为平板电脑 902", en: "Huawei Tablet 902" },
        price: 3456.00,
        originalPrice: 4147.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/963852216864997387~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "华为推出的平板电脑，高性能，高品质，满足日常使用需求。", 
            en: "Huawei tablet, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "10.4英寸", "处理器": "麒麟820", "内存": "6GB", "存储": "128GB" },
            en: { "Display": "10.4 inch", "Processor": "Kirin 820", "Memory": "6GB", "Storage": "128GB" }
        }
    },
    {
        id: 90,
        title: { zh: "荣耀平板电脑 013", en: "Honor Tablet 013" },
        price: 2987.00,
        originalPrice: 3584.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/910059778591948874~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "荣耀推出的平板电脑，高性能，高品质，满足日常使用需求。", 
            en: "Honor tablet, high performance, high quality, meets daily needs." 
        },
        specs: {
            zh: { "屏幕": "11英寸", "处理器": "骁龙8+", "内存": "8GB", "存储": "256GB" },
            en: { "Display": "11 inch", "Processor": "Snapdragon 8+", "Memory": "8GB", "Storage": "256GB" }
        }
    },
    // ========== 更多医疗辅助产品 ==========
    {
        id: 91,
        title: { zh: "鱼跃轮椅 201", en: "Yuyue Wheelchair 201" },
        price: 1234.00,
        originalPrice: 1481.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817573953601545~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "鱼跃生产的轮椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Yuyue wheelchair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "100kg", "重量": "15kg", "可折叠": true },
            en: { "Material": "Aluminum Alloy", "Capacity": "100kg", "Weight": "15kg", "Foldable": true }
        }
    },
    {
        id: 92,
        title: { zh: "互邦轮椅 305", en: "Hubang Wheelchair 305" },
        price: 1567.00,
        originalPrice: 1880.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/968256757358264347~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "互邦生产的轮椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Hubang wheelchair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "钢管", "承重": "120kg", "重量": "18kg", "可折叠": true },
            en: { "Material": "Steel", "Capacity": "120kg", "Weight": "18kg", "Foldable": true }
        }
    },
    {
        id: 93,
        title: { zh: "凯驰轮椅 408", en: "Kaichi Wheelchair 408" },
        price: 2134.00,
        originalPrice: 2561.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/966817616889905160~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "凯驰生产的轮椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Kaichi wheelchair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "110kg", "重量": "14kg", "可折叠": true },
            en: { "Material": "Aluminum Alloy", "Capacity": "110kg", "Weight": "14kg", "Foldable": true }
        }
    },
    {
        id: 94,
        title: { zh: "邦福电动轮椅 512", en: "Bangfu Electric Wheelchair 512" },
        price: 8765.00,
        originalPrice: 10518.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/33ea65e717631e0d5cb98a0001ba826c~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "邦福生产的电动轮椅，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Bangfu electric wheelchair, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "120kg", "电池": "20Ah锂电池", "续航": "30km" },
            en: { "Material": "Aluminum Alloy", "Capacity": "120kg", "Battery": "20Ah Lithium", "Range": "30km" }
        }
    },
    {
        id: 95,
        title: { zh: "Aipower助听器 615", en: "Aipower Hearing Aid 615" },
        price: 3456.00,
        originalPrice: 4147.00,
        category: "medical",
        subcategory: "hearing_aid",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903168761265127465~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "Aipower生产的助听器，适用于医疗辅助，质量可靠，使用舒适。", 
            en: "Aipower hearing aid, medical grade, reliable quality, comfortable." 
        },
        specs: {
            zh: { "类型": "耳背式", "电源": "充电式", "通道": "12通道", "特点": "智能降噪" },
            en: { "Type": "Behind-ear", "Power": "Rechargeable", "Channels": "12", "Features": "Smart Noise Reduction" }
        }
    },
    // ========== 更多五金产品 ==========
    {
        id: 96,
        title: { zh: "得力工具箱 718", en: "Deli Tool Box 718" },
        price: 234.00,
        originalPrice: 281.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004814754467020866~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "得力生产的工具箱，高品质，耐用，适用于各种工作场景。", 
            en: "Deli tool box, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "材质": "塑料", "尺寸": "40x25x20cm", "特点": "防水防尘" },
            en: { "Material": "Plastic", "Size": "40x25x20cm", "Features": "Waterproof, Dustproof" }
        }
    },
    {
        id: 97,
        title: { zh: "世达电烙铁 821", en: "Sata Soldering Iron 821" },
        price: 189.00,
        originalPrice: 227.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/920609841768955921~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "世达生产的电烙铁，高品质，耐用，适用于各种工作场景。", 
            en: "Sata soldering iron, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "功率": "60W", "温度范围": "200-450℃", "特点": "恒温发热" },
            en: { "Power": "60W", "Temperature Range": "200-450℃", "Features": "Constant Temperature Heating" }
        }
    },
    {
        id: 98,
        title: { zh: "田岛卷尺 924", en: "Tajima Tape Measure 924" },
        price: 45.00,
        originalPrice: 54.00,
        category: "hardware",
        subcategory: "measuring",
        image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004815347074203652~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "田岛生产的卷尺，高品质，耐用，适用于各种工作场景。", 
            en: "Tajima tape measure, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "长度": "5米", "材质": "钢带", "特点": "自动回卷" },
            en: { "Length": "5m", "Material": "Steel Blade", "Features": "Auto Retract" }
        }
    },
    {
        id: 99,
        title: { zh: "史丹利水平尺 027", en: "Stanley Spirit Level 027" },
        price: 156.00,
        originalPrice: 187.00,
        category: "hardware",
        subcategory: "measuring",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1004814754467020866~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "史丹利生产的水平尺，高品质，耐用，适用于各种工作场景。", 
            en: "Stanley spirit level, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "长度": "60cm", "材质": "铝合金", "气泡数": "3个" },
            en: { "Length": "60cm", "Material": "Aluminum Alloy", "Bubbles": "3" }
        }
    },
    {
        id: 100,
        title: { zh: "牧田角磨机 130", en: "Makita Angle Grinder 130" },
        price: 567.00,
        originalPrice: 680.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1017633780165771342~tplv-be4g95zd3a-image.jpeg",
        description: { 
            zh: "牧田生产的角磨机，高品质，耐用，适用于各种工作场景。", 
            en: "Makita angle grinder, high quality, durable, suitable for various work scenarios." 
        },
        specs: {
            zh: { "功率": "900W", "转速": "8500rpm", "砂轮直径": "100mm" },
            en: { "Power": "900W", "Speed": "8500rpm", "Disc Diameter": "100mm" }
        }
    }
];

// 货币汇率 (实时更新)
const exchangeRates = {
    USD: 1,
    CNY: 7.24,
    HKD: 7.82,
    EUR: 0.92,
    JPY: 149.50,
    KRW: 1325.00,
    SGD: 1.34,
    MYR: 4.72,
    THB: 35.80,
    VND: 24350.00,
    PHP: 56.80,
    IDR: 15850.00
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
    HK: { bankName: "Hong Kong Bank", accountNumber: "123-456789-001", accountName: "GlobalChoice Limited", swiftCode: "HKBAHKHH" },
    SG: { bankName: "DBS Bank Singapore", accountNumber: "003-123456-0", accountName: "GlobalChoice Pte Ltd", swiftCode: "DBSSSGSG" },
    MY: { bankName: "Maybank Malaysia", accountNumber: "123456789012", accountName: "GlobalChoice Sdn Bhd", swiftCode: "MBBEMYKL" },
    TH: { bankName: "Bangkok Bank", accountNumber: "123-4-56789-0", accountName: "GlobalChoice Co., Ltd.", swiftCode: "BKKBTHBK" },
    VN: { bankName: "Vietcombank", accountNumber: "1234567890", accountName: "GlobalChoice Vietnam", swiftCode: "BFTVVNVX" },
    PH: { bankName: "BDO", accountNumber: "1234567890", accountName: "GlobalChoice Philippines", swiftCode: "BNORPHMM" },
    ID: { bankName: "BCA", accountNumber: "1234567890", accountName: "GlobalChoice Indonesia", swiftCode: "CENAIDJA" }
};

// 订单状态
const orderStatuses = {
    pending: { text: "待处理", textEn: "Pending", color: "#fa8c16" },
    processing: { text: "处理中", textEn: "Processing", color: "#1890ff" },
    purchased: { text: "已采购", textEn: "Purchased", color: "#722ed1" },
    shipped: { text: "已发货", textEn: "Shipped", color: "#52c41a" },
    delivered: { text: "已送达", textEn: "Delivered", color: "#52c41a" },
    cancelled: { text: "已取消", textEn: "Cancelled", color: "#ff4d4f" }
};

// 分类翻译
const categoryTranslations = {
    electronics: { zh: "电子产品", en: "Electronics" },
    medical: { zh: "医疗辅助", en: "Medical Aids" },
    hardware: { zh: "五金产品", en: "Hardware" }
};

// ========== 热门产品池 - 模拟其他平台热销产品 ==========
const hotProductsPool = [
    // 手机类
    { id: 101, title: { zh: "iPhone 16 Pro Max", en: "iPhone 16 Pro Max" }, price: 1299, originalPrice: 1599, category: "electronics", subcategory: "phone", image: "https://m.media-amazon.com/images/I/61ePMsmNZTL._AC_SL1000_.jpg", description: { zh: "最新iPhone 16 Pro Max，A18 Pro芯片，钛金属设计。", en: "Latest iPhone 16 Pro Max, A18 Pro chip, titanium design." }, sales: 12500, specs: { zh: { "存储": "256GB", "芯片": "A18 Pro", "屏幕": "6.9英寸" }, en: { "Storage": "256GB", "Chip": "A18 Pro", "Display": "6.9 inch" } } },
    { id: 102, title: { zh: "Google Pixel 9 Pro", en: "Google Pixel 9 Pro" }, price: 899, originalPrice: 1099, category: "electronics", subcategory: "phone", image: "https://m.media-amazon.com/images/I/61nOEfyMNlL._AC_SL1500_.jpg", description: { zh: "Google Pixel 9 Pro，Tensor G4芯片，AI摄影功能强大。", en: "Google Pixel 9 Pro, Tensor G4 chip, powerful AI camera." }, sales: 8200, specs: { zh: { "存储": "128GB", "芯片": "Tensor G4", "屏幕": "6.7英寸" }, en: { "Storage": "128GB", "Chip": "Tensor G4", "Display": "6.7 inch" } } },
    { id: 103, title: { zh: "OnePlus 12", en: "OnePlus 12" }, price: 699, originalPrice: 899, category: "electronics", subcategory: "phone", image: "https://m.media-amazon.com/images/I/71MHTf3Qy-L._AC_SL1500_.jpg", description: { zh: "OnePlus 12，Snapdragon 8 Gen 3，100W超级快充。", en: "OnePlus 12, Snapdragon 8 Gen 3, 100W fast charging." }, sales: 6800, specs: { zh: { "存储": "256GB", "芯片": "Snapdragon 8 Gen 3", "屏幕": "6.82英寸" }, en: { "Storage": "256GB", "Chip": "Snapdragon 8 Gen 3", "Display": "6.82 inch" } } },
    { id: 104, title: { zh: "OPPO Find X7 Pro", en: "OPPO Find X7 Pro" }, price: 749, originalPrice: 949, category: "electronics", subcategory: "phone", image: "https://m.media-amazon.com/images/I/71MHTf3Qy-L._AC_SL1500_.jpg", description: { zh: "OPPO Find X7 Pro，天玑9300芯片，哈苏影像系统。", en: "OPPO Find X7 Pro, Dimensity 9300, Hasselblad camera." }, sales: 5500, specs: { zh: { "存储": "256GB", "芯片": "Dimensity 9300", "屏幕": "6.78英寸" }, en: { "Storage": "256GB", "Chip": "Dimensity 9300", "Display": "6.78 inch" } } },
    // 平板类
    { id: 105, title: { zh: "Samsung Galaxy Tab S9 Ultra", en: "Samsung Galaxy Tab S9 Ultra" }, price: 1199, originalPrice: 1499, category: "electronics", subcategory: "tablet", image: "https://m.media-amazon.com/images/I/81a2p2kG7ZL._AC_SL1500_.jpg", description: { zh: "三星Galaxy Tab S9 Ultra，14.6英寸超大屏幕，S Pen手写笔。", en: "Samsung Galaxy Tab S9 Ultra, 14.6 inch display, S Pen included." }, sales: 4800, specs: { zh: { "存储": "256GB", "芯片": "Snapdragon 8 Gen 2", "屏幕": "14.6英寸" }, en: { "Storage": "256GB", "Chip": "Snapdragon 8 Gen 2", "Display": "14.6 inch" } } },
    { id: 106, title: { zh: "Xiaomi Pad 6S Pro", en: "Xiaomi Pad 6S Pro" }, price: 599, originalPrice: 799, category: "electronics", subcategory: "tablet", image: "https://m.media-amazon.com/images/I/71MHTf3Qy-L._AC_SL1500_.jpg", description: { zh: "小米平板6S Pro，12.4英寸3K屏幕，120W快充。", en: "Xiaomi Pad 6S Pro, 12.4 inch 3K display, 120W charging." }, sales: 3600, specs: { zh: { "存储": "256GB", "芯片": "Snapdragon 8 Gen 2", "屏幕": "12.4英寸" }, en: { "Storage": "256GB", "Chip": "Snapdragon 8 Gen 2", "Display": "12.4 inch" } } },
    // 电脑类
    { id: 107, title: { zh: "ASUS ROG Zephyrus G16", en: "ASUS ROG Zephyrus G16" }, price: 1899, originalPrice: 2399, category: "electronics", subcategory: "computer", image: "https://m.media-amazon.com/images/I/61x8jRw1RiL._AC_SL1500_.jpg", description: { zh: "华硕ROG Zephyrus G16，RTX 4080显卡，240Hz高刷屏。", en: "ASUS ROG Zephyrus G16, RTX 4080, 240Hz display." }, sales: 3200, specs: { zh: { "芯片": "Intel i9-13900H", "显卡": "RTX 4080", "内存": "32GB", "屏幕": "16英寸240Hz" }, en: { "Chip": "Intel i9-13900H", "Graphics": "RTX 4080", "Memory": "32GB", "Display": "16 inch 240Hz" } } },
    { id: 108, title: { zh: "Lenovo ThinkPad X1 Carbon", en: "Lenovo ThinkPad X1 Carbon" }, price: 1599, originalPrice: 1999, category: "electronics", subcategory: "computer", image: "https://m.media-amazon.com/images/I/61x8jRw1RiL._AC_SL1500_.jpg", description: { zh: "联想ThinkPad X1 Carbon，轻薄商务本，14英寸OLED。", en: "Lenovo ThinkPad X1 Carbon, lightweight business laptop, 14 inch OLED." }, sales: 4100, specs: { zh: { "芯片": "Intel i7-1365U", "内存": "16GB", "存储": "512GB SSD", "屏幕": "14英寸OLED" }, en: { "Chip": "Intel i7-1365U", "Memory": "16GB", "Storage": "512GB SSD", "Display": "14 inch OLED" } } },
    // 耳机/配件
    { id: 109, title: { zh: "AirPods Max", en: "AirPods Max" }, price: 399, originalPrice: 499, category: "electronics", subcategory: "accessory", image: "https://m.media-amazon.com/images/I/61WfsggqkML._AC_SL1500_.jpg", description: { zh: "苹果AirPods Max，头戴式降噪耳机，空间音频。", en: "Apple AirPods Max, over-ear noise cancelling headphones, spatial audio." }, sales: 7800, specs: { zh: { "类型": "头戴式", "降噪": "主动降噪", "续航": "20小时" }, en: { "Type": "Over-ear", "Noise Cancellation": "Active", "Battery": "20 hours" } } },
    { id: 110, title: { zh: "Samsung Galaxy Watch 6", en: "Samsung Galaxy Watch 6" }, price: 299, originalPrice: 399, category: "electronics", subcategory: "wearable", image: "https://m.media-amazon.com/images/I/81gFy9L6rQL._AC_SL1500_.jpg", description: { zh: "三星Galaxy Watch 6，健康监测，Wear OS系统。", en: "Samsung Galaxy Watch 6, health monitoring, Wear OS." }, sales: 6200, specs: { zh: { "屏幕": "1.4英寸", "电池": "300mAh", "防水": "5ATM" }, en: { "Display": "1.4 inch", "Battery": "300mAh", "Water Resistance": "5ATM" } } },
    // 医疗辅助
    { id: 111, title: { zh: "电动轮椅 PRO-2000", en: "Electric Wheelchair PRO-2000" }, price: 1999, originalPrice: 2799, category: "medical", subcategory: "wheelchair", image: "https://m.media-amazon.com/images/I/61bq3qsqlGL._AC_SL1000_.jpg", description: { zh: "高端电动轮椅，续航50公里，可折叠设计。", en: "Premium electric wheelchair, 50km range, foldable design." }, sales: 890, specs: { zh: { "续航": "50公里", "承重": "150kg", "充电时间": "6小时" }, en: { "Range": "50km", "Load": "150kg", "Charging": "6 hours" } } },
    { id: 112, title: { zh: "智能血压计 BP-500", en: "Smart Blood Pressure Monitor BP-500" }, price: 89, originalPrice: 129, category: "medical", subcategory: "monitor", image: "https://m.media-amazon.com/images/I/51c9JQXG8jL._AC_SL1000_.jpg", description: { zh: "智能血压计，大屏幕显示，心律不齐检测。", en: "Smart blood pressure monitor, large display, arrhythmia detection." }, sales: 3200, specs: { zh: { "精度": "±3mmHg", "存储": "99组数据", "电源": "4节AA电池" }, en: { "Accuracy": "±3mmHg", "Storage": "99 readings", "Power": "4x AA batteries" } } },
    // 五金产品
    { id: 113, title: { zh: "专业电动工具套装", en: "Professional Power Tool Set" }, price: 399, originalPrice: 559, category: "hardware", subcategory: "tools", image: "https://m.media-amazon.com/images/I/61gY2M3MqWL._AC_SL1000_.jpg", description: { zh: "20V锂电工具套装，含电钻、角磨机等8件套。", en: "20V lithium tool set, includes drill, angle grinder, 8 pieces." }, sales: 2100, specs: { zh: { "电压": "20V", "配件": "8件套", "电池": "2.0Ah" }, en: { "Voltage": "20V", "Accessories": "8 pieces", "Battery": "2.0Ah" } } },
    { id: 114, title: { zh: "德力西电钻套装", en: "Delixi Cordless Drill Set" }, price: 169, originalPrice: 239, category: "hardware", subcategory: "tools", image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg", description: { zh: "充电式电钻，20V双电池，多档扭矩调节。", en: "Cordless drill, 20V dual batteries, multi-torque adjustment." }, sales: 4500, specs: { zh: { "电压": "20V", "电池": "2x2.0Ah", "最大扭矩": "45Nm" }, en: { "Voltage": "20V", "Battery": "2x2.0Ah", "Max Torque": "45Nm" } } },
];

// 动态产品更新功能
let productUpdateInterval = null;
let lastPriceUpdate = null;
let updateCycle = 0;

function initProductAutoUpdate() {
    // 每周更新一次（7天 = 604800000毫秒）
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    productUpdateInterval = setInterval(() => {
        updateHotProducts();
    }, oneWeek);
    lastPriceUpdate = new Date();

    // 注意：不再初始更新，避免页面加载时的闪烁
    // 如果需要初始更新，可以移除下面的注释
    // setTimeout(() => updateHotProducts(), 2000);
}

// 热门产品自动更新函数
function updateHotProducts() {
    updateCycle++;
    const lang = currentLanguage;
    
    // 模拟销量变化 - 随机增减
    hotProductsPool.forEach(product => {
        // 每天销量波动 ±5%
        const salesChange = Math.random() * 0.1 - 0.05;
        product.sales = Math.max(100, Math.floor(product.sales * (1 + salesChange)));
        
        // 根据销量调整价格（热销产品略微涨价）
        const priceAdjustment = 1 + (product.sales / 20000) * 0.02;
        product.price = parseFloat((product.price * priceAdjustment).toFixed(2));
    });
    
    // 按销量排序，获取当前热销产品
    const trending = [...hotProductsPool].sort((a, b) => b.sales - a.sales).slice(0, 8);
    
    // 更新显示中的产品（替换部分产品）
    const displayCount = products.length;
    const replaceCount = Math.min(4, displayCount); // 每次替换最多4个
    
    // 随机替换一些产品为热销产品
    for (let i = 0; i < replaceCount; i++) {
        const replaceIndex = Math.floor(Math.random() * displayCount);
        const newProduct = { 
            ...trending[i % trending.length], 
            id: products[replaceIndex].id, // 保持ID以便购物车正常工作
            price: parseFloat((trending[i % trending.length].price * (0.9 + Math.random() * 0.2)).toFixed(2)),
            originalPrice: trending[i % trending.length].originalPrice
        };
        products[replaceIndex] = newProduct;
    }
    
    // 同时更新所有产品的价格（模拟汇率波动）
    const fluctuation = 1 + (Math.random() * 0.04 - 0.02);
    products.forEach(product => {
        product.originalPrice = parseFloat((product.originalPrice * fluctuation).toFixed(2));
        // 保持折扣比例
        const discount = product.price / product.originalPrice;
        product.price = parseFloat((product.originalPrice * Math.max(0.7, Math.min(0.95, discount))).toFixed(2));
    });
    
    lastPriceUpdate = new Date();
    
    // 如果当前在产品页面，重新渲染
    if (document.querySelector('.page.active')?.id === 'page-products') {
        renderProducts();
        const timeStr = lastPriceUpdate.toLocaleTimeString();
        showToast(`${lang === 'zh' ? '🔄 热门产品已更新！' : '🔄 Hot products updated!'} (${timeStr})`);
    }
    
    console.log(`[${updateCycle}] 热门产品已更新，当前热销: ${trending[0].title[lang]}`);
}

// 获取当前热销产品（供首页显示）
function getTrendingProducts(limit = 6) {
    return [...hotProductsPool].sort((a, b) => b.sales - a.sales).slice(0, limit);
}

// 获取热门产品池（供产品列表显示）
function getHotProductsPool() {
    return [...hotProductsPool];
}

// 产品排序/推荐功能
function getTrendingProducts(limit = 6) {
    // 模拟热销产品（随机选择）
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
}

function getNewArrivals(limit = 6) {
    // 模拟新品（按ID排序，取最新的）
    return [...products].sort((a, b) => b.id - a.id).slice(0, limit);
}

// 初始化购物车
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 全局货币设置
let globalCurrency = localStorage.getItem('globalCurrency') || 'USD';

// 初始化订单
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// 初始化代找产品请求
let findProductRequests = JSON.parse(localStorage.getItem('findProductRequests')) || [];
