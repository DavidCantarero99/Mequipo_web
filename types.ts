import { ReactNode, ButtonHTMLAttributes } from "react";

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: string;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}