import Image from "./Image"
import { Link } from "react-router-dom"
export default function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis ad dolores.
            </Link>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link to="" className="text-blue-800">samir kamona</Link>
                <span>on</span>
                <Link to="" className="text-blue-800">Web Design</Link>
                <span>2 days ago</span>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos exercitationem, eveniet soluta iste maiores ut molestias 
                dolorem dolores magni perferendis ea quae mollitia, beatae 
                quibusdam cumque. Voluptas expedita impedit deserunt.
            </p>

            <Link to="/test"className="underline text-blue-800 text-sm">Read more</Link>

        </div>
    </div>
  )
}
