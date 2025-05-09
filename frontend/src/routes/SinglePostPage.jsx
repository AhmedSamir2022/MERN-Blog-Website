import Image from "../components/Image"
import { Link } from "react-router-dom"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"
export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-4">
      {/* details */}
      <div className="flex gap-8">

        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl md:text-3xl xl:text-4xl  2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iure harum assumenda.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">samir kamona</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>

      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur architecto quidem praesentium quo, 
            maxime quos rerum excepturi, magnam obcaecati eos quisquam quaerat.
            Totam harum optio ab! Cumque, dolore accusamus?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">

          <h1 className="mb-4 text-sm font-medium">Auther</h1>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image src="userImg.jpeg" w="48" h="48" className="w-12 h-12 rounded-full object-cover"/>
              <Link className="text-blue-800">samir kamona</Link>
            </div>

            <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <div className="flex items-center gap-2">
              <Link>
                <Image src="facebook.svg"/>
              </Link>
              <Link>
                <Image src="instagram.svg"/>
              </Link>
            </div>

          </div>
          
          <PostMenuActions />

          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          
          <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="underline">All</Link>
          <Link to="/" className="underline">Web Design</Link>
          <Link to="/" className="underline">Development</Link>
          <Link to="/" className="underline">Databases</Link>
          <Link to="/" className="underline">Search Engines</Link>
          <Link to="/" className="underline">Marketing</Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>

          <Search />

        </div>
        
      </div>

      <Comments />

    </div>
  )
}
