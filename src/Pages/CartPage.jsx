import { useUser } from "../Contexts/UserProvider";

export default function CartPage() {

    const { cart, editCart,  favourites, editFavourites, addToFavourites } = useUser()
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>Carts</p>
            </div>
            <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >
                {
                    cart.map((hoodie, index) => {
                        return (
                            <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                                <img src={hoodie.url} alt="" className="h-40 w-36" />
                                <div className="w-[150px] flex justify-end ">

                                    {
                                        favourites.includes(hoodie) ? <i className="fa-solid fa-heart text-end pr-2" onClick={() => editFavourites(index)}></i> : <i className="fa-regular fa-heart text-end pr-2" onClick={() => addToFavourites(hoodie)}></i>
                                    }

                                </div>
                                <div className="items-start w-[150px]">
                                    <p className="pl-2">{hoodie.name}</p>
                                    <p className="pl-2">{hoodie.price}</p>
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

            <div>

            </div>

        </div>

    );
}