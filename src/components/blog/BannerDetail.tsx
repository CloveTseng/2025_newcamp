const BannerDetail = () => {
  return (
    <section className="lg:flex border border-secondary">
      <picture className="w-full lg:max-w-1/2">
        <source media="(min-width: 640px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/About%20Section.png?raw=true" />
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/About%20Section.png?raw=true" alt="about-section" />
      </picture>
      <div className="py-12 px-3 my-auto">
        <time dateTime="2024/10/21" className="font-medium mb-1">2024/10/21</time>
          <div className="flex gap-2 mb-2 items-center">
            <h3 className="text-2xl leading-9 font-medium text-primary ">前端開發 x 職涯成長</h3>
            <a className="badge">最新文章</a>
          </div>
          <h2 className="text-7-bold mb-2">自學前端不用怕：從零開始的三大關鍵</h2>
      </div>
    </section>
  )
}

export default BannerDetail