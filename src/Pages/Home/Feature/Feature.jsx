import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImage from '../../../assets/home/featured.jpg'

import './Featured.css'
const Feature = () => {
    return (
        <div className="featured-item h-[850px] bg-fixed bg-opacity-80">
            <div className="pt-20" >
                <SectionTitle
                    heading={'Featured Item'}
                    sunHeading={'---Check it out---'}

                ></SectionTitle>
            </div>
            <div className="flex pt-20 pl-20">
                <div className="mr-10">
                    <img className="w-[650px] h-[400px] border-solid" src={featureImage} alt="" />
                </div>
                <div className="text-center mt-20 text-white">
                    <div className="text-center">
                        <h3>March 20, 2024 <br /> WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <br />

                    </div>
                    <div>
                        <button className="border-0 border-b-4 btn btn-outline btn-primary">Primary</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Feature;