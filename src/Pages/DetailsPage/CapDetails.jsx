import { useParams, useNavigate } from "react-router-dom";
import CAPS from "../../Modules/Caps";
import { useState } from "react";
import { useUser } from "../../Contexts/UserProvider";

export default function CapDetails() {

    const { favourites, addToFavourites, editFavourites } = useUser();

    const [openSections, setOpenSections] = useState({
        description: false,
        details: false,
        careGuide: false,
    });

    const navigate = useNavigate();

    const { id } = useParams();

    const Cap = CAPS[id];

    if (!Cap) {
        return <p>Cap not found</p>;
    }

    function handleOpen(section) {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    }


    const handleClick = (index) => {
        navigate(`/caps/${index}`); // Navigate to the detail page with the hoodie index as a parameter
    };

    return (
        <div className="h-full w-full flex justify-center">

            <div className="flex flex-col w-[90vw] h-full gap-y-3 lg:flex-row justify-center">

                <div className="lg:w-2/4 ">
                    <div className="flex justify-center text-start">
                        <img src={Cap.url} alt={Cap.name} className="h-50 w-44" />
                        <i className="fa-regular fa-heart hidden lg:hidden"></i>
                    </div>
                    <div className="w-full h-55 flex justify-center gap-2">
                        <img src={Cap.url} alt="" className="h-44 " />
                        <img src={Cap.url} alt="" className="h-44 " />
                    </div>

                </div>

                <div className="lg;w-2/4 flex gap-7  flex-col lg:gap-y-10">

                    <div className="flex justify-between">
                        <div>
                            <h1>{Cap.name}</h1>
                            <p>MRP inclusive of all taxes</p>
                            <p>Rs. {Cap.price}.00</p>
                        </div>

                        <div className="cursor-pointer">
                            {
                                favourites.find((item) => item.id === Cap.id) ? <i className="fa-solid fa-heart text-red-500 hiiden lg:block" onClick={() => editFavourites(Cap)}></i> : <i className="fa-regular fa-heart hiiden lg:block" onClick={() => addToFavourites(Cap)}></i>
                            }
                        </div>
                    </div>

                    <div className=" ">
                        <h3>Color</h3>
                        <div className="flex justify-center gap-3">
                            {CAPS.map((value, index) => (
                                <div key={index} className="flex flex-col items-center gap-y-1 cursor-pointer" onClick={() => handleClick(index)}>

                                    <div className="flex flex-col justify-center items-center">
                                        <img src={value.url} alt={value.color} className="size-16"/>
                                        <div><p>{value.color}</p></div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    <h3>Sizes</h3>
                    <div className="flex justify-around">
                        <div className="h-7 w-10 text-xs flex items-center border border-[gray] justify-center">M</div>
                        <div className="h-7 w-10 text-xs flex items-center border border-[gray] justify-center">L</div>
                        <div className="h-7 w-10 text-xs flex items-center border border-[gray] justify-center">XL</div>
                    </div>

                    <div className="flex gap-1 items-center justify-center w-full h-8 bg-black text-white ">
                        <i className="fa-solid fa-shopping-bag"></i>
                        Add
                    </div>

                    <div>
                        <div><p>Find in store</p></div>
                        <div><p>Delivery Time : 2-7 Days</p></div>
                    </div>

                    <div><p>(2876 Reviews)</p></div>

                    <div className="details flex flex-col h-full  ">
                        <div className={`details flex flex-col border-t-[1px] border-b-[1px] border-black justify-center lg:w-[441px] ${openSections.description ? "h-40 scale-in-ver-top" : "h-10 scale-in-ver-bottom"}`}>
                            <div className="flex justify-between" onClick={() => handleOpen('description')}>
                                <h3>Description & Fit</h3>
                                <i className={`fa-solid ${openSections.description ? 'fa-arrow-down' : 'fa-arrow-up'}`}></i>
                            </div>
                            <div className={`${openSections.description ? "block scale-in-ver-top" : "hidden"}`}>
                                <p>Cap in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.</p>
                            </div>
                        </div>

                        <div className={`details flex flex-col   border-black justify-center lg:w-[441px] ${openSections.details ? "h-40 scale-in-ver-top" : "h-10 scale-in-ver-bottom"}`}>
                            <div className="flex justify-between" onClick={() => handleOpen('details')}>
                                <h3>Details</h3>
                                <i className={`fa-solid ${openSections.details ? 'fa-arrow-down' : 'fa-arrow-up'}`}></i>
                            </div>
                            <div className={`${openSections.details ? "block " : "hidden"}`}>
                                <p>Cap in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.</p>
                            </div>
                        </div>

                        <div className={`details flex flex-col border-t-[1px] border-b-[1px] border-black justify-center lg:w-[441px]  ${openSections.careGuide ? "h-40 scale-in-ver-top" : "h-10 scale-in-ver-bottom"}`}>
                            <div className="flex justify-between" onClick={() => handleOpen('careGuide')}>
                                <h3>Care Guide</h3>
                                <i className={`fa-solid ${openSections.careGuide ? 'fa-arrow-down' : 'fa-arrow-up'}`}></i>
                            </div>
                            <div className={`${openSections.careGuide ? "block" : "hidden"}`}>
                                <p>Cap in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}