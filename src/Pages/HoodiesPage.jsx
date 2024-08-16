import HOODIES from "../Modules/Items";
import { useUser } from "../Contexts/UserProvider";

export default function HoodiesPage() {
  const { cart, addToCart, addToLike, editLike ,like } = useUser();



  console.log(HOODIES);
  console.log(cart)

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-center">
        <p>Hoodies Page</p>
      </div>
      <div className="w-[90vw] flex flex-wrap gap-2 justify-center ">
        {
          HOODIES.map((hoodie, index) => {
            return (
              <div key={index} className="h-[281px] w-[187px] flex flex-col items-center bg-red-300">
                <img src={hoodie.url} alt="" className="h-44 w-40" />
                <div className="w-[187px] flex justify-end">

                {
                 like.includes(hoodie) ? <i className="fa-solid fa-heart text-end pr-2" onClick={()=>editLike(index)}></i> : <i className="fa-regular fa-heart text-end pr-2" onClick={()=>addToLike(hoodie)}></i>
                }
                                 
                </div>
                <div className="items-start w-[187px]">
                  <p className="pl-2">{hoodie.name}</p>
                  <p className="pl-2">{hoodie.price}</p>
                </div>
                <button onClick={() => addToCart(hoodie)}>Add</button>
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
