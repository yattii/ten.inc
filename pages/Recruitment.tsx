import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, TrendingUp, Handshake, Mail, Phone, ChevronRight } from 'lucide-react';

const Recruitment: React.FC = () => {
  const jobs = [
    {
      title: "イベントプロモーションスタッフ",
      type: "アルバイト / 契約社員",
      salary: "時給 1,500円 〜 2,500円",
      desc: "ショッピングモール等での携帯電話販促イベントの運営、お客様へのご案内。高い成約率を誇る弊社のノウハウを伝授します。未経験でも充実した研修があるから安心です。"
    },
    {
      title: "水炊き店舗・ホール/キッチン",
      type: "アルバイト / 正社員",
      salary: "時給 1,100円 〜 / 月給 25万円 〜",
      desc: "こだわりの水炊き店「水炊き 天」での接客、調理補助。京都の伝統と温かいおもてなしを一緒に作り上げ、お客様に最高のひとときを提供しましょう。"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-48 pb-24 bg-[#001122] text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-blue-500 font-black text-[11px] tracking-[0.5em] uppercase mb-8 block">Recruit</span>
            <h1 className="text-5xl lg:text-7xl font-black mb-12 leading-tight tracking-tighter">
              未来の「点」を、<br />共に創る。
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
              株式会社TENは、経験よりも「情熱」と「誠実さ」を大切にしています。プロフェッショナルとして成長し、社会に価値を届けたい仲間を募集しています。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/4 h-full bg-blue-600/5 blur-[120px]"></div>
      </section>

      {/* Vision Section */}
      <section className="py-40 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-[#002244] mb-12">プロフェッショナルへの道</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-20 font-medium">
              私たちは、一人ひとりが自律して動ける「個の強さ」と、チームで目標を達成する「組織の力」の両立を目指しています。<br />
              TENでの経験は、あなたのキャリアにおける確かな財産となるはずです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Smile className="text-blue-600" />, label: "最高のチームワーク" },
                { icon: <Zap className="text-blue-600" />, label: "実力主義の評価体系" },
                { icon: <TrendingUp className="text-blue-600" />, label: "圧倒的な営業スキル" },
                { icon: <Handshake className="text-blue-600" />, label: "徹底した教育フォロー" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-10 bg-white shadow-sm border border-slate-100 rounded-sm">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-800 text-sm tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Cards */}
      <section className="py-40">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white border border-slate-100 p-12 shadow-2xl shadow-blue-900/5 flex flex-col group hover:border-blue-600 transition-all duration-500">
                <div className="mb-8">
                  <span className="px-4 py-1 border border-slate-200 text-slate-400 text-[10px] font-black tracking-widest uppercase rounded-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <p className="text-[#004098] font-black text-2xl mb-8">{job.salary}</p>
                <p className="text-slate-500 leading-relaxed mb-12 flex-grow font-medium">
                  {job.desc}
                </p>
                <Link
                  to="/contact"
                  className="w-full py-6 bg-slate-900 text-white font-black text-xs tracking-[0.4em] uppercase text-center hover:bg-[#004098] transition-all flex items-center justify-center"
                >
                  Apply Now <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Contact */}
      <section className="py-32 bg-[#001122] text-white">
        <div className="container mx-auto px-8 text-center max-w-4xl">
          <h3 className="text-3xl font-black mb-10">採用に関するお問い合わせ</h3>
          <p className="text-slate-400 mb-16 font-medium">
            「まずは詳しく話を聞きたい」「社内の雰囲気を見たい」といったカジュアルなご相談も大歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="font-black text-3xl tracking-tighter">090-5652-9909</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="font-black text-xl tracking-widest">ikenaga@incten.com</span>
            </div>
          </div>
          <div className="mt-20">
            <Link to="/contact" className="inline-flex items-center text-xs font-black tracking-[0.3em] uppercase text-blue-500 hover:text-white transition-colors">
              Contact Form <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;