import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Popular = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })

    }, [])
    return (
        <div>
            <SectionTitle
                heading={'FROM OUR MENU'}
                sunHeading={'---Check it out---'}

            ></SectionTitle>
            <div className="grid grid-cols-2">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <div className="ml-[550px] mb-5">
                    <button className="border-0 w-[150px] border-b-4 btn btn-outline btn-primary">View Full  Menu</button>
                </div>
            </div>
        </div>

    );
};

export default Popular;