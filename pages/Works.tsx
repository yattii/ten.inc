import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const Works: React.FC = () => {
  const cases = [
    {
      type: "携帯イベント",
      title: "ソフトバンク様 商業施設獲得プロモーション",
      location: "京都府京都市・八幡市",
      description: "京都府内のショッピングモールにて、ソフトバンク様の携帯イベントを運営。独自の動線設計により、前月比150%の新規MNP獲得を達成。京都の催事会社としての強みを活かした地元密着型の運営。",
      tags: ["ソフトバンク", "携帯イベント", "京都催事会社"],
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "携帯イベント",
      title: "キャリア公式ショップ 週末イベント運営代行",
      location: "滋賀・奈良エリア",
      description: "週末の店舗集客を目的とした携帯イベントの企画・運営。ソフトバンク様等の各種プラン提案をスムーズに行うためのスタッフ教育から現場管理までを一貫して担当。",
      tags: ["携帯販売", "販促支援", "催事運営"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "Food Promotion",
      title: "水炊き 天：京都ブランド認知拡大キャンペーン",
      location: "京都府八幡市（自社店舗）",
      description: "催事営業のノウハウを活かした飲食部門のプロモーション。実店舗への送客だけでなく、地域の「京都・八幡」というキーワードを活かしたWeb・SNS販促を実施。",
      tags: ["水炊き 天", "京都グルメ", "飲食事業"],
      img: "https://images.unsplash.com/photo-1547585446-bc5669741f28?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "催事運営",
      title: "新生活応援 携帯販売・光回線セット催事",
      location: "京都府内 家電量販店",
      description: "春の商戦期に合わせた携帯イベント。ソフトバンク様等の最新端末と固定回線のセット獲得に注力。京都の催事会社TENのディレクターが現場のKPIを緻密に管理。",
      tags: ["京都", "携帯イベント", "ソフトバンク"],
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="携帯イベント実績・ソフトバンク販促事例 | 京都の催事会社TEN" 
        description="京都を拠点にソフトバンク等の携帯イベントを運営する株式会社TENの実績紹介。京都府内を中心とした豊富な催事運営実績を掲載しています。"
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Case Studies in Kyoto</span>
          <h1 className="text-5xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-8 tracking-tighter">実績・事例</h1>
          <div className="w-20 h-2 bg-blue-600 mb-6"></div>
          <p className="text-slate-500 font-bold">京都の催事会社としての豊富な携帯イベント実績</p>
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
                    alt={`${item.title} | 京都の催事会社TENの実績`}
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
          <h2 className="text-3xl lg:text-5xl font-serif-jp font-black mb-10">京都での携帯イベント・ソフトバンク販促の<br />ご相談をお待ちしております。</h2>
          <p className="text-slate-400 text-lg mb-16 font-medium">
            株式会社TENは、結果を出すための「京都の催事会社」です。<br />具体的な提案書やお見積りをご希望の方はお気軽にご連絡ください。
          </p>
          <Link to="/contact" className="px-16 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-[#004098] transition-all flex items-center justify-center inline-flex">
            お問い合わせはこちら <ArrowUpRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Works;