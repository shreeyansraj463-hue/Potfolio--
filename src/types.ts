export type DrawerType = 'ABOUT' | 'WORK' | 'CONTACT' | null;

export interface WorkStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack?: string[];
  details?: string;
  year?: string;
  role?: string;
  link?: string;
}

export interface ToastMessage {
  id: string;
  message: string;
}

