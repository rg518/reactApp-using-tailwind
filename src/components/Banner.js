import React, { useEffect, useState } from 'react'
import { AiOutlineHome ,AiOutlineDoubleRight} from "react-icons/ai";
import ImageGallery from "react-image-gallery";
import Slider from "../images/slider.png"
import Powered from "../images/powered.png"
import { GrAddCircle } from "react-icons/gr";
function Banner() {
    const images = [
        {
          original: Slider,
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: Slider,
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: Slider,
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
  return (
    <div className="p-3 bg-gray-100">
        <h1 className="ml-20 text-2xl text-black-700 flex"><AiOutlineHome /> <AiOutlineDoubleRight/> FlashCard <AiOutlineDoubleRight/> Mathematics <AiOutlineDoubleRight/> Relations and Functions</h1>
        <h1 className="ml-20 text-3xl text-blue-700 pt-2">Relations and Functions(Mathematics)</h1>

        <div className="space-x-4 mr-2 flex items-center justify-center">
          <a href="/" className="text-black p-2 no-underline hover:underline focus:underline active:underline">Study</a>
          <a href="/about" className="text-black p-2 no-underline hover:underline focus:underline active:underline">Quiz</a>
          <a href="/contact" className="text-black p-2 no-underline hover:underline focus:underline active:underline">Test</a>
          <a href="/contact" className="text-black p-2 no-underline hover:underline focus:underline active:underline">Game</a>
          <a href="/contact" className="text-black p-2 no-underline hover:underline focus:underline active:underline">Others</a>
        </div>
        <div className="w-lg flex items-center justify-center ">
        <ImageGallery items={images} infinite={false} showThumbnails={false} showIndex={true}/>
        </div>

        <div className="flex justify-between">
           <img src={Powered} className="" alt="Powered" />
           <button className="flex items-center text-3xl text-blue-800">
           <GrAddCircle className="mr-4" />
            Create FlashCard
           </button>
        </div>
    </div>
  )
}

export default Banner