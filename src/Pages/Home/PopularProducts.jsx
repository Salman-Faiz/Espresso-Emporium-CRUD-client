import { FaEye } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const PopularProducts = ({ coffee }) => {
  const { _id, name, chef, photo } = coffee;

  // handle delete operation
  const handleDelete = async (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch("http://localhost:5000/coffee/" + _id, {
          method: "DELETE",
        });

        const json = await response.json();

        console.log("data is", json.data);
        if (json.data.deletedCount > 0) {
          
          Swal.fire({
            title: "Deleted!",
            text: "Your Coffee has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="">
      <div className="flex items-center bg-slate-100 rounded-lg bg-opacity-50 shadow-lg justify-evenly">
        <div className="rounded-lg">
          <img className="w-64 h-48 p-5 rounded-lg" src={photo} alt="" />
        </div>
        <div className="text-lg space-y-3  ">
          <h2>
            <span className="font-bold">Name:</span> {name}
          </h2>
          <h2>
            <span className="font-bold">Chef:</span>
            {chef}
          </h2>
          <h3>
            {" "}
            <span className="font-bold">Price :</span>890 Taka
          </h3>
        </div>
        <div className="space-y-3 pr-16">
          <h1>
            <button className="btn btn-success text-xl">
              <FaEye></FaEye>
            </button>
          </h1>
          <h1>
            <Link to={`update/${_id}`}>
              <button className="btn btn-info text-xl">
                <BiSolidPencil></BiSolidPencil>
              </button>
            </Link>
          </h1>
          <h1>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning text-xl"
            >
              <MdDelete></MdDelete>
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
