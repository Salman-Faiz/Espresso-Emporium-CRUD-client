import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SignIn = () => {
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
          <h1 className="font-semibold text-4xl">Sign in to our Coffee shop</h1>
          <p className="py-8 px-28 ">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="px-20">
          <form  className="space-y-4">
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
                placeholder="Enter Coffee Photo url"
                id=""
              />
            </div>

            <div className="text-center pt-10 pb-20">
              <input
                className=" btn w-full border-2 border-yellow-950 bg-yellow-950 text-white"
                type="submit"
                value="Add Coffee"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignIn;