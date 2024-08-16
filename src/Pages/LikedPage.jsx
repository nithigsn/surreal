import { useUser } from "../Contexts/UserProvider";

export default function LikedPage() {

    const { like, editLike ,addToLike} = useUser()
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-center">
                <p>like Page</p>
            </div>
            <div className="w-[90vw] flex flex-wrap gap-2 justify-center ">
                {
                    like.map((hoodie, index) => {
                        return (
                            <div key={index} className="h-[281px] w-[187px] flex flex-col items-center rounded-sm bg-white ">
                                <img src={hoodie.url} alt="" className="h-44 w-40" />
                                <div className="w-[187px] flex justify-end">
                                    {
                                        like.includes(hoodie) && <i className="fa-solid fa-heart text-end pr-2" onClick={()=>editLike(index)}></i>
                                    }
                                    
                                    </div>
                                <div className="items-start w-[187px]">
                                    <p className="pl-2">{hoodie.name}</p>
                                    <p className="pl-2">{hoodie.price}</p>
                                </div>
                                <button className="" onClick={()=>editLike(index)}>Remove</button>
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