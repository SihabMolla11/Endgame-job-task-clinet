import { Link, useNavigate } from "react-router-dom";
import GoogleLgon from "../../Component/SocialLogin/GoogleLgon";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { user, loading, setLoading, createUser, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handelSignUp = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_BB_API
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoUrl = data?.data?.display_url;

        createUser(email, password)
          .then((user) => {
            updateUserProfile(name, photoUrl)
              .then((result) => {
                navigate("/");
                toast.success("User Login Successful");
                setLoading(false);
              })
              .catch((err) => {
                console.log(err.message);
                toast.success(err.message);
                setLoading(false);
              });
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err.message);
            setLoading(false);
          });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-10">
        <form
          onSubmit={handelSignUp}
          className="card flex-shrink-0 w-full max-w-xl p-10 shadow-2xl bg-base-100"
        >
          <h2 className="text-center uppercase text-5xl">user Signup </h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                required
                name="image"
                className="file-input file-input-bordered file-input-error w-full file:text-white file:bg-[#ff8258] hover:file:bg-[#ff561e]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type your email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type your password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              {loading ? (
                <p className="my-btn-primary">
                  <TbFidgetSpinner size={28} className="animate-spin" />
                </p>
              ) : (
                <input
                  type="submit"
                  value="Login"
                  className="my-btn-primary "
                />
              )}
            </div>
            <small className="px-2">
              If you have already an account{" "}
              <Link to="/login" className="text-red-500">
                Got to login?
              </Link>
            </small>
            <div className="flex justify-between items-center gap-4 text-lg font-medium">
              <hr className="border-[1px] w-full border-[#6b6868]" />
              OR <hr className="border-[1px] w-full border-[#6b6868]" />
            </div>
          </div>

          <div>
            <GoogleLgon />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
