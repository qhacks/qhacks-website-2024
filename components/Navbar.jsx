"use client";
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar(){
    return(
        <div>
            <div className="md:hidden">
                <MobileNav/>
            </div>
            <div className="hidden md:block">
                <DesktopNav/>
            </div>
        </div>
    );
}