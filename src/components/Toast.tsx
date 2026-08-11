import React from 'react';
import { Check } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
}

export const Toast: React.FC<ToastProps> = ({ toasts }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black text-white px-4 py-3 rounded-none border border-gray-800 shadow-xl flex items-center gap-3 text-xs font-jakarta tracking-wide animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="leading-snug">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
