import HeroSection from "../../components/shared/HeroSection";
import Banner from "../../components/blog/Banner";
import blogList from "@/lib/blogList"
import SearchBox from "@/components/blog/SearchBox";
import Card from "@/components/blog/Card";
import Pagination from "@/components/blog/pagination";
import Footer from "@/components/shared/Footer";
import CTAFooter from "@/components/blog/CTAFooter";

export default function page() {

  return (<>
    <HeroSection title="BLOG" />
    <Banner />
    <section className="border-y border-secondary">
      <div className="py-16 lg:py-20 lg:w-[1320px] mx-auto">
          <SearchBox />
          <div className="grid lg:grid-cols-3">
            {blogList.map(({id, date, images, tag, title, content, isPopular}) => (
              <Card key={id} id={id} date={date} images={images} tag={tag} title={title} content={content} isPopular={isPopular} />
            ))}
          </div>
        <div className="flex justify-center">
        <Pagination />
        </div>
      </div>
    </section>
    <div className="flex justify-center">
      <CTAFooter />
    </div>
    <Footer />
  </>)
}