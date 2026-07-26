import { type LucideIcon } from 'lucide-react';
import {
  Sparkles,
  Smile,
  Sun,
  Droplet,
  Wind,
  Syringe,
  Zap,
  Heart,
  Flower2,
  Shield,
  Leaf,
  Stethoscope,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Smile,
  Sun,
  Droplet,
  Wind,
  Syringe,
  Zap,
  Heart,
  Flower2,
  Shield,
  Leaf,
  Stethoscope,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Stethoscope;
}
