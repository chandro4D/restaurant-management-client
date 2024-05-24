

const MenuItem = ({item}) => {
    const {name,recipe,price,image,category} = item;
    return (
        <div className="flex mr-10 mb-10">
            <div className="mr-5">
                <img className="w-[120px] h-[80px] rounded-tl-[0px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] "  src={image}  />
            </div>
            <div>
                <h3 className="text-xl text-[#151515] font-medium">{name}-------------------</h3>
                <p className="text-base text-[#737373] font-normal">{recipe}</p>
            </div>
            <div>
               <p className="text-[#BB8506] text-xl font-normal">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;