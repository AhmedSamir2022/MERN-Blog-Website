import Search from "./Search"
import { Link } from "react-router-dom"
export default function SideMenu() {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search />
        <h1 className="mb-4 mt-8 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    name="sort"
                    value="newest"
                />
                Newest

            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    name="sort"
                    value="popular"
                />
                Most Popular

            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    name="sort"
                    value="trending"
                />
                Trending

            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    name="sort"
                    value="oldest"
                />
                Oldest

            </label>
        </div>
        <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">

            <Link to="/posts" className="underline">
                All
            </Link>
            <Link to="/posts?cat=web-design" className="underline">
                Web Design
            </Link>
            <Link to="/posts?cat=development" className="underline">
                Development
            </Link>
            <Link to="/posts?cat=databases" className="underline">
                Databases
            </Link>
            <Link to="/posts?cat=seo" className="underline">
                Search Engines
            </Link>
            <Link to="/posts?cat=marketing" className="underline">
                Marketing
            </Link>
        </div>
    </div>
  )
}
