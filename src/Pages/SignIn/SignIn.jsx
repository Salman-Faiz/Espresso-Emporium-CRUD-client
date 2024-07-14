

const SignIn = () => {
  const handleSignIn =e =>{
    e.preventDefault();
    const form =e.target;
    const email = form.email.value;
    const password= form.password.value;
    console.log(email,password)

  }
    return (
<div className="">
<div className="flex items-center justify-center min-h-screen bg-[url('/public/images/more/11.png')] bg-no-repeat text-yellow-950">
      <div className="bg-white p-16 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn}>
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-yellow-950 focus:ring-blue-500  rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm ">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
</div>




     
    );
};

export default SignIn;



