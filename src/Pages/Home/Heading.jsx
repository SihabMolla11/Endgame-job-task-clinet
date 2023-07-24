
const Heading = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h2 className=" font-bold text-neutral-600 text-4xl">{title}</h2>
            <p className="text-lg font-semibold mt-2">{subTitle}</p>
        </div>
    );
};

export default Heading;