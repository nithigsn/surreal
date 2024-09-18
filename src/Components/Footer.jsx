export default function Footer() {
    return (
        <div className="bottom-0 w-full h-96  flex justify-center items-center bg-[#e4e4e4] mt-10 relative -z-20">


            <div className=" w-[90vw] flex flex-col gap-y-5 box-border p-2 ">

                <div>
                    <div>
                        <h6>SHOP</h6>
                    </div>
                    <div>
                        <h6>CORPORATE INFO</h6>
                    </div>
                    <div>
                        <h6>HELP</h6>
                    </div>
                </div>

                <div className="text-center"><p>Sign up now be the first to know about exclusive offers,
                    latest fashion news & style tips</p>
                </div>
                <div className="flex justify-center items-center gap-2"><h3>Read More </h3><i className="fa-solid fa-arrow-right"></i></div>

                <div className="flex w-full justify-center gap-3">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-facebook"></i>

                </div>

                <div className="text-center">
                    <p>The Content of this site is copyright protected and is the property of Surreal Store PVT LTD</p>
                </div>

                <div className="text-center">
                    <p>Surreal Store</p>
                </div>
                <div className="text-center">
                    INDIA | Rs
                </div>
            </div>
        </div>
    );
}