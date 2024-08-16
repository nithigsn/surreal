import HOODIES from "../Modules/Items";
import { useUser } from "../Contexts/UserProvider";

export default function HoodiesPage() {
  const { addToCart, addToFavourites, editFavourites, favourites } = useUser();





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
                    favourites.includes(hoodie.name) ? <i className="fa-solid fa-heart text-end pr-2" onClick={() => editFavourites(index)}></i> : <i className="fa-regular fa-heart text-end pr-2" onClick={() => addToFavourites(hoodie)}></i>
                  }

                </div>
                <div className="items-start w-[187px]">
                  <p className="pl-2">{hoodie.name}</p>
                  <p className="pl-2">{hoodie.price}</p>
                </div>
                <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6">
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
