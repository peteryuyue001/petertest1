# 自定义域名配置指南

## 域名: peteryuyue.cc.cd

### 步骤 1: 在 Cloudflare 配置 DNS 记录

登录 Cloudflare 控制台，为域名 `peteryuyue.cc.cd` 添加以下 DNS 记录：

#### 方案 A: 使用 A 记录（推荐）
添加以下 4 条 A 记录：
```
类型: A
名称: @（或 peteryuyue.cc.cd）
内容: 185.199.108.153
TTL: Auto
代理状态: 仅限 DNS（关闭橙色云朵）

类型: A
名称: @
内容: 185.199.109.153
TTL: Auto
代理状态: 仅限 DNS

类型: A
名称: @
内容: 185.199.110.153
TTL: Auto
代理状态: 仅限 DNS

类型: A
名称: @
内容: 185.199.111.153
TTL: Auto
代理状态: 仅限 DNS
```

#### 方案 B: 使用 CNAME 记录（如果是子域名）
如果要使用 www 子域名：
```
类型: CNAME
名称: www
内容: peteryuyue001.github.io
TTL: Auto
代理状态: 仅限 DNS
```

### 步骤 2: 在 GitHub 仓库配置自定义域名

1. 访问 GitHub 仓库: https://github.com/peteryuyue001/petertest1
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 "Custom domain" 部分输入: `peteryuyue.cc.cd`
5. 点击 **Save** (保存)
6. 等待 DNS 检查完成（可能需要几分钟）
7. 勾选 **Enforce HTTPS** (强制使用 HTTPS)

### 步骤 3: 验证配置

DNS 记录生效可能需要几分钟到几小时。你可以使用以下命令检查：

```bash
# 检查 DNS 解析
dig peteryuyue.cc.cd

# 或使用 nslookup
nslookup peteryuyue.cc.cd
```

### 步骤 4: 访问网站

DNS 生效后，访问: https://peteryuyue.cc.cd

## 注意事项

1. **关闭 Cloudflare 代理**: 在配置 DNS 记录时，确保橙色云朵图标是灰色的（仅限 DNS），否则可能导致 GitHub Pages 无法验证域名
2. **HTTPS 证书**: GitHub Pages 会自动为自定义域名提供免费的 HTTPS 证书，但可能需要等待几分钟才能生效
3. **CNAME 文件**: 已在仓库根目录创建 CNAME 文件，内容为 `peteryuyue.cc.cd`，每次部署都会保留

## 常见问题

### 问题 1: 域名无法访问
- 检查 DNS 记录是否正确配置
- 确认 DNS 是否已生效（使用 dig 或 nslookup）
- 检查 GitHub Pages 设置中是否正确配置了自定义域名

### 问题 2: HTTPS 不可用
- 等待几分钟，GitHub 需要时间生成 SSL 证书
- 确保在 GitHub Pages 设置中勾选了 "Enforce HTTPS"

### 问题 3: 显示其他人的网站
- 确认 CNAME 文件内容正确
- 检查 GitHub Pages 设置中的自定义域名配置
