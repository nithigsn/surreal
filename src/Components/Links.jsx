import { useNavigate } from "react-router-dom";

export default function Links() {

    const navigate = useNavigate();
    return (
        <div className="w-full h-16  flex items-center justify-center gap-4 cursor-pointer" >
            <p onClick={() => navigate('/hoodie')}>Hoodie</p>
            <p onClick={() => navigate('/tshirt')}>Tshirt</p>
            <p onClick={() => navigate('/sweatshirts')}>Sweatshirt</p>
        </div>
    );
}