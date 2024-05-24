

const SectionTitle = ({heading,sunHeading}) => {
    return (
        <div className="mb-10 md:w-3/12 mx-auto text-center">
            <p className=" text-xl text-[#D99904] font-medium">{sunHeading}</p>
            <br />
            <h3 className=" text-[#151515] text-[30px] font-medium border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;