import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import mySelfImage from "../assets/ecbe78b49d10a92e67105394ed0f1457.jpg";
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {

    return(
        <section className="relative pt-14 pb-32 bg-black min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex flex-col justify-center items-center">
                    <div>
                    <img 
                    src={mySelfImage} 
                    alt=""
                    className="w-50 rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className='text-white text-center mt-4 text-xl'>
                            <span className="text-[#6967FB]">&lt;</span>
                            <span className="text-[#FFE4F2]">code</span>
                            <span className="text-[#6967FB]">&gt;</span>
                        <TypeAnimation
                            sequence={[
                                "Hello Wor- No ...", 1000,
                                "Hello beautiful people !", 1000,
                                "Welcome to my portfolio.", 1000,
                                "I like to make websites.", 1000,
                                "Also web applications.", 1000,
                                "I do other stuff as well", 1000,
                                "...but mostly not relevant", 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                            <span className="text-[#6967FB]">&lt;/</span>
                            <span className="text-[#FFE4F2]">code</span>
                            <span className="text-[#6967FB]">&gt;</span>
                        </div>
                        <h1 className="font-bold text-5xl lg:text-7xl md:text-6xl text-white mt-3">Marwa Kouachkhia</h1>
                        <div className='text-[#333] flex gap-1 mt-4 text-lg font-extralight'>
                            <MapPin />
                            Algeria
                        </div>
                    </div>
                    <div className='mt-6 flex gap-7 '>
                        <a href="">
                            <FaGithub size={24} className='text-white hover:scale-105' />
                        </a>
                        <a href="">
                            <FaInstagram size={24} className='text-white hover:scale-105' />
                        </a>
                        <a href="">
                            <FaLinkedin size={24}  className='text-white hover:scale-105'  />
                        </a>
                        <a href="">
                            <FaTiktok size={24}  className='text-white hover:scale-105'  />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}