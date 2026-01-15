import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
    const [captchaValue, setCaptchaValue] = useState(null);

    const formRef = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
    alert("Please verify you are human first!");
    return;
  }

    emailjs.sendForm(
        "service_pkbxzgj",
        "template_fwq1i79",
        formRef.current,
        "MuAKOYmL3gf9GVFg8"
    )
    .then(() => {
        alert("Message sent successfully 💌");
        e.target.reset();
    })
    .catch(() => {
        alert("Something went wrong 😢");
    });
  };
    return(
        <section id="contact" className="min-h-screen relative py-24 text-white flex justify-center items-center">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
                            Let's get in touch
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-md  leading-relaxed">
                            Thanks for stopping by! I’m open to conversations about projects, collaborations, or ideas. If you think we’d be a good fit, let’s talk.
                        </p>
                    </div>
                    <div>
                        <form ref={formRef}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-10 md:pt-12">
                            <div className="relative">
                                <input 
                                className="text-[16px] py-2.5 pl-1.5 pr-2.5 block border-b bg-transparent w-full border-[#515151] outline-none"
                                type="text" 
                                name="name"
                                required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                            </div>
                            <div className="relative">
                                <input 
                                className="text-[16px] py-2.5 pl-1.5 pr-2.5 block border-b bg-transparent w-full border-[#515151] outline-none"
                                type="email" 
                                name="email"
                                required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Email</label>
                            </div>
                            <div className="relative">
                                <input
                                className="text-[16px] py-2.5 pl-1.5 pr-2.5 block border-b bg-transparent w-full border-[#515151] outline-none"
                                type="message" 
                                name="message"
                                required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Message</label>
                            </div>
                            <div>
                                <ReCAPTCHA
                                sitekey="6LfFXkUsAAAAANcHDQuFAdJ-5Fb0_OLMJ3xLN2pJ"
                                onChange={(value) => setCaptchaValue(value)}
                                />
                            </div>
                            <div className="flex justify-start items-center">
                            <button 
                            type="submit"
                            className="text-[20px] bg-[#6967FB] 
                            py-3 px-4 pl-3.5 flex items-center border-none rounded-full overflow-hidden
                            transition-all duration-200 cursor-pointer">
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Get in touch</span>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}