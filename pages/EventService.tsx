import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BarChart4, Users, Target, CheckCircle, ChevronRight, PieChart, Layers, Send } from 'lucide-react';
import SEO from '../components/SEO';

const EventService: React.FC = () => {
  const points = [
    {
      title: "携帯イベントに特化した戦略",
      desc: "ソフトバンク様等のキャリア販売において、商圏に合わせた最適な動線と獲得スキームを構築します。",
      icon: <Layers className="w-10 h-10" />
    },
    {
      title: "京都・関西の現場に強い",
      desc: "京都府八幡市を拠点に、地域の特性を熟知したスタッフが、現場第一の運営を行います。",
      icon: <Target className="w-10 h-10" />
    },
    {
      title: "ソフトバンク販促の高い実績",
      desc: "長年の経験から得たノウハウにより、新規契約数やMNP獲得数において高い評価をいただいております。",
      icon: <BarChart4 className="w-10 h-10" />
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="携帯イベント・ソフトバンク販促支援 | 京都の催事会社" 
        description="ソフトバンク等の携帯イベント運営、催事プロモーションなら京都の催事会社「株式会社TEN」。圧倒的な獲得ノウハウで貴社の営業活動を強力にサポートします。"
      />

      {/* Page Header */}
      <section className="pt-48 pb-24 bg-[#001122] text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-4xl">
              <span className="text-blue-500 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Mobile Event Experts</span>
              <h1 className="text-5xl lg:text-7xl font-serif-jp font-black mb-12 leading-tight">
                携帯イベント・<br />ソフトバンク販促支援
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
                株式会社TENは、ソフトバンク等の携帯キャリア販促に特化した、京都の催事会社です。単なる運営代行ではなく、数値目標の達成に執着した「獲得重視」の催事運営を提供します。
              </p>
            </div>
            <div className="vertical-text hidden lg:block text-white/5 text-9xl font-black select-none tracking-tighter">
              KYOTO EVENT
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
      </section>

      {/* Service Strengths */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-6">Our Advantages</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244]">京都の催事会社TENの強み</h3>
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
              <span className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block border-l-4 border-blue-500 pl-6">SoftBank & More</span>
              <h2 className="text-4xl lg:text-5xl font-serif-jp font-black mb-12">携帯イベント・催事の<br />トータルプロデュース</h2>
              <p className="text-slate-400 text-lg mb-16 font-medium leading-relaxed">
                京都・関西のショッピングモールやロードサイド店舗における携帯イベント運営を完全サポート。ソフトバンク様等の獲得最大化を実現します。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "ソフトバンク販促キャンペーン企画",
                  "携帯イベントの会場設営・撤去",
                  "獲得特化型ディレクターの派遣",
                  "MNP・新規契約促進の運営代行",
                  "京都府内の商業施設交渉代行",
                  "成果に直結するKPI管理・分析"
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
                alt="携帯イベントの運営会議 | 京都の催事会社TEN" 
                className="w-full h-auto rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-40 bg-[#004098] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-12">京都で携帯イベント・催事運営を<br />ご検討中の企業様へ</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-16 max-w-2xl mx-auto font-medium">
            ソフトバンク様等のキャリア販売において、確実に成果を上げる体制を構築します。<br />まずはお気軽に無料相談・お見積りをご依頼ください。
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