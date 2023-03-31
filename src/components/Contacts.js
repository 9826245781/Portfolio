const Contacts = () => {
    return  <div className="contact mt-24 text-white ml-[20%]" id="contact">
    <div className="flex flex-row items-center">
                <p className="text-[#ccd6f6] font-bold ml-8 md:text-3xl md:ml-24">
                  <span className="text-[#64ffda]">04.</span> Contact me
                </p>
        </div>
        <div className="getInTouch mt-4" style={{ fontSize: "clamp(40px, 8vw, 80px)" }}>
        <p>Get In Touch</p>
        </div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
        <button className="mt-4 text-[#13221e] mx-8 md:h-10 md:ml-36  border border-[#64ffda] bg-white hover:bg-gray-400  font-semibold  rounded shadow-xl py-2 px-4">
      Say Hello✌️
    </button>
  </a>
      
 </div>
}
export default Contacts;