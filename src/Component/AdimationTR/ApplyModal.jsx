import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";

const ApplyModal = ({ college }) => {
  const { loading, setLoading, user } = useContext(AuthContext);

  const handelApply = (event) => {
    event.preventDefault;
    setLoading(true);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phone.value;
    const dateOfBirth = event.target.bdate.value;
    const address = event.target.address.value;
    const subject = event.target.subject.value;

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
        const applyData = {
          name,
          email,
          phoneNumber,
          dateOfBirth,
          address,
          photoUrl,
          college,
          subject,
        };

        fetch(`${import.meta.env.VITE_DATABASE_URL}/applications`, {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(applyData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.insertedId) {
              toast.success("application successful");
              event.target.reset();
            }
            setLoading(false);
          });
      });
  };

  const handelTest = () => {
    console.log(college.college_name); 
  };

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg md:text-2xl text-center">
            Apply form for {college?.college_name}
          </h3>
          <form
            onSubmit={handelApply}
            method="dialog"
            className=" mx-auto w-2/3 px-10 mt-5 overflow-hidden rounded-lg space-y-5 py-5 drop-shadow-2xl bg-slate-100"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Candidate Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type your Name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Candidate Image:
                </span>
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
                <span className="label-text font-semibold">Subject:</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Inter your subject"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Candidate Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Inter your email"
                defaultValue={user?.email}
                readOnly
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Candidate phone number:
                </span>
              </label>
              <input
                type="number"
                name="phone"
                required
                placeholder="Add your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">date of birth:</span>
              </label>
              <input
                type="date"
                name="bdate"
                required
                placeholder="Ad your university"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Address:</span>
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Type your address"
                className="input input-bordered"
              />
            </div>

            {loading ? (
              <button className="my-btn-blue w-full mt-3">
                <ImSpinner9 className=" animate-spin" size={28} />
              </button>
            ) : (
              <input
                className="my-btn-blue w-full mt-3"
                type="submit"
                value="submit apply"
              />
            )}
          </form>
          <button onClick={handelTest}>afsdf</button>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="my-btn-blue">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyModal;
