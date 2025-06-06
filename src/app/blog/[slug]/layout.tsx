import BannerDetail from "@/components/blog/BannerDetail";

export const metadata = {
  title: 'blog 文章頁',
  description: '管理您的應用程式數據',
};

export default function BlogDetailLayout({ children }: { children: React.ReactNode}) {
  return(<>
    <BannerDetail />
    {children}
  </>)
}