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
