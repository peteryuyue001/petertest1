# Cloudflare DNS 配置详细教程

## 为什么需要配置DNS？

你的域名 `peteryuyue.cc.cd` 目前无法访问，是因为DNS记录还没有配置。DNS就像互联网的"电话簿"，它告诉浏览器你的域名对应哪个服务器。

---

## 第一步：登录Cloudflare

1. 打开浏览器，访问: https://dash.cloudflare.com
2. 使用你的邮箱和密码登录
3. 如果忘记密码，点击 "Forgot password" 重置

---

## 第二步：选择你的域名

登录后，你会看到域名列表：

1. 找到并点击 `cc.cd` 域名
2. 如果看不到这个域名，说明你可能没有将域名添加到Cloudflare，需要先添加域名

---

## 第三步：进入DNS设置页面

1. 在域名管理页面，找到顶部菜单栏
2. 点击 **DNS** 标签
3. 你会看到 "DNS管理" 或 "DNS Records" 页面

---

## 第四步：添加A记录

你需要添加 **4条A记录**，操作方法如下：

### 添加第一条A记录：

1. 点击 **"Add record"** 或 **"添加记录"** 按钮
2. 填写以下信息：
   - **Type (类型)**: 选择 `A`
   - **Name (名称)**: 输入 `peteryuyue`（不要包含.cc.cd）
   - **IPv4 address (IPv4地址)**: 输入 `185.199.108.153`
   - **TTL**: 选择 `Auto` 或保持默认
   - **Proxy status (代理状态)**: 
     * **重要**: 点击橙色云朵图标，使其变成**灰色云朵**
     * 灰色表示 "DNS only"（仅DNS）
     * 这一步很关键，否则GitHub无法验证域名
3. 点击 **Save** 或 **保存**

### 添加第二条A记录：

重复上述步骤，但 IPv4 地址改为：`185.199.109.153`
- Type: `A`
- Name: `peteryuyue`
- IPv4 address: `185.199.109.153`
- 橙色云朵改为灰色

### 添加第三条A记录：

- Type: `A`
- Name: `peteryuyue`
- IPv4 address: `185.199.110.153`
- 橙色云朵改为灰色

### 添加第四条A记录：

- Type: `A`
- Name: `peteryuyue`
- IPv4 address: `185.199.111.153`
- 橙色云朵改为灰色

---

## 第五步：验证DNS配置

添加完4条记录后，你的DNS记录列表应该显示：

```
peteryuyue.cc.cd    A    185.199.108.153    Auto    仅DNS
peteryuyue.cc.cd    A    185.199.109.153    Auto    仅DNS
peteryuyue.cc.cd    A    185.199.110.153    Auto    仅DNS
peteryuyue.cc.cd    A    185.199.111.153    Auto    仅DNS
```

确保所有记录的代理状态都是**灰色云朵**（仅DNS）。

---

## 第六步：配置GitHub Pages

1. 访问你的GitHub仓库: https://github.com/peteryuyue001/petertest1
2. 点击 **Settings**（设置）
3. 在左侧菜单点击 **Pages**
4. 在 "Custom domain" 输入框中输入: `peteryuyue.cc.cd`
5. 点击 **Save**
6. 等待几秒钟，GitHub会验证DNS配置
7. 验证成功后，勾选 **Enforce HTTPS**

---

## 第七步：等待DNS生效

DNS记录配置后，需要一定时间才能在全球生效：
- **最快**: 几分钟
- **通常**: 10-30分钟  
- **最长**: 可能需要2-24小时

### 如何检查DNS是否生效？

打开终端（Terminal），运行以下命令：

```bash
nslookup peteryuyue.cc.cd
```

如果看到类似下面的输出，说明DNS已生效：
```
Server:		8.8.8.8
Address:	8.8.8.8#53

Non-authoritative answer:
Name:	peteryuyue.cc.cd
Address: 185.199.108.153
Name:	peteryuyue.cc.cd
Address: 185.199.109.153
...
```

如果看到 "Can't find" 或 "No answer"，说明DNS还未生效，需要继续等待。

---

## 第八步：访问你的网站

DNS生效后，在浏览器访问: **https://peteryuyue.cc.cd**

如果看到你的网站，恭喜配置成功！🎉

---

## 常见问题排查

### 问题1: Cloudflare中找不到cc.cd域名

**原因**: 域名可能还没有添加到Cloudflare

**解决方案**:
1. 在Cloudflare主页点击 "Add a Site"
2. 输入 `cc.cd`
3. 选择免费计划
4. 按照指引修改域名注册商的Name Servers
5. 等待域名激活后，再按本教程配置DNS

### 问题2: 无法添加A记录，提示"子域名已存在"

**原因**: 可能已经有其他DNS记录使用了 `peteryuyue` 这个名称

**解决方案**:
1. 检查是否已经有 `peteryuyue` 的CNAME或A记录
2. 删除冲突的记录
3. 重新添加A记录

### 问题3: DNS已生效，但网站还是无法访问

**检查清单**:
- [ ] Cloudflare中A记录的代理状态是否为灰色（仅DNS）？
- [ ] GitHub Pages设置中是否正确配置了自定义域名？
- [ ] 仓库中是否有CNAME文件，内容为 `peteryuyue.cc.cd`？
- [ ] GitHub Pages是否显示 "DNS check successful"？

### 问题4: 显示"连接不安全"警告

**原因**: HTTPS证书还未生成

**解决方案**:
1. 等待10-20分钟，GitHub需要时间生成SSL证书
2. 确保在GitHub Pages设置中勾选了 "Enforce HTTPS"
3. 如果等待超过1小时仍未生效，尝试取消勾选HTTPS，保存，然后重新勾选

---

## 需要帮助？

如果按照本教程操作后仍有问题，请提供以下信息：

1. 在哪一步遇到了困难？
2. Cloudflare DNS记录截图
3. GitHub Pages设置页面截图
4. 运行 `nslookup peteryuyue.cc.cd` 的完整输出

---

## 快速参考

**Cloudflare DNS记录配置**:
```
4条A记录，名称都是 peteryuyue：
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
全部设置为仅DNS（灰色云朵）
```

**GitHub Pages配置**:
```
Custom domain: peteryuyue.cc.cd
Enforce HTTPS: ✓ (勾选)
```

**CNAME文件**: 已自动创建，无需手动修改
