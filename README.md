# 公司展示门户网站

这是一个现代化的、响应式的公司展示门户网站。完全使用 HTML、CSS 和 JavaScript 构建，适合部署到 GitHub Pages。

## 📋 网站包含

- **首页** - 英雄区域、特色介绍、统计数据
- **关于我们** - 公司故事、使命、价值观和团队介绍
- **服务** - 详细的服务清单（可按需自定义）
- **联系我们** - 联系表单和联系信息

## 🚀 快速开始

### 本地预览

1. 打开 `index.html` 文件，可以在浏览器中直接查看
2. 或者使用 Python 简单服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 然后访问 http://localhost:8000
   ```

### 自定义内容

编辑以下文件，将内容更改为您的公司信息：

1. **index.html** - 首页内容
2. **about.html** - 关于页面，更改：
   - 公司故事和使命
   - 价值观内容
   - 团队成员信息

3. **services.html** - 服务页面，更改服务卡片内容
4. **contact.html** - 联系信息和表单

5. **style.css** - 自定义颜色和样式
   - 修改 `:root` 中的颜色变量
   - `--primary-color`: 主要颜色
   - `--secondary-color`: 次要颜色
   - `--accent-color`: 强调颜色

## 🌐 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub 账户
2. 创建新仓库，命名为 `<username>.github.io` 或任何其他名称
3. 使用公开（Public）权限

### 步骤 2: 本地配置

```bash
# 初始化 git 仓库（如果还没有）
cd ~/my-company-website
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: company website"

# 添加远程仓库
git remote add origin https://github.com/<username>/<repository>.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧选择 **Pages**
4. 在 **Source** 部分选择：
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 **Save**

### 步骤 4: 访问您的网站

等待几分钟后，您的网站将在以下地址可用：
- 如果仓库名是 `<username>.github.io`: `https://<username>.github.io`
- 如果仓库名不同: `https://<username>.github.io/<repository>`

## 📱 响应式设计

网站已针对以下设备进行优化：
- 桌面电脑（1200px+）
- 平板电脑（768px - 1199px）
- 手机（480px - 767px）
- 小型设备（< 480px）

## 🎨 个性化建议

### 1. 更换颜色方案

在 `style.css` 中修改颜色变量：

```css
:root {
    --primary-color: #1e3a8a;      /* 改为您的品牌色 */
    --secondary-color: #3b82f6;
    --accent-color: #f59e0b;
}
```

### 2. 添加您的 Logo

在 `navbar` 部分替换"公司名称"为 `<img src="logo.png" alt="Company Logo">`

### 3. 更新元数据

更新每个 HTML 文件的：
- `<title>` 标签
- `<meta name="description">` 描述

### 4. 添加联系功能

目前联系表单只显示验证信息。要实现实际发送，可以集成：
- Formspree（免费表单后端）
- EmailJS（客户端邮件发送）
- 自己的后端服务

## 📊 文件结构

```
my-company-website/
├── index.html          # 首页
├── about.html          # 关于页面
├── services.html       # 服务页面
├── contact.html        # 联系页面
├── style.css          # 样式表
├── script.js          # JavaScript 交互
└── README.md          # 本文档
```

## 🔧 常见问题

**Q: 如何修改导航菜单？**
A: 在每个 HTML 文件的 `<nav class="navbar">` 部分修改链接。

**Q: 如何添加新页面？**
A: 复制现有页面（如 `about.html`），修改内容，在导航菜单中添加链接。

**Q: 联系表单可以发送邮件吗？**
A: 目前不能。需要集成后端服务。推荐使用 Formspree（https://formspree.io）

**Q: 如何添加图片？**
A: 在项目根目录创建 `images` 文件夹，在 HTML 中使用 `<img src="images/file.jpg">`

## 📚 进一步优化

- [ ] 添加 SEO 优化（meta tags, sitemap）
- [ ] 添加 Google Analytics 分析
- [ ] 集成邮件表单功能
- [ ] 添加博客部分
- [ ] 添加客户案例展示
- [ ] 添加视频介绍

## 📄 许可证

MIT License - 可自由使用和修改

## 💬 需要帮助？

如有任何问题，请查看：
- GitHub Pages 官方文档: https://pages.github.com
- HTML/CSS 教程: https://developer.mozilla.org/zh-CN/docs/Web/HTML
- JavaScript 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

---

**祝您网站发布顺利！** 🎉
