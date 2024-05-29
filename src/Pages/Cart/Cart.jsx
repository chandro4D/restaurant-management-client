import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../Hoocks/useAuth/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hoocks/useAuth/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl ">TOTAL ORDERS : {cart.length}</h2>
                <h2 className="text-4xl">TOTAL PRICE : {totalPrice}$ </h2>
                <button className="btn btn-primary">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <tr key={item._id}>
                                <th>

                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-xl bg-red-500 text-xl"><RiDeleteBin6Line /></button>
                                </th>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Cart;