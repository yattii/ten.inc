import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const Works: React.FC = () => {
  const cases = [
    {
      type: "携帯イベント",
      title: "ソフトバンク様 大阪主要駅ビル獲得プロモーション",
      location: "大阪府大阪市（梅田・難波エリア）",
      description: "大阪市内の大型商業施設・駅ビルにて、ソフトバンク様の携帯イベントを運営。圧倒的なトラフィックを活かした独自の動線設計により、前月比180%の新規MNP獲得を達成。関西の催事会社としての真価を発揮。",
      tags: ["ソフトバンク", "携帯イベント", "関西催事会社"],
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "携帯イベント",
      title: "兵庫エリア ロードサイド店舗イベント運営代行",
      location: "兵庫県神戸市・西宮市",
      description: "ソフトバンク様等の各種販売促進イベントの企画・運営。神戸エリア特有の顧客属性に合わせたアプローチにより、成約率の大幅向上に寄与。関西一円の現場を統括する弊社ディレクターが担当。",
      tags: ["ソフトバンク販促", "兵庫催事", "獲得支援"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "Food Promotion",
      title: "水炊き 天：ブランド認知拡大プロモーション",
      location: "京都・大阪エリア",
      description: "催事営業のノウハウを活かした飲食部門のプロモーション。実店舗への送客に加え、関西全域でのブランド強化を図るセールスプロモーションを実施。",
      tags: ["水炊き 天", "関西グルメ", "飲食事業"],
      img: "https://images.unsplash.com/photo-1547585446-bc5669741f28?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "携帯イベント",
      title: "滋賀・奈良エリア 新生活応援キャンペーン",
      location: "近畿圏内 ショッピングセンター",
      description: "新生活商戦期に合わせた携帯イベントの広域運営。ソフトバンク様等の最新端末と光回線のセット販売において高いKPIを達成。関西の催事会社TENによる教育スタッフの派遣事例。",
      tags: ["近畿", "携帯イベント", "ソフトバンク"],
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="携帯イベント実績・ソフトバンク販促事例 | 関西の催事会社TEN" 
        description="大阪・兵庫・京都を中心に、関西全域でソフトバンク等の携帯イベント運営をリードする株式会社TENの実績紹介。広域プロモーション事例を掲載しています。"
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Kansai Project Cases</span>
          <h1 className="text-5xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-8 tracking-tighter">実績・事例</h1>
          <div className="w-20 h-2 bg-blue-600 mb-6"></div>
          <p className="text-slate-500 font-bold">関西の催事会社としての広域な携帯イベント実績</p>
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
                    alt={`${item.title} | 関西の催事会社TENの実績`}
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
                    実施場所: {item.location}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                    {item.description}
                  </p>
                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <button className="flex items-center text-xs font-black tracking-[0.3em] uppercase text-slate-900 group-hover:text-blue-600 transition-colors">
                      実績詳細 <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-10">関西での携帯イベント・ソフトバンク販促の<br />ご相談をお待ちしております。</h2>
          <p className="text-slate-400 text-lg mb-16 font-medium">
            株式会社TENは、関西全域で結果を出すための「催事会社」です。<br />広域展開のご提案やお見積りをご希望の方はお気軽にご連絡ください。
          </p>
          <Link to="/contact" className="px-16 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-[#004098] transition-all flex items-center justify-center inline-flex">
            お問い合わせ・無料相談 <ArrowUpRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Works;