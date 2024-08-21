export default function MobileSearchBar({ search, setSearch }) {

    return (
        <div className="flex absolute top-0 z-30 w-full h-16 items-center  bg-white justify-center">

            <div className="flex w-[90vw] items-center justify-around">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" className="w-[80%] searchbar" />
                <i className="fa-solid fa-x" onClick={() => setSearch(!search)}></i>
            </div>



        </div>
    );
}