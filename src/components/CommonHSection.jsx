import { Link } from "react-router-dom";

const CommonHSection = ({title, subTitle, btnText}) => {
    return (
        <section className="bg-black text-white">
            <div className="sw h-[80vh]">
                    <div className="flex flex-col gap-5 items-center text-center">
                        <h2 className="f2 text-[10vh] leading-[80px]">{title}</h2>
                        <p className="text-lg w-2/3">{subTitle}</p>
                        
                        <div>
                            <Link to='/dashboard' className="btn1">{btnText}</Link>
                        </div>
                    </div>
            </div> 
        </section>
    );
};

export default CommonHSection;