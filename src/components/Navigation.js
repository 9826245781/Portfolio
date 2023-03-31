import image from '../images/favicon.jpg'
import {Link} from 'react-scroll'
import { useState } from 'react'

const Navigation = () => {
  const [open,setOpen]=useState(false)
    return <nav className="md:flex md:justify-between">
          <img
            className="h-10 w-10 md:h-20 md:w-20 top-0 rounded-xl border-[2px] border-[#64ffda] "
            src={image}
            alt="logo"
          />
      <div className="hidden md:flex md:items-center  ">
            <ul className="flex flex-row space-x-4 ">
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
          <Link to='about' spy={true} smooth={true} offset={50} duration={500} > <span className="text-[#64ffda] ">01.</span> About</Link>     
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
           <Link to='experience' spy={true} smooth={true} offset={50} duration={500} >   <span className="text-[#64ffda] ">02.</span> Experience</Link>  
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
             <Link to='work' spy={true} smooth={true} offset={50} duration={500} >   <span className="text-[#64ffda] ">03.</span> Work</Link>  
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
             <Link to='contact' spy={true} smooth={true} offset={50} duration={500} >   <span className="text-[#64ffda] ">04.</span> Contact</Link>
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/1h86mNWcV6p3rqCMxb_iNKoKv1d2sDmFa/view?usp=sharing">
              <button className="text-[#13221e] mx-8 h-10  border border-[#64ffda] bg-white hover:bg-gray-400  font-semibold  rounded shadow-xl py-2 px-4">
                Resume
              </button>
            </a>
      </div>
      <div onClick={()=>setOpen(!open)} className='top-5 absolute right-24  bg-[#64ffda] w-fit md:opacity-0'>
      <ion-icon className="h-8 w-8 " name={open?'close-outline':'grid-outline'} ></ion-icon>
      </div>
      <div className={` absolute right-10 
       w-fit top-16 ${open ?'top-20 opacity-100':'top-[-490px]'} `}>
        <ul className="flex flex-col space-x-4 space-y-6 bg-[#112240]">
        <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
          <Link to='about'  spy={true} smooth={true} offset={50} duration={500} > <span className="text-[#64ffda] ">01.</span> About</Link>     
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
           <Link to='experience'  spy={true} smooth={true} offset={50} duration={500}>   <span className="text-[#64ffda] ">02.</span> Experience</Link>  
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
             <Link to='work' spy={true} smooth={true} offset={50} duration={500}>   <span className="text-[#64ffda] ">03.</span> Work</Link>  
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
             <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>   <span className="text-[#64ffda] ">04.</span> Contact</Link>
              </li>
      </ul>
      <a href="https://drive.google.com/file/d/1h86mNWcV6p3rqCMxb_iNKoKv1d2sDmFa/view?usp=sharing">
        <button className="text-[#13221e] mx-8 h-10  border border-[#64ffda] bg-white hover:bg-gray-400  font-semibold  rounded shadow-xl py-2 px-4">
          Resume
        </button>
      </a>
    </div>
        </nav>
}
export default Navigation;