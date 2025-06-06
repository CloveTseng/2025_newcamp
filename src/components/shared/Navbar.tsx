import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-center py-6">
          <li><Link href="/" className="text-7-bold">首頁</Link></li>
          <li><Link href="blog" className="text-7-bold ms-10">部落格</Link></li>
        </ul>
      </nav>
  )
}
export default Navbar