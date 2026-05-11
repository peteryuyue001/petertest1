# GitHub Pages 404 错误修复步骤

## 问题
GitHub Actions部署时报错：`Resource not accessible by integration`

## 解决方案

### 步骤1：启用GitHub Pages
1. 访问你的GitHub仓库：https://github.com/peteryuyue001/petertest1
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions** 作为部署源
5. 点击 **Save**（保存）

### 步骤2：配置Actions权限
1. 在同一个Settings页面
2. 点击左侧菜单的 **Actions** → **General**
3. 滚动到 **Workflow permissions** 部分
4. 选择 **Read and write permissions**
5. 勾选 **Allow GitHub Actions to create and approve pull requests**
6. 点击 **Save**

### 步骤3：重新运行部署
1. 前往仓库的 **Actions** 标签页
2. 找到最近失败的workflow运行
3. 点击 **Re-run all jobs**（重新运行所有任务）

或者，进行一个新的提交来触发部署：

```bash
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

### 步骤4：验证部署
部署成功后，你的网站应该可以通过以下地址访问：
- https://peteryuyue001.github.io/petertest1/
- https://www.zhangxian.com（如果DNS已正确配置）

## 常见问题

### 如果仓库是私有的
- GitHub Pages需要GitHub Pro、Team或Enterprise计划才能用于私有仓库
- 解决方案：将仓库设为公开，或升级GitHub计划

### 如果自定义域名不工作
1. 检查CNAME记录是否正确配置
2. 在GitHub Pages设置中添加自定义域名
3. 等待DNS传播（可能需要几分钟到几小时）

## 检查清单
- [ ] 在仓库Settings中启用GitHub Pages
- [ ] 选择GitHub Actions作为部署源
- [ ] 配置Actions为Read and write permissions
- [ ] 重新运行失败的workflow或推送新提交
- [ ] 等待部署完成（通常1-2分钟）
- [ ] 访问网站验证

## 需要帮助？
如果按照以上步骤操作后仍有问题，请检查：
1. Actions标签页中的workflow运行日志
2. Pages设置页面的部署状态
3. 仓库是否为公开状态
