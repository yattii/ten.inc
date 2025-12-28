import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'ホーム', path: '/' },
    { name: 'サービス', path: '/services' },
    { name: '会社情報', path: '/company' },
    { name: '採用情報', path: '/recruitment' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Upper Top Bar */}
      <div className="hidden lg:block bg-[#002244] py-2 text-white text-[10px] tracking-widest uppercase font-bold px-8">
        <div className="container mx-auto flex justify-between items-center">
          <span>Kansai Area Professional Sales Promotion & Food Service Group</span>
          <div className="flex space-x-6">
            <Link to="/company" className="hover:text-blue-300 transition-colors">Corporate profile</Link>
            <Link to="/recruitment" className="hover:text-blue-300 transition-colors">Recruit</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed lg:sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4 lg:py-6 border-b border-slate-100'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl lg:text-3xl font-black tracking-tighter text-[#004098]">
              TEN <span className="text-slate-400 font-light">INC.</span>
            </span>
            <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] -mt-1 group-hover:text-[#004098] transition-colors">株式会社TEN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0 h-full">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-2 text-sm font-bold tracking-wider transition-all hover:text-[#004098] ${
                  isActive(item.path) ? 'text-[#004098]' : 'text-slate-700'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-[-1.5rem] left-0 w-full h-[3px] bg-[#004098]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#004098] text-white text-xs font-black tracking-[0.2em] rounded-sm hover:bg-[#003377] transition-all shadow-md shadow-blue-900/10 flex items-center"
            >
              CONTACT <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#004098]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col p-8 pt-24 animate-in fade-in slide-in-from-right duration-300 overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center"
                >
                  {item.name} <ChevronRight className="text-slate-300" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-12 space-y-4">
              <Link to="/contact" className="w-full py-5 bg-[#004098] text-white font-black text-center block tracking-[0.2em]">
                お問い合わせ
              </Link>
              <div className="flex justify-center space-x-6 text-slate-400">
                <MapPin className="w-5 h-5" />
                <Phone className="w-5 h-5" />
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#002244] text-white pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <div className="mb-10">
                <span className="text-4xl font-black tracking-tighter">TEN <span className="text-blue-500 font-light">INC.</span></span>
                <p className="text-slate-400 mt-6 text-lg leading-relaxed font-medium">
                  関西一円を拠点に、催事営業・セールスプロモーションと飲食事業を展開するプロ集団。クライアント様の期待を超える成果を創出し続けます。
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 shrink-0 text-blue-500" />
                  <span className="text-slate-300 font-bold">〒614-8363 京都府八幡市男山吉井10-26</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 shrink-0 text-blue-500" />
                  <span className="text-slate-300 font-bold">090-5652-9909</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-blue-500 mb-10 border-l-2 border-blue-500 pl-4">Service</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center group">サービス一覧 <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                <li><Link to="/services/event" className="text-slate-300 hover:text-white transition-colors flex items-center group">催事営業・販促支援 <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                <li><Link to="/services/restaurant" className="text-slate-300 hover:text-white transition-colors flex items-center group">飲食事業（水炊き 天） <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-blue-500 mb-10 border-l-2 border-blue-500 pl-4">Contact</h3>
              <p className="text-slate-400 mb-8 text-sm font-medium leading-relaxed">
                関西各地での催事・飲食に関するご相談など、お気軽にお問い合わせください。
              </p>
              <Link to="/contact" className="w-full py-5 bg-white/5 border border-white/10 text-white font-black text-xs tracking-[0.2em] flex items-center justify-center hover:bg-white/10 transition-all uppercase">
                Contact Form <Mail className="ml-3 w-5 h-5 text-blue-500" />
              </Link>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">&copy; {new Date().getFullYear()} TEN INC. KANSAI JAPAN.</p>
            <div className="flex space-x-10">
              <Link to="/contact" className="text-slate-500 hover:text-white text-[10px] font-black tracking-[0.2em]">PRIVACY POLICY</Link>
              <Link to="/company" className="text-slate-500 hover:text-white text-[10px] font-black tracking-[0.2em]">CORPORATE SITE</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;