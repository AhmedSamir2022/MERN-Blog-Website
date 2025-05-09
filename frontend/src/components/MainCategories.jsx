import { Link } from "react-router-dom"
import Image from "./Image"
export default function MainCategories() {
  return (
    <div className="hidden md:flex bg-gray-200 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
        {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="">
                All posts
            </Link>            
            <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
                Web Design
            </Link>        
            <Link to="/posts?cat=development" className="hover:bg-blue-50 rounded-full px-4 py-2">
                Development
            </Link>  
            <Link to="/posts?cat=databases" className="hover:bg-blue-50 rounded-full px-4 py-2">
                Databases
            </Link>  
            <Link to="/posts?cat=ewb-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
                Search Engins
            </Link>         

        </div>
        <span className="text-xl font-medium">|</span>
        {/* search */}
        <div className="bg-white rounded-full p-2 flex items-center gap-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="gray"
            viewBox="0 0 24 24"
        >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input type="text" placeholder="search a post..." className="bg-transparent"/>
        </div>
        
    </div>
  )
}
