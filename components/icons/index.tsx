// Icons from isocons.app - unfilled 2px stroke icons
// These icons use currentColor for fill and stroke
// Set the color of the parent element to control icon color

// Navigation and Menu Icons
export { default as MenuIcon } from './MenuIcon';
export { default as ChevronLeftIcon } from './ChevronLeftIcon';
export { default as ChevronRightIcon } from './ChevronRightIcon';
export { default as ChevronDownIcon } from './ChevronDownIcon';
export { default as ChevronUpIcon } from './ChevronUpIcon';
export { default as ArrowLeftIcon } from './ArrowLeftIcon';
export { default as ArrowRightIcon } from './ArrowRightIcon';

// Action Icons
export { default as XIcon } from './XIcon';
export { default as CheckIcon } from './CheckIcon';
export { default as SearchIcon } from './SearchIcon';

// UI Element Icons
export { default as MoreHorizontalIcon } from './MoreHorizontalIcon';
export { default as GripVerticalIcon } from './GripVerticalIcon';
export { default as CircleIcon } from './CircleIcon';
export { default as PanelLeftIcon } from './PanelLeftIcon';
export { default as DotIcon } from './DotIcon';

// Physiotherapy Website Icons
export { default as WheelchairIcon } from './WheelchairIcon';
export { default as CarIcon } from './CarIcon';
export { default as HospitalIcon } from './HospitalIcon';
export { default as ShieldIcon } from './ShieldIcon';
export { default as LocationIcon } from './LocationIcon';
export { default as ClockIcon } from './ClockIcon';
export { default as LightningIcon } from './LightningIcon';
export { default as HeartIcon } from './HeartIcon';
export { default as HomeIcon } from './HomeIcon';
export { default as GlobeIcon } from './GlobeIcon';

// Icon wrapper component for consistent sizing and styling
interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const IconWrapper: React.FC<IconProps & { children: React.ReactNode }> = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  className = '',
  children
}) => (
  <div 
    className={`inline-flex items-center justify-center ${className}`}
    style={{ 
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      color 
    }}
  >
    {children}
  </div>
);