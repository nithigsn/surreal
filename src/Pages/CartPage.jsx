import { useUser } from "../Contexts/UserProvider";

export default function CartPage() {

    const { cart, editCart, favourites, editFavourites, addToFavourites } = useUser();

    const price = cart.reduce((total, item) => total + item.price, 0);


    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>Carts</p>
            </div>

            <div className="flex flex-col items-center justify-center w-[90vw]">

                {
                    cart.length === 0 ? <div className="h-96 flex items-center justify-center"><img src="https://img.icons8.com/?size=100&id=Ot2P5D5MPltM&format=png&color=000000" alt="" /></div> : <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >
                        {
                            cart.map((hoodie, index) => {
                                return (
                                    <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                                        <img src={hoodie.url} alt="" className="h-40 w-36" />
                                        <div className="w-[150px] flex justify-end ">

                                            {
                                                favourites.includes(hoodie) ? <i className="fa-solid fa-heart text-end pr-2 cursor-pointer" onClick={() => editFavourites(index)}></i> : <i className="fa-regular fa-heart text-end pr-2 cursor-pointer" onClick={() => addToFavourites(hoodie)}></i>
                                            }

                                        </div>
                                        <div className="items-start w-[150px]">
                                            <p className="pl-2">{hoodie.name}</p>
                                            <p className="pl-2">Rs {hoodie.price}</p>
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