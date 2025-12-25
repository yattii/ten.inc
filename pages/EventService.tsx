
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BarChart4, Users, Target, CheckCircle, ChevronRight, PieChart, Layers, Send } from 'lucide-react';

const EventService: React.FC = () => {
  const points = [
    {
      title: "戦略的運営スキーム",
      desc: "過去の膨大な稼働データに基づき、エリア特性や商圏に合わせた最適な動線と獲得スキームを構築します。",
      icon: <Layers className="w-10 h-10" />
    },
    {
      title: "高練度のプロフェッショナル",
      desc: "徹底したコンプライアンス研修と営業研修をクリアした、自走できる精鋭スタッフを現場へ配置します。",
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "即時性の高いKPI管理",
      desc: "現場の進捗をリアルタイムで数値化。課題の早期発見と対策の実行を高速で繰り返します。",
      icon: <BarChart4 className="w-10 h-10" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-48 pb-24 bg-[#001122] text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-4xl">
              <span className="text-blue-500 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Our Service</span>
              <h1 className="text-5xl lg:text-7xl font-serif-jp font-black mb-12 leading-tight">
                催事営業・<br />プロモーション支援
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
                私たちは、単なる「人員手配」の会社ではありません。クライアント様の代理店として、目標達成に100%コミットし、現場から新しい価値を生み出す「運営のプロ集団」です。
              </p>
            </div>
            <div className="vertical-text hidden lg:block text-white/5 text-9xl font-black select-none tracking-tighter">
              SOLUTION
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
      </section>

      {/* Service Strengths */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-6">Our Strengths</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244]">選ばれる3つの理由</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {points.map((p, i) => (
              <div key={i} className="group p-12 bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all duration-500 rounded-sm">
                <div className="text-blue-600 mb-10 transition-transform group-hover:scale-110 duration-500">
                  {p.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-8">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Scope */}
      <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block border-l-4 border-blue-500 pl-6">Support Area</span>
              <h2 className="text-4xl lg:text-5xl font-serif-jp font-black mb-12">あらゆる催事・イベントの<br />プロデュースに対応</h2>
              <p className="text-slate-400 text-lg mb-16 font-medium leading-relaxed">
                携帯電話販売、各種会員獲得、サンプリング、大型展示会まで。目的の数値を達成するための設計と、当日の完璧なオペレーションを提供します。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "販売促進イベントのトータル企画",
                  "ディレクター・リーダーの現場管理",
                  "獲得特化型スタッフのキャスティング",
                  "キャンペーン・抽選会の運営全般",
                  "店舗・商業施設との交渉サポート",
                  "実施後の詳細な効果分析報告"
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-6 bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-blue-500 w-5 h-5 mr-4 shrink-0 mt-1" />
                    <span className="font-bold text-slate-200 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600/10 rounded-full blur-[100px] absolute -inset-10 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="Meeting" 
                className="w-full h-auto rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Execution Flow */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-6">Execution Flow</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244]">導入の流れ</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { num: "01", title: "ヒアリング", desc: "目的、予算、KPI（目標値）、ターゲットを詳細にヒアリングし、課題を可視化します。" },
              { num: "02", title: "戦略立案", desc: "商圏分析に基づいた運営設計と、現場の動線、トークスクリプトを構築・提案します。" },
              { num: "03", title: "体制構築", desc: "案件に最適なスタッフを選定。事前の商品知識テストやマナー研修を再徹底します。" },
              { num: "04", title: "当日の運営管理", desc: "ディレクター管理のもと、スピード感のある現場運営とトラブル時の即時対応を遂行します。" },
              { num: "05", title: "分析と改善提案", desc: "数値を多角的に分析し、次回以降の成果向上に向けた具体的な改善策を報告書にまとめます。" }
            ].map((f, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-12 p-12 border-b border-slate-100 group hover:bg-slate-50 transition-colors">
                <div className="text-5xl font-black text-slate-100 group-hover:text-blue-600/20 transition-colors leading-none font-serif-jp">
                  {f.num}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-black text-[#002244] mb-4">{f.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                </div>
                <ChevronRight className="hidden md:block w-6 h-6 text-slate-200 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-40 bg-[#004098] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-12">御社のビジネスを加速させる、<br />確かなパートナーシップを。</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-16 max-w-2xl mx-auto font-medium">
            短期集中的なプロモーションから、長期的な獲得支援まで、<br />貴社のニーズに合わせた最適な体制をご提案します。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-16 py-8 bg-white text-[#004098] font-black text-xs tracking-[0.4em] uppercase hover:bg-slate-100 transition-all shadow-2xl flex items-center"
            >
              Contact Form <Send className="ml-3 w-4 h-4" />
            </Link>
            <a 
              href="tel:08049889926" 
              className="px-16 py-8 border border-white/30 text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-white/10 transition-all flex items-center"
            >
              Consulting Manager <ChevronRight className="ml-3 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventService;
