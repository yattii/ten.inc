import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, Zap, Utensils } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="サービス一覧 | 催事営業・飲食事業" 
        description="株式会社TENのサービス紹介。関西を中心にソフトバンク等の携帯イベント・販促支援を行う「催事営業」と、京都の伝統を伝える「飲食事業（水炊き 天）」を展開しています。"
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Our Services</span>
          <h1 className="text-5xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-8 tracking-tighter">サービス</h1>
          <div className="w-20 h-2 bg-blue-600 mb-6"></div>
          <p className="text-slate-500 font-bold max-w-2xl">
            「点」を結び、新たな「価値」を創り出す。株式会社TENが展開する2つの柱。
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Service Selection */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 1. Event Service */}
            <div className="group relative overflow-hidden bg-[#001122] rounded-sm shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                  alt="携帯イベント・催事営業" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <Zap className="w-12 h-12 text-blue-500 mb-8" />
                <h2 className="text-3xl lg:text-4xl font-serif-jp font-black mb-6">携帯イベント・販促支援</h2>
                <p className="text-slate-300 mb-10 max-w-md font-medium leading-relaxed">
                  ソフトバンク等の大手キャリア販促に特化。関西全域で圧倒的な獲得力を誇る、プロフェッショナルな催事運営。
                </p>
                <Link 
                  to="/services/event" 
                  className="px-10 py-5 bg-blue-600 text-white font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-white hover:text-blue-600 transition-all w-fit flex items-center shadow-xl"
                >
                  催事営業の詳細を見る <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2. Restaurant Service */}
            <div className="group relative overflow-hidden bg-[#002244] rounded-sm shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105">
                <img 
                  src="/restaurant-exterior.jpg" 
                  alt="飲食事業 水炊き 天" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <Utensils className="w-12 h-12 text-blue-500 mb-8" />
                <h2 className="text-3xl lg:text-4xl font-serif-jp font-black mb-6">飲食事業（水炊き 天）</h2>
                <p className="text-slate-300 mb-10 max-w-md font-medium leading-relaxed">
                  京都の伝統と、至福のおもてなし。厳選された素材と独自の製法で、心に残る食体験を提供します。
                </p>
                <Link 
                  to="/services/restaurant" 
                  className="px-10 py-5 bg-white text-[#002244] font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-blue-500 hover:text-white transition-all w-fit flex items-center shadow-xl"
                >
                  飲食事業の詳細を見る <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-40 bg-[#001122] text-white text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-12">
            分野は違えど、<br />志はひとつ。
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl mb-0 max-w-3xl mx-auto font-medium leading-relaxed">
            営業の「点」も、食の「点」も。株式会社TENは、一つひとつの接点を丁寧に結び、関わるすべての人々に確かな満足と感動を届けることを追求し続けます。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;