
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InquiryType, ContactFormState } from '../types';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    inquiryType: InquiryType.EVENT,
    content: '',
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Logic to determine recipient based on requirements
  const getRecipientInfo = (type: InquiryType) => {
    switch (type) {
      case InquiryType.EVENT:
        return { name: "小山 紘人", email: "koyama@incten.com", desc: "催事営業担当" };
      case InquiryType.CONTRACT:
        return { name: "池永 一天", email: "ikenaga@incten.com", desc: "契約担当" };
      case InquiryType.INVOICE:
        return { name: "池永 一天 / 小山 紘人", email: "To: ikenaga@incten.com / CC: koyama@incten.com", desc: "請求・支払い担当" };
      default:
        return { name: "池永 一天", email: "ikenaga@incten.com", desc: "代表窓口" };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API logic
    setTimeout(() => {
      console.log("Routing Inquiry to:", getRecipientInfo(form.inquiryType));
      setSubmitted(true);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen pt-40 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce">
              <CheckCircle size={40} />
            </div>
            <h1 className="text-4xl font-serif-jp font-black text-slate-900 mb-8 tracking-tighter">
              お問い合わせを<br />受け付けました
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
              ご連絡ありがとうございます。入力いただいた内容は、担当の <strong>{getRecipientInfo(form.inquiryType).name}</strong> へ送信されました。自動返信メールが届いているかご確認ください。
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-900 font-black tracking-widest text-xs uppercase hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-40 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-amber-700 font-black text-[10px] tracking-[0.5em] uppercase mb-4 block">Inquiry</span>
          <h1 className="text-5xl lg:text-7xl font-serif-jp font-black text-slate-900 mb-8 tracking-tighter">お問い合わせ</h1>
          <div className="w-20 h-px bg-slate-200 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-6">株式会社TEN 窓口一覧</h3>
              <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                ご希望の用件に合わせて、適切な担当者が対応いたします。内容の振り分けはフォーム上部の「お問い合わせ種別」にて行われます。
              </p>
              
              <div className="space-y-8">
                <div className="p-8 border border-slate-100 bg-slate-50 rounded-sm">
                  <p className="text-[10px] font-black tracking-widest text-amber-700 uppercase mb-4">Event Promotion</p>
                  <p className="text-lg font-black text-slate-900 mb-1">小山 紘人</p>
                  <p className="text-sm font-bold text-slate-500 mb-4">080-4988-9926</p>
                  <p className="text-xs text-slate-400">催事営業のご相談・お見積り</p>
                </div>
                
                <div className="p-8 border border-slate-100 bg-slate-50 rounded-sm">
                  <p className="text-[10px] font-black tracking-widest text-amber-700 uppercase mb-4">Management & Contract</p>
                  <p className="text-lg font-black text-slate-900 mb-1">池永 一天</p>
                  <p className="text-sm font-bold text-slate-500 mb-4">090-5652-9909</p>
                  <p className="text-xs text-slate-400">契約・支払・飲食事業提携</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
              <div className="flex items-center space-x-6 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold">〒614-8363 京都府八幡市男山吉井10-26</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Inquiry Type <span className="text-amber-600">*</span></label>
                  <select
                    required
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value as InquiryType })}
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all appearance-none rounded-none"
                  >
                    {Object.values(InquiryType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Company Name</label>
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="株式会社 ◯◯"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all placeholder:text-slate-300 rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Full Name <span className="text-amber-600">*</span></label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="氏名を入力"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all placeholder:text-slate-300 rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Email Address <span className="text-amber-600">*</span></label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all placeholder:text-slate-300 rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="000-0000-0000"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all placeholder:text-slate-300 rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block">Message Content <span className="text-amber-600">*</span></label>
                <textarea
                  required
                  rows={6}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="お問い合わせ内容をご記入ください。"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 font-bold text-slate-900 focus:border-amber-600 outline-none transition-all resize-none placeholder:text-slate-300 rounded-none"
                ></textarea>
              </div>

              <div className="pt-8">
                <label className="flex items-center cursor-pointer group select-none">
                  <div className="relative">
                    <input
                      required
                      type="checkbox"
                      checked={form.agreed}
                      onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 border-2 transition-all ${form.agreed ? 'bg-amber-600 border-amber-600' : 'border-slate-300'}`}>
                      {form.agreed && <CheckCircle className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                  <span className="ml-4 text-xs font-bold text-slate-500 tracking-wider">
                    <Link to="#" className="text-amber-700 underline">プライバシーポリシー</Link>に同意する
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-8 bg-slate-900 text-white font-black text-xs tracking-[0.5em] uppercase hover:bg-black transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
                {!loading && <Send className="ml-3 w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
