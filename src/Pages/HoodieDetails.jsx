import { useParams } from "react-router-dom";
import HOODIES from "../Modules/Items";
import { useUser } from "../Contexts/UserProvider";
import { useState, useEffect } from "react";

export default function HoodieDetails() {
    const [hoodieColor, setHoodieColor] = useState('');
    const { products } = useUser();
    const { id } = useParams();
    const hoodie = HOODIES[id];

    useEffect(() => {
        hoodieColorFind();
    }, [hoodie, products]);

    function hoodieColorFind() {
        const matchedProduct = products.find(product => product.id === hoodie.id);
        if (matchedProduct) {
            setHoodieColor(matchedProduct.color); // Assuming products have a 'color' property
        }
    }

    if (!hoodie) {
        return <p>Hoodie not found</p>;
    }

    return (
        <div className="h-full w-full flex justify-center">
            <div className="flex flex-col w-[90vw] h-full gap-y-3">
                <div className="flex justify-center text-start">
                    <img src={hoodie.url} alt={hoodie.name} className="h-50 w-44" />
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div className="w-full h-55 flex justify-center gap-2">
                    <img src={hoodie.url} alt="" className="h-44 w-40" />
                    <img src={hoodie.url} alt="" className="h-44 w-32" />
                </div>
                <div>
                    <h1>{hoodie.name}</h1>
                    <p>MRP inclusive of all taxes</p>
                    <p>Rs. {hoodie.price}.00</p>
                </div>
                <div>
                    <h3>Color</h3>
                    <div className="flex justify-center gap-3">
                        {
                            products.map((value, index) => {
                                return (
                                    <div key={index} className="flex flex-col items-center gap-y-2 cursor-pointer ">
                                        
                                        <img src={value.url} alt={value.color} className='size-10' />
                                        <div><p>{value.color}</p></div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex gap-1 items-center justify-center w-full h-8 bg-black text-white sticky top-[90%]">
                    <i className="fa-solid fa-shopping-bag"></i>
                    Add
                </div>
                <h3>Sizes</h3>
                <div className="flex justify-around">
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XXS</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XS</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">S</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">M</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">L</div>
                    <div className="h-7 w-10 text-xs flex items-center border border-black justify-center">XL</div>
                </div>
                <div>
                    <div><p>Find in store</p></div>
                    <div><p>Delivery Time : 2-7 Days</p></div>
                </div>
                <div><p>(2876 Reviews)</p></div>
            </div>
        </div>
    );
}
