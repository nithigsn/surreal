import { useUser } from "../Contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import CAPS from "../Modules/Caps";

export default function CapsPage() {

  const { addToCart, addToFavourites, editFavourites, favourites  } = useUser();


  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/caps/${index}`); // Navigate to the detail page with the Caps index as a parameter
  };


console.log(favourites);


  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-center">
        <p>Capss Page</p>
      </div>
      <div className="w-[90vw] flex flex-wrap gap-2 justify-center" >
        {
          CAPS.map((caps, index) => {
            return (
              <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                <img src={caps.url} alt="" className="h-40 " onClick={() => handleClick(index)} />
                <div className="w-[150px] flex justify-end ">

                  {
                    favourites.includes(caps) ? <i className="fa-solid fa-heart text-end pr-2" onClick={() => editFavourites(index)}></i> : <i className="fa-regular fa-heart text-end pr-2" onClick={() => addToFavourites(caps)}></i>
                  }

                </div>
                <div className="items-start w-[150px]">
                  <p className="pl-2">{caps.name}</p>
                  <p className="pl-2">{caps.price}</p>
                </div>
                <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6 rounded-sm mt-3">
                  <button disabled={favourites.includes(caps.name)} onClick={() => addToCart(caps)}> Add to</button>
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
