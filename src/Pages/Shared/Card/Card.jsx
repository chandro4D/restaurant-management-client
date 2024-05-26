

const Card = ({item}) => {
    const {name,recipe,price,image,category} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="text-white absolute right-0 mr-5 mt-5 bg-slate-800 text-center pt-2 w-[80px] h-[40px]">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 btn-warning">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;