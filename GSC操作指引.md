# Google Search Console（GSC）提交 sitemap 操作指引

> 适用站点：https://delta-industry.com.cn（GitHub Pages 托管）
> 目的：让 Google 尽快抓取并收录站点全部 21 个页面，触发索引

---

## 一、为什么需要这一步

站点目前处于"未收录或极少收录"状态（Bing site: 查询零结果，Google 因网络环境无法直接验证）。网站文件本身没有任何问题——robots.txt、sitemap.xml（21 条 URL）、各页面 SEO 基础元素（Title / Description / Canonical / 结构化数据）都已就绪。只差**主动告知搜索引擎**这一步，GSC 提交 sitemap 是触发 Google 收录的最有效方式。

## 二、前置检查（约 2 分钟）

1. 确认有一个 **Google 账号**（没有则先在 accounts.google.com 注册）。
2. 确认能登录 **Google Search Console**：https://search.google.com/search-console
3. 仓库根目录已有 Google 验证文件 `google-site-verification=MQ7l_LAbMbtMs1H1qWb8vdFl1yXHqO3bNiH-QRpdJNs.html`（第一轮检查时确认存在），说明域名此前已做过 GSC 验证。若登录后能看到站点，直接跳到第三步。

## 三、操作步骤（约 5 分钟）

### 第 1 步：登录 GSC 并确认站点

1. 浏览器打开 https://search.google.com/search-console
2. 用 Google 账号登录
3. 左侧属性列表中查找 **delta-industry.com.cn**
   - ✅ 能找到 → 选中它，进入第 2 步
   - ❌ 找不到 → 点击顶部「添加资源」，选择 **"网域"**，输入 `delta-industry.com.cn`，按提示完成验证：
     - 验证方式选 **"HTML 文件"**，Google 会提供一个 `googleXXXX.html` 文件
     - 下载该文件，上传到 GitHub 仓库根目录（和现有验证文件放一起），提交推送
     - 等 GitHub Actions 部署完成后（约 1 分钟），回到 GSC 点「验证」

### 第 2 步：提交 sitemap

1. 进入站点后，点击左侧菜单 **「站点地图 / Sitemaps」**
2. 在「添加新的站点地图」输入框中填写：
   ```
   sitemap.xml
   ```
   （GSC 会自动补全为 https://delta-industry.com.cn/sitemap.xml）
3. 点击 **「提交」**

### 第 3 步：确认提交成功

提交后等待几分钟，页面会出现提交记录：
- 状态显示 **"成功"**（绿色），"发现的网址"数量应为 **21**（当前 sitemap 共 21 条 URL）
- 如果显示"无法获取"，等 10-30 分钟刷新再看，通常是 Google 首次抓取延迟

## 四、提交后的加速技巧（建议做）

### 1. 用「网址检查」逐页请求收录（重点页面）

1. 左侧菜单 **「网址检查 / URL Inspection」**
2. 输入 `https://delta-industry.com.cn/`，回车
3. 页面显示"网址已在 Google 上"或"网址不在 Google 上"后，点击右上角 **「请求编入索引 / Request Indexing」**
4. 对以下页面依次执行（每个页面提交间隔 1-2 分钟，避免过于频繁）：
   - `https://delta-industry.com.cn/`（首页）
   - `https://delta-industry.com.cn/services.html`（产品中心）
   - `https://delta-industry.com.cn/gylon.html`（主力产品）
   - `https://delta-industry.com.cn/klozure.html`
   - `https://delta-industry.com.cn/faq.html`

### 2. 同时提交 Bing（可选，成本低）

Bing 收录对中文站点也有价值，且支持从 GSC 一键导入：
1. 登录 https://www.bing.com/webmasters
2. 添加站点 → 选「从 GSC 导入」→ 授权后自动同步
3. 或在「站点地图」提交 `https://delta-industry.com.cn/sitemap.xml`

## 五、预期时间线（供参考）

| 阶段 | 预计时间 | 现象 |
|---|---|---|
| sitemap 状态变"成功" | 提交后几分钟~1 天 | GSC 显示 21 条 URL 被读取 |
| 首页收录 | 提交后 3 天~2 周 | 搜索 `site:delta-industry.com.cn` 出现结果 |
| 全部页面收录 | 2~6 周 | site: 查询覆盖大部分页面 |
| 关键词排名起效 | 4~8 周 | 品牌词/产品词开始有曝光 |

> 注意：以上为一般经验值，新域名收录速度取决于 Google 抓取配额，耐心等待即可；期间持续更新内容会加速。

## 六、常见问题

**Q1：提交后显示"无法获取 sitemap"？**
A：GitHub Pages 偶发抓取延迟，等 10-30 分钟后刷新即可；若持续失败，检查部署状态（GitHub Actions 是否成功）。

**Q2：需要把 PDF 资料也提交吗？**
A：不需要。PDF 已通过 robots.txt 开放并随页面链接暴露，Google 会自动发现；sitemap 只包含 HTML 页面即可。

**Q3：百度收录怎么做？**
A：仓库已有百度验证文件（baidu_verify_codeva-1jxAJJYnNh.html）。登录百度搜索资源平台（ziyuan.baidu.com）→ 站点管理 → 添加站点 → 验证 → 提交 sitemap（百度支持提交 sitemap.xml）。操作逻辑与 GSC 相同。

**Q4：GitHub Actions 部署状态在哪看？**
A：仓库 peteryuyue001/petertest1 → Actions 标签页，最近一次 run 显示绿色 ✓ 即为成功。

---

*本指引基于 2026-09-17 站点现状编写。sitemap 当前 21 条 URL，后续新增页面会自动包含（提交一次 sitemap 后，Google 会周期性重新读取）。*
