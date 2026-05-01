import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
        
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              <span className="text-green-500">Qurbani</span>Hat
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              The most trusted digital marketplace for livestock. We bring the haat to your doorstep with verified sellers and healthy animals.
            </p>
          
            <div className="flex gap-4 pt-2">
             <FaFacebook></FaFacebook>
             <FaInstagramSquare />
             <FaXTwitter />

            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              {["Find Animals", "Top Breeds", "Qurbani Tips", "How it Works"].map((link) => (
                <li key={link}>
                  <Link href="#" className="flex items-center group hover:text-green-500 transition-colors">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-500 shrink-0" />
                <span>Mymensingh, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-500 shrink-0" />
                <span>+880 1700 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-500 shrink-0" />
                <span>hello@qurbanihat.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Aesthetic Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get the latest haat updates.</p>
            <div className="flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700 focus-within:border-green-500 transition-all">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none px-3 w-full text-sm text-white"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-500">
          <p>© {new Date().getFullYear()} QurbaniHat. Built by Jahid Hasan.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-green-500">Privacy</Link>
            <Link href="#" className="hover:text-green-500">Terms</Link>
            <Link href="#" className="hover:text-green-500">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;