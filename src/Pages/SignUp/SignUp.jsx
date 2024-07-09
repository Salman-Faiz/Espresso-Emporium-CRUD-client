import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="">
        <div className="flex items-center justify-center min-h-screen bg-[url('/public/images/more/11.png')] bg-no-repeat text-yellow-950">
              <div className="bg-white p-16 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block  mb-2 font-semibold">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-950"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block  mb-2 font-semibold">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-950"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block  mb-2 font-semibold">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-950"
                      required
                    />
                  </div>
                 
                  <button
                    type="submit"
                    className="w-full bg-yellow-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="pt-8"><h3 className="text-blue-500">Already Have an Account ?? please <span className="underline bold text-yellow-950"><NavLink to={'/signIn'}>Sign In</NavLink></span></h3></div>
              </div>
            </div>
        </div>
    );
};

export default SignUp;