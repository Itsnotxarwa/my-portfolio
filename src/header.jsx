
export default function Header() {
    return(
        <header className="sticky top-0 z-50 bg-black py-4">
            <div className="max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="flex justify-between">
                <div>
                    <img className="w-12" src="../logo transparent.png" alt="" />
                </div>
                <div className="text-white flex gap-6">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>
                </div>
            </div>
        </header>
    )
}