import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Footer from '../components/Footer'

const About = () => {
  const {assets} = useContext(CartContext)
  return (
    <div>

      <div>
        <img src={assets.bg01} alt="" />
      </div>

      <div className='mt-20 px-4 sm:px-8 md:px-12 lg:px-5 xl:px-24'>

         <div className='flex flex-col md:flex-row justify-center gap-20 '>

          <div className='w-full md:w-[40%] xl:w-[60%]'>
            <h2 className='text-2xl text-gray-800 font-bold mb-10'>Our Story</h2>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias neque aliquam dolores in ipsam tempore doloribus placeat, dolorem quo labore ratione officiis minus sint explicabo quae possimus quidem consequuntur! Eveniet tenetur veritatis quasi! Rem nihil est illo a architecto placeat iusto quidem nam expedita fugit perferendis suscipit, sit similique nulla quam tempore quae magni neque unde voluptate incidunt dolorum totam aut facere? Corrupti voluptas provident ipsam porro, quas eaque aspernatur molestias excepturi quo, nemo sint sit dolores ipsum nobis veniam facere, fuga aperiam ex tempora nam ea eligendi est. Ratione, perferendis veritatis eos quia, similique asperiores quisquam expedita quae quo eius deserunt tempore alias iste corporis cupiditate architecto mollitia rem voluptates repellat? Ipsam temporibus necessitatibus odio consectetur ullam veritatis obcaecati laudantium consequatur quibusdam sed, autem suscipit numquam similique iure non! Vero amet consectetur dicta non quam repudiandae omnis! Odit debitis libero similique, sit quod rem porro aut ratione adipisci cum, quae dolores natus temporibus numquam in accusamus unde dignissimos saepe. Quae, harum! Obcaecati, voluptatem! Quas accusamus voluptatibus, inventore maiores labore aliquid quidem nihil autem fugiat, iusto deleniti pariatur perspiciatis dolorem. Fugit, neque nemo quam, quae ex voluptatum eligendi inventore nobis deleniti, beatae quo ab odit vitae animi debitis commodi.
            </p>
          </div>
            {/* hover:scale-110 transition-all duration-1000 ease-in-out */}
          <div className='xl:w-[25%] lg:w-[30%] md:w-[35%] w-full aspect-[1/1] relative '>
            <div className='overflow-hidden'>
              <img className='w-full h-full object-cover z-20 hover:scale-110 transition-all duration-1000 ease-in-out ' src={assets.about01} alt="" />
            </div>
            <div className='absolute top-4 right-4 w-full aspect-[1/1] border-4 border-gray-400 bg-transparent -z-20'></div>
          </div>

         </div>

         <div className='flex flex-col md:flex-row justify-center gap-20 mt-40 mb-40'>
           
          <div className='xl:w-[25%] lg:w-[30%] md:w-[35%] w-full aspect-[1/1] relative '>
            <div className='overflow-hidden'>
              <img className='w-full h-full object-cover z-20 hover:scale-110 transition-all duration-1000 ease-in-out ' src={assets.about02} alt="" />
            </div>
            <div className='absolute top-4 left-4 w-full aspect-[1/1] border-4 border-gray-400 bg-transparent -z-20'></div>
          </div>

          <div className='w-full md:w-[40%] xl:w-[60%]'>
            <h2 className='text-2xl text-gray-800 font-bold mb-10'>Our Mission</h2>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias neque aliquam dolores in ipsam tempore doloribus placeat, dolorem quo labore ratione officiis minus sint explicabo quae possimus quidem consequuntur! Eveniet tenetur veritatis quasi! Rem nihil est illo a architecto placeat iusto quidem nam expedita fugit perferendis suscipit, sit similique nulla quam tempore quae magni neque unde voluptate incidunt dolorum totam aut facere? Corrupti voluptas provident ipsam porro, quas eaque aspernatur molestias excepturi quo, nemo sint sit dolores ipsum nobis veniam facere, fuga aperiam ex tempora nam ea eligendi est. Ratione, perferendis veritatis eos quia, similique asperiores quisquam expedita quae quo eius deserunt tempore alias iste corporis cupiditate architecto mollitia rem voluptates repellat? Ipsam temporibus necessitatibus odio consectetur ullam veritatis obcaecati laudantium consequatur quibusdam sed, autem suscipit numquam similique iure non! Vero amet consectetur dicta non quam repudiandae omnis! Odit debitis libero similique, sit quod rem porro aut ratione adipisci cum, quae dolores natus temporibus numquam in accusamus unde dignissimos saepe. Quae, harum! Obcaecati, voluptatem! Quas accusamus voluptatibus, inventore maiores labore aliquid quidem nihil autem fugiat, iusto deleniti pariatur perspiciatis dolorem. Fugit, neque nemo quam, quae ex voluptatum eligendi inventore nobis deleniti, beatae quo ab odit vitae animi debitis commodi.
            </p>
          </div>



         </div>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About