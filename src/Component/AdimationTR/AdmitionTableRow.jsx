import ApplyModal from "./ApplyModal";

const AdmitionTableRow = ({ college }) => {
  return (
    <>
      <tr>
        <td>
          <div className="mask  w-12 h-12 avatar">
            <img
              className="rounded-lg"
              src={college?.image}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </td>
        <td>
          <p className="md:text-lg font-semibold">{college?.college_name}</p>
        </td>
        <td>
          <div className="">
            <label htmlFor="my_modal_6" className="my-btn-small">open modal</label>
          </div>
        </td>
        <ApplyModal college={college}/>
      </tr>
    </>
  );
};

export default AdmitionTableRow;
