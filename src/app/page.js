"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/AdminHome")
  }, [router])

  // Return something while redirecting
  return <div className='flex justify-center items-center h-screen'>
    <h1 className='text-3xl font-semibold animate-bounce'>Loading...</h1>
  </div>
}

export default page