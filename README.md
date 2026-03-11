# 全球优选 - 跨国代购平台

一个完整的跨国代购（Dropshipping）网购平台，允许客户直接下单，平台从1688等优质供应商采购产品并赚取差价。

## 🌟 功能特点

### 客户端功能
- **产品浏览**：浏览精选产品，支持按分类和价格筛选
- **产品详情**：查看详细产品信息、规格、供应商信息
- **购物车**：添加商品、修改数量、删除商品
- **订单管理**：查看历史订单、订单状态
- **订单追踪**：实时追踪订单流程（从下单到送达）
- **多语言支持**：支持中文、英文、日文、韩文
- **多货币支持**：支持USD、CNY、EUR、JPY、KRW
- **响应式设计**：完美适配桌面和移动设备

### 管理后台功能
- **仪表盘**：查看订单数、营收、待处理订单等统计数据
- **产品管理**：添加、编辑、删除产品
- **订单管理**：查看订单详情、更新订单状态
- **供应商管理**：管理供应商信息，查看关联产品
- **数据分析**：销售分布、分类占比等数据分析

### 核心特性
- **透明化流程**：客户可以查看完整的订单处理流程
- **供应商信息展示**：展示供应商评分、成交订单等信息
- **实时价格**：显示原价和现价，节省百分比
- **质量保证**：精选优质供应商，严格品控
- **全球配送**：支持200+国家和地区

## 📁 项目结构

```
dropshipping-platform/
├── index.html          # 前台主页面
├── admin.html          # 管理后台页面
├── styles.css          # 样式文件
├── data.js            # 产品数据、汇率、订单状态
├── translations.js    # 多语言翻译
├── app.js             # 前台JavaScript逻辑
├── admin.js           # 后台JavaScript逻辑
└── README.md          # 项目说明文档
```

## 🚀 快速开始

### 方法1：直接打开

1. 下载所有文件到同一目录
2. 双击 `index.html` 打开前台页面
3. 访问 `admin.html` 打开管理后台

### 方法2：使用本地服务器

使用Python启动本地服务器：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器访问：
- 前台：http://localhost:8000/index.html
- 后台：http://localhost:8000/admin.html

使用Node.js启动本地服务器：

```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

## 📱 使用指南

### 客户端使用

1. **浏览产品**
   - 访问首页查看平台介绍
   - 点击"产品"浏览商品
   - 使用筛选器按分类或价格筛选

2. **购买流程**
   - 点击商品卡片查看详情
   - 选择数量，点击"加入购物车"
   - 进入购物车页面，点击"去结算"
   - 填写收货信息，选择币种
   - 提交订单

3. **订单追踪**
   - 点击"我的订单"查看历史订单
   - 点击"订单追踪"或使用搜索功能
   - 查看订单的完整处理流程

4. **多语言切换**
   - 在导航栏选择语言（中文/English/日本語/한국어）
   - 页面内容会自动切换语言

### 管理后台使用

1. **登录后台**
   - 访问 `admin.html`
   - 点击"仪表盘"查看统计数据

2. **产品管理**
   - 点击"产品管理"
   - 点击"+ 添加产品"添加新商品
   - 点击"编辑"或"删除"管理现有产品

3. **订单管理**
   - 点击"订单管理"
   - 查看所有订单列表
   - 点击"详情"查看订单详情
   - 点击"更新状态"更改订单状态

4. **供应商管理**
   - 点击"供应商管理"
   - 查看所有供应商信息
   - 点击"查看产品"查看供应商商品
   - 点击"访问平台"跳转到供应商页面

5. **数据分析**
   - 点击"数据分析"
   - 查看销售分布图表
   - 查看分类销售占比

## 🔧 配置说明

### 修改产品数据

编辑 `data.js` 文件中的 `products` 数组：

```javascript
const products = [
    {
        id: 1,
        title: "产品名称",
        price: 29.99,
        originalPrice: 59.99,
        category: "electronics",
        supplier: "1688",
        supplierId: "1688_SUP001",
        image: "产品图片URL",
        description: "产品描述",
        specs: {
            "规格1": "值1",
            "规格2": "值2"
        },
        supplierRating: 4.8,
        supplierOrders: 50000,
        supplierName: "供应商名称"
    }
];
```

### 添加新语言

编辑 `translations.js` 文件，添加新的语言对象：

```javascript
const translations = {
    // 现有语言...
    de: {
        hero_title: "德语标题",
        hero_subtitle: "德语副标题",
        // 添加其他翻译...
    }
};
```

然后更新 `translations.js` 中的语言选择器：

```javascript
<select id="language-select" onchange="changeLanguage()">
    <option value="zh">中文</option>
    <option value="en">English</option>
    <option value="de">Deutsch</option>  <!-- 添加德语 -->
</select>
```

### 修改货币汇率

编辑 `data.js` 文件中的 `exchangeRates` 对象：

```javascript
const exchangeRates = {
    USD: 1,
    CNY: 7.2,
    EUR: 0.92,
    JPY: 149.5,
    KRW: 1320
};
```

## 🎨 自定义样式

编辑 `styles.css` 文件来自定义网站样式。主要CSS变量：

```css
:root {
    --primary-color: #1890ff;      /* 主色调 */
    --secondary-color: #52c41a;    /* 次要色调 */
    --text-color: #333;            /* 文字颜色 */
    --bg-color: #f5f5f5;            /* 背景色 */
    --white: #ffffff;              /* 白色 */
    --border-color: #e8e8e8;       /* 边框颜色 */
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  /* 阴影 */
}
```

## 📊 数据存储

当前版本使用 `localStorage` 存储数据：

- 购物车数据：`localStorage.getItem('cart')`
- 订单数据：`localStorage.getItem('orders')`
- 语言设置：`localStorage.getItem('language')`

如需持久化存储，建议集成后端API或数据库。

## 🔌 集成1688 API

如需实际集成1688 API，需要在后端实现：

1. **1688开放平台**：申请API密钥
2. **产品搜索API**：实现产品搜索和获取
3. **订单API**：实现自动下单功能
4. **物流追踪API**：获取物流信息

示例集成流程：

```javascript
// 伪代码示例
async function searchFrom1688(keyword) {
    const response = await fetch(`https://open.1688.com/api/product/search?keyword=${keyword}`);
    const data = await response.json();
    return data.products;
}

async function placeOrderOn1688(productId, quantity) {
    const response = await fetch(`https://open.1688.com/api/order/create`, {
        method: 'POST',
        body: JSON.stringify({ productId, quantity })
    });
    return response.json();
}
```

## 🚀 部署建议

### 静态网站托管

可以部署到以下平台：
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### 后端集成

生产环境建议集成：
1. **数据库**：MySQL、PostgreSQL、MongoDB
2. **后端框架**：Node.js (Express)、Python (Django/Flask)
3. **支付网关**：Stripe、PayPal、支付宝、微信支付
4. **供应商API**：1688 API、Alibaba API
5. **物流API**：DHL、FedEx、UPS API

## 📝 订单流程

```
1. 客户下单 → 2. 订单处理 → 3. 1688采购 → 4. 质检 → 5. 国际发货 → 6. 配送 → 7. 送达
```

订单状态：
- `pending`：待处理
- `processing`：处理中
- `purchased`：已采购
- `shipped`：已发货
- `delivered`：已送达
- `cancelled`：已取消

## 🤝 技术支持

如有问题或建议，请通过以下方式联系：
- Email: support@globalchoice.com
- 电话: +86 123-4567-8900

## 📄 许可证

MIT License

## 🙏 致谢

感谢以下开源项目和资源：
- 原型设计灵感来源于现代电商平台
- 图标使用FontAwesome风格
- 使用placeholder.com提供图片占位符

---

**全球优选** - 您的优质跨国代购平台
