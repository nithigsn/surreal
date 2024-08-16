import { useUser } from "../Contexts/UserProvider";

export default function CartPage() {

    const { cart, editCart } = useUser()
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>Cart Page</p>
            </div>
            <div className="w-[90vw] flex flex-wrap gap-2 justify-center ">
                {
                    cart.map((hoodie, index) => {
                        return (
                            <div key={index} className="h-[281px] w-[187px] flex flex-col items-center rounded-sm bg-white ">
                                <img src={hoodie.url} alt="" className="h-44 w-40" />
                                <div className="w-[187px] flex justify-end"><i className="fa-regular fa-heart text-end pr-2"></i></div>
                                <div className="items-start w-[187px]">
                                    <p className="pl-2">{hoodie.name}</p>
                                    <p className="pl-2">{hoodie.price}</p>
                                </div>
                                <button className="" onClick={()=>editCart(index)}>Remove</button>
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