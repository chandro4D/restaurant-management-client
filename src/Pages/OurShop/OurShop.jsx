import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hoocks/useMenu";

import Card from "../Shared/Card/Card";
import { Helmet } from "react-helmet-async";


const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div className="mb-20">
             <Helmet>
                <title>Restaurant Management | Shop</title>
            </Helmet>
            <Cover img={shopImg} subTitle="Would you like to try a dish?" title="OUR SHOP"></Cover>
            <br />
            <Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
               
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 ">
                        {
                            salad.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>

                            )
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10">
                        {
                            pizza.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10">
                        {
                            soup.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10">
                        {
                            dessert.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10">
                        {
                            drinks.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>

                            )
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default OurShop;