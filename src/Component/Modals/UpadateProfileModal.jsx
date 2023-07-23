import { toast } from "react-hot-toast";

const UpadateProfileModal = ({ loginUser }) => {
  const handelUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const university = event.target.university.value;
    const data = { name, email, address, university };
    console.log(data);

    fetch(
      `${import.meta.env.VITE_DATABASE_URL}/update-profile/${loginUser?._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          window.location.reload();
          toast.success("Profile updated successful");
        }
      });
  };
  console.log(loginUser);

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <form
          onSubmit={handelUpdateProfile}
          method="dialog"
          className="modal-box"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name:</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={loginUser?.name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name:</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={loginUser?.email}
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
              defaultValue={loginUser?.address}
              placeholder="Add your address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">University:</span>
            </label>
            <input
              type="text"
              name="university"
              placeholder="Ad your university"
              defaultValue={loginUser?.university}
              className="input input-bordered"
            />
          </div>
          <input
            className="my-btn-blue w-full mt-2"
            type="submit"
            value="Update Profile Info"
          />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default UpadateProfileModal;
