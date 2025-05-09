
export default function PostMenuActions() {
  return (
    <div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
        
        <div className="flex items-center gap-2 py-2 cursor-pointer text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/></svg>
            <span className="">Save this post</span>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>
            <span className="">Delete this post</span>
        </div>

    </div>
  )
}
