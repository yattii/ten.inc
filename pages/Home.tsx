import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, BarChart3, Users, Award, ShieldCheck, Zap, ExternalLink, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <SEO 
        title="京都の催事会社 | 携帯イベント・ソフトバンク販促支援" 
        description="株式会社TENは、京都府八幡市を拠点にソフトバンク等の携帯イベント、催事営業、セールスプロモーションを展開する催事会社です。圧倒的な獲得力で貴社のビジネスを支援します。"
      />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-[#001122]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="京都の催事会社 株式会社TEN オフィスイメージ" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001122] via-[#001122]/80 to-transparent z-1"></div>

        <div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 reveal-up">
            <div className="mb-6 flex items-center space-x-4">
              <span className="w-12 h-px bg-blue-500"></span>
              <span className="text-blue-400 font-black text-[11px] tracking-[0.5em] uppercase">Kyoto Event Promotion Group</span>
            </div>
            <h1 className="text-5xl lg:text-[5.5rem] font-serif-jp font-black text-white leading-[1.1] mb-12 tracking-tighter">
              京都の<span className="text-blue-500">催事会社</span>として、<br />
              <span className="text-slate-200">携帯イベント</span>を革新する。
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              株式会社TENは、ソフトバンク等の携帯販売プロモーションに特化した、京都のプロフェッショナル催事会社です。戦略的な催事運営で、確かな「価値」を創出します。
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-[#004098] text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#004098] transition-all shadow-2xl flex items-center"
              >
                無料相談・見積り <ArrowUpRight className="ml-3 w-5 h-5" />
              </Link>
              <Link
                to="/services/event"
                className="px-12 py-6 border border-white/30 text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all flex items-center"
              >
                携帯イベント詳細 <ChevronRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:w-1/3 justify-end items-center relative">
            <div className="vertical-text text-white/10 text-[8rem] font-black tracking-widest select-none leading-none">
              京都・催事
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="philosophy-title">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 lg:sticky top-40">
              <h2 id="philosophy-title" className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-8 border-l-4 border-blue-600 pl-6">Professional Services</h2>
              <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244] leading-tight mb-8">
                ソフトバンク等の<br />携帯販売を<br />加速させる。
              </h3>
              <p className="text-slate-500 text-sm font-bold mb-8">京都催事会社 株式会社TEN</p>
              <Link to="/company" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-colors">
                会社概要を見る <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl lg:text-3xl font-serif-jp font-black text-slate-700 leading-relaxed">
                株式会社TENは、携帯イベント運営のスペシャリスト集団です。
              </p>
              <div className="text-lg text-slate-500 leading-relaxed font-medium">
                京都府八幡市を拠点に、関西全域でソフトバンク等のキャリア販促を支援。ショッピングモールや路面店での携帯イベントにおいて、お客様との接点（点）を確かな契約（輪）へと繋げる催事会社として、多くの信頼をいただいております。
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                <article className="p-10 bg-white shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-600 transition-colors duration-500">
                  <BarChart3 className="w-12 h-12 text-blue-600 mb-8" aria-hidden="true" />
                  <div>
                    <h4 className="text-xl font-bold mb-4">圧倒的な獲得力</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">ソフトバンク等の携帯イベントで培った、独自の獲得メソッドと高練度スタッフによる圧倒的な成果を提供します。</p>
                  </div>
                </article>
                <article className="p-10 bg-white shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-600 transition-colors duration-500">
                  <Users className="w-12 h-12 text-blue-600 mb-8" aria-hidden="true" />
                  <div>
                    <h4 className="text-xl font-bold mb-4">京都密着の安心運営</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">地元の商圏を熟知した京都の催事会社だからこそ可能な、地域性に合わせた最適なイベント設計を行います。</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service - Event Business */}
      <section className="py-32 bg-white" aria-labelledby="service-event-title">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-slate-100 shadow-2xl overflow-hidden">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="ソフトバンク等の携帯イベント運営風景 | 京都の催事会社TEN" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#004098]/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-4 opacity-80">Core Competence</span>
                <h3 id="service-event-title" className="text-4xl font-serif-jp font-black leading-tight mb-0">携帯イベント・催事プロモーション</h3>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
              <h4 className="text-2xl font-black text-slate-900 mb-8 leading-tight">
                ソフトバンク販促に特化した、<br />京都No.1の催事会社を目指して。
              </h4>
              <p className="text-slate-600 leading-relaxed mb-12 font-medium">
                株式会社TENは、携帯電話の販売促進、キャンペーン運営のプロ集団です。京都エリアを中心に、ソフトバンク様等の大手キャリア様の現場で、新規獲得から顧客満足度向上までをトータルにサポートする催事会社です。
              </p>
              <ul className="space-y-6 mb-12">
                {["携帯イベントの企画・設営・運営", "ソフトバンク等キャリア特化型の販促支援", "京都の主要商業施設での催事実績"].map((txt, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-800">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-3" aria-hidden="true" /> {txt}
                  </li>
                ))}
              </ul>
              <Link to="/services/event" className="inline-flex items-center px-10 py-5 bg-[#004098] text-white text-xs font-black tracking-[0.2em] uppercase rounded-sm hover:shadow-xl transition-all w-fit">
                携帯イベント詳細はこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Summary Numbers */}
      <section className="py-32 bg-[#001122] text-white overflow-hidden relative">
        <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-16">Kyoto Based Event Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                <div className="reveal-up">
                <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">京都<span className="text-2xl ml-2">八幡</span></div>
                <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Head Office Location</p>
                </div>
                <div className="reveal-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">携帯<span className="text-2xl ml-2">専門</span></div>
                <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Sales Specialization</p>
                </div>
                <div className="reveal-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-blue-500 font-serif-jp text-6xl lg:text-8xl font-black mb-4">Soft<span className="text-2xl ml-2">Bank</span></div>
                <p className="text-slate-500 text-xs font-black tracking-[0.3em] uppercase">Partner Success</p>
                </div>
            </div>
        </div>
      </section>

      {/* News / Topics Preview */}
      <section className="py-32 bg-white" aria-labelledby="news-title">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-10">
            <div>
              <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-6">Latest Info</h2>
              <h3 id="news-title" className="text-4xl font-serif-jp font-black text-slate-900">お知らせ・催事実績</h3>
            </div>
            <Link to="/works" className="text-xs font-black tracking-widest uppercase text-slate-400 hover:text-blue-600 transition-colors">すべての実績を見る</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { date: "2024.11.20", category: "Corporate", title: "京都の催事会社 株式会社TEN 公式ウェブサイトをリニューアルしました。" },
              { date: "2024.10.05", category: "Event", title: "ソフトバンク携帯イベント：京都・大阪エリアでの大型キャンペーン運営を担当。" },
              { date: "2024.08.12", category: "Recruit", title: "携帯イベント運営スタッフ募集中。京都近郊で働きたい方歓迎。" }
            ].map((news, i) => (
              <Link key={i} to="/works" className="flex flex-col md:flex-row items-start md:items-center py-8 group transition-all">
                <span className="text-sm font-bold text-slate-400 mb-2 md:mb-0 md:w-40">{news.date}</span>
                <span className="px-3 py-1 bg-slate-100 text-[10px] font-black tracking-widest uppercase text-slate-500 rounded-sm mb-3 md:mb-0 md:mr-8 group-hover:bg-blue-600 group-hover:text-white transition-all">{news.category}</span>
                <h4 className="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{news.title}</h4>
                <ChevronRight className="ml-auto text-slate-200 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-50 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-blue-900/5 select-none z-0 tracking-tighter">
          KYOTO
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-4xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-12 leading-tight">
            京都で携帯イベントなら、<br />株式会社TEN。
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl mb-16 font-medium max-w-2xl mx-auto">
            ソフトバンク販促支援、催事運営のパートナーをお探しの企業様は、ぜひ京都の催事会社TENへご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-20 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase rounded-sm hover:bg-[#003377] transition-all shadow-2xl flex items-center justify-center"
            >
              お問い合わせ・見積り <ArrowUpRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;