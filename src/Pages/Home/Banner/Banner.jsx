import './Banner.css'
const Banner = () => {
    return ( 
        <div className='BannerBg flex items-center font-customFont'>
        <div className='p-5 md:ps-44 text-white space-y-3'>
        <h2 className='text-4xl '>Would you like a Cup of Delicious Coffee?</h2>
          <p >It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!<br></br> Your companion of every moment!!!<br></br> Enjoy the beautiful moments and make them memorable.</p>
          <button className='btn bg-amber-500 text-xl'>Learn more</button>
        </div>
        </div>
    );
};

export default Banner;