import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Instagram, 
  Mail, 
  Phone,
  Target,
  Award,
  ArrowRight,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';

// TikTok用のカスタムアイコンコンポーネント
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.417 6.417 0 01-1.87-1.56v7.37c-.03 2.44-.83 4.93-2.63 6.59-1.81 1.67-4.4 2.36-6.75 1.84-2.35-.52-4.4-2.13-5.38-4.31C.64 16.32.61 13.63 1.58 11.41c1.05-2.41 3.38-4.19 6-4.6v4.02c-1.31.2-2.58.91-3.38 1.99-.8 1.08-1.07 2.49-.73 3.8.34 1.31 1.25 2.44 2.45 3.03 1.2.59 2.66.62 3.88.08 1.22-.54 2.06-1.74 2.22-3.07.03-.25.03-.51.03-.76V.02z" />
  </svg>
);

const Home: React.FC = () => {
  useEffect(() => {
    const tiktokScript = document.createElement('script');
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    const instagramScript = document.createElement('script');
    instagramScript.src = "//www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    const timer = setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (tiktokScript.parentNode) document.body.removeChild(tiktokScript);
      if (instagramScript.parentNode) document.body.removeChild(instagramScript);
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <SEO 
        title="関西の催事会社 | 携帯イベント・ソフトバンク販促支援" 
        description="株式会社TENは、関西を拠点にソフトバンク等の携帯イベント運営、催事プロモーション、飲食事業を展開する企業です。圧倒的な獲得力で「点」を価値へと繋ぎます。"
      />
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#001122]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="関西の催事会社 株式会社TEN" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001122] via-[#001122]/80 to-transparent z-1"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="lg:w-2/3 reveal-up">
            <div className="mb-6 flex items-center space-x-4">
              <span className="w-12 h-px bg-blue-500"></span>
              <span className="text-blue-400 font-black text-[11px] tracking-[0.5em] uppercase">Professional Kansai Group</span>
            </div>
            <h1 className="text-5xl lg:text-[6rem] font-serif-jp font-black text-white leading-[1.1] mb-12 tracking-tighter">
              <span className="text-blue-500">点</span>を結び、<br />
              価値を<span className="text-slate-200">最大化</span>する。
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              関西全域を舞台に、携帯イベントと飲食事業を展開する株式会社TEN. 圧倒的な現場力とホスピタリティで, 確かな成果を創出します。
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/services"
                className="px-12 py-6 bg-[#004098] text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#004098] transition-all shadow-2xl flex items-center"
              >
                VIEW SERVICES <ArrowUpRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section id="philosophy" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-8 border-l-4 border-blue-600 pl-6">Philosophy</h2>
              <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-[#002244] leading-tight mb-8">
                出会いという「点」を<br />確かな「価値」へ.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                株式会社TENの「TEN」は、一つひとつの出会い, すなわち「点」を意味します。私たちはその接点をただ通過させるのではなく、深く丁寧に結びつけることで、より大きな成果（輪）へと昇華させていくことを経営の根幹としています。
              </p>
              <Link to="/company" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-[#004098] hover:translate-x-2 transition-transform">
                会社情報を見る <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="aspect-video bg-slate-200 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Philosophy Visual" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-4">Our Services</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-slate-900">事業展開</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden bg-slate-900 aspect-[4/3] rounded-sm">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="催事営業" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-4">Event Promotion</span>
                <h4 className="text-white text-3xl font-black mb-6">携帯イベント・販促支援</h4>
                <p className="text-slate-300 mb-8 max-w-sm font-medium">ソフトバンク等の大手キャリア販促に特化。関西全域で圧倒的な獲得力を発揮します。</p>
                <Link to="/services/event" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-white border-b-2 border-blue-500 pb-1 w-fit">
                  DETAIL <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* 飲食事業エリア - 背景画像を /restaurant-exterior.jpg に設定 */}
            <div className="group relative overflow-hidden bg-slate-900 aspect-[4/3] rounded-sm">
              <img 
                src="/restaurant-exterior.jpg" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                alt="飲食事業 水炊き 天 外観" 
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-4">Food Service</span>
                <h4 className="text-white text-3xl font-black mb-6">飲食事業（水炊き 天）</h4>
                <p className="text-slate-300 mb-8 max-w-sm font-medium">京都の伝統と至福のおもてなし。厳選された素材で心に残る食体験を提供します。</p>
                <Link to="/services/restaurant" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-white border-b-2 border-blue-500 pb-1 w-fit">
                  DETAIL <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SNS Section */}
      <section id="sns" className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-4">Social Media</h2>
            <h3 className="text-4xl lg:text-5xl font-serif-jp font-black text-slate-900">公式SNS</h3>
            <p className="text-slate-500 mt-4 text-sm font-medium">水炊き 天 の最新情報をチェック</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-white p-4 rounded-sm shadow-sm flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6 px-2 w-full max-w-[540px]">
                  <TikTokIcon className="w-5 h-5 text-slate-900" />
                  <span className="font-black text-[10px] tracking-widest uppercase">TikTok Official</span>
                </div>
                <div className="w-full flex justify-center">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@10.mizutaki" 
                    data-unique-id="10.mizutaki" 
                    data-embed-type="creator" 
                    style={{ maxWidth: '540px', minWidth: '288px', width: '100%' }}
                  > 
                    <section> 
                      <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@10.mizutaki?refer=creator_embed">@10.mizutaki</a> 
                    </section> 
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="w-full bg-white p-4 rounded-sm shadow-sm overflow-hidden flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6 px-2 w-full max-w-[540px]">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <span className="font-black text-[10px] tracking-widest uppercase">Instagram Highlights</span>
                </div>
                
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-hide w-full max-w-[540px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <div className="snap-start shrink-0 w-[326px]">
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C_kuDHqyKeu/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '326px', minWidth: '326px', padding: 0, width: '99.375%' }}>
                      <div style={{ padding: '16px' }}>
                        <a href="https://www.instagram.com/p/C_kuDHqyKeu/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                          <div style={{ padding: '19% 0' }}></div>
                          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg>
                          </div>
                          <div style={{ paddingTop: '8px' }}>
                            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>この投稿をInstagramで見る</div>
                          </div>
                          <div style={{ padding: '12.5% 0' }}></div>
                          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                            <div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '20px', width: '20px' }}></div>
                              <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                            </div>
                          </div>
                        </a>
                        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          <a href="https://www.instagram.com/p/C_kuDHqyKeu/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">水炊き 天(@ten.mizutaki)がシェアした投稿</a>
                        </p>
                      </div>
                    </blockquote>
                  </div>

                  <div className="snap-start shrink-0 w-[326px]">
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DBQjjlrSCHf/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '326px', minWidth: '326px', padding: 0, width: '99.375%' }}>
                      <div style={{ padding: '16px' }}>
                        <a href="https://www.instagram.com/p/DBQjjlrSCHf/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                          <div style={{ padding: '19% 0' }}></div>
                          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg>
                          </div>
                          <div style={{ paddingTop: '8px' }}>
                            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>この投稿をInstagramで見る</div>
                          </div>
                          <div style={{ padding: '12.5% 0' }}></div>
                          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                            <div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '20px', width: '20px' }}></div>
                              <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                            </div>
                          </div>
                        </a>
                        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          <a href="https://www.instagram.com/p/DBQjjlrSCHf/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">水炊き 天(@ten.mizutaki)がシェアした投稿</a>
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                
                <div className="mt-4 px-2 w-full max-w-[540px] text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 animate-pulse" /> Swipe to see posts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-40 bg-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-blue-900/5 select-none z-0 tracking-tighter">
          CONTACT
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-4xl lg:text-7xl font-serif-jp font-black text-[#002244] mb-12 leading-tight">
            まずはお気軽に<br />ご相談ください。
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-20 py-8 bg-[#004098] text-white font-black text-xs tracking-[0.4em] uppercase rounded-sm hover:bg-black transition-all shadow-2xl flex items-center justify-center"
            >
              お問い合わせはこちら <Mail className="ml-3 w-5 h-5" />
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-slate-400">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              <span className="font-bold">090-5652-9909</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span className="font-bold">9:00 - 20:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;