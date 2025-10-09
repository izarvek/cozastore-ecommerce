import React, { useState } from 'react'
import { icons } from '../assets/assets'
import { Link } from 'react-router-dom'


const Card = ({id , name , price , images}) => {

  const [like , setLike] = useState(false)
  return (
    <div >
       <Link to={`/product/${id}`} className='mb-4  ' >
         <img  className="transform hover:scale-105  transition-transform duration-300 rounded-md"  src={images} alt="" />
       </Link>
       <div className='flex justify-between mt-4'>
          <p className='text-gray-600 italic font-sans '>{name}</p>
          <img onClick={() => setLike(prev => !prev)} className='w-5 h-5 'src={like ? icons.iconHeart02 : icons.iconHeart01} alt="" />
       </div>
       <p className='text-gray-900'>${price}</p>
    </div>
  )
}

export default Card;