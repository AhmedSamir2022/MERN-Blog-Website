import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { IKContext, IKUpload } from "imagekitio-react"

const authenticator = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export default function WritePage() {

  const navigate = useNavigate()

  const { getToken } = useAuth()

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken()
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    },
    onSuccess: (res) => {
      toast.success("Post has been created")
      navigate(`/${res.data.slug}`)
    }
  })

  const [value, setValue] = useState("")
  const [cover, setCover] = useState("")
  const [progress, setProgress] = useState(0)

  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      img: cover.filePath || "",
      title: formData.get('title'),
      category: formData.get('category'),
      desc: formData.get('desc'),
      content: value
    }

    console.log(data)
    mutation.mutate(data)
  }

  const onError = (err) => {
    console.log(err)
    // toast.err("Image upload failed!")
  }

  const onSuccess = (res) => {
    console.log(res);
    setCover(res)
  }

  const onUploadProgress = (progress) => {
    console.log(progress)
    setProgress(Math.round((progress.loaded / progress.total) * 100))
  }

  return (
    <div className=" h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* <button className="text-sm w-max shadow-md p-2 rounded-xl text-gray-600">Add a cover image</button> */}

        <IKContext
          publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          authenticator={authenticator}
        >
          <IKUpload
            // fileName="test-upload.png"
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
          />

        </IKContext>

        <input className="text-4xl font-semibold bg-transparent  outline-none" type="text" placeholder="Story title" name="title" />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose a category</label>
          <select name="category" id="" className="p-2 rounded-xl  shadow-md">
            <option value="general">General</option>
            <option value="web-design">Lifestyle</option>
            <option value="development">Travel</option>
            <option value="databases">Health</option>
            <option value="search-engines">Education</option>
          </select>
        </div>

        <textarea className="p-4 shadow-md rounded-xl" name="desc" id="" placeholder="A Short Description" />

        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
          </div>
          <ReactQuill theme="snow" className="flex-1 shadow-md rounded-xl" value={value} onChange={setValue} />
        </div>

        <button
          disabled={mutation.isPending || (progress > 0 && progress < 100)}
          className="bg-blue-800 text-white mt-4 font-medium rounded-xl p-2 w-36 disabled:bg-blue-400 disabled:cursor-none">
          {mutation.isPending ? "Loading..." : "Send"}
        </button>

        {/* {"progress:" + progress} */}

        {mutation.isError && mutation.error.message}


      </form>
    </div>
  )
}
