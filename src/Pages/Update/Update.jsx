import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, photo,details,supplier,taste,category } = coffee;
  console.log(coffee.name);

  const handleUpdate= event =>{
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;
    const chef = form.chef.value;
    
  
    const coffeeDetails = {name, chef, photo,details,supplier,taste,category}
  
    console.log(coffeeDetails)

    fetch(`http://localhost:5000/coffee/${coffee._id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(coffeeDetails)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Success",
                text: "Coffee updated successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              form.target.reset();
        }
    })
}
  return (
    <div className="bg-[url('/public/images/more/11.png')] text-yellow-950">
      <Link to={"/"}>
        {" "}
        <h1 className="ps-40 py-10 font-bold flex items-center gap-1">
          <FaArrowLeft></FaArrowLeft> Back to Home
        </h1>
      </Link>
      <div className="bg-slate-200 mx-40 rounded-2xl">
        <div className="text-center pt-24 pb-10">
          <h1 className="font-semibold text-4xl">Update Coffee details</h1>
          <p className="py-8 px-28 ">
            click on the update button to save the updated coffee details.
          </p>
        </div>
        <div className="px-20">
          <form onSubmit={handleUpdate}  className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="ps-3 font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="name"
                  placeholder="Enter Coffee name"
                  defaultValue={name}
                  id=""
                />
              </div>
              <div>
                <label className="ps-3 font-bold" htmlFor="Chef">
                  Chef
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter Coffee chef"
                  id=""
                />
              </div>
              <div>
                <label className="ps-3 font-bold" htmlFor="Supplier">
                  Supplier
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter Coffee supplier"
                  id=""
                />
              </div>
              <div>
                <label className="ps-3 font-bold" htmlFor="Taste">
                  Taste
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter Coffee taste"
                  id=""
                />
              </div>
              <div>
                <label className="ps-3 font-bold" htmlFor="Category">
                  Category
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter Coffee category"
                  id=""
                />
              </div>
              <div>
                <label className="ps-3 font-bold" htmlFor="Details">
                  Details
                </label>
                <input
                  className="w-full px-2 py-3 rounded-2xl"
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter Coffee details"
                  id=""
                />
              </div>
            </div>
            <div>
              <label className="ps-3 font-bold" htmlFor="Photo">
                Photo url
              </label>
              <input
                className="w-full px-2 py-3 rounded-2xl"
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter Coffee Photo url"
                id=""
              />
            </div>

            <div className="text-center pt-10 pb-20">
              <input
                className=" btn w-full border-2 border-yellow-950 bg-yellow-950 text-white"
                type="submit"
                value="Update Coffee"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
