import React from 'react';
import { ExternalLink, Utensils, Heart, Award, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const RestaurantService: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="飲食事業（水炊き 天） | 株式会社TEN" 
        description="京都の伝統と至福のおもてなしを提供する「水炊き 天」。厳選された地鶏と秘伝のスープで, 心に残る食体験をお届けします。"
      />

      {/* Sub Hero */}
      <section className="pt-48 pb-32 bg-[#001122] text-white overflow-hidden relative text-center">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-blue-500 font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">Group Business</span>
          <h1 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter">水炊き 天</h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            株式会社TENがプロデュースする飲食事業。<br />妥協なき素材選びと、至福のおもてなし。
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="/restaurant-exterior.jpg" 
            alt="水炊き 天 店舗外観" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-[#002244] mb-12">京都の伝統を、現代の食卓へ。</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-20 font-medium">
              私たちは催事営業で培った「人を喜ばせる力」を、飲食の現場でも発揮しています。
              厳選された地鶏と、職人が数日間かけて作り上げる黄金のスープ。
              「水炊き 天」は、大切な方と過ごす特別な時間を提供します。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="space-y-4">
                <Utensils className="w-10 h-10 text-blue-600 mx-auto" />
                <h4 className="font-black text-slate-900">極みの白濁スープ</h4>
                <p className="text-sm text-slate-500">鶏の旨味を凝縮した濃厚コラーゲン。</p>
              </div>
              <div className="space-y-4">
                <Award className="w-10 h-10 text-blue-600 mx-auto" />
                <h4 className="font-black text-slate-900">厳選地鶏</h4>
                <p className="text-sm text-slate-500">毎朝仕入れる鮮度抜群の京都産地鶏。</p>
              </div>
              <div className="space-y-4">
                <Heart className="w-10 h-10 text-blue-600 mx-auto" />
                <h4 className="font-black text-slate-900">心を込めた接客</h4>
                <p className="text-sm text-slate-500">京都らしい丁寧な振る舞い。</p>
              </div>
            </div>

            <div className="p-16 border border-slate-100 bg-slate-50 rounded-sm shadow-xl shadow-blue-900/5">
              <h3 className="text-2xl font-black text-[#002244] mb-8">ブランドサイトにて詳細を公開中</h3>
              <p className="text-slate-500 mb-12 text-sm font-medium">
                メニュー内容、店舗アクセス、オンライン予約につきましては、<br />「水炊き 天」専用のブランドサイトをご覧ください。
              </p>
              <a 
                href="https://mizutaki-ten.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 py-6 bg-[#004098] text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-black transition-all group shadow-2xl"
              >
                Go to Brand Site
                <ExternalLink className="ml-3 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantService;