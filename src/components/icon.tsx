import {
  ArrowTrendingUpIcon,
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ChartPieIcon,
  CubeIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  HomeIcon,
  LightBulbIcon,
  LockClosedIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

/**
 * Icon mapping utility to replace emojis with proper Heroicons
 * Maps emoji strings to their corresponding Heroicon components
 */

export type IconName =
  | 'building'
  | 'lightbulb'
  | 'chart-bar'
  | 'rocket'
  | 'sparkles'
  | 'paintbrush'
  | 'chart-pie'
  | 'wrench'
  | 'device-mobile'
  | 'trophy'
  | 'bolt'
  | 'briefcase'
  | 'lock'
  | 'currency-dollar'
  | 'cube'
  | 'globe'
  | 'arrow-trending-up'
  | 'shield-check'
  | 'user-group'
  | 'home'
  | 'shopping-bag'
  | 'book-open'
  | 'target';

export interface IconProps {
  name: IconName;
  className?: string;
}

const iconMap = {
  building: BuildingOfficeIcon, // 🏢
  lightbulb: LightBulbIcon, // 💡
  'chart-bar': ChartBarIcon, // 📊
  rocket: RocketLaunchIcon, // 🚀
  sparkles: SparklesIcon, // ✨
  paintbrush: PaintBrushIcon, // 🎨
  'chart-pie': ChartPieIcon, // 📈
  wrench: WrenchScrewdriverIcon, // 🔧
  'device-mobile': DevicePhoneMobileIcon, // 📱
  trophy: TrophyIcon, // 🏆
  bolt: BoltIcon, // ⚡
  briefcase: BriefcaseIcon, // 💼
  lock: LockClosedIcon, // 🔒
  'currency-dollar': CurrencyDollarIcon, // 💰
  cube: CubeIcon, // 📦
  globe: GlobeAltIcon, // 🌐
  'arrow-trending-up': ArrowTrendingUpIcon, // 📈
  'shield-check': ShieldCheckIcon, // 🛡️
  'user-group': UserGroupIcon, // 👥
  home: HomeIcon, // 🏡
  'shopping-bag': ShoppingBagIcon, // 🛍️
  'book-open': BookOpenIcon, // 📚
  target: Square3Stack3DIcon, // 🎯
};

/**
 * Icon component that renders appropriate Heroicon based on name
 * @param name - Icon identifier (e.g., 'building', 'lightbulb')
 * @param className - Optional Tailwind classes for styling
 */
export function Icon({ name, className = 'size-6' }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return <IconComponent className={className} />;
}

/**
 * Helper function to get the appropriate icon name from emoji
 * @deprecated Use Icon component directly with IconName instead
 */
export function getIconFromEmoji(emoji: string): IconName | null {
  const emojiToIcon: Record<string, IconName> = {
    '🏢': 'building',
    '💡': 'lightbulb',
    '📊': 'chart-bar',
    '🚀': 'rocket',
    '✨': 'sparkles',
    '🎨': 'paintbrush',
    '📈': 'chart-pie',
    '🔧': 'wrench',
    '📱': 'device-mobile',
    '🏆': 'trophy',
    '⚡': 'bolt',
    '💼': 'briefcase',
    '🔒': 'lock',
  };

  return emojiToIcon[emoji] || null;
}
