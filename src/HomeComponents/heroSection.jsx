import { MapPin } from 'lucide-react';
import mySelfImage from "../assets/myself2.jpg";
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {

    return(
        <section id="home" className="relative pt-14 pb-32 bg-black min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex flex-col justify-center items-center">
                    <div>
                    <img 
                    src={mySelfImage} 
                    alt=""
                    className="w-65 rounded-full border-4 border-white" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className='text-white text-center mt-4 md:text-xl text-lg'>
                            <span className="text-[#6967FB]  font-[poppins]">&lt;</span>
                            <span className="text-[#FFE4F2]  font-[poppins]">code</span>
                            <span className="text-[#6967FB]  font-[poppins]">&gt;</span>
                            <span className='font-[poppins]'>
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
                        </span>
                            <span className="text-[#6967FB]  font-[poppins]">&lt;/</span>
                            <span className="text-[#FFE4F2]  font-[poppins]">code</span>
                            <span className="text-[#6967FB]  font-[poppins]">&gt;</span>
                        </div>
                        <h1 className="font-bold text-3xl  font-[poppins] lg:text-7xl md:text-5xl text-white mt-3">Marwa Kouachkhia</h1>
                        <div className='text-white/60 font-[poppins] flex gap-1 mt-4 text-lg font-extralight'>
                            <MapPin />
                            Algeria
                        </div>
                    </div>
                    
                    <ul className="wrapper">
                        <li>
                            <a 
                            className='icon github'
                            href="https://github.com/Itsnotxarwa" 
                            target="_blank">
                            <span className="tooltip">Github</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" height="1.6em" class="github">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                            </a>
                        </li>
                        <li className="icon instagram">
                            <a 
                            className='icon linkedin'
                            href="https://www.instagram.com/merve.tech" 
                            target="_blank">
                            <span className="tooltip">Instagram</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.2em"
                            fill="currentColor"
                            className="bi bi-instagram"
                            viewBox="0 0 16 16"
                            >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                ></path>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                            className='icon linkedin'
                            href="https://www.linkedin.com/in/marwa-kouachkhia-6bb816219" 
                            target="_blank">
                            <span className="tooltip">Linkedin</span>
                            <svg className='linkedin' height="1.4em"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                        </li>
                        <li className="icon tiktok">
                            <a 
                            className='icon linkedin'
                            href="https://www.tiktok.com/@merve.tech" 
                            target="_blank">
                            <span className="tooltip">Tiktok</span>
                            <svg height="1.9em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M38.077,15.854c-2.008-0.061-3.827-1.021-5.198-2.309c-0.748-0.715-1.34-1.577-1.739-2.531 c-0.399-0.954-0.596-1.981-0.58-3.014h-5.588v20.83c0,3.514-2.096,5.589-4.697,5.589c-0.626,0.014-1.248-0.097-1.83-0.327
                            c-0.582-0.229-1.112-0.573-1.56-1.011c-0.447-0.438-0.802-0.961-1.045-1.538c-0.242-0.577-0.367-1.197-0.367-1.823
                            c0-0.626,0.125-1.245,0.367-1.822c0.242-0.577,0.597-1.1,1.045-1.538c0.447-0.438,0.978-0.782,1.56-1.011
                            c0.582-0.23,1.204-0.341,1.83-0.327c0.518,0.005,1.031,0.096,1.519,0.27v-5.692c-0.499-0.109-1.008-0.163-1.519-0.161
                            c-2.033,0.001-4.02,0.605-5.711,1.736c-1.69,1.131-3.007,2.737-3.784,4.616c-0.778,1.879-0.981,3.947-0.583,5.94
                            c0.398,1.994,1.378,3.826,2.816,5.264c1.438,1.438,3.27,2.417,5.264,2.813c1.994,0.396,4.061,0.192,5.939-0.586
                            c1.878-0.779,3.484-2.096,4.614-3.787c1.129-1.69,1.733-3.677,1.735-5.71v-10.885c2.166,1.51,4.753,2.209,7.515,2.255V15.854z"/>
                            </svg>
                            </a>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </section>
    )
}