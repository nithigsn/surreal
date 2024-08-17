export default function MobileNav({ menu, setMenu }) {
    return (
        <div className={`h-screen w-full flex  absolute top-0 z-10 ${menu ? "scale-in-hor-left" : "scale-in-hor-right"}`}>

            <div className="w-[90vw] h-screen bg-white flex flex-col items-center">

                <div className="flex h-screen flex-col gap-y-3 w-[80vw]">

                    <div className="flex w-full h-11  items-center justify-between">
                        <div> <div></div>
                            <p>Ladies</p>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="flex w-full h-11  items-center justify-between">
                        <div> <div></div>
                            <p>Men</p>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="flex w-full h-11  items-center justify-between">
                        <div> <div></div>
                            <p>Kids</p>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="flex w-full h-11  items-center justify-between">
                        <div> <div></div>
                            <p>Sports</p>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="flex w-full h-11 items-center justify-between">
                        <div> <div></div>
                            <p>Hot Sale</p>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>

                    <p>Customer Service</p>
                    <p>Find a store</p>
                    <p>Download IOS</p>
                    <p>Download for Android</p>
                </div>


            </div>
            <div className=" flex w-[10vw] items-center justify-center bg-transparent">
                <i className="fa-solid fa-x" onClick={() => setMenu(!menu)}></i>
            </div>


        </div>
    );
}