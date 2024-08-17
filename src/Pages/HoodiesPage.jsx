import { useUser } from "../Contexts/UserProvider";
import { useNavigate } from "react-router-dom";

export default function HoodiesPage() {

  const { addToCart, addToFavourites, editFavourites, favourites ,products } = useUser();


  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/hoodie/${index}`); // Navigate to the detail page with the hoodie index as a parameter
  };





  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-center">
        <p>Hoodies Page</p>
      </div>
      <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >
        {
          products.map((hoodie, index) => {
            return (
              <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                <img src={hoodie.url} alt="" className="h-40 w-36" onClick={() => handleClick(index)} />
                <div className="w-[150px] flex justify-end ">

                  {
                    products.includes(hoodie) === favourites.includes(hoodie) ? <i className="fa-solid fa-heart text-end pr-2" onClick={() => editFavourites(index)}></i> : <i className="fa-regular fa-heart text-end pr-2" onClick={() => addToFavourites(hoodie)}></i>
                  }

                </div>
                <div className="items-start w-[150px]">
                  <p className="pl-2">{hoodie.name}</p>
                  <p className="pl-2">{hoodie.price}</p>
                </div>
                <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6 rounded-sm mt-3">
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
