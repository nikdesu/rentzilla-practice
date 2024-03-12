export interface TokenRefresh {
  refresh: string;
  access: string;
}

export interface LoginUser {
  email?: string;
  phone?: string;
  password: string;
}

export interface CallBack {
  id: number;
  name: string;
  phone: string;
  created_date: string;
  closed_date: string;
  is_closed: boolean;
}

export interface Backcall {
  name?: string;
  phone?: string;
  created_date?: string;
  closed_date?: string;
  is_closed?: boolean;
}

export interface CreateUnit {
  name?: string;
  first_name?: string;
  last_name?: string;
  model_name?: string;
  description?: string;
  features?: string;
  type_of_work?: string;
  time_of_work?: string;
  phone?: string;
  minimal_price?: number;
  money_value?: string;
  payment_method?: string;
  lat?: number;
  lng?: number;
  manufacturer?: number;
  owner?: number;
  category?: number;
  services?: [number];
}

export interface UnitResponse {
  id: number;
  name: string;
  slug: string;
  model_name: string;
  manufacturer: {
    id: number;
    name: string;
    is_custom: boolean;
  };
  description: string;
  features: string;
  owner: number;
  type_of_work: string;
  time_of_work: string;
  minimal_price: number;
  money_value: string;
  payment_method: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  house: string;
  postcode: string;
  lat: number;
  lng: number;
  working_start_time: string;
  working_end_time: string;
  count: number;
  date_created: string;
  date_updated: string;
  date_restored: string;
  is_archived: boolean;
  is_approved: boolean;
  declined_incomplete: boolean;
  declined_censored: boolean;
  declined_incorrect_price: boolean;
  declined_incorrect_data: boolean;
  declined_invalid_img: boolean;
  rating: number;
  views_count: number;
  minimal_price_UAH: number;
  minimal_price_USD: number;
  minimal_price_EUR: number;
  price: {
    id: number;
    price: number;
    price_UAH: number;
    price_USD: number;
    price_EUR: number;
    money_value: string;
    type_of_work: string;
    time_of_work: string;
    service: number;
    unit: number;
  };
}

export interface UnitGet{
  id: number;
}

export interface DeleteUnit {
  id: number;
}

export interface CreateTender {
  name: string;
  description: string;
  lat: number;
  lng: number;
  start_price: number;
  currency: string;
  type_of_work: string;
  start_propose_date: string;
  end_propose_date: string;
  start_tender_date: string;
  end_tender_date: string;
  customer: number;
  category: number;
  services: [number];
}

export interface TenderID {
  id: number;
}

export interface PatchTender {
  is_closed: boolean;
}

export interface DeleteTender {
  id: number;
}
