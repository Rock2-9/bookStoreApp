import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="text"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration 200">
              Login
            </button>

            <p>
              Not Registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                SignUp
              </Link>{" "}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
