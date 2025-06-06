import Link from "next/link";

export default function NotFound() {
  return (<html lang="zh-Hant">
    <body>
      <div>
        <h1>404</h1>
        <h2>頁面未找到</h2>
        <p>很抱歉，您要找的文章似乎不存在，或者連結已失效。</p>
        <Link href="/blog">返回部落格列表頁</Link>
        <Link href="/">返回主頁</Link>
      </div>
    </body>
  </html>)
}