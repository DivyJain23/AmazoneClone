 import Image from 'next/image'
import React from 'react'
 
 function Header() {
   return (
    <header>
        {/* Top Nav */}
        <div>
            <div>
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                />
            </div>
        </div>
        {/* Bottom Nav */}
        <div>Bottom</div>
    </header>
   )
 }
 
 export default Header