import { useUser } from "../Contexts/UserProvider";

export default function LikedPage() {

    const { favourites, editFavourites, addToCart } = useUser();


    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>Here's Your Favourites</p>
            </div>



            {
                favourites.length === 0 &&

                <div className="h-[50vh] w-full flex flex-col items-center justify-center ">

                    <p>Hey ! Your Favourite Colour is <span className="text-red-500">Red</span> Right ?</p>
                    <p>Serach Red Hoodie or Cap </p>


                </div>
            }
            <div className="w-[90vw] flex flex-wrap gap-2 justify-center big:w-[60vw]" >
                {
                    favourites.map((hoodie, index) => {
                        return (
                            <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                                <img src={hoodie.url} alt="" className="h-40 " />

                                <div className="flex justify-between w-[150px]">

                                    <div>
                                        <p className="pl-2">{hoodie.name}</p>
                                        <p className="pl-2">{hoodie.price}</p>
                                    </div>

                                    <div className=" ">

                                        {
                                            favourites.includes(hoodie) && <i className="fa-solid fa-heart text-red-500 text-end pr-2 cursor-pointer" onClick={() => editFavourites(hoodie)}></i>
                                        }

                                    </div>


                                </div>
                                <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6 rounded-sm mt-3 cursor-pointer">
                                    <button onClick={() => addToCart(hoodie)}> Add to</button>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

            <div>

            </div>

        </div>

    );
}