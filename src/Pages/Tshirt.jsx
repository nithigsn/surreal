import { useUser } from "../Contexts/UserProvider";
import TSHIRTS from "../Modules/TshirtsArr";

export default function Tshirt() {
    const { addToCart } = useUser();

 
    return (
        <div>
            {
                TSHIRTS.map((value, index) => {
                    return (
                        <div key={index} className="flex gap-2">
                            <p>{value.name}</p>
                            <p>{value.price}</p>
                            <button  onClick={()=>addToCart(value)}>Add</button>

                        </div>
                    );
                })}


        </div>
    );
}