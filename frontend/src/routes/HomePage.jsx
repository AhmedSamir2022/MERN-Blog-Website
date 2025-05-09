import { Link } from "react-router-dom";
import Image from "../components/Image";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

export default function HomePage() {
  
  return (
    <div className="mt-4 flex flex-col gap4">
      {/*-------------------------------*/}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>&bull;</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      {/*-------------------------------*/}
      
      <div className="flex items-center justify-between">
        <div className="">
        <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis, alias porro eius saepe nihil</p>
        </div>
        {/* write your story button */}
        <div>
          <Link to="/write" className="relative hidden md:block">
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              // className="text-lg tracking-widest animate-spin animatedButton"
              className="text-lg tracking-widest"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
            </svg>
            
            <Image src="writebutton.jpg" alt="writebutton img" w={90} h={90} className="rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"/>
          
          </Link>
        </div>
      </div>

      <MainCategories />

      <FeaturedPosts />

      <div className="my-8 ">
        <h1 className="my-8 text-2xl text-gray-600">
          Recent Posts
        </h1>

        <PostList />

      </div>
      
    </div>
  )
}
