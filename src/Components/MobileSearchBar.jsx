import { useState } from "react";
import { useUser } from "../Contexts/UserProvider";

export default function MobileSearchBar({ search, setSearch }) {

    const { ALLPRODUCTS, favourites, addToCart, editFavourites, addToFavourites } = useUser();
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            const searchResult = ALLPRODUCTS.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())  // Use .name to search in product names
            );
            setFilteredItems(searchResult);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="flex flex-col h-screen w-full items-center">

            <div className="flex absolute top-0 z-30 w-full h-16 items-center bg-white justify-center">
                <div className="flex w-[90vw] items-center justify-around">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        onKeyDown={handleSearch}
                        placeholder="Search"
                        className="w-[80%] searchbar"
                    />
                    <i className="fa-solid fa-x" onClick={() => setSearch(!search)}></i>
                </div>
            </div>

            <div className="w-full h-screen flex flex-wrap gap-2 justify-center z-30 bg-white">
                {filteredItems.map((hoodie, index) => (
                    <div key={index} className="h-[281px] w-[180px] flex flex-col items-center bg-slate-100 rounded-md">
                        <img src={hoodie.url} alt="" className="h-40" />
                        <div className="w-[150px] flex justify-end">
                            {favourites.find((item) => item.id === hoodie.id) ? (
                                <i className="fa-solid fa-heart text-end text-red-500 pr-2" onClick={() => editFavourites(hoodie)}></i>
                            ) : (
                                <i className="fa-regular fa-heart text-end pr-2" onClick={() => addToFavourites(hoodie)}></i>
                            )}
                        </div>
                        <div className="items-start w-[150px]">
                            <p className="pl-2">{hoodie.name}</p>
                            <p className="pl-2">{hoodie.price}</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center bg-black text-xs text-white w-28 h-6 rounded-sm mt-3">
                            <button onClick={() => addToCart(hoodie)}>Add to</button>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
