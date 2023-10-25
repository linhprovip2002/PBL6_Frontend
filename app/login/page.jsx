import Image from "next/image";
// import COVER_IMAGE from "./assets/images/watch1.jpg";
// import GOOGLE_ICON from "./assets/images/watch1.jpg";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disabled: "#D9D9D9",
};
const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community{" "}
          </p>
        </div>
        <img
          src={"assets/images/slide0.jpg"}
          className="w-fu1l h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-fu11 bg-[#f5f5f5] flex flex-col p-20 justify-between items-center ">
        <h1 className="text-xl text-[#060606] font-bold">The gioi dong ho</h1>
        <div className="w-fu1l flex flex-col w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>
          <div className="w-fu11 flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-fu11 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-fu1l text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-fu1l flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p
              className="text-sm font-medium whitespace-nowrap cursor-pointer
              underline underline-offset-2"
            >
              Forgot Password ?
            </p>
          </div>
          <div className="w-fu11 flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Log in
            </button>
            <button className="w-ful1 text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 flex items-center justify-center cursor-pointer">
              Register
            </button>
          </div>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-fu1l h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>
          <button className="w-ful1 text-[#060606] my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 flex items-center justify-center cursor-pointer">
            <img src={"/assets/images/watch1.jpg"} className="h-6 mr-2" />
            Sign in With Google
          </button>
        </div>
        <div className="w-fu1l flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don't have a account?{" "}
            <span className="font-semibold underline underline-offset"></span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
