"use client"
import NavbarData from "../jsonfile/navjson.json";
import booklogo from "../../../public/images/kindpng_622892.png";
import slider1 from "../../../public/images/Screenshot_20240108_140728.png";
import slider2 from "../../../public/images/Screenshot_20240108_140855.png";
import slider3 from "../../../public/images/Screenshot_20240108_141010.png";
import slider4 from "../../../public/images/Screenshot_20240108_141109.png"
import slider5 from "../../../public/images/Screenshot_20240110_001648.png"

import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Navbar() {


  

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 500,
  };


  return (
    <div className="py-4 w-11/12">
      <div className="flex flex-row justify-between items-center m-auto">
        <div className="w-16 h-16">
          <Image src={booklogo} alt="logo" height={350} width={350} />
        </div>
        <div className="flex flex-row justify-center space-x-12">
          {NavbarData.map((category) => (
            <div key={category.id} className="">
              {category.name}
              <div className="hidden">
                {category.subcategories.map((items) => (
                  <div key={items.id}>{items.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-5">
          <div>
            <input className="border ring-1" type="text" name="" id="" />
          </div>
          <div className="w-7 h-8">
            <IoSearchOutline className="w-7 h-8" />
          </div>
        </div>
        <div>Login</div>
      </div>

      <div className="m-auto">
        <Slider {...settings} className="flex flex-row justify-center items-center">
          <div className="flex justify-center items-center">
            <Image className="m-auto" src={slider1} alt="slide1" height={350} width={350} />
          </div>
          <div>
            <Image className="m-auto" src={slider2} alt="slide2" height={350} width={350} />
          </div>
          <div>
            <Image className="m-auto" src={slider3} alt="slide3" height={350} width={350} />
          </div>
          <div>
            <Image className="m-auto" src={slider4} alt="slide4" height={350} width={350} />
          </div>
          <div>
            <Image className="m-auto" src={slider5} alt="slide5" height={350} width={350} />
          </div>
          <div className="slick-prev custom-button">Previous</div>
  <div className="slick-next custom-button">Next</div>
        </Slider>
      </div>
    </div>
  );
}

export default Navbar;
