'use client'

import { useState } from 'react';
import Image from 'next/image';

import ham from '../images/ham.png';
import sa from '../images/sa.jpg';
import arrow from '../images/arrow.png';
import star from '../images/star.png';
import tbi from '../images/tbi.png';
import idea from '../images/idea.png';
import el from '../images/el.png';
import dl from '../images/dl.png';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import farmer from '../images/farmer.png';

export default function Home() {
  const [open, setopen] = useState(true)
  return (
    <>
      <div className='scroll-smooth flex flex-col'>
        <nav className="bg-white shadow-md p-4 s md:flex flex-row justify-between items-center relative z-0 sm:[20vh] ">
          <div className="flex flex-row justify-between">
            <div className='images  w-72 md:flex lg:w-80 md:w-60'>
              <Image className='' src={tbi} />
            </div>
            <span className="md:hidden block cursor-pointer"><button onClick={() => setopen(!open)}  ><Image className="w-8" src={ham} /></button></span>
          </div>



          <ul className={` transition-all mt-4 ease-in font-bold border-x-2 border-b-2 md:border-none border-green-400 duration-300 ${open ? 'opacity-0 md:opacity-100' : ''} bg-green-300   md:py-0 pt-4 pl-2 md:pl-0 w-full md:w-auto left-0 md:flex flex-row md:items-center  z-[-1] md:z-auto md:static absolute md:bg-transparent`}>
            {/* <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#about'>About</a></li> */}
            {/* <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#eligible'>Eligibility</a></li> */}
            <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-green-400 cursor-pointer hover:text-green-600"><a href='#details'>Details</a></li>
            <li className="mx-4 md:my-0 my-6 pb-2 md:border-none border-green-300 cursor-pointer hover:text-green-600"><a href='#idea'>Idea/Themes</a></li>
            {/* <li className="mx-4 md:my-0 my-2 pb-2  md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#awa'>Date/Awards</a></li> */}



          </ul>
        </nav>


        {/* hero */}

        <div className='flex justify-center item-center flex-col sm:px-4 md:pt-8 md:px-12 pt-52 bg-gradient-to-tr from-green-300 h-[80vh] md:h-[84vh]'>
          <div className='flex md:flex-row flex-col justify-center items-center '>
            <div className='md:w-1/3 flex flex-col space-y-4 md:space-y-2 '>
              <div className='md:text-6xl md:text-left text-center lg:text-6xl  text-3xl md:ml-0 ml-4 font-bold mt-12'>Agri-TechHackathon <br></br> 2024</div>
              <div className='md:text-3xl  lg:text-3xl  text-xl text-center md:text-left md:ml-0 ml-4'>Uniting innovative thinkers nationwide to create groundbreaking solutions for the critical challenges in today's agricultural landscape</div>
              <div className='md:py-4  py-4 md:ml-0 ml- flex md:justify-start justify-center'>
                <button className='px-4 mb-20 md:px-6 lg:px-8 p-2 rounded-3xl flex text-xl md:text-xl flex-row justify-center items-center space-x-2 hover:bg-green-400 bg-green-500'><span><a id='details' href='https://docs.google.com/forms/d/e/1FAIpQLScU5zi0XvGaNRQvhmq2KWqV0d8gO46SgJHHK9uyvgUVtr5opQ/viewform' target='_main'>Register</a></span> <Image className='w-4' src={arrow} /></button>
              </div>
            </div>
            <div className='md:block mb-32'>
              <Image className='h-[30vh] hidden md:flex w-[30vh] md:h-[50vh] md:w-[50vh]' src={farmer} />
            </div>
          </div>

        </div>


       

        {/* details */}
        <div className=' details bg-green-600  h-auto lg:h-[60vh] relative'>
          <div className='cardcontain flex lg:flex-row flex-col justify-center items-center gap-24 lg:gap-6'>
            <div className='card -mt-[10vh] pt-6 pl-4 pr-6 pb-2 relative bg-slate-200/90 transition-transform rounded-xl hover:scale-105 hover:shadow-2xl h-auto lg:h-[65vh] md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              {/* <div className="blur w-full h-full absolute top-0 bg-white"></div> */}
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={el} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading  font-bold space text-3xl mb-6 text-center'>Eligibility</div>
              <div className='content text-xl'>
                <ul className='list-disc pl-6'>
                  <li>👨Students and professionals from all backgrounds (technology, agriculture, business, etc.)</li>
                  <li>👨‍🎓Researchers and academicians</li>
                  <li>👨‍💼Entrepreneurs</li>
                  <li>🛠Anyone with a passion for Agri-tech innovation</li>
                </ul>
              </div>
            </div>
            <div className='card text-center -mt-[10vh] pt-6 pl-4 pr-6 pb-2 bg-gray-200/90  transition-transform rounded-xl hover:scale-105 overflow-y-auto  lg:h-[65vh] hover:shadow-2xl h-auto md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={dl} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading  font-bold space text-3xl mb-6 text-center'>Instructions</div>
              <div className='content text-xl'>
                <ul className=' list-disc text-left pl-6'>
                  <li>📜Registration is mandatory</li>
                  <li>🧑‍🤝‍🧑Each team can have up to 4 members, including the team leader</li>
                  <li>🎥 Follow the guidelines for your pre-recorded presentation given in the form</li>
                  <li>📆Presentation submission Deadline - August 17th, 2024</li>
                 {/* <li>📧Submit at <b>ablest@sastra.ac.in</b></li> */} 
                </ul>
              </div>
            </div>
            <div className='card text-center -mt-[10vh] pt-6 pl-4 pr-6 pb-2 bg-gray-200/90  transition-transform rounded-xl hover:scale-105 lg:h-[65vh] hover:shadow-2xl h-auto md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={star} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading  font-bold space text-3xl mb-6 text-center'>Awards</div>
              <div className='content text-center text-xl'>
              <div className='content text-xl'>
                <ul className=' list-disc text-left pl-6'>
                  <li>💰Cash Awards</li>
                  <li>Incubation and Mentorship support</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
          <div className="bg-green-500 h-[180vh] lg:h-[60vh] w-full absolute -z-10 bottom-0 left-0 pb-82"></div>
        </div>


        {/* ideas */}
        <div id='idea' className='abi_bhu pt-8 bg-gradient-to-bl from-yellow-200 flex space-y-4 flex-col justify-center items-center md:pb-12 pb-8  px-2'>
          <div className='text-4xl font-bold flex flex-row'><span>Challenge Themes</span> <Image className='w-16' src={idea} /></div>

          
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-violet-500 text-white'>
             <div className='text-2xl w-full md:ml-32 font-bold text-center'> 1.Sodic Soil and Saline Water Management </div>
            {/* <div className='md:w-4/5 text-xl'>
               <ul className='list-disc'>
                <li>Design an ideal meal (with no anti-nutrients) with at least 30 different plants (plant parts) & millets (compulsorily at least 3) to meet 50% of recommended RDA (Recommended Daily Allowances of nutrients) for Indian adults</li>
                <li>Offer convenience in consumption that should be ready to eat or ready to drink – straight out of the box / can – without any cooking/ heating etc</li>
                <li>Enable versatile culinary profile to prepare a wide range of dishes and snacks. Embracing millets in modern diets that appeal to modern tastes and dietary preferences</li>
              </ul> 


               ---- already commented ---  a. Design an ideal meal (with no anti-nutrients) with at least 30 different plants (plant parts) & millets (compulsorily at least 3) to meet 50% of recommended RDA (Recommended Daily Allowances of nutrients) for Indian adults.<br></br> b. Offer convenience in consumption that should be ready to eat or ready to drink – straight out of the box / can – without any cooking/ heating etc.<br></br> c. Enable versatile culinary profile to prepare a wide range of dishes and snacks. Embracing millets in modern diets that appeal to modern tastes and dietary preferences. 
            </div>  */}
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-green-500 text-white'>
             <div className='text-2xl w-full text-left md:ml-32 font-bold text-center'>2.Value Additions in Food Products (specific to processing techniques)</div>
            {/* <div className='md:w-4/5 text-xl'>
              <ul className='list-disc'>
                <li>Formulate it suitably for flowing characteristics & rheology for printing</li>
                <li>Able to customize food design on the printer – from a mobile app / website</li>
                <li>Total printing time not to exceed 180 minutes per dish</li>
              </ul>
                
                
                ---- already commented---- a. Formulate it suitably for flowing characteristics & rheology for printing.<br></br> b. Able to customize food design on the printer – from a mobile app / website.<br></br> c. Total printing time not to exceed 180 minutes per dish. 
            </div>  */}
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-orange-400 text-white'>
          <div className='text-2xl w-full text-left md:ml-32 font-bold text-center'>3.Farm Mechanization</div>
            {/* <div className='md:w-4/5 text-xl'>
              <ul className='list-disc'>
                <li>As per Indian traditional system, there are certain recommended diets that support gut-brain axis for those who want to do meditation and do tasks that involve mental focus. Design such a diet</li>
                <li>Should meet atleast 20% of RDA</li>
                <li>Should involve minimal cooking</li>
              </ul>
                
                
                ----already commented---- a. As per Indian traditional system, there are certain recommended diets that support gut-brain axis for those who want to do meditation and do tasks that involve mental focus. Design such a diet.<br></br> b. Should meet atleast 20% of RDA<br></br> c. Should involve minimal cooking.\ 
            </div>  */}

          </div> 
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-violet-500 text-white'>
             <div className='text-2xl w-full md:ml-32 font-bold text-center'>4.Issues to Resolve Challenges Faced by Differently Abled</div>
            {/* <div className='md:w-4/5 text-xl'>
               <ul className='list-disc'>
                <li>Design an ideal meal (with no anti-nutrients) with at least 30 different plants (plant parts) & millets (compulsorily at least 3) to meet 50% of recommended RDA (Recommended Daily Allowances of nutrients) for Indian adults</li>
                <li>Offer convenience in consumption that should be ready to eat or ready to drink – straight out of the box / can – without any cooking/ heating etc</li>
                <li>Enable versatile culinary profile to prepare a wide range of dishes and snacks. Embracing millets in modern diets that appeal to modern tastes and dietary preferences</li>
              </ul> 


               ---- already commented ---  a. Design an ideal meal (with no anti-nutrients) with at least 30 different plants (plant parts) & millets (compulsorily at least 3) to meet 50% of recommended RDA (Recommended Daily Allowances of nutrients) for Indian adults.<br></br> b. Offer convenience in consumption that should be ready to eat or ready to drink – straight out of the box / can – without any cooking/ heating etc.<br></br> c. Enable versatile culinary profile to prepare a wide range of dishes and snacks. Embracing millets in modern diets that appeal to modern tastes and dietary preferences. 
            </div>  */}
          </div>
          


          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-green-500 text-white'>
             <div className='text-2xl w-full text-left md:ml-32 font-bold text-center'>5.Climate Smart Agriculture</div>
            {/* <div className='md:w-4/5 text-xl'>
              <ul className='list-disc'>
                <li>Formulate it suitably for flowing characteristics & rheology for printing</li>
                <li>Able to customize food design on the printer – from a mobile app / website</li>
                <li>Total printing time not to exceed 180 minutes per dish</li>
              </ul>
                
                
                ---- already commented---- a. Formulate it suitably for flowing characteristics & rheology for printing.<br></br> b. Able to customize food design on the printer – from a mobile app / website.<br></br> c. Total printing time not to exceed 180 minutes per dish. 
            </div>  */}
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-orange-400 text-white'>
          <div className='text-2xl w-full text-left md:ml-32 font-bold text-center'>6.Other Areas Related to Agriculture (if any)</div>
            {/* <div className='md:w-4/5 text-xl'>
              <ul className='list-disc'>
                <li>As per Indian traditional system, there are certain recommended diets that support gut-brain axis for those who want to do meditation and do tasks that involve mental focus. Design such a diet</li>
                <li>Should meet atleast 20% of RDA</li>
                <li>Should involve minimal cooking</li>
              </ul>
                
                
                ----already commented---- a. As per Indian traditional system, there are certain recommended diets that support gut-brain axis for those who want to do meditation and do tasks that involve mental focus. Design such a diet.<br></br> b. Should meet atleast 20% of RDA<br></br> c. Should involve minimal cooking.\ 
            </div>  */}

          </div> 

          <h1 className='text-4xl text-center'>Things will be revealed soon 🤩</h1>
        </div>


       



        {/* footer */}
        <div className="abi_bhu pb-16  bg-gray-800 pt-8 ">
          <div className='text-2xl m-4 text-center text-gray-400  hover:text-white'>Our Sponsors</div>
          <div className='flex md:flex-row flex-col flex-wrap justify-evenly items-center space-y-4 p-4'>
           <Image className='md:w-1/4 h-80' src={f1} />
           <Image className='md:w-1/4 h-80' src={f2} />
           <Image className='md:w-1/4 h-80' src={sa} />
           
           
          </div>


        </div>

        <div className="h-1 bg-gray-700"></div>
        <div className="flex flex-col justify-center items-center bg-gray-800 text-gray-400 p-8  hover:text-white md:pl-40 md:pr-40  hover:text-white">
          <div>MADE BY <a href='https://ecellsastra.org' className='font-bold' target='_main'>TECH-E</a></div>
          <div className='text-center'><a href='https://ecellsastra.org' className='font-bold' target='_main'>&copy; E-Cell SASTRA</a>. All Rights Reserved 2024 </div>

        </div>




      </div>


    </>
  )
}
