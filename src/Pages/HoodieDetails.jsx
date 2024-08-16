import { useParams } from "react-router-dom";
import HOODIES from "../Modules/Items";

export default function HoodieDetails() {

    const { id } = useParams();
    const hoodie = HOODIES[id];


    if (!hoodie) {
        return <p>Hoodie not found</p>;
    }

    return (
        <div>
            <h1>{hoodie.name}</h1>
            <img src={hoodie.url} alt={hoodie.name} />
            <p>Price: {hoodie.price}</p>

        </div>
    );
}
