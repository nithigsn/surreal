import { useUser } from "../Contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import CAPS from "../Modules/Caps";
import SWEATSHIRTS from '../Modules/Sweatshirts';
import TSHIRTS from '../Modules/Tshirts';

export default function Main() {

    const { products } = useUser();

    const handleClick = (itemType, index) => {
        if (itemType === 'hoodie') {
            navigate(`/hoodie/${index}`);
            // Navigate to the hoodie detail page
        } else if (itemType === 'caps') {
            navigate(`/caps/${index}`); // Navigate to the cap detail page
        }
    };

    const navigateCaps = (index) => {
        navigate(`/caps/${index}`); // Navigate to the detail page with the hoodie index as a parameter
    };


    // Slice Array and Show 
    const slicedArr = products.slice(0, 4);
    const slicedCaps = CAPS.slice(0, 4);
    const slicedSweatShirts = SWEATSHIRTS.slice(0, 4);
    const slicedTshirts = TSHIRTS.slice(0, 4);







    const navigate = useNavigate();




    return (
        <div className="w-full h-full flex justify-center">

            <div className="w-[90vw] h-full flex flex-col gap-y-7">

                <p className="text-center">Free shipping above 1,699</p>



                <div className='flex flex-col w-full items-center  bg-blue-500 p-2'>
                    <h3>Men's Bestseller Alert</h3>
                    <p>Starting at 399,grab them before they're gone!</p>
                </div>

                <div className="flex gap-2">
                    <p>Finest Hoodies</p> <i className="fa-solid fa-heart"></i>
                </div>


                <div className="w-[90vw] flex flex-wrap gap-2   justify-center" >


                    {
                        slicedArr.map((hoodie, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[80px] sm:h-[150px]  sm:w-[120px]  flex flex-col items-center bg-slate-100  rounded-md ">

                                    <img src={hoodie.url} alt="" className="h-20 w-18 sm:h-28  " onClick={() => handleClick("hoodie", index)} />
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


                {/* 2nd Box */}

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
                        slicedCaps.map((item, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[80px] sm:h-[150px]  sm:w-[120px] flex flex-col items-center bg-slate-100 rounded-md cursor-pointer" onClick={() => navigateCaps(index)}>
                                    <img src={item.url} alt="" className="h-20 w-18 sm:h-28" />
                                    <div className="w-[150px] flex justify-end ">
                                    </div>
                                    <div className="items-start w-[80px]">
                                        <p className="pl-2 text-[10px]">{item.name}</p>
                                        <p className="pl-2 text-[9px]">Rs {item.price}</p>
                                    </div>

                                </div>

                            );
                        })
                    }
                </div>



                {/* 3rd Box */}

                <div className="flex flex-col items-center justify-center w-full h-16 bg-blue-300 box-border p-3 ">
                    <h5>Grab a deal while it's available !</h5>
                    <p className="text-center"> Enjoy cashbacks and Buy one Get One Offer before its gone.                    </p>

                </div>


                <div className="flex gap-2">
                    <p>Finest Sweatshirts</p> <i className="fa-solid fa-heart"></i>
                </div>


                <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >


                    {
                        slicedSweatShirts.map((item, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[90px] sm:h-[150px]  sm:w-[120px] flex flex-col items-center bg-slate-100 rounded-md cursor-pointer" onClick={() => navigateCaps(index)}>
                                    <img src={item.url} alt="" className="h-20 w-18 sm:h-32" />
                                    <div className="w-[150px] flex justify-end ">
                                    </div>
                                    <div className="items-start w-[90px]">
                                        <p className="pl-2 text-[10px]">{item.name}</p>
                                        <p className="pl-2 text-[9px]">Rs {item.price}</p>
                                    </div>

                                </div>

                            );
                        })
                    }
                </div>



                {/* Box 4 */}

                <div className="flex flex-col items-center justify-center w-full h-16 bg-green-300 box-border p-3 ">
                    <h5>Members Contest Alert !</h5>
                    <p className="text-center">Win an exclusive invite to the designer launch
                        party of the year on 22nd August
                    </p>

                </div>


                <div className="flex gap-2">
                    <p>Finest Tshirts</p> <i className="fa-solid fa-heart"></i>
                </div>


                <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >


                    {
                        slicedTshirts.map((item, index) => {
                            return (
                                <div key={index} className="h-[100px] w-[90px] sm:h-[150px]  sm:w-[120px] flex flex-col items-center bg-slate-100 rounded-md cursor-pointer" onClick={() => navigateCaps(index)}>
                                    <img src={item.url} alt="" className="h-20 w-18 sm:h-36" />
                                    <div className="w-[150px] flex justify-end ">
                                    </div>
                                    <div className="items-start w-[90px]">
                                        <p className="pl-2 text-[10px]">{item.name}</p>
                                        <p className="pl-2 text-[9px]">Rs {item.price}</p>
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