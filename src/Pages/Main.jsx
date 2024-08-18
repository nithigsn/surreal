import { useUser } from "../Contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import CAPS from "../Modules/Caps";

export default function Main() {
    const { products } = useUser();

    const handleClick = (itemType, index) => {
        if (itemType === 'hoodie') {
            navigate(`/hoodie/${index}`); // Navigate to the hoodie detail page
        } else if (itemType === 'caps') {
            navigate(`/caps/${index}`); // Navigate to the cap detail page
        }
    };

    // Slice Array and Show 
    const slicedArr = products.slice(0, 4);
    const slicedCaps = CAPS.slice(0, 4);


    const navigate = useNavigate();




    return (
        <div className="w-full h-full flex justify-center">

            <div className="w-[80vw] h-full flex flex-col gap-y-7">

                <p className="text-center">Free shipping above 1,699</p>



                <div className='flex flex-col w-full items-center  bg-blue-500 p-2'>
                    <h3>Men's Bestseller Alert</h3>
                    <p>Starting at 399,grab them before they're gone!</p>
                </div>

                <div className="flex gap-2">
                    <p>Finest Hoodies</p> <i className="fa-solid fa-heart"></i>
                </div>


                <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >


                    {
                        slicedArr.map((hoodie, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[80px] flex flex-col items-center bg-slate-100 rounded-md">
                                    <img src={hoodie.url} alt="" className="h-20 w-18" onClick={() => handleClick("hoodie", index)} />
                                    <div className="w-[150px] flex justify-end ">



                                    </div>
                                    <div className="items-start w-[80px]">
                                        <p className="pl-2 text-[10px]">{hoodie.name}</p>
                                        <p className="pl-2 text-[9px]">Rs {hoodie.price}</p>
                                    </div>


                                </div>
                            );
                        })
                    }
                </div>

                <div className="flex flex-col items-center justify-center w-full h-16 bg-orange-400 box-border p-3 ">
                    <h5>Members Contest Alert !</h5>
                    <p className="text-center">Win an exclusive invite to the designer launch
                        party of the year on 22nd August
                    </p>

                </div>


                <div className="flex gap-2">
                    <p>Finest Caps</p> <i className="fa-solid fa-heart"></i>
                </div>


                <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >


                    {
                        slicedCaps.map((hoodie, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[80px] flex flex-col items-center bg-slate-100 rounded-md" onClick={() => handleClick("caps", index)}>
                                    <img src={hoodie.url} alt="" className="h-20 w-18"  />
                                    <div className="w-[150px] flex justify-end ">



                                    </div>
                                    <div className="items-start w-[80px]">
                                        <p className="pl-2 text-[10px]">{hoodie.name}</p>
                                        <p className="pl-2 text-[9px]">Rs {hoodie.price}</p>
                                    </div>


                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}