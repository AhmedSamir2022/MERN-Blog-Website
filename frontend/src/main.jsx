import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from "./routes/HomePage"
import PostListPage from "./routes/PostListPage"
import WritePage from "./routes/WritePage"
import LoginPage from "./routes/LoginPage"
import RegisterPage from "./routes/RegisterPage"
import SinglePostPage from "./routes/SinglePostPage"
import { ToastContainer } from 'react-toastify';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLISHABLE_KEY){
  throw new Error("Missing Publishable key")
}

import { 
  RouterProvider,
  createBrowserRouter
 } from 'react-router-dom'
import MainLayout from './layoutes/MainLayout'
import { ClerkProvider } from '@clerk/clerk-react'

  const router = createBrowserRouter([
    {
      element:<MainLayout/>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/posts",
          element: <PostListPage />
        },
        {
          path: "/:slug",
          element: <SinglePostPage />
        },
        {
          path: "/write",
          element: <WritePage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
      ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position='bottom-right'/>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
)
