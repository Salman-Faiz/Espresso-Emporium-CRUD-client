
const Footer = () => {
  return (
    <div>
      <div className="bg-footerBg h-[30rem] md:flex justify-center font-customFont pt-16 mt-20">
      <div className="w-1/3 ps-10 space-y-4">
        <img src="/public/images/more/logo1.png" className="w-20" alt="" />
        <h1 className="text-2xl font-extrabold">Espresso Emporium</h1>
        <p className="text-wrap">Always ready to be your friend. Come & Contact with us to share your  memorable moments, to share with your best companion.</p>
        <div className="flex">
          <p>f</p>
          <p>x</p>
          <p>inst</p>
          <p>linkin</p>
        </div>
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <h2>mobile</h2>
        <h2>email</h2>
        <h2>address</h2>
      </div>
      <div className=" w-1/3 ps-10">
        <h1 className="text-3xl mb-6 font-bold">Contact With Us</h1>
        <form className="space-y-4">
          <input className="w-3/4 px-2 py-3 rounded-2xl" type="text" name="name"   placeholder="Name" id="" /> <br />
          <input className="w-3/4 px-2 py-3 rounded-2xl" type="text" name="email"   placeholder="Email" id="" />
          <br />
          <input className="w-3/4 px-2 py-8 rounded-2xl" type="text" name="message"   placeholder="Message" id="" /> <br />

          <input className="btn border-2 border-yellow-950 bg-amber-300 text-yellow-950" type="submit" value="Send Message"  />
         
         
          
        </form>
      </div>

      
    </div>
    <div className="HeaderBg sticky bottom-0 z-50">
            <div className='flex items-center justify-center'>
            <img className='w-16 h-16' src="/public/images/more/logo1.png" alt="" />
            <h1 className=" text-white font-customFont  py-2 font-semibold">CopyRight Espresso Emporium <span>All Right Reserved</span></h1>
            </div>
           
        </div>
    </div>
  );
};

export default Footer;