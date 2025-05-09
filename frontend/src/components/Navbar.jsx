import { useState, useEffect } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
export default function Navbar() {

    const [open, setOpen] = useState(false);
    const handleopen = () => {
        setOpen(!open);
    }

    const {getToken} = useAuth()

    useEffect(()=>{
        getToken().then((token)=> console.log(token))
    },[])

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* logo */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold ">
                <Image src="logomoon.jpg" alt="logomoon logo" w={40} h={40} />
                <span>moon</span>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">

                <div className="cursor-pointer text-4xl" onClick={handleopen}>
                    {
                        open ? "✖" : "☰"
                    }
                </div>

                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out gap-8 font-medium text-lg
             + ${open ? "-right-0" : "-right-[100%]"}`} >
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <button className="bg-blue-800 px-4 py-2 rounded-3xl text-white">Login</button>
                </div>

            </div>
            {/* desktop menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Link to="/login">
                        <button className="bg-blue-800 px-4 py-2 rounded-3xl text-white">Login</button>
                    </Link>
                </SignedOut>
            </div>
        </div>
    )
}
