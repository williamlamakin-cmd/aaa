# 部署指南 - 全球优选平台

本指南将帮助您将全球优选平台部署到互联网上，让客户可以通过网址访问。

## 🌐 部署选项

### 方案1：使用免费托管平台（推荐新手）

#### 1. GitHub Pages（完全免费）

1. **注册GitHub账号**
   - 访问 https://github.com 注册账号

2. **创建新仓库**
   - 点击右上角 "+" → "New repository"
   - 仓库名称：`globalchoice-platform`（或您喜欢的名字）
   - 选择 "Public"
   - 点击 "Create repository"

3. **上传文件**
   - 点击 "uploading an existing file"
   - 将所有项目文件拖拽上传
   - 点击 "Commit changes"

4. **启用GitHub Pages**
   - 进入仓库页面
   - 点击 "Settings" → "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 或 "master"
   - 点击 "Save"

5. **访问网站**
   - 等待1-2分钟
   - 网站地址：`https://你的用户名.github.io/globalchoice-platform/`

#### 2. Netlify（免费且功能强大）

1. **注册Netlify**
   - 访问 https://app.netlify.com 注册

2. **连接GitHub**
   - 点击 "Add new site" → "Import an existing project"
   - 选择您的GitHub仓库

3. **配置构建设置**
   - Build command: 留空（静态网站无需构建）
   - Publish directory: 留空或设置为 `/`
   - 点击 "Deploy site"

4. **自定义域名**
   - 进入 Site settings → Domain management
   - 点击 "Change site name"
   - 输入您的网站名称（如：globalchoice.netlify.app）

#### 3. Vercel（快速部署）

1. **注册Vercel**
   - 访问 https://vercel.com 注册

2. **导入项目**
   - 点击 "Add New" → "Project"
   - 选择您的GitHub仓库
   - 点击 "Deploy"

3. **访问网站**
   - Vercel会自动分配一个域名
   - 可以在设置中自定义域名

### 方案2：使用云服务器（适合需要自定义域名）

#### 1. 腾讯云（CloudBase）

1. **登录腾讯云控制台**
   - 访问 https://console.cloud.tencent.com

2. **使用CloudBase部署**
   - 点击IDE集成 → "CloudBase"
   - 按照提示完成授权和部署

3. **访问网站**
   - CloudBase会提供一个临时域名
   - 可以绑定自己的自定义域名

#### 2. 阿里云OSS静态网站托管

1. **创建OSS Bucket**
   - 登录阿里云OSS控制台
   - 创建Bucket，选择"公共读"权限
   - 开启"静态网站托管"

2. **上传文件**
   - 使用OSS管理工具上传所有文件
   - 或使用OSS客户端工具批量上传

3. **绑定域名**
   - 在Bucket设置中绑定自定义域名

### 方案3：使用本地服务器测试

#### Windows使用Python启动服务器

```bash
# 进入项目目录
cd c:\Users\akinp\CodeBuddy\20260311122437

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器访问：`http://localhost:8000`

#### 使用Node.js启动服务器

```bash
# 安装http-server（只需安装一次）
npm install -g http-server

# 启动服务器
http-server -p 8000
```

## 🔧 自定义配置

### 1. 修改银行账户信息

编辑 `data.js` 文件中的 `bankAccounts` 对象：

```javascript
const bankAccounts = {
    HK: {
        bankName: "您的银行名称",
        accountNumber: "您的账户号码",
        accountName: "您的账户名称",
        swiftCode: "您的SWIFT代码"
    },
    // ... 其他国家的账户
};
```

### 2. 修改产品价格

编辑 `data.js` 文件中的 `products` 数组，修改 `price` 字段：

```javascript
{
    id: 1,
    title: "产品名称",
    price: 29.99,  // 修改这里的价格
    originalPrice: 59.99,
    // ...
}
```

### 3. 修改货币汇率

编辑 `data.js` 文件中的 `exchangeRates` 对象：

```javascript
const exchangeRates = {
    USD: 1,
    CNY: 7.2,
    HKD: 7.8,
    // 修改汇率
};
```

### 4. 自定义品牌

编辑 `index.html` 中的品牌名称：

```html
<div class="nav-brand">您的品牌名称</div>
```

### 5. 绑定自定义域名

#### 在Netlify绑定域名

1. 进入 Site settings → Domain management
2. 点击 "Add custom domain"
3. 输入您的域名（如：www.yourdomain.com）
4. 按照提示配置DNS记录

#### 在Vercel绑定域名

1. 进入 Project Settings → Domains
2. 点击 "Add Domain"
3. 输入您的域名
4. 配置DNS记录

## 📱 配置移动端访问

### 添加PWA支持（可选）

创建 `manifest.json` 文件：

```json
{
  "name": "全球优选",
  "short_name": "全球优选",
  "description": "优质商品，优惠价格",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1890ff",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

在 `index.html` 中添加：

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#1890ff">
```

## 🔒 安全建议

1. **HTTPS证书**
   - 大多数免费托管平台自动提供HTTPS
   - 如果使用自己的服务器，使用Let's Encrypt免费证书

2. **数据备份**
   - 定期备份 `localStorage` 数据
   - 考虑使用数据库替代localStorage

3. **支付安全**
   - 生产环境建议集成专业支付网关（Stripe、PayPal等）
   - 不要在客户端存储敏感信息

4. **访问控制**
   - 管理后台添加登录验证
   - 限制管理页面访问

## 📊 监控和分析

### 添加Google Analytics

1. 注册Google Analytics账号
2. 获取跟踪代码
3. 在 `index.html` 的 `<head>` 中添加：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 优化建议

1. **图片优化**
   - 使用WebP格式
   - 压缩图片大小
   - 使用CDN加速

2. **代码压缩**
   - 使用工具压缩CSS和JS文件
   - 启用Gzip压缩

3. **缓存策略**
   - 配置浏览器缓存
   - 使用Service Worker缓存资源

4. **SEO优化**
   - 添加meta标签
   - 优化页面标题和描述
   - 创建sitemap.xml

## 📞 技术支持

如遇到部署问题：

1. 检查浏览器控制台的错误信息
2. 确认所有文件都已上传
3. 检查文件路径是否正确
4. 查看托管平台的状态页面

## 🎯 快速部署检查清单

- [ ] 所有文件已准备齐全
- [ ] 银行账户信息已配置
- [ ] 产品价格已设置
- [ ] 测试本地运行正常
- [ ] 选择部署平台
- [ ] 上传文件到服务器
- [ ] 测试网站访问
- [ ] 配置自定义域名（可选）
- [ ] 启用HTTPS
- [ ] 添加分析代码（可选）

---

**祝您部署成功！** 🎉
