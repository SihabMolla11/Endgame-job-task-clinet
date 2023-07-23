import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLgon from "../../Component/SocialLogin/GoogleLgon";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loading, setLoading, signIngUser, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const from = location?.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIngUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("user successfully login");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
        setLoading(false)
      });
  };

  const handelResetPassword = () => {
    const email = emailRef.current.value;
    setLoading(true);
    resetPassword(email)
      .then(() => {
        toast.success("Please check your email for reset password");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 md:py-10">
        <form
          onSubmit={handelLogin}
          className="card flex-shrink-0 w-full max-w-xl p-2 md:p-10 shadow-2xl bg-base-100"
        >
          <h2 className="text-center uppercase text-lg pt-5 md:text-5xl">user login</h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <small
                  onClick={handelResetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </small>
              </label>
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
              if you are new this website{" "}
              <Link to="/register" className="text-red-500">
                SignUp first?
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
    </>
  );
};

export default Login;
