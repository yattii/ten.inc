
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, BarChart3, Users, Award, ShieldCheck, Zap, ExternalLink, ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-[#001122]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Corporate Environment" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001122] via-[#001122]/80 to-transparent z-1"></div>

        <div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 reveal-up">
            <div className="mb-6 flex items-center space-x-4">
              <span className="w-12 h-px bg-blue-500"></span>
              <span className="text-blue-400 font-black text-[11px] tracking-[0.5em] uppercase">Professional Sales Solution</span>
            </div>
            <h1 className="text-5xl lg:text-[6rem] font-serif-jp font-black text-white leading-[1.1] mb-12 tracking-tighter">
              催事営業で、<br />
              <span className="text-blue-500">点</span>を<span className="text-slate-400 font-light">価値</span>へと繋ぐ。
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              株式会社TENは、携帯電話催事営業を中心とした高度なセールスプロモーションのプロ集団です。圧倒的な稼働力と戦略的な運営で、クライアント様のビジネスを最大化します。
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-[#004098] text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#004098] transition-all shadow-2xl flex items-center"
              >
                Inquiry <ArrowUpRight className="ml-3 w-5 h-5" />
              </Link>
              <Link
                to="/services/event"
                className="px-12 py-6 border border-white/30 text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all flex items-center"
              >
                Service <ChevronRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:w-1/3 justify-end items-center relative">
            <div className="vertical-text text-white/10 text-9xl font-black tracking-widest select-none leading-none">
              INC.TEN
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 vertical-text text-blue-500 text-sm font-black tracking-[1em] uppercase">
              Kyoto Japan
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 lg:sticky top-40">
              <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-8 border-l-4 border-blue-600 pl-6">Philosophy</h2>
              <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244] leading-tight mb-8">
                「点」を<br />結び、<br />輪を創る。
              </h3>
              <Link to="/company" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-colors">
                View Corporate <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl lg:text-3xl font-serif-jp font-black text-slate-700 leading-relaxed">
                株式会社TEN（テン）の社名は、人と人との出会い、ビジネスの起点となる「点」に由来します。
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                私たちは、催事営業という現場第一の仕事を通じ、一つひとつの出会いを大切にし、それを確かな成果、そして持続可能なビジネスの「輪」へと繋げていくことを使命としています。京都から全国へ、プロフェッショナルな価値をお届けします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                <div className="p-10 bg-white shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-600 transition-colors duration-500">
                  <BarChart3 className="w-12 h-12 text-blue-600 mb-8" />
                  <div>
                    <h4 className="text-xl font-bold mb-4">結果へのコミットメント</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">数値目標の達成は当然の責務。その先にあるクライアント様の成長を見据えた提案を行います。</p>
                  </div>
                </div>
                <div className="p-10 bg-white shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-600 transition-colors duration-500">
                  <ShieldCheck className="w-12 h-12 text-blue-600 mb-8" />
                  <div>
                    <h4 className="text-xl font-bold mb-4">誠実な運営体制</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">コンプライアンスの遵守と、礼節を尽くした接客。信頼に値するパートナーであることをお約束します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service - Event Business */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-slate-100 shadow-2xl overflow-hidden">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Event Promotion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#004098]/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-4 opacity-80">Core Business</span>
                <h3 className="text-4xl font-serif-jp font-black leading-tight mb-0">催事営業・販促支援</h3>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
              <h4 className="text-2xl font-black text-slate-900 mb-8 leading-tight">
                「獲得力」と「品質」を両立した、<br />次世代のプロモーション運営。
              </h4>
              <p className="text-slate-600 leading-relaxed mb-12 font-medium">
                携帯電話販売、各種キャンペーン、新規顧客獲得。あらゆる現場において、弊社の教育された精鋭スタッフが、クライアント様の顔として最高の結果を追求します。
              </p>
              <ul className="space-y-6 mb-12">
                {["戦略的動線設計とブース構築", "数値管理とKPIのリアルタイム共有", "コンプライアンス遵守の徹底"].map((txt, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-800">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-3" /> {txt}
                  </li>
                ))}
              </ul>
              <Link to="/services/event" className="inline-flex items-center px-10 py-5 bg-[#004098] text-white text-xs font-black tracking-[0.2em] uppercase rounded-sm hover:shadow-xl transition-all w-fit">
                Service Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Business Link */}
      <section className="py-32 bg-[#f0f4f8] border-y border-slate-200">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-black text-[10px] tracking-[0.5em] uppercase mb-6 block border-l-4 border-blue-600 pl-6">Group Brand</span>
              <h2 className="text-4xl lg:text-5xl font-serif-jp font-black text-slate-900 leading-tight mb-8">
                飲食事業：水炊き 天
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                株式会社TENの飲食部門が展開する「水炊き 天」。こだわりの白濁スープと厳選された京都の素材で、至福の食体験をお届けしています。ビジネスで培ったおもてなしの心を、料理に込めて。
              </p>
              <a 
                href="https://mizutaki-ten.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-white border-2 border-slate-200 text-[#002244] font-black text-xs tracking-[0.2em] uppercase hover:border-blue-600 hover:text-blue-600 transition-all group"
              >
                Visit Brand Site <ExternalLink className="ml-3 w-4 h-4" />
              </a>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-video overflow-hidden shadow-2xl grayscale transition-all duration-700 group-hover:grayscale-0">
                <img 
                  src="https://images.unsplash.com/photo-1547585446-bc5669741f28?auto=format&fit=crop&q=80&w=800" 
                  alt="Mizutaki Food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/5 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Summary Numbers */}
      <section className="py-32 bg-[#001122] text-white overflow-hidden relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
            <div className="reveal-up">
              <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">1200<span className="text-2xl ml-2">万</span></div>
              <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Annual Turnover</p>
            </div>
            <div className="reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">2024<span className="text-2xl ml-2">年</span></div>
              <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Established</p>
            </div>
            <div className="reveal-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">Top<span className="text-2xl ml-2">Class</span></div>
              <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Service Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* News / Topics Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-10">
            <div>
              <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-6">Topics</h2>
              <h3 className="text-4xl font-serif-jp font-black text-slate-900">最新情報</h3>
            </div>
            <Link to="/works" className="text-xs font-black tracking-widest uppercase text-slate-400 hover:text-blue-600 transition-colors">Read All Information</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { date: "2024.11.20", category: "Corporate", title: "株式会社TEN 公式ウェブサイトをリニューアルしました。" },
              { date: "2024.10.05", category: "Event", title: "関西圏における大型商業施設プロモーションの受注実績を更新。" },
              { date: "2024.08.12", category: "Recruit", title: "2025年度 イベント運営スタッフの募集を開始いたしました。" }
            ].map((news, i) => (
              <Link key={i} to="/works" className="flex flex-col md:flex-row items-start md:items-center py-8 group transition-all">
                <span className="text-sm font-bold text-slate-400 mb-2 md:mb-0 md:w-40">{news.date}</span>
                <span className="px-3 py-1 bg-slate-100 text-[10px] font-black tracking-widest uppercase text-slate-500 rounded-sm mb-3 md:mb-0 md:mr-8 group-hover:bg-blue-600 group-hover:text-white transition-all">{news.category}</span>
                <h4 className="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{news.title}</h4>
                <ChevronRight className="ml-auto text-slate-200 group-hover:text-blue-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-50 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-blue-900/5 select-none z-0 tracking-tighter">
          CONTACT
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-4xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-12 leading-tight">
            更なる飛躍へ、<br />共に歩む。
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl mb-16 font-medium max-w-2xl mx-auto">
            催事のご相談、お見積り依頼など、弊社のプロフェッショナルが誠心誠意対応させていただきます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-20 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase rounded-sm hover:bg-[#003377] transition-all shadow-2xl flex items-center justify-center"
            >
              Contact Form <ArrowUpRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
