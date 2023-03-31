import SkillBar from 'react-skillbars';
const Experince = () => {
  const skills = [
  { type: 'C', level: 80 },
  { type: 'C++', level: 75 },
  { type: 'Javascript', level: 70 },
  { type: 'HTML,CSS', level: 90 },
  { type: 'React', level: 50 },
  { type: 'Node', level: 50 },
];
    return    <div className="Experince mt-40" id='experience'>
              <div className="flex flex-row items-center">
                <p className="text-[#ccd6f6] font-bold md:text-3xl">
                  <span className="text-[#64ffda]">02.</span> Experience
                </p>
                <div className="bg-[#eff1fa] h-[0.1px] w-[50%] ml-4 mt-1 "></div>
              </div>
              <p className="text-[#ccd6f6] text-xl mt-4">
                Languages and frameworks
              </p>
              <div className="languages mt-8">
                  
<SkillBar skills={skills} animationDelay={500}/>
              </div>
            </div>
}
export default Experince;