import jobifysmall from '../images/j-f.png'
import jafter from "../images/j-f-after.png"
import cartbefore from '../images/cart-low.png'
import cartafter from '../images/cart.png'
import github from '../images/github.svg'
const Projects = () => {
  return <>
  <div className="Projects-and-line mt-40 h-full w-[80%] flex flex-col" id='work'>
              <div className="flex flex-row items-center">
                <p className="text-[#ccd6f6] font-bold md:text-3xl">
                  <span className="text-[#64ffda]">03.</span> Projects
                </p>
                <div className="bg-[#eff1fa] h-[0.1px] w-[50%] ml-4 mt-1 "></div>
              </div>
              <div className=" text-white projects">
              <div className="first-project mt-8">
              <div className="image-and-desc flex flex-col md:flex-row" >
              <div className="imgae md:w-[70%] w-[100%] mx-6 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
        <a href="https://jobify-ttemp.onrender.com/landing">
          <img
              src={jobifysmall}
              className="  z-10 rounded"
              alt="img"
                />
                </a>    
              </div>
              <div className="desc ml-6">
              <p className='text-[#64ffda]'>Featured Project</p>
              <p className='text-white font-bold'>Jobify</p>
              <div className='text-[#ccd6f6] text-xl '>
                Full stack Job search Website.With all crud functionalities
              </div>
              <div className="techs mt-6 text-[#64ffda]">
                React.js Node.js MongoDB Express
              </div>
              <div className='text-[#ccd6f6] h-6 w-6 mt-3 '>
                <a href="https://github.com/9826245781/temp">
                <img src={github} alt="github" className='bg-[#64ffda] rounded hover:bg-white'/>
                </a>
              </div>
              </div>
            </div>
              </div>
              <div className="first-project mt-8">
              <div className="image-and-desc flex flex-col md:flex-row">
           
              <div className="desc ml-6">
              <p className='text-[#64ffda]'>Featured Project</p>
              <p className='text-white font-bold'>Cartify</p>
              <div className='text-[#ccd6f6] text-xl '>
                E-commerce Website with functionalities like
                add to cart,remove from cart,login,logout
              </div>
              <div className="techs mt-6 text-[#64ffda]">
                React.js Firebase Hosting
              </div>
              <div className='text-[#ccd6f6] h-6 w-6 mt-3'>
                <a href="https://github.com/9826245781/my-kartt">
                <img src={github} alt="github" className='bg-[#64ffda] rounded hover:bg-white'  />
                </a>
              </div>
            </div>
            <div className="imgae cursor-pointer w-[100%] mx-6  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
              <a href="https://mykart-4caa5.web.app/">
              <img
              src={cartafter}
              className="  z-10 rounded"
              alt="img"
            /></a>
           
            </div>
            </div>
              </div>
            
              
            </div>
  
            </div>
  </>

}
export default Projects;