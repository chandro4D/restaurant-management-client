import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="mt-10 h-[500px] mb-20">
                <div className="w-[1280px] h-[572px] relative ">
               
                </div>
                <div className="bg-black opacity-60 w-[1000px] h-[280px]  absolute -mt-[400px] ml-32 ">
                    <h2 className="pt-[80px] text-center text-5xl font-medium text-white mb-2">{title}</h2>

                    <p className="text-center text-base font-normal text-white">{subTitle}</p>
                </div>

            </div>
        </Parallax>

    );
};

export default Cover;