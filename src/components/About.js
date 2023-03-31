import me from "../images/me.jpg";

const About = () => {
    return   <div className="about-me mt-40 " id="about">
    <div className="flex flex-row items-center">
      <p className="text-[#ccd6f6] font-bold md:text-3xl ">
        <span className="text-[#64ffda]">01.</span> About Me
      </p>
      <div className="bg-[#eff1fa] h-[0.1px] w-[50%] ml-4 mt-1 "></div>
    </div>
    <div className="content+picture flex mt-10  flex-col md:flex-row">
      <div className="text-[#8892b0] w-[100%] md:w-[50%] mr-4 text-lg">
      Full Stack Developer | Programmer<br></br>

A Third-Year CSE Student At Jain University, School of Engineering And Technology

I have a strong background in coding, starting from my high school years where I discovered my love for algorithms and problem-solving. To me, coding is not just a technical skill, but an art form that allows me to bring my visions to life.

As a web developer, I have the opportunity to not only create visually stunning designs, but also build functional and user-friendly websites that make a positive impact on the world.

My ultimate goal is to use my skills and passion to contribute to creating a better world. With the advances in technology, I believe now is the time to build innovative solutions that can make a real difference in society. I am dedicated to using my abilities to help create a more positive and prosperous future for all.
      </div>
      <div class="h-[50%] relative z-0 flex mt-6">
        <div class="h-[250px] w-[400px]  hover: mt-[16px] rounded border-[2px] border-[#64ffda]  "></div>
        <div class="absolute inset-y-0 left-0 z-10  w-[400px]">
          <div class="flex h-full mr-3 ">
            <img
              className="h-[250px] w-[90%]   rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
              src={me}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default About;