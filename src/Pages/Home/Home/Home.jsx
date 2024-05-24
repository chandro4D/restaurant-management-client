import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import Feature from "../Feature/Feature";
import Popular from "../Popular/Popular";
import Testimonial from "../Testimonial/Testimonial";




const Home = () => {
    return (
        <div>
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
                <Feature></Feature>
                <Testimonial></Testimonial>

            </div>
        </div>
    );
};

export default Home;