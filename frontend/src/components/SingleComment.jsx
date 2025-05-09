import Image from "./Image"
export default function SingleComment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">

      <div className="flex items-center gap-4">
      <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>

      <span className="font-medium">samir kamona</span>

      <span className="text-sm text-gray-500">2 days ago</span>
      </div>

      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias quos explicabo, ullam soluta placeat iusto nihil eius nulla quo ratione recusandae inventore labore obcaecati.</p>
      </div>
    </div>
  )
}
