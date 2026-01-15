import { useEffect, useState } from "react";
import BabyGirl from "./assets/hi_baby_girl.gif";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); 
        return () => clearTimeout(timer);
    }, []);
    
    if (!isLoading) return null;

    return (
        <div className="flex flex-col space-y-8 items-center justify-center min-h-screen">
            <img src={BabyGirl} alt="cute baby girl say hi" className="w-30" />
            <div class="loader"></div>
        </div>
    );
}
