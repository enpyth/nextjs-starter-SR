# 🌐 网站被 Google 收录
## 以杨国福为例
## 🧭 目标  
让部署在 **Vercel** 的网站能够：  
1. 被 **Google 收录（Indexed）**  
2. 能通过关键词（如 “澳洲杨国福” 或 “YGF Australia”）出现在搜索结果中。

---

## 🧩 一、准备阶段（Before Submittin to google）

### 1. 确认网站可公开访问  
在浏览器隐身模式中访问：
```bash
https://your-domain.com
```
✅ 期望结果：网站能正常加载（HTTP 状态码 200）。  
❌ 若返回 404、401、403 → 检查 Vercel 部署设置（Production 环境需开放访问）。

---

### 2. 检查 `robots.txt`
文件路径：`/public/robots.txt`  
内容示例：
```txt
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```
说明：  
- `Allow: /` 表示允许搜索引擎抓取所有页面。  
- `Sitemap:` 告诉 Google 网站地图地址。

---

### 3. 确认没有 “noindex” 限制  
检查 `<head>` 或 HTTP Header 中是否有：
```html
<meta name="robots" content="noindex" />
```
如有此行 → 删除或改为：
```html
<meta name="robots" content="index, follow" />
```

---

## 🧠 二、添加 SEO Metadata

在 Next.js 中添加 **title** 与 **meta description**：

### ✅ App Router（`app/layout.tsx`）
```tsx
export const metadata = {
  title: 'YGF Australia | 澳洲杨国福麻辣烫官方网站',
  description:
    '欢迎访问 YGF Australia 澳洲杨国福麻辣烫官方网站，查看门店地址、菜单、最新优惠与联系方式。正宗麻辣烫，为您带来家的味道。',
  keywords: [
    'YGF Australia',
    '澳洲杨国福',
    '麻辣烫',
    'Australia Malatang',
    '澳洲美食',
  ],
};
```

### ✅ Pages Router 写法（`pages/index.tsx`）
```tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>YGF Australia | 澳洲杨国福麻辣烫官方网站</title>
        <meta
          name="description"
          content="欢迎访问 YGF Australia 澳洲杨国福麻辣烫官方网站，查看门店地址、菜单、最新优惠与联系方式。正宗麻辣烫，为您带来家的味道。"
        />
        <meta
          name="keywords"
          content="YGF Australia, 澳洲杨国福, 麻辣烫, Malatang Australia, 澳洲美食"
        />
      </Head>
      <main>...</main>
    </>
  );
}
```

---

## 🗺️ 三、生成 Sitemap

### 使用 `next-sitemap` 插件自动生成
安装：
```bash
npm install next-sitemap
```

配置文件：`next-sitemap.config.js`
```js
module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};
```

在 `package.json` 添加：
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

执行：
```bash
npm run build
```

生成结果：
```
/public/sitemap.xml
/public/robots.txt
```

---

## 📬 四、提交至 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console/)  
2. 点击 “添加属性 (Add Property)”  
3. 输入你的网站域名（完整 URL）  
4. 验证所有权（任选一法）：
   - ✅ 上传 HTML 文件至 `/public`
   - ✅ 在 `<head>` 添加 `<meta name="google-site-verification" ...>`  
5. 提交 Sitemap：
   ```
   https://your-domain.com/sitemap.xml
   ```

---

## 🔍 五、验证与监控

### 检查是否收录
在 Google 搜索框输入：
```bash
site:your-domain.com
```
若能看到结果 → ✅ 已被收录。  

若没有结果 → Google 还在爬取中，可在 Search Console 点击「**Request Indexing**」加速。

---

## 🧰 六、常见问题与解决办法

| 问题 | 原因 | 解决方案 |
|------|------|-----------|
| 网站无法访问 | Vercel 未部署 Production 版本 | 重新部署 Production 环境 |
| Search Console 验证失败 | 未添加 meta / 文件路径错误 | 放在 `/public` 根目录重新部署 |
| sitemap.xml 打不开 | 放置路径错误 | 确保在 `/public/` |
| 已 Indexed 但搜索不到 | 排名低，未触发关键词匹配 | 优化内容：标题/正文出现“澳洲杨国福” 等词 |
| meta 未生效 | 缓存或错误路径 | 检查 Next.js Router 类型，确保用对写法 |
| robots.txt 禁止抓取 | 误写 `Disallow: /` | 改为 `Allow: /` |
| 等太久仍无结果 | 外部链接少 | 从社交媒体、地图、外卖平台挂官网链接 |

---

## 🧭 七、如何判断成功

✅ Google Search Console 显示：
```
URL is on Google
Page is indexed
```

✅ 在搜索栏输入：
```
site:your-domain.com
```
能看到链接。  

✅ 几周后，用关键词（如“澳洲杨国福麻辣烫”）搜索，能出现目标网站标题与描述。



## ✅ 完成效果预期
- 网站被 Google 收录
- 首页标题和描述正确显示
- 几天至几周内出现在相关搜索结果中

---

