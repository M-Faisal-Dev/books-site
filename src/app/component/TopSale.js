"use client"
import Image from "next/image"
import cover from "../../../public/images/cover.jpeg"
import download from "../../../public/images/download.jpeg"
import harrypotter from "../../../public/images/harrypotter.jpeg"
import soul from "../../../public/images/soul.jpeg"
import million from "../../../public/images/million.jpeg"
import kindpng_622892 from "../../../public/images/kindpng_622892.png"
import { IoEyeOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { useState } from "react"



function TopSale() {
  const [hover, setHover] = useState(false)

  const handleHover = (()=>{
    setHover(true)
  })
  const handleOffHover = (()=>{
    setHover(false)
  })
  return (
    <div>
      <h1 className={`${hover == true ? "flex" : "hidden"}`} >hello this is faials</h1>
<section className="text-gray-600 py-8 body-font">
    <h1 className="text-gray-900 text-4xl text-center font-semibold">Top Rated</h1>
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap -m-4">
   
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} 
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/2 p-2 px-4 w-full hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out">
 <div className="shadow-sm shadow-gray-400 hover:shadow-red-400 text-gray-900 hover:text-red-700 p-2 rounded-md">
  <a className="block relative rounded overflow-hidden ">
    <Image
      width={350}
      height={340}
      alt="ecommerce"
      className="object-cover object-center m-auto w-52 h-80 block"
      src={harrypotter} // Make sure this variable holds the correct image source
    />
  </a>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
    <h3 className="text-xs tracking-widest title-font mb-1 text-gray-500">CATEGORY</h3>
 <p className="text-xs tracking-widest title-font mb-1 text-gray-500">magic/adventure</p>
    </div>
    <h2 className="title-font text-base text-center font-medium">Story of Harry Potter</h2>
    <div className="flex flex-row justify-between mt-2 items-center">
<div className="flex flex-row ">
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
  <div><IoStar /></div>
</div>

<div className="flex flex-row items-center space-x-2">
  <span className="text-xs tracking-wide">334</span>
<IoEyeOutline className="text-base"/>
</div>
    


    </div>

    


  </div>
  </div>
</div>




  
    </div>
  </div>
</section>

    </div>
  )
}

export default TopSale
