import { useParams } from "react-router-dom";
import HOODIES from "../Modules/Items";
import { useUser } from "../Contexts/UserProvider";

export default function HoodieDetails() {

    const { products } = useUser();

    const { id } = useParams();
    const hoodie = HOODIES[id];


    if (!hoodie) {
        return <p>Hoodie not found</p>;
    }

    return (
        <div className="h-full w-full flex justify-center">

            <div className="flex flex-col w-[90vw] h-full gap-y-3 ">

                <div className="flex justify-center text-start">

                    <img src={hoodie.url} alt={hoodie.name} className="h-50 w-44 " />
                    <i className="fa-regular fa-heart"></i>

                </div>
                {/* <div className="w-full h-55 flex justify-center gap-2 ">
                    <img src={hoodie.url} alt="" className="h-44 w-40 " /><img src={hoodie.url} alt="" className="h-44 w-32 " />
                </div> */}

                <div>
                    <h1>{hoodie.name}</h1>
                    <p>MRP inclusive of all taxes</p>
                    <p>Rs. {hoodie.price}.00</p>
                </div>

                <div>
                    <h3>Color</h3>
                    <div className="flex justify-center gap-3">
                        {
                            products.map((value, index) => {
                                return (
                                    <div key={index} className="">
                                        <img src={value.url} alt="" srcset="" className=" size-10" />
                                    </div>
                                );
                            })
                        }
                    </div>



                </div >


                <h3>Sizes</h3>

                <div className="flex justify-around">

                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XXS</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XS</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">S</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">M</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">L</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XL</div>

                </div>

                <div className="flex gap-1 items-center justify-center w-full h-8 bg-black text-white  sticky top-1/2">
                    <i className="fa-solid fa-shopping-bag"></i>
                    Add
                </div>

                





                <div >

                </div>



            </div>
        </div>
    );
}
