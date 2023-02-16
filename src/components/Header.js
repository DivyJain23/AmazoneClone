 import Image from 'next/image'
import React from 'react'
 
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
                    className="cursor-pointer"
                />
            </div>

            {/* Search */}
            <div>
                <input type="text"/>
            </div>
        </div>
        {/* Bottom Nav */}
        <div>

        </div>
    </header>
   )
 }
 
 export default Header