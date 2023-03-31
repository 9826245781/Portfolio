import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";
import github from '../images/github.svg'

const Logos = () => {
    return  <div className="logos hidden md:flex md:mr-36 md:mt-36 md:fixed">
          <ul>
            <li className="mt-6">
              <a href="https://github.com/9826245781">
                <img
                  src={github}
                  className="bg-[#64ffda] rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#eff1fa] duration-300 ..."
                  alt=""
                ></img>
              </a>
            </li>

            <li className="mt-6">
              <a href="https://mobile.twitter.com/YuvrajS87328840"></a>
              <SlSocialInstagram className="h-8 w-8 bg-[#64ffda] rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#eff1fa] duration-300 ..." />
            </li>
            <li className="mt-6">
              <a href="https://mobile.twitter.com/YuvrajS87328840">
                <SlSocialTwitter className="h-8 w-8  bg-[#64ffda] rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#eff1fa] duration-300 ..." />
              </a>
            </li>
            <li className="mt-6">
              <a href="https://www.linkedin.com/in/yuvraj-singh-a46164206/">
                <SlSocialLinkedin className="h-8 w-8 bg-[#64ffda] rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#eff1fa] duration-300 ..." />
              </a>
            </li>
          </ul>
        </div>
}
export default Logos