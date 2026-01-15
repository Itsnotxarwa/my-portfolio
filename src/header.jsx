import { useState } from "react";
import { Plus } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const nav = [
        {
            name: "home",
            href: "/#home"
        },
        {
            name:"about",
            href: "/#about"
        },
        { 
            name:"projects",
            href: "/#projects"
        },
        {
            name:"contact",
            href:"/#contact"
        }
    ]
    return(
        <header className="sticky top-0 z-50 bg-black/40 py-4">
            <div className="px-12 md:px-16 lg:px-20">
                <div className="flex justify-between">
                    <div>
                        <img className="w-12" src="../logo transparent.png" alt="" />
                    </div>

                    <div className="relative flex items-center">
                        <div
                        className="z-60 cursor-pointer flex items-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <div className="text-[#FFE4F2] text-xl font-medium relative">
                            <ul className="h-8 relative overflow-hidden">
                                <li className={menuOpen ? "-translate-y-full transition-transform duration-300 text-[#6967FB]" : "flex items-center transform translate-y-0 transition-transform duration-300"}>
                                    Menu
                                </li>
                                <li className={menuOpen ? "-translate-y-full transition-transform duration-300 text-[#6967FB]" : "flex items-center transform translate-y-0 transition-transform duration-300"}>
                                    Close
                                </li>
                            </ul>
                            </div>
                            <span className={menuOpen ? "rotate-45 transition-transform duration-300 text-[#6967FB]" : "transition-transform duration-300 rotate-0 text-[#ffe4f2]"}>
                                <Plus />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-full lg:w-80 bg-[#FFE4F2]
                z-0 transform transition-transform duration-200 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}></div>

            <aside
            className={`fixed top-0 right-0 h-screen w-full lg:w-130 bg-white z-40
            transform transition-transform duration-500 delay-50 p-[8em_2em_2em_2em]
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="text-black text-lg">
                    <ul className="list-none flex flex-col gap-4">
                        {nav.map((link, i) => (
                            <li
                            key={i}
                            className="overflow-hidden relative h-20">
                                <a 
                                href={link.href}
                                className={`block font-semibold text-[4rem] cursor-pointer leading-none 
                                tracking-[-2px] uppercase transition-all duration-500 ease-out
                                pr-[1.4em] hover:text-[#6967FB] 
                                ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                                 style={{ transitionDelay: `${i * 100}ms` }}>
                                        {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </header>
    )
}