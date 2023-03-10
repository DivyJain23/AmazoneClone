import Image from 'next/image'
import React from 'react'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                {/* Image */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        className="cursor-pointer h-12"
                    />
                </div>

                {/* Search */}
                <div className='hidden sm:flex items-center h-12 rounded-md flex-grow  cursor-pointer bg-yellow-400 hover:bg-yellow-500 mx-3'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
                        type="text"
                    />
                    <SearchIcon className='h-12 p-4'/>
                </div>

                {/* Right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-normal'>
                    <div className='link'>
                        <p>Hello Divy Jain</p>
                        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                            0
                        </span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <div>

            </div>
        </header>
    )
}

export default Header