
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, ArrowUpRight } from 'lucide-react';

const Works: React.FC = () => {
  const cases = [
    {
      type: "Event Promotion",
      title: "大手キャリア 商業施設プロモーション運営",
      location: "近畿圏（京都・大阪・兵庫）",
      description: "主要ショッピングモールにおける新規顧客獲得キャンペーン。独自の動線設計とトークスクリプトの最適化により、過去最高の獲得件数を達成しました。",
      tags: ["新規獲得", "動線設計", "ディレクター派遣"],
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "Event Promotion",
      title: "光回線 乗り換え促進ロードショー",
      location: "関西一円 併売店・量販店",
      description: "併売店舗における光回線乗り換えの訴求。他サービスとのセット販売スキームを構築し、成約率を大幅に向上させました。",
      tags: ["セット販売", "成約率向上", "店舗連携"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "Food & Beverage",
      title: "水炊き 天：季節限定プロモーション",
      location: "大阪府枚方市（店舗）",
      description: "グループ飲食事業における季節限定メニューの展開。SNS連携と地元メディアへの露出を戦略的に行い、集客率120%増を記録しました。",
      tags: ["メニュー開発", "SNS販促", "ブランド戦略"],
      img: "https://images.unsplash.com/photo-1547585446-bc5669741f28?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "Event Promotion",
      title: "新型デバイス 発売記念PRイベント",
      location: "京都市内 フラッグシップストア",
      description: "新製品発売に伴う大規模PRイベントの運営。行列整理から製品デモンストレーション、クロージングまでを一貫して担当しました。",
      tags: ["PRイベント", "製品デモ", "大規模運営"],
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Case Studies</span>
          <h1 className="text-5xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-8 tracking-tighter">実績・事例</h1>
          <div className="w-20 h-2 bg-blue-600"></div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {cases.map((item, i) => (
              <div key={i} className="group flex flex-col h-full bg-white border border-slate-100 hover:border-blue-600 transition-all duration-500 rounded-sm overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-0 left-0 bg-[#004098] text-white px-6 py-3 text-[9px] font-black tracking-[0.4em] uppercase">
                    {item.type}
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-[#004098] text-[10px] font-black tracking-widest rounded-sm uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center text-xs font-bold text-slate-400 mb-8 border-l-2 border-slate-200 pl-4">
                    Location: {item.location}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                    {item.description}
                  </p>
                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <button className="flex items-center text-xs font-black tracking-[0.3em] uppercase text-slate-900 group-hover:text-blue-600 transition-colors">
                      View Details <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#001122] text-white">
        <div className="container mx-auto px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-10">御社の課題解決を<br />共にデザインします。</h2>
          <p className="text-slate-400 text-lg mb-16 font-medium">
            上記以外の多種多様なプロモーション実績がございます。<br />具体的な数値実績や詳細な提案書をご希望の方は、お問い合わせください。
          </p>
          <Link to="/contact" className="px-16 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-[#004098] transition-all flex items-center justify-center inline-flex">
            Contact for Details <ArrowUpRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Works;
