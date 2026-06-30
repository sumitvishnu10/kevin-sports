import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const containerRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-details > *", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
    gsap.from(".contact-form", {
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="contact-details flex flex-col justify-center">
            <span className="text-wine-red text-xs font-semibold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-semibold text-wine-red font-['Cormorant_Garamond'] mb-6 leading-tight">
              We're Here <br/> To Help
            </h1>
            <p className="text-gray text-lg leading-relaxed mb-12 font-light max-w-md">
              Have a question about our products, an order, or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-white/50">
                  <Mail className="text-wine-red" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text font-medium mb-1">Email Us</h4>
                  <p className="text-gray text-sm">support@kevinsports.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-white/50">
                  <Phone className="text-wine-red" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text font-medium mb-1">Call Us</h4>
                  <p className="text-gray text-sm">+91-98765-43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-white/50">
                  <MapPin className="text-wine-red" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text font-medium mb-1">Visit Us</h4>
                  <p className="text-gray text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray/5">
            <h3 className="text-2xl font-semibold text-text font-['Cormorant_Garamond'] mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray mb-2">First Name</label>
                  <input type="text" required className="w-full bg-cream rounded-xl py-3 px-4 outline-none border border-transparent focus:border-wine-red/20 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-cream rounded-xl py-3 px-4 outline-none border border-transparent focus:border-wine-red/20 transition-colors text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-gray mb-2">Email Address</label>
                <input type="email" required className="w-full bg-cream rounded-xl py-3 px-4 outline-none border border-transparent focus:border-wine-red/20 transition-colors text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-gray mb-2">Message</label>
                <textarea required rows="4" className="w-full bg-cream rounded-xl py-3 px-4 outline-none border border-transparent focus:border-wine-red/20 transition-colors text-sm resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center ${submitted ? 'bg-green-600 text-white' : 'bg-wine-red hover:bg-wine-dark text-white shadow-lg shadow-wine-red/20'}`}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}