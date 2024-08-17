import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserProvider';
import MobileNav from './MobileNav';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { cart } = useUser();




    return (
        <header className="w-full h-16 bg-[#faf9f8] text-black  sticky top-0">
            <nav className="w-full h-16  flex items-center justify-around" role="navigation">
                <div className="left flex items-center w-2/4 ">
                    <div className='px-1 w-5'>
                        <i className={`lg:hidden fa-solid ${menu ? "fa-x" : "fa-bars"}`} onClick={() => setMenu(!menu)}></i>
                    </div>
                     <h1 className="text-center cursor-pointer px-2 ">Surreal Store</h1>
                </div>

                <div className="right flex w-2/4 justify-end cursor-pointer">
                    <div className='flex w-24 gap-2 items-center justify-around text-black  font-thin lg:w-[300px]'>
                        <div className='flex gap-1 items-center'>
                            <i className="fa-regular fa-user" onClick={() => navigate('/profile')}></i>
                            <p className='hidden lg:block text-sm'>Sign In</p>
                        </div>
                        <div className='flex gap-1 items-center' onClick={()=>navigate('/favourite')}>
                            <i className="fa-regular fa-heart"></i>
                            <p className='hidden lg:block text-sm'>Favourites</p>
                        </div>

                        <div className='flex gap-1 items-center' onClick={() => navigate('/cart')}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p className='lg:hidden'>{cart.length}</p>
                            <p className='hidden lg:block text-sm'>Shopping Bag ({cart.length})</p>
                        </div>
                    </div>
                </div>
            </nav>

           {
            menu && <MobileNav  menu={menu} setMenu={setMenu}/> 
           }
        </header>
    );
}
