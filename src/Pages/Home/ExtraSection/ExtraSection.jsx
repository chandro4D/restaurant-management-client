import img from "../../../assets/home/chef-service.jpg"

const ExtraSection = () => {
    return (
        <div className="mt-10 ">
            <div className="w-[1280px] h-[572px] relative ">
               <img src={img} alt="" />
            </div>
            <div className="bg-[#FFFFFF] w-[1000px] h-[280px]  absolute -mt-[500px] ml-32 ">
                <h2 className="pt-[100px] text-center text-5xl font-medium text-black">Bistro Boss</h2>
                <p className="text-center text-base font-normal text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
            </div>
            
        </div>
    );
};

export default ExtraSection;