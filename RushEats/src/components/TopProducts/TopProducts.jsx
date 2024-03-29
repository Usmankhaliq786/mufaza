import React from 'react';
import Img2 from "../../assets/printed1.jpeg";
import Img3 from "../../assets/shirts1.jpeg";
import Img4 from "../../assets/kids1.jpeg";
import { FaStar } from 'react-icons/fa6';
const ProductsData =[
  {
    id: 1,
    img : Img4,
    title : "Casual Wear",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  {
    id: 2,
    img : Img2,
    title : "Factory Outlet",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  {
    id: 3,
    img : Img3,
    title : "Women Shirts",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  
]
console.log(ProductsData );
const TopProducts = () => {
  return (
    <div>
      <div className='container'>
      <div className='text-left mb-10 '>
          <p data-aos ="fade-up" className='text-sm  text-secondary'>Top Rated Products for you </p>
          <h1 data-aos ="fade-up" className='text-3xl font-bold'>Best Products</h1>
          <p data-aos ="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officia, alias ipsum sint adipisci saepe inventore atque numquam debitis.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
        >
          {
            ProductsData.map((data,index)=>(
                <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 '>
                <div key={index}>
                  <img src={data.img} alt="" />
                  
                </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts