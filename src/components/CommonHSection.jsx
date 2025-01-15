
const CommonHSection = ({title, subTitle, btnText}) => {
    return (
        <section className="">
            <div className="sw">
                    <div className="flex flex-col gap-5 items-center text-center">
                        <h2 className="f2 text-[10vh] leading-[80px]">{title}</h2>
                        <p className="text-lg w-2/3">{subTitle}</p>
                        
                        <div>
                            <button className="btn1">{btnText}</button>
                        </div>
                    </div>
            </div> 
        </section>
    );
};

export default CommonHSection;