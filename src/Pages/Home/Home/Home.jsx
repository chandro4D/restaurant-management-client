import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import Feature from "../Feature/Feature";
import Popular from "../Popular/Popular";
import Testimonial from "../Testimonial/Testimonial";
import useMenu from "../../../Hoocks/useMenu";
import Card from "../../Shared/Card/Card";




const Home = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Restaurant Management | Home</title>
            </Helmet>
            <div className=" mb-10" >
                <Banner></Banner>
                <Catagory></Catagory>
                <ExtraSection></ExtraSection>

                <Popular></Popular>
                <ExtraSection2></ExtraSection2>
                <SectionTitle
                    heading={'CHEF RECOMMENDS'}
                    sunHeading={'---Should Try---'}

                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-10 ">
                    {
                        offered.map(item => <Card
                            key={item._id}
                            item={item}
                        ></Card>

                        )
                    }
                </div>
                <br />
                <br />
                <Feature></Feature>
                <Testimonial></Testimonial>

            </div>
        </div>
    );
};

export default Home;