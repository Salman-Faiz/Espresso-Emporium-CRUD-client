import './Header.css';
const Header = () => {
    return (
        <div className="HeaderBg ">
            <div className='flex items-center justify-center'>
            <img className='w-20 h-20' src="/public/images/more/logo1.png" alt="" />
            <h1 className=" text-white font-customFont text-3xl py-3 font-semibold">Espresso Emporium</h1>
            </div>
           
        </div>
    );
};

export default Header;