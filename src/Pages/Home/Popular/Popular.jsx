
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hoocks/useMenu";


const Popular = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    
    return (
        <div>
            <SectionTitle
                heading={'FROM OUR MENU'}
                sunHeading={'---Check it out---'}

            ></SectionTitle>
            <div className="grid grid-cols-2">
                {
                    popular.map(item => <MenuItem
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