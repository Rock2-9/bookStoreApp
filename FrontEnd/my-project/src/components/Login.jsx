import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", UserInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("LoggedIn successful");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_model_3").closest()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                placeholder="Enter your email"
                {...register("email", { require: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This Field Is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                placeholder="Enter your password"
                {...register("password", { require: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This Field Is required
                </span>
              )}
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
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
