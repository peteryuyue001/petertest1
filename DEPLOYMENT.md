# GitHub Pages 部署完整指南

## 前置条件

1. **GitHub 账户** - https://github.com
2. **Git 工具** - https://git-scm.com/downloads
3. **代码编辑器** - VS Code（推荐）

## 详细部署步骤

### 第 1 步：准备 GitHub 仓库

#### 选项 A：创建用户主页（<username>.github.io）

1. 登录 GitHub
2. 创建新仓库，命名为 `<username>.github.io`
   - 将 `<username>` 替换为你的 GitHub 用户名
   - 例如：`john-doe.github.io`
3. 勾选 "Add a README file"
4. 创建仓库

#### 选项 B：创建项目仓库（任意名称）

1. 登录 GitHub
2. 创建新仓库，输入任意名称
   - 例如：`my-company-website`
3. 勾选 "Add a README file"
4. 创建仓库

### 第 2 步：配置本地 Git

打开终端（Terminal）或 Git Bash，执行以下命令：

```bash
# 进入项目目录
cd ~/my-company-website

# 初始化 git 仓库（如果还没有初始化）
git init

# 配置 git 用户信息
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# 查看当前状态
git status
```

### 第 3 步：提交文件到本地 Git

```bash
# 添加所有文件
git add .

# 创建首次提交
git commit -m "Initial commit: company website"

# 查看日志
git log
```

### 第 4 步：连接到远程仓库

```bash
# 添加远程仓库
# 如果是 <username>.github.io 仓库：
git remote add origin https://github.com/<username>/<username>.github.io.git

# 如果是其他名称的仓库：
git remote add origin https://github.com/<username>/my-company-website.git

# 将本地分支改名为 main（如果需要）
git branch -M main

# 验证远程仓库是否添加成功
git remote -v
```

### 第 5 步：推送到 GitHub

```bash
# 首次推送（设置上游分支）
git push -u origin main

# 后续推送
git push
```

**注意**：如果遇到身份验证错误，可以：
1. 使用 GitHub Personal Access Token（推荐）
2. 配置 SSH 密钥

### 第 6 步：启用 GitHub Pages

#### 如果使用 <username>.github.io 仓库：

1. 进入仓库主页
2. 点击 **Settings**（右上角）
3. 左侧菜单找到 **Pages**
4. 确保 **Branch** 设置为 `main`，**Folder** 设置为 `/ (root)`
5. 点击 **Save**
6. 等待 1-2 分钟，刷新页面
7. 你的网站将在 `https://<username>.github.io` 上线

#### 如果使用其他名称的仓库：

1. 进入仓库主页
2. 点击 **Settings**（右上角）
3. 左侧菜单找到 **Pages**
4. **Source** 部分选择 `main` 分支
5. **Folder** 选择 `/ (root)`
6. 点击 **Save**
7. 你的网站将在 `https://<username>.github.io/<repository-name>` 上线

### 第 7 步：验证部署

1. 访问部署地址
2. 检查所有页面是否正常加载
3. 测试导航和交互功能

## 常见问题解决

### 问题 1：Git 命令找不到

**解决**：安装 Git - https://git-scm.com/downloads

### 问题 2：身份验证失败

**解决**：使用 Personal Access Token
1. GitHub 设置 → Developer settings → Personal access tokens
2. 创建新 token，勾选 `repo` 权限
3. 复制 token
4. 推送时使用 token 作为密码

### 问题 3：GitHub Pages 没有上线

**解决**：
1. 检查分支名称是否正确（应为 `main` 或 `master`）
2. 检查仓库是否为公开（Public）
3. 等待 1-2 分钟再刷新
4. 检查 Pages 设置中的 "Branch" 是否正确

### 问题 4：网站显示 404

**解决**：
1. 检查文件是否已上传到 GitHub
2. 确认 index.html 在根目录
3. 检查仓库名称（如果不是 .github.io，URL 中需要包含仓库名）

## 更新网站内容

部署后，如果需要修改网站内容：

```bash
# 1. 编辑文件
# 修改 HTML、CSS、JS 文件

# 2. 提交更改
git add .
git commit -m "Update: 修改内容的描述"

# 3. 推送到 GitHub
git push

# 更改会在 1-2 分钟内反映在网站上
```

## 自定义域名（可选）

如果拥有自己的域名：

1. 在 GitHub 仓库设置中找到 **Pages**
2. 在 "Custom domain" 输入你的域名
3. 按照 GitHub 的说明配置 DNS

## 集成表单功能（可选）

联系表单可以集成以下服务：

### 使用 Formspree

1. 访问 https://formspree.io
2. 注册并登录
3. 创建新表单，获取 Action URL
4. 修改 `contact.html` 中的表单：

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- 表单字段 -->
</form>
```

### 使用 EmailJS

1. 访问 https://www.emailjs.com
2. 注册并设置邮箱服务
3. 在 `script.js` 中集成 EmailJS SDK

## 性能优化建议

- [ ] 压缩图片
- [ ] 最小化 CSS/JavaScript
- [ ] 启用 Gzip 压缩
- [ ] 使用 CDN

## 安全建议

- [ ] 使用 HTTPS（GitHub Pages 默认支持）
- [ ] 定期更新内容
- [ ] 监控谷歌 Search Console
- [ ] 定期备份代码

## 有用链接

- GitHub Pages 文档: https://pages.github.com
- Git 教程: https://git-scm.com/book/zh/v2
- Markdown 语法: https://github.github.com/gfm/

---

**部署完成后，告诉朋友们访问你的网站吧！** 🚀
