import { useState } from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"
export default function PostListPage() {

  const [open, setOPen] = useState(false)
  const handleSetOpen = () => {
    setOPen(!open)
  }

  return (
    <div className="">
      <h1>Development Blogs</h1>

      <button onClick={handleSetOpen} className="md:hidden bg-blue-800 text-white px-4 py-2 rounded-2xl mb-4">
        {
          open ? "close" : "Filter or Search"
        }
      </button>
      
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}
