import { useLocation, useNavigate } from "react-router-dom";

export default function Links() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-full h-16 flex items-center justify-center gap-4 cursor-pointer">
            <p onClick={() => navigate('/hoodie')} className={`${location.pathname === '/hoodie' ? "underline" : ""}`}>
                Hoodie
            </p>
            <p onClick={() => navigate('/tshirt')} className={`${location.pathname === '/tshirt' ? "underline" : ""}`}>
                Tshirt
            </p>
            <p onClick={() => navigate('/sweatshirts')} className={`${location.pathname === '/sweatshirts' ? "underline" : ""}`}>
                Sweatshirt
            </p>
            <p onClick={() => navigate('/caps')} className={`${location.pathname === '/caps' ? "underline" : ""}`}>
                Caps
            </p>
        </div>
    );
}
