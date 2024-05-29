import Swal from "sweetalert2";
import useAuth from "../../../Hoocks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hoocks/useAuth/useAxiosSecure";
import useCart from "../../../Hoocks/useAuth/useCart";



const Card = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();
    const { user } = useAuth();
    const { name, recipe, price, image,_id } = item;
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                recipe,
                price, 
                image
            }
            axiosSecure.post('/carts',cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        text:`${name} ADDED TO YOUR CART`,
                        
                      });
                      refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "YOU ARE NOT LOGGED IN !!!",
                text: "PLEASE LOGIN TO ADD TO THE CART",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "YES, LOGIN!"
            })
            .then((result) => {
                if (result.isConfirmed) {
                   navigate('/login',{state: {from:location}})
                }
            });

        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="text-white absolute right-0 mr-5 mt-5 bg-slate-800 text-center pt-2 w-[80px] h-[40px]">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={ handleAddToCart} className="btn btn-outline border-0 border-b-4 btn-warning">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;