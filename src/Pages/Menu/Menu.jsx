import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import Cover from '../Shared/Cover/Cover';
import menuImg1 from '../../assets/menu/dessert-bg.jpeg'
import menuImg2 from '../../assets/menu/pizza-bg.jpg'
import menuImg3 from '../../assets/menu/salad-bg.jpg'
import menuImg4 from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hoocks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Restaurant Management | Menu</title>
            </Helmet>

            <Cover img={menuImg} subTitle="Would you like to try a dish?" title="OUR MENU"></Cover>
            <br />
            <br />                 
            <SectionTitle sunHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <div className="grid grid-cols-2">
                {
                    offered.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <div className="ml-[550px] mb-5">
                    <Link to="/ourShop"><button className="border-0 w-[250px] border-b-4 btn btn-outline btn-primary">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
            <br />
            <br />

            <Cover img={menuImg1} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it to make a type specimen book." title="dessert"></Cover>
            <br />
            <br />
            <br />

            {/* ----------------dessert------------------------- */}
            <div className="grid grid-cols-2">
                {
                    dessert.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <div className="ml-[550px] mb-5">
                    <Link to="/ourShop"><button className="border-0 w-[250px] border-b-4 btn btn-outline btn-primary">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
            <br />
            <br />

            <Cover img={menuImg2} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="PIZZA"></Cover>
            <br />
            <br />
            <br />
            {/* -----------------------pizza--------------------- */}
            <div className="grid grid-cols-2">
                {
                    pizza.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>

            <div className="ml-[550px] mb-5">
                <Link to="/ourShop"><button className="border-0 w-[250px] border-b-4 btn btn-outline btn-primary">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
            <br />

            <Cover img={menuImg3} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="SALADS"></Cover>
            <br />
            {/* -----------------------salad--------------- */}
            <br />
            <br />
            <div className="grid grid-cols-2">
                {
                    salad.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="ml-[550px] mb-5">
                <Link to="/ourShop"><button className="border-0 w-[250px] border-b-4 btn btn-outline btn-primary">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
            <br />

            <Cover img={menuImg4} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="SOUPS"></Cover>
            <br />
            <br />
            <br />
            {/* -----------------soups------------------ */}
            <div className="grid grid-cols-2">
                {
                    soup.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="ml-[550px] mb-5">
                <Link to="/ourShop"><button className="border-0 w-[250px] border-b-4 btn btn-outline btn-primary">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
            <br />

        </div>
    );
};

export default Menu;