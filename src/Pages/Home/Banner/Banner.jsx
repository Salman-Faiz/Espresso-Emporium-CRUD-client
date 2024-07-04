import './Banner.css'
import BannerBottom from './BannerBottom';
const Banner = () => {
    return ( 
     <div className=''>
           <div className='relative BannerBg flex items-center sm:h-36  font-customFont bg-cover bg-no-repeat '>
        <div className='px-5  text-white md:space-y-8 absolute md:left-40'>
        <h2 className='text-xl md:text-4xl '>Would you like a Cup of Delicious Coffee?</h2>
          <p className='sm:xs'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!<br></br> Your companion of every moment!!!<br></br> Enjoy the beautiful moments and make them memorable.</p>
          
          <button className=' btn bg-amber-500 sm:text-xs md:text-xl mb-5'>Learn more</button>
        
        </div>
        </div>
        <BannerBottom></BannerBottom>
     </div>
    );
};

export default Banner;