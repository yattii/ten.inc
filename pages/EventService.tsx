import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BarChart4, Users, Target, CheckCircle, ChevronRight, PieChart, Layers, Send } from 'lucide-react';
import SEO from '../components/SEO';

const EventService: React.FC = () => {
  const points = [
    {
      title: "ソフトバンク等に強い戦略",
      desc: "過去の膨大な稼働データに基づき、ソフトバンク様等の大手キャリアに最適化された携帯イベント・獲得スキームを関西全域で展開します。",
      icon: <Layers className="w-10 h-10" />
    },
    {
      title: "関西主要エリアを網羅",
      desc: "大阪・兵庫・京都などの中心地から郊外の商業施設まで、関西各地の特性を熟知したスタッフが現場第一の運営を行います。",
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "広域でのKPI一括管理",
      desc: "関西全域での複数拠点同時開催などにも対応。一括したKPI管理により、ソフトバンク販促の全体的な底上げを実現します。",
      icon: <BarChart4 className="w-10 h-10" />
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="携帯イベント・ソフトバンク販促支援 | 関西の催事会社TEN" 
        description="大阪・兵庫・京都等、関西全域でのソフトバンク携帯イベント運営、販促支援なら催事会社「株式会社TEN」。圧倒的な獲得ノウハウで貴社の営業活動を強力にサポートします。"
      />

      {/* Page Header */}
      <section className="pt-48 pb-24 bg-[#001122] text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-4xl">
              <span className="text-blue-500 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Kansai Mobile Sales Expert</span>
              <h1 className="text-5xl lg:text-[5.5rem] font-serif-jp font-black mb-12 leading-tight">
                携帯イベント・<br />ソフトバンク販促支援
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
                関西の催事会社、株式会社TENは、大阪・兵庫・京都を中心にソフトバンク等の携帯キャリア販促に特化した運営のプロ集団です。広域での目標達成にコミットする「獲得重視」の催事運営を提供します。
              </p>
            </div>
            <div className="vertical-text hidden lg:block text-white/5 text-9xl font-black select-none tracking-tighter">
              KANSAI PRO
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
      </section>

      {/* Service Strengths */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-6">Our Core Advantages</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244]">関西の催事会社TENが選ばれる理由</h3>
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
              <span className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block border-l-4 border-blue-500 pl-6">SoftBank & Kansai Mobile Events</span>
              <h2 className="text-4xl lg:text-5xl font-serif-jp font-black mb-12">関西各地の携帯イベントを<br />トータルプロデュース</h2>
              <p className="text-slate-400 text-lg mb-16 font-medium leading-relaxed">
                大阪府内の大型モール、兵庫のロードサイド、京都の商業施設。関西全域の拠点においてソフトバンク販売促進、各種キャリアキャンペーンの交渉から運営まで、関西の催事会社TENが代行します。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "ソフトバンク販促キャンペーン企画・運営（関西一円）",
                  "携帯イベント用広域ディレクター派遣",
                  "大阪・兵庫エリアの商業施設交渉代行",
                  "獲得特化型スタッフによる近畿圏営業支援",
                  "関西全域のMNP・新規契約促進の運営設計",
                  "広域展開におけるKPI一括管理と分析"
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
                alt="関西での携帯イベント・ソフトバンク販促の会議風景 | 株式会社TEN" 
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
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-6">Service Flow in Kansai</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244]">導入の流れ</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { num: "01", title: "ヒアリング・エリア分析", desc: "携帯イベントのターゲット、大阪・兵庫・京都等の各エリア特性、ソフトバンク等のプラン要件を詳細に把握します。" },
              { num: "02", title: "広域催事戦略立案", desc: "関西の催事会社としての知見を活かし、広域展開における最適な動線と獲得スキームを構築します。" },
              { num: "03", title: "精鋭スタッフアサイン", desc: "関西各地の拠点へ、携帯販売に特化した教育を受けたスタッフを派遣。現場での高いクロージング力を保証します。" },
              { num: "04", title: "現場運営管理", desc: "ディレクターによる関西全拠点のKPI管理と、トラブルのないスムーズな催事運営を遂行します。" },
              { num: "05", title: "成果報告と改善提案", desc: "広域の獲得数値を統合分析。次回のソフトバンク販促やイベントの成果向上に向けた具体的改善案を提示します。" }
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
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-12">大阪・兵庫・京都の携帯イベント運営を、<br />確かな実績を持つ関西の催事会社へ。</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-16 max-w-2xl mx-auto font-medium">
            ソフトバンク販促支援、短期集中的なプロモーション。関西の催事会社TENが、貴社の目標達成に100%コミットします。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-16 py-8 bg-white text-[#004098] font-black text-xs tracking-[0.4em] uppercase hover:bg-slate-100 transition-all shadow-2xl flex items-center"
            >
              無料相談・お見積り <Send className="ml-3 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventService;