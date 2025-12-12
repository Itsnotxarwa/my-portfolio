import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className="sticky top-0 z-50 bg-black py-4">
            <div className="max-w-7xl px-12 md:px-16 lg:px-20">
                <div className="flex justify-between">
                <div>
                    <img className="w-12" src="../logo transparent.png" alt="" />
                </div>
                <div className="hidden md:flex text-[#333] text-xl gap-15 nav-links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>

                    {/* Mobile Menu Button */}
                <div className="flex items-center justify-center">
                <div
                className={`burger md:hidden cursor-pointer`}
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={menuOpen ? "rotate-45" : ""}></span>
                    <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
                    <span className={menuOpen ? "-rotate-45" : ""}></span>
                </div>
                {menuOpen && (
                <div className="md:hidden absolute top-16 right-10 z-50 bg-black px-4 pt-2 pb-4 flex flex-col gap-2 text-white text-lg">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
                )}
                </div>
                </div>
            </div>
        </header>
    )
}