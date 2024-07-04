import { PiCoffeeDuotone } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const PopularProducts = () => {
  return (
    <div className="font-customFont text-yellow-950">
     
        <div className=" text-center font-customFont space-y-8 py-20 text-yellow-950 bg-PopularBg1 bg-no-repeat bg-left-bottom">
          <p className="text-xl text-yellow-950">--Sip & Savor--</p>
          <h1 className="text-4xl font-bold">Our Popular Products</h1>
          <button className="btn border-2 border-yellow-950 bg-amber-300 text-yellow-950 font-bold">
            Add Coffee <PiCoffeeDuotone className="text-xl"></PiCoffeeDuotone>
          </button>
        </div>

    
     <div className="grid md:grid-cols-2 gap-10 px-32 bg-PopularBg2 bg-no-repeat bg-right bg-opacity-100">

     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/1.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span> Americano Coffee</h2>
        <h2><span className="font-bold">Chef:</span>Mr.Matin Paul</h2>
        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>
        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/2.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span>Espresso Coffee </h2>
        <h2><span className="font-bold">Chef:</span>Mrs. Morisha</h2>
        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>
        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/3.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span> Black Coffee</h2>
       
        <h2><span className="font-bold">Chef:</span>Mr.Nibra Sweden</h2>
        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>


        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/4.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span>Decaf Coffee</h2>
       
        <h2><span className="font-bold">Chef:</span>Mr. Matin Paul</h2>

        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>
        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/5.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span>Macchiato</h2>
       
        <h2><span className="font-bold">Chef:</span>Mrs. Morisha</h2>
        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>
        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg gap-4">
        <img className="p-5" src="/public/images/6.png" alt="" />
        <div className="text-lg space-y-3 flex-grow">
        <h2><span className="font-bold">Name:</span>Cappuccino Coffee</h2>
       
        <h2><span className="font-bold">Chef:</span>Mr.Moruti</h2>
        <h3> <span className="font-bold">Price :</span>890 Taka</h3>
        </div>
        <div className="space-y-3 pr-16">
            <h1><button className="btn btn-success text-xl"><FaEye ></FaEye></button></h1>
            <h1><button className="btn btn-info text-xl"><BiSolidPencil></BiSolidPencil></button> </h1>
            <h1><button className="btn btn-warning text-xl"><MdDelete></MdDelete></button></h1>
        </div>
      </div>
     </div>
    </div>
  );
};

export default PopularProducts;
