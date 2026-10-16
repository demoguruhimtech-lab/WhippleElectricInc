import {
  Search, LayoutGrid, ToggleRight, Cable, Plug, Lightbulb,
  Fan, ShieldCheck, Building2, Hammer, Zap, type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Search,
  LayoutGrid,
  ToggleRight,
  Cable,
  Plug,
  Lightbulb,
  Fan,
  ShieldCheck,
  Building2,
  Hammer,
  Zap,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] || Zap;
}
