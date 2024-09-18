import { useUser } from "../Contexts/UserProvider";

export default function CartPage() {

    const { cart, editCart, favourites, editFavourites, addToFavourites } = useUser();

    const price = cart.reduce((total, item) => total + item.price, 0);


    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>Carts</p>
            </div>

            <div className="flex flex-col items-center justify-center w-[90vw] big:w-[60vw]">

                {
                    cart.length === 0 ? <div className="h-96 flex items-center justify-center"><img src="https://img.icons8.com/?size=100&id=Ot2P5D5MPltM&format=png&color=000000" alt="" /></div> : <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >
                        {
                            cart.map((hoodie, index) => {
                                return (
                                    <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                                        <img src={hoodie.url} alt="" className="h-40 " />

                                        <div className="flex justify-between w-[150px]">

                                            <div>
                                                <p className="pl-2">{hoodie.name}</p>
                                                <p className="pl-2">Rs {hoodie.price}</p>
                                            </div>

                                            <div className="">
                                                {
                                                    favourites.find((item)=> item.id === hoodie.id) ? <i className="fa-solid fa-heart text-red-500" onClick={()=>editFavourites(hoodie)}></i> : <i className="fa-regular fa-heart" onClick={()=>addToFavourites(hoodie)}></i>
                                                }

                                             

                                            </div>



                                        </div>
                                        <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6 rounded-sm mt-3">
                                            <button onClick={() => editCart(index)}> Remove from</button>
                                            <i className="fa-solid fa-bag-shopping"></i>
                                        </div>



                                    </div>
                                );
                            })
                        }
                    </div>
                }



                <div className={`${cart.length === 0 ? "hidden " : "flex gap-36 justify-center items-center bg-black text-white w-full h-10 lg:w-2/4  cursor-pointer"} `}>
                    <p>Buy</p>
                    <p>Total Price Rs:{price}</p></div>

                <div>

                </div>


            </div>
        </div>

    );
}