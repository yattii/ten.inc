
import React from 'react';
import { MapPin, Info, Globe, Calendar, CreditCard, Award, ChevronRight, ArrowUpRight } from 'lucide-react';

const Company: React.FC = () => {
  const details = [
    { icon: <Info className="w-5 h-5" />, label: "会社名", value: "株式会社TEN (TEN INC.)" },
    { icon: <Award className="w-5 h-5" />, label: "代表者", value: "池永 一天（代表取締役）" },
    { icon: <MapPin className="w-5 h-5" />, label: "所在地", value: "〒614-8363 京都府八幡市男山吉井10-26" },
    { icon: <CreditCard className="w-5 h-5" />, label: "資本金", value: "100万円" },
    { icon: <Calendar className="w-5 h-5" />, label: "設立", value: "2024年3月" },
    { icon: <Globe className="w-5 h-5" />, label: "主要事業", value: "催事営業・プロモーション支援、飲食事業（水炊き）" },
    { icon: <Globe className="w-5 h-5" />, label: "年商", value: "1,200万円 (2023年度実績)" },
  ];

  return (
    <div className="bg-white">
      {/* Sub Hero */}
      <section className="pt-48 pb-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="mb-8 flex items-center space-x-4">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase">Corporate Information</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-serif-jp font-black text-[#002244] mb-8 tracking-tighter">会社情報</h1>
          <div className="w-20 h-2 bg-blue-600"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* CEO Message */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24 max-w-7xl mx-auto">
            <div className="w-full lg:w-5/12">
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden grayscale transition-all duration-1000 group-hover:grayscale-0 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="CEO Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 border-b-2 border-l-2 border-blue-600 -z-10"></div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-blue-600 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">Top Message</span>
              <h2 className="text-3xl lg:text-5xl font-serif-jp font-black text-[#002244] leading-[1.3] mb-12">
                新たな出会いを、<br />確かな価値へ。
              </h2>
              <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  株式会社TENの「TEN（点）」は、ビジネスにおける一つひとつの出会い、すなわち「点」を意味します。私たちはその「点」をただ通過させるのではなく、深く、丁寧に結びつけることで、より大きな成果（輪）へと昇華させていくことを経営の根幹としています。
                </p>
                <p>
                  催事営業という現場最前線の仕事において求められるのは、単なる営業力だけでなく、誠実さと信頼です。クライアント様の代理人として、期待を上回る感動と結果を創出し続けることをお約束します。
                </p>
                <p>
                  京都から全国へ、私たちはプロフェッショナリズムを持って挑戦し続けます。
                </p>
              </div>
              <div className="pt-12 mt-12 border-t border-slate-100 flex items-end">
                <div>
                  <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-2">Representative Director</p>
                  <p className="text-3xl font-serif-jp font-black text-[#002244]">池永 一天</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Table */}
      <section className="py-40 bg-[#001122] text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-3xl font-serif-jp font-black mb-4">企業概要</h2>
              <p className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase">Corporate Outline</p>
            </div>
            <div className="divide-y divide-white/10">
              {details.map((d, i) => (
                <div key={i} className="flex flex-col md:flex-row py-10 group hover:bg-white/5 transition-colors px-6">
                  <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
                    <span className="text-blue-500 mr-6 group-hover:scale-110 transition-transform">{d.icon}</span>
                    <span className="text-xs font-black tracking-widest uppercase text-slate-500">{d.label}</span>
                  </div>
                  <div className="w-full md:w-2/3 text-lg font-bold text-slate-200">
                    {d.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4">
                <span className="text-blue-600 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block border-l-4 border-blue-600 pl-6">Access</span>
                <h2 className="text-4xl font-serif-jp font-black text-[#002244] mb-10">所在地</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">Head Office</h3>
                    <p className="text-lg font-bold text-slate-700 leading-relaxed">
                      〒614-8363<br />京都府八幡市男山吉井10-26
                    </p>
                  </div>
                  <div className="pt-8">
                    <a 
                      href="https://maps.google.com?q=京都府八幡市男山吉井10-26" 
                      target="_blank" 
                      className="inline-flex items-center text-xs font-black tracking-widest uppercase text-[#004098] hover:opacity-70 transition-all border-b border-[#004098] pb-1"
                    >
                      Open Google Maps <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="h-[500px] w-full bg-slate-100 rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.744160475171!2d135.700142!3d34.875323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011bb2612e430b%3A0xc3485073406f52e2!2z44CSNjE0LTgzNjMg5Lqs6YO95bqc5YWr5bmh5biC55S35bGx5ZCJ5LqVMTAtMjY!5e0!3m2!1sja!2sjp!4v1715400000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
