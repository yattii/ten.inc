
export enum InquiryType {
  EVENT = '催事営業のご相談',
  RESTAURANT = '水炊き（店舗）のお問い合わせ',
  CONTRACT = '契約書に関する連絡',
  INVOICE = '請求書・お支払いに関する連絡',
  OTHER = 'その他'
}

export interface ContactFormState {
  companyName?: string;
  name: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  content: string;
  agreed: boolean;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
}
