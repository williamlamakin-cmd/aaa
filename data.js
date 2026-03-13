// 产品数据 - 电子产品、医疗辅助、五金产品
// 图片使用官方品牌产品照片
const products = [
    // ========== 电子产品类 - 手机/平板/电脑 ==========
    {
        id: 1,
        title: { zh: "iPhone 15 Pro Max 256GB", en: "iPhone 15 Pro Max 256GB" },
        price: 1159.00,
        originalPrice: 1399.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://m.media-amazon.com/images/I/61ePMsmNZTL._AC_SL1000_.jpg",
        description: { 
            zh: "苹果iPhone 15 Pro Max，A17 Pro芯片，256GB存储，钛金属设计，4800万像素摄像头，5倍光学变焦。", 
            en: "Apple iPhone 15 Pro Max, A17 Pro chip, 256GB storage, titanium design, 48MP camera, 5x optical zoom." 
        },
        specs: {
            zh: { "存储": "256GB", "芯片": "A17 Pro", "屏幕": "6.7英寸", "摄像头": "4800万像素", "电池": "5000mAh" },
            en: { "Storage": "256GB", "Chip": "A17 Pro", "Display": "6.7 inch", "Camera": "48MP", "Battery": "5000mAh" }
        }
    },
    {
        id: 2,
        title: { zh: "Samsung Galaxy S24 Ultra", en: "Samsung Galaxy S24 Ultra" },
        price: 1299.00,
        originalPrice: 1599.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://m.media-amazon.com/images/I/61nOEfyMNlL._AC_SL1500_.jpg",
        description: { 
            zh: "三星Galaxy S24 Ultra，Snapdragon 8 Gen 3处理器，200MP摄像头，钛金属框架，S Pen手写笔。", 
            en: "Samsung Galaxy S24 Ultra, Snapdragon 8 Gen 3, 200MP camera, titanium frame, S Pen included." 
        },
        specs: {
            zh: { "存储": "512GB", "芯片": "Snapdragon 8 Gen 3", "屏幕": "6.8英寸", "摄像头": "200MP", "电池": "5000mAh" },
            en: { "Storage": "512GB", "Chip": "Snapdragon 8 Gen 3", "Display": "6.8 inch", "Camera": "200MP", "Battery": "5000mAh" }
        }
    },
    {
        id: 3,
        title: { zh: "iPad Pro 12.9英寸 M2芯片", en: "iPad Pro 12.9 inch M2 Chip" },
        price: 1099.00,
        originalPrice: 1299.00,
        category: "electronics",
        subcategory: "tablet",
        image: "https://m.media-amazon.com/images/I/81a2p2kG7ZL._AC_SL1500_.jpg",
        description: { 
            zh: "苹果iPad Pro 12.9英寸，搭载M2芯片，Liquid Retina XDR显示屏，支持Apple Pencil，Pro级摄像头。", 
            en: "Apple iPad Pro 12.9 inch with M2 chip, Liquid Retina XDR display, supports Apple Pencil, Pro camera system." 
        },
        specs: {
            zh: { "存储": "256GB", "芯片": "M2", "屏幕": "12.9英寸", "摄像头": "12MP", "电池": "10758mAh" },
            en: { "Storage": "256GB", "Chip": "M2", "Display": "12.9 inch", "Camera": "12MP", "Battery": "10758mAh" }
        }
    },
    {
        id: 4,
        title: { zh: "MacBook Pro 14英寸 M3 Pro", en: "MacBook Pro 14 inch M3 Pro" },
        price: 2099.00,
        originalPrice: 2499.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://m.media-amazon.com/images/I/61fKfgwJGLL._AC_SL1500_.jpg",
        description: { 
            zh: "苹果MacBook Pro 14英寸，搭载M3 Pro芯片，18GB统一内存，512GB固态硬盘，Liquid Retina XDR显示屏。", 
            en: "Apple MacBook Pro 14 inch with M3 Pro chip, 18GB unified memory, 512GB SSD, Liquid Retina XDR display." 
        },
        specs: {
            zh: { "芯片": "M3 Pro", "内存": "18GB", "存储": "512GB SSD", "屏幕": "14英寸", "电池": "70Wh" },
            en: { "Chip": "M3 Pro", "Memory": "18GB", "Storage": "512GB SSD", "Display": "14 inch", "Battery": "70Wh" }
        }
    },
    {
        id: 5,
        title: { zh: "Dell XPS 15 笔记本电脑", en: "Dell XPS 15 Laptop" },
        price: 1599.00,
        originalPrice: 1899.00,
        category: "electronics",
        subcategory: "computer",
        image: "https://m.media-amazon.com/images/I/61x8jRw1RiL._AC_SL1500_.jpg",
        description: { 
            zh: "Dell XPS 15，Intel Core i7-13700H，32GB内存，1TB SSD，15.6英寸4K OLED触控屏，NVIDIA RTX 4050显卡。", 
            en: "Dell XPS 15, Intel Core i7-13700H, 32GB RAM, 1TB SSD, 15.6 inch 4K OLED touchscreen, NVIDIA RTX 4050." 
        },
        specs: {
            zh: { "芯片": "Intel Core i7-13700H", "内存": "32GB", "存储": "1TB SSD", "屏幕": "15.6英寸4K OLED", "显卡": "RTX 4050" },
            en: { "Chip": "Intel Core i7-13700H", "Memory": "32GB", "Storage": "1TB SSD", "Display": "15.6 inch 4K OLED", "Graphics": "RTX 4050" }
        }
    },
    {
        id: 6,
        title: { zh: "Xiaomi 14 Pro 智能手机", en: "Xiaomi 14 Pro Smartphone" },
        price: 799.00,
        originalPrice: 999.00,
        category: "electronics",
        subcategory: "phone",
        image: "https://m.media-amazon.com/images/I/71MHTf3Qy-L._AC_SL1500_.jpg",
        description: { 
            zh: "小米14 Pro，Snapdragon 8 Gen 3处理器，徕卡光学镜头，120W超级快充，50W无线充电，120Hz LTPO显示屏。", 
            en: "Xiaomi 14 Pro, Snapdragon 8 Gen 3, Leica optics, 120W fast charging, 50W wireless charging, 120Hz LTPO display." 
        },
        specs: {
            zh: { "存储": "512GB", "芯片": "Snapdragon 8 Gen 3", "屏幕": "6.73英寸", "摄像头": "50MP", "电池": "4880mAh" },
            en: { "Storage": "512GB", "Chip": "Snapdragon 8 Gen 3", "Display": "6.73 inch", "Camera": "50MP", "Battery": "4880mAh" }
        }
    },
    {
        id: 7,
        title: { zh: "Sony WH-1000XM5 降噪耳机", en: "Sony WH-1000XM5 Headphones" },
        price: 349.00,
        originalPrice: 399.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://m.media-amazon.com/images/I/61ePMsmNZTL._AC_SL1000_.jpg",
        description: { 
            zh: "索尼WH-1000XM5无线降噪耳机，业界领先降噪技术，30小时续航，支持LDAC高清音质，多点连接。", 
            en: "Sony WH-1000XM5 wireless noise-canceling headphones, industry-leading ANC, 30-hour battery, LDAC support, multipoint connection." 
        },
        specs: {
            zh: { "类型": "头戴式", "降噪": "主动降噪", "续航": "30小时", "驱动单元": "30mm", "重量": "250g" },
            en: { "Type": "Over-ear", "ANC": "Active Noise Cancellation", "Battery": "30 hours", "Driver": "30mm", "Weight": "250g" }
        }
    },
    {
        id: 8,
        title: { zh: "AirPods Pro 2 代", en: "AirPods Pro 2nd Generation" },
        price: 249.00,
        originalPrice: 299.00,
        category: "electronics",
        subcategory: "audio",
        image: "https://m.media-amazon.com/images/I/61WfsggqkML._AC_SL1500_.jpg",
        description: { 
            zh: "苹果AirPods Pro第二代，H2芯片，主动降噪和通透模式，空间音频，MagSafe充电盒，6小时续航。", 
            en: "Apple AirPods Pro 2nd gen, H2 chip, ANC and Transparency mode, Spatial Audio, MagSafe case, 6-hour battery." 
        },
        specs: {
            zh: { "芯片": "H2", "降噪": "主动降噪", "续航": "6小时", "充电": "MagSafe", "防水": "IPX4" },
            en: { "Chip": "H2", "ANC": "Active Noise Cancellation", "Battery": "6 hours", "Charging": "MagSafe", "Waterproof": "IPX4" }
        }
    },
    // ========== 医疗辅助类 ==========
    {
        id: 9,
        title: { zh: "轻便折叠轮椅", en: "Lightweight Foldable Wheelchair" },
        price: 199.00,
        originalPrice: 268.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://m.media-amazon.com/images/I/61bq3qsqlGL._AC_SL1000_.jpg",
        description: { 
            zh: "轻便铝合金轮椅，可折叠设计，舒适坐垫，安全刹车，承重100kg，适合老人及行动不便者使用。", 
            en: "Lightweight aluminum wheelchair, foldable design, comfortable seat cushion, safe braking, 100kg weight capacity." 
        },
        specs: {
            zh: { "材质": "铝合金车架", "承重": "100kg", "净重": "15kg", "展开尺寸": "100x62x90cm", "折叠尺寸": "85x30x70cm" },
            en: { "Material": "Aluminum Alloy", "Capacity": "100kg", "Weight": "15kg", "Open Size": "100x62x90cm", "Folded": "85x30x70cm" }
        }
    },
    {
        id: 10,
        title: { zh: "可调节拐杖 轻便型", en: "Adjustable Crutches" },
        price: 35.00,
        originalPrice: 49.00,
        category: "medical",
        subcategory: "crutch",
        image: "https://m.media-amazon.com/images/I/61Bq3Bq3YPL._AC_SL1000_.jpg",
        description: { 
            zh: "铝合金拐杖，高度可调，防滑脚垫，人体工学手柄，适合老人及康复使用，安全舒适。", 
            en: "Aluminum alloy crutches, adjustable height, non-slip foot pads, ergonomic handle, suitable for elderly rehabilitation." 
        },
        specs: {
            zh: { "材质": "铝合金", "高度范围": "72-95cm", "承重": "120kg", "重量": "0.5kg/支" },
            en: { "Material": "Aluminum Alloy", "Height Range": "72-95cm", "Capacity": "120kg", "Weight": "0.5kg/pair" }
        }
    },
    {
        id: 11,
        title: { zh: "电子血压计 智能款", en: "Electronic Blood Pressure Monitor" },
        price: 79.00,
        originalPrice: 109.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://m.media-amazon.com/images/I/51c9JQXG8jL._AC_SL1000_.jpg",
        description: { 
            zh: "全自动电子血压计，大屏幕显示，心律不齐检测，语音播报，双人记忆功能，一键操作。", 
            en: "Fully automatic blood pressure monitor, large screen, arrhythmia detection, voice broadcast, dual user memory." 
        },
        specs: {
            zh: { "测量范围": "0-299mmHg", "精度": "±3mmHg", "记忆组数": "2x60组", "电源": "电池/USB" },
            en: { "Range": "0-299mmHg", "Accuracy": "±3mmHg", "Memory": "2x60 readings", "Power": "Battery/USB" }
        }
    },
    {
        id: 12,
        title: { zh: "血氧仪 指夹式", en: "Pulse Oximeter Finger Type" },
        price: 25.00,
        originalPrice: 35.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://m.media-amazon.com/images/I/41c9LQXG8jL._AC_SL1000_.jpg",
        description: { 
            zh: "便携式指夹血氧仪，实时监测血氧饱和度和脉搏，OLED彩屏显示，一键操作，智能省电。", 
            en: "Portable finger pulse oximeter, real-time SpO2 and pulse monitoring, OLED display, one-button operation." 
        },
        specs: {
            zh: { "血氧测量": "70%-100%", "脉搏范围": "30-250bpm", "显示": "OLED彩屏", "电源": "2节AAA电池" },
            en: { "SpO2 Range": "70%-100%", "Pulse Range": "30-250bpm", "Display": "OLED", "Power": "2xAAA" }
        }
    },
    {
        id: 13,
        title: { zh: "助行器 老人步行器", en: "Walker for Elderly" },
        price: 79.00,
        originalPrice: 109.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://m.media-amazon.com/images/I/61Bq3Bq3YPL._AC_SL1000_.jpg",
        description: { 
            zh: "可折叠助行器，加宽底盘，防滑脚垫，高度可调，带刹车系统，适合老人康复训练使用。", 
            en: "Foldable walker, widened base, non-slip pads, adjustable height, with brakes, suitable for elderly rehabilitation." 
        },
        specs: {
            zh: { "材质": "高强度钢管", "高度范围": "78-96cm", "承重": "150kg", "重量": "4.5kg", "特点": "可折叠、带刹车" },
            en: { "Material": "Steel", "Height Range": "78-96cm", "Capacity": "150kg", "Weight": "4.5kg", "Features": "Foldable, Brakes" }
        }
    },
    {
        id: 14,
        title: { zh: "电子体温枪 非接触式", en: "Infrared Thermometer" },
        price: 29.00,
        originalPrice: 42.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://m.media-amazon.com/images/I/41t8p9FqBML._AC_SL1000_.jpg",
        description: { 
            zh: "红外线体温枪，非接触式测量，秒速测温，高温报警，32组记忆功能，适合家庭使用。", 
            en: "Infrared thermometer, non-contact, instant reading, high temp alarm, 32 readings memory, for home use." 
        },
        specs: {
            zh: { "测量范围": "32-42.9℃", "精度": "±0.2℃", "测量距离": "3-5cm", "测量时间": "1秒" },
            en: { "Range": "32-42.9℃", "Accuracy": "±0.2℃", "Distance": "3-5cm", "Time": "1 second" }
        }
    },
    // ========== 更多医疗辅助产品 ==========
    {
        id: 15,
        title: { zh: "电动轮椅 PRO-2000", en: "Electric Wheelchair PRO-2000" },
        price: 1899.00,
        originalPrice: 2499.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://m.media-amazon.com/images/I/61bq3qsqlGL._AC_SL1000_.jpg",
        description: { 
            zh: "高端电动轮椅，续航50公里，可折叠设计，智能控制面板，适合重度行动不便者。", 
            en: "Premium electric wheelchair, 50km range, foldable design, smart control panel, for severe mobility impairment." 
        },
        specs: {
            zh: { "续航": "50公里", "承重": "150kg", "充电时间": "6小时", "电机": "250W" },
            en: { "Range": "50km", "Load": "150kg", "Charging": "6 hours", "Motor": "250W" }
        }
    },
    {
        id: 16,
        title: { zh: "康复助行架 四轮步行车", en: "4-Wheel Walking Aid" },
        price: 149.00,
        originalPrice: 199.00,
        category: "medical",
        subcategory: "walking_aid",
        image: "https://m.media-amazon.com/images/I/61Bq3Bq3YPL._AC_SL1000_.jpg",
        description: { 
            zh: "四轮助行架，带座椅和购物篮，稳固安全，适合老人户外行走和购物使用。", 
            en: "4-wheel walking aid with seat and shopping basket, stable and safe, for elderly outdoor walking and shopping." 
        },
        specs: {
            zh: { "材质": "铝合金", "承重": "120kg", "轮子": "8英寸", "特点": "带座椅、购物篮" },
            en: { "Material": "Aluminum", "Load": "120kg", "Wheels": "8 inch", "Features": "Seat, Shopping Basket" }
        }
    },
    {
        id: 17,
        title: { zh: "医用拐杖 腋下支撑", en: "Underarm Crutches Medical" },
        price: 45.00,
        originalPrice: 65.00,
        category: "medical",
        subcategory: "crutch",
        image: "https://m.media-amazon.com/images/I/61Bq3Bq3YPL._AC_SL1000_.jpg",
        description: { 
            zh: "专业医用腋下拐杖，海绵护垫，舒适透气，高度可调，适合术后康复使用。", 
            en: "Professional medical underarm crutches, sponge cushion, breathable, adjustable height, for post-surgery recovery." 
        },
        specs: {
            zh: { "材质": "铝合金", "高度范围": "110-155cm", "承重": "100kg", "特点": "海绵护垫" },
            en: { "Material": "Aluminum", "Height Range": "110-155cm", "Load": "100kg", "Features": "Sponge Cushion" }
        }
    },
    {
        id: 18,
        title: { zh: "血糖仪 家用检测套装", en: "Blood Glucose Monitor Kit" },
        price: 59.00,
        originalPrice: 85.00,
        category: "medical",
        subcategory: "inspection_tools",
        image: "https://m.media-amazon.com/images/I/51c9JQXG8jL._AC_SL1000_.jpg",
        description: { 
            zh: "家用血糖仪套装，包含血糖仪、试纸、采血笔，快速测量，语音播报，大屏显示。", 
            en: "Home blood glucose meter kit, includes meter, test strips, lancing device, fast measurement, voice broadcast." 
        },
        specs: {
            zh: { "测量范围": "1.1-33.3mmol/L", "采血量": "0.5μL", "显示": "大屏LCD", "记忆": "500组" },
            en: { "Range": "1.1-33.3mmol/L", "Blood": "0.5μL", "Display": "LCD", "Memory": "500 readings" }
        }
    },
    {
        id: 19,
        title: { zh: "轮椅坐垫 减压凝胶垫", en: "Wheelchair Cushion Gel Pad" },
        price: 55.00,
        originalPrice: 79.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://m.media-amazon.com/images/I/61bq3qsqlGL._AC_SL1000_.jpg",
        description: { 
            zh: "减压凝胶坐垫，预防褥疮，舒适透气，适用于各类轮椅，可水洗重复使用。", 
            en: "Pressure-relief gel cushion, prevents pressure sores, breathable, fits all wheelchairs, washable." 
        },
        specs: {
            zh: { "材质": "凝胶+记忆棉", "尺寸": "45x45cm", "特点": "减压透气可水洗" },
            en: { "Material": "Gel+Memory Foam", "Size": "45x45cm", "Features": "Pressure Relief, Washable" }
        }
    },
    {
        id: 20,
        title: { zh: "雾化器 家用压缩式", en: "Nebulizer Home Compressor" },
        price: 89.00,
        originalPrice: 129.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://m.media-amazon.com/images/I/41t8p9FqBML._AC_SL1000_.jpg",
        description: { 
            zh: "家用压缩式雾化器，静音设计，雾化细腻，适合儿童和成人使用，治疗呼吸道疾病。", 
            en: "Home compressor nebulizer, quiet design, fine mist, suitable for children and adults, treats respiratory diseases." 
        },
        specs: {
            zh: { "雾化率": "≥0.2mL/min", "噪音": "≤55dB", "功率": "140W", "特点": "静音、雾化细腻" },
            en: { "Rate": "≥0.2mL/min", "Noise": "≤55dB", "Power": "140W", "Features": "Quiet, Fine Mist" }
        }
    },
    // ========== 五金产品类 ==========
    {
        id: 21,
        title: { zh: "多功能工具钳 12合1", en: "Multi-tool Pliers 12-in-1" },
        price: 39.00,
        originalPrice: 55.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "12合1多功能工具钳，不锈钢材质，包含钳子、刀、螺丝刀、开瓶器等，便携实用。", 
            en: "12-in-1 multi-tool pliers, stainless steel, includes pliers, knife, screwdriver, bottle opener." 
        },
        specs: {
            zh: { "材质": "不锈钢", "工具数量": "12种", "展开长度": "16cm", "折叠长度": "10cm" },
            en: { "Material": "Stainless Steel", "Tools": "12 types", "Open Length": "16cm", "Folded": "10cm" }
        }
    },
    {
        id: 22,
        title: { zh: "家用工具套装 28件", en: "Home Tool Set 28 Pieces" },
        price: 79.00,
        originalPrice: 109.00,
        category: "hardware",
        subcategory: "tool_set",
        image: "https://m.media-amazon.com/images/I/61gY2M3MqWL._AC_SL1000_.jpg",
        description: { 
            zh: "家用工具套装，包含扳手、螺丝刀、锤子、卷尺等28件常用工具，专业收纳箱包装。", 
            en: "Home tool set with 28 pieces including wrenches, screwdrivers, hammer, tape measure, in storage box." 
        },
        specs: {
            zh: { "件数": "28件", "包含": "扳手、螺丝刀、锤子、卷尺等", "收纳": "塑料工具箱" },
            en: { "Pieces": "28", "Includes": "Wrench, Screwdriver, Hammer, Tape", "Storage": "Tool Box" }
        }
    },
    {
        id: 23,
        title: { zh: "电钻冲击钻 家用款", en: "Electric Impact Drill" },
        price: 89.00,
        originalPrice: 129.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "家用冲击钻，可调速正反转，LED照明，配多种钻头，适合木材、金属、混凝土。", 
            en: "Home impact drill, variable speed with reverse, LED light, multiple drill bits included." 
        },
        specs: {
            zh: { "功率": "550W", "转速": "0-3000rpm", "钻夹头": "13mm", "功能": "平钻/冲击钻" },
            en: { "Power": "550W", "Speed": "0-3000rpm", "Chuck": "13mm", "Modes": "Drilling/Impact" }
        }
    },
    {
        id: 24,
        title: { zh: "测量卷尺 5米", en: "Measuring Tape 5m" },
        price: 8.00,
        originalPrice: 12.00,
        category: "hardware",
        subcategory: "measuring",
        image: "https://m.media-amazon.com/images/I/51cTMyC6HCL._AC_SL1000_.jpg",
        description: { 
            zh: "专业测量卷尺，5米长度，双面刻度，自动回卷，锁扣设计，耐磨外壳。", 
            en: "Professional measuring tape, 5m length, dual scale, auto-retract, lock button, durable." 
        },
        specs: {
            zh: { "长度": "5米", "宽度": "19mm", "材质": "优质钢带", "精度": "±0.5mm" },
            en: { "Length": "5m", "Width": "19mm", "Material": "Steel Blade", "Accuracy": "±0.5mm" }
        }
    },
    {
        id: 25,
        title: { zh: "不锈钢扳手套装 12件", en: "Stainless Steel Wrench Set" },
        price: 55.00,
        originalPrice: 79.00,
        category: "hardware",
        subcategory: "wrench",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "开口扳手套装，12件套，铬钒钢材质，双向开口，规格齐全6-22mm。", 
            en: "Open-end wrench set, 12 pieces, chrome vanadium steel, sizes 6-22mm." 
        },
        specs: {
            zh: { "件数": "12件", "材质": "铬钒钢", "规格": "6-22mm", "表面处理": "镀铬" },
            en: { "Pieces": "12", "Material": "Chrome Vanadium", "Sizes": "6-22mm", "Finish": "Chrome" }
        }
    },
    {
        id: 26,
        title: { zh: "水平尺 3气泡", en: "Spirit Level 3 Bubble" },
        price: 19.00,
        originalPrice: 28.00,
        category: "hardware",
        subcategory: "measuring",
        image: "https://m.media-amazon.com/images/I/51cTMyC6HCL._AC_SL1000_.jpg",
        description: { 
            zh: "铝合金水平尺，3气泡设计（水平、垂直、45度），高精度，带磁吸功能。", 
            en: "Aluminum spirit level, 3 bubbles (horizontal, vertical, 45°), high precision, magnetic." 
        },
        specs: {
            zh: { "长度": "40cm", "材质": "铝合金", "气泡数": "3个", "精度": "0.5mm/m" },
            en: { "Length": "40cm", "Material": "Aluminum", "Bubbles": "3", "Accuracy": "0.5mm/m" }
        }
    },
    {
        id: 27,
        title: { zh: "充电式电钻 20V锂电", en: "Cordless Drill 20V Lithium" },
        price: 149.00,
        originalPrice: 199.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "20V锂电充电式电钻，双电池配置，无级调速，LED工作灯，轻便强劲。", 
            en: "20V lithium cordless drill, dual battery, variable speed, LED work light, lightweight powerful." 
        },
        specs: {
            zh: { "电压": "20V", "电池": "2x2.0Ah", "最大扭矩": "45Nm", "特点": "无级调速、LED灯" },
            en: { "Voltage": "20V", "Battery": "2x2.0Ah", "Max Torque": "45Nm", "Features": "Variable Speed, LED" }
        }
    },
    {
        id: 28,
        title: { zh: "螺丝刀套装 32件磁性", en: "Screwdriver Set 32pcs Magnetic" },
        price: 29.00,
        originalPrice: 45.00,
        category: "hardware",
        subcategory: "tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "32件磁性螺丝刀套装，CR-V钢材质，强力磁性头，专业收纳盒，适合各种螺丝拆卸。", 
            en: "32-piece magnetic screwdriver set, CR-V steel, strong magnetic tip, professional case." 
        },
        specs: {
            zh: { "件数": "32件", "材质": "铬钒钢", "特点": "磁性批头", "收纳": "塑料盒" },
            en: { "Pieces": "32", "Material": "Chrome Vanadium", "Features": "Magnetic Tips", "Storage": "Plastic Case" }
        }
    },
    {
        id: 29,
        title: { zh: "电锤冲击钻 专业级", en: "Electric Hammer Drill Pro" },
        price: 289.00,
        originalPrice: 399.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "专业级电锤冲击钻，强劲电机，三种模式（平钻、冲击钻、凿击），建筑工程首选。", 
            en: "Professional electric hammer drill, powerful motor, 3 modes (drill, hammer, chisel), construction preferred." 
        },
        specs: {
            zh: { "功率": "1100W", "冲击频率": "4000bpm", "功能": "平钻/冲击/凿击", "夹头": "SDS-plus" },
            en: { "Power": "1100W", "Impact": "4000bpm", "Modes": "Drill/Hammer/Chisel", "Chuck": "SDS-plus" }
        }
    },
    {
        id: 30,
        title: { zh: "安全防护工具套装", en: "Safety Protection Gear Set" },
        price: 45.00,
        originalPrice: 65.00,
        category: "hardware",
        subcategory: "safety",
        image: "https://m.media-amazon.com/images/I/51cTMyC6HCL._AC_SL1000_.jpg",
        description: { 
            zh: "DIY安全防护套装，包含护目镜、防噪耳罩、防护手套、口罩，全方位保护。", 
            en: "DIY safety protection kit includes safety goggles, ear protection, gloves, mask, full protection." 
        },
        specs: {
            zh: { "护目镜": "防雾防冲击", "耳罩": "降噪30dB", "手套": "防滑耐磨", "口罩": "N95防护" },
            en: { "Goggles": "Anti-fog", "Earmuffs": "30dB Noise Reduction", "Gloves": "Anti-slip", "Mask": "N95 Protection" }
        }
    },
    // ========== 额外产品 - 医疗辅助类 ==========
    {
        id: 31,
        title: { zh: "轮椅带坐便器", en: "Wheelchair with Commode" },
        price: 249.00,
        originalPrice: 329.00,
        category: "medical",
        subcategory: "wheelchair",
        image: "https://m.media-amazon.com/images/I/61bq3qsqlGL._AC_SL1000_.jpg",
        description: { 
            zh: "多功能轮椅带坐便器设计，可拆卸马桶，方便行动不便者使用，适合家庭和医院。", 
            en: "Multi-functional wheelchair with removable commode, convenient for disabled patients, suitable for home and hospital." 
        },
        specs: {
            zh: { "材质": "钢管", "承重": "120kg", "特点": "带坐便器、可折叠" },
            en: { "Material": "Steel", "Capacity": "120kg", "Features": "With Commode, Foldable" }
        }
    },
    {
        id: 32,
        title: { zh: "护理床 手动升降", en: "Manual Nursing Bed" },
        price: 599.00,
        originalPrice: 799.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://m.media-amazon.com/images/I/51c9JQXG8jL._AC_SL1000_.jpg",
        description: { 
            zh: "手动护理床，可调节背部、腿部高度，护栏设计，适合卧床病人和老人护理。", 
            en: "Manual nursing bed, adjustable back and leg rest, with guardrails, for patient and elderly care." 
        },
        specs: {
            zh: { "尺寸": "200x90cm", "承重": "150kg", "功能": "背部升降、腿部升降" },
            en: { "Size": "200x90cm", "Capacity": "150kg", "Features": "Back/Leg Adjustment" }
        }
    },
    {
        id: 33,
        title: { zh: "吸痰器 家用电动", en: "Suction Machine Home" },
        price: 189.00,
        originalPrice: 259.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://m.media-amazon.com/images/I/41t8p9FqBML._AC_SL1000_.jpg",
        description: { 
            zh: "家用电动吸痰器，负压可调，配备一次性吸痰管，适用于家庭护理和医疗机构。", 
            en: "Home electric suction machine, adjustable negative pressure, with disposable suction tubes." 
        },
        specs: {
            zh: { "功率": "120W", "负压": "0-0.08MPa", "噪音": "≤65dB" },
            en: { "Power": "120W", "Suction": "0-0.08MPa", "Noise": "≤65dB" }
        }
    },
    {
        id: 34,
        title: { zh: "制氧机 3L医用级", en: "Oxygen Concentrator 3L" },
        price: 899.00,
        originalPrice: 1199.00,
        category: "medical",
        subcategory: "equipment",
        image: "https://m.media-amazon.com/images/I/41t8p9FqBML._AC_SL1000_.jpg",
        description: { 
            zh: "3L医用制氧机，93%高氧浓度，雾化功能一体，适合家庭氧疗和呼吸疾病患者。", 
            en: "3L medical oxygen concentrator, 93% oxygen concentration, with nebulizer function." 
        },
        specs: {
            zh: { "流量": "3L/min", "氧浓度": "93%±3%", "功率": "350W" },
            en: { "Flow": "3L/min", "O2": "93%±3%", "Power": "350W" }
        }
    },
    {
        id: 35,
        title: { zh: "急救箱 家用套装", en: "First Aid Kit Home" },
        price: 49.00,
        originalPrice: 69.00,
        category: "medical",
        subcategory: "accessory",
        image: "https://m.media-amazon.com/images/I/51c9JQXG8jL._AC_SL1000_.jpg",
        description: { 
            zh: "家用急救箱，100件套，包含创可贴、消毒液、绷带等常见急救用品。", 
            en: "Home first aid kit, 100 pieces including band-aids, antiseptic, bandages, etc." 
        },
        specs: {
            zh: { "件数": "100件", "材质": "ABS塑料箱", "尺寸": "30x20x15cm" },
            en: { "Pieces": "100", "Material": "ABS Case", "Size": "30x20x15cm" }
        }
    },
    // ========== 额外产品 - 电子产品类 ==========
    {
        id: 36,
        title: { zh: "Nintendo Switch OLED 游戏机", en: "Nintendo Switch OLED" },
        price: 349.00,
        originalPrice: 429.00,
        category: "electronics",
        subcategory: "gaming",
        image: "https://m.media-amazon.com/images/I/61M4xG6e5qL._AC_SL1000_.jpg",
        description: { 
            zh: "Nintendo Switch OLED版，7英寸OLED屏幕，自带支架，适合家庭娱乐和便携游戏。", 
            en: "Nintendo Switch OLED, 7-inch OLED screen, built-in stand, for home entertainment and portable gaming." 
        },
        specs: {
            zh: { "屏幕": "7英寸OLED", "存储": "64GB", "续航": "4.5-9小时" },
            en: { "Display": "7 inch OLED", "Storage": "64GB", "Battery": "4.5-9 hours" }
        }
    },
    {
        id: 37,
        title: { zh: "PlayStation 5 光驱版", en: "PlayStation 5 Disc Edition" },
        price: 499.00,
        originalPrice: 599.00,
        category: "electronics",
        subcategory: "gaming",
        image: "https://m.media-amazon.com/images/I/61nOEfyMNlL._AC_SL1500_.jpg",
        description: { 
            zh: "Sony PlayStation 5游戏机，光驱版，4K分辨率，120fps高速游戏体验。", 
            en: "Sony PlayStation 5, disc edition, 4K resolution, 120fps gaming experience." 
        },
        specs: {
            zh: { "存储": "825GB SSD", "分辨率": "4K", "帧率": "120fps" },
            en: { "Storage": "825GB SSD", "Resolution": "4K", "Frame Rate": "120fps" }
        }
    },
    {
        id: 38,
        title: { zh: "智能手表 Apple Watch Series 9", en: "Apple Watch Series 9" },
        price: 399.00,
        originalPrice: 499.00,
        category: "electronics",
        subcategory: "wearable",
        image: "https://m.media-amazon.com/images/I/81gFy9L6rQL._AC_SL1500_.jpg",
        description: { 
            zh: "Apple Watch Series 9，45mm表壳，全天候视网膜显示屏，健康监测功能强大。", 
            en: "Apple Watch Series 9, 45mm case, always-on retina display, powerful health monitoring." 
        },
        specs: {
            zh: { "屏幕": "45mm", "防水": "50米", "电池": "18小时" },
            en: { "Display": "45mm", "Water": "50m", "Battery": "18 hours" }
        }
    },
    // ========== 额外产品 - 五金产品类 ==========
    {
        id: 39,
        title: { zh: "电锯 充电式 12V", en: "Cordless Chainsaw 12V" },
        price: 199.00,
        originalPrice: 279.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "12V充电式电锯，轻便强劲，适合修剪树枝和家庭DIY使用。", 
            en: "12V cordless chainsaw, lightweight and powerful, for tree trimming and home DIY." 
        },
        specs: {
            zh: { "电压": "12V", "锯链长度": "10cm", "电池": "2.0Ah" },
            en: { "Voltage": "12V", "Bar Length": "10cm", "Battery": "2.0Ah" }
        }
    },
    {
        id: 40,
        title: { zh: "角磨机 充电式 20V", en: "Cordless Angle Grinder 20V" },
        price: 169.00,
        originalPrice: 229.00,
        category: "hardware",
        subcategory: "power_tools",
        image: "https://m.media-amazon.com/images/I/61L7yCnKdgL._AC_SL1000_.jpg",
        description: { 
            zh: "20V充电式角磨机，100mm砂轮片，安全护罩，适合金属加工和石材切割。", 
            en: "20V cordless angle grinder, 100mm disc, safety guard, for metal and stone cutting." 
        },
        specs: {
            zh: { "电压": "20V", "砂轮直径": "100mm", "转速": "8500rpm" },
            en: { "Voltage": "20V", "Disc Diameter": "100mm", "Speed": "8500rpm" }
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
