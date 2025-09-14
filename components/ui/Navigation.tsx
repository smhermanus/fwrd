'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  badge?: string | number;
  external?: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'sidebar';
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  orientation = 'horizontal', 
  variant = 'default',
  className 
}) => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = React.useState<string[]>([]);

  const toggleDropdown = (href: string) => {
    setOpenDropdowns(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string): boolean => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const baseStyles = {
    horizontal: 'flex items-center space-x-1',
    vertical: 'flex flex-col space-y-1',
  };

  const linkVariants = {
    default: 'px-3 py-2 text-sm font-medium transition-colors duration-200',
    pills: 'px-3 py-2 text-sm font-medium rounded-full transition-all duration-200',
    underline: 'px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-all duration-200',
    sidebar: 'w-full px-3 py-2 text-sm font-medium text-left transition-all duration-200 rounded-md',
  };

  const activeLinkStyles = {
    default: 'text-primary bg-primary/5',
    pills: 'text-white bg-primary',
    underline: 'text-primary border-primary',
    sidebar: 'text-primary bg-primary/10 font-semibold',
  };

  const inactiveLinkStyles = {
    default: 'text-gray-700 hover:text-primary hover:bg-gray-50',
    pills: 'text-gray-700 hover:text-primary hover:bg-gray-100',
    underline: 'text-gray-700 hover:text-primary hover:border-gray-200',
    sidebar: 'text-gray-700 hover:text-primary hover:bg-gray-50',
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemActive = isActive(item.href);
    const isDropdownOpen = openDropdowns.includes(item.href);

    if (hasChildren) {
      return (
        <div key={item.href} className="relative">
          <button
            onClick={() => toggleDropdown(item.href)}
            className={cn(
              linkVariants[variant],
              isItemActive ? activeLinkStyles[variant] : inactiveLinkStyles[variant],
              'flex items-center justify-between w-full',
              level > 0 && 'ml-4'
            )}
          >
            <span className="flex items-center">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
              {item.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </span>
            {orientation === 'horizontal' ? (
              <ChevronDown className={cn(
                'ml-1 h-4 w-4 transition-transform duration-200',
                isDropdownOpen && 'rotate-180'
              )} />
            ) : (
              <ChevronRight className={cn(
                'ml-1 h-4 w-4 transition-transform duration-200',
                isDropdownOpen && 'rotate-90'
              )} />
            )}
          </button>

          {/* Dropdown Menu - FIXED: Added null check for item.children */}
          {isDropdownOpen && item.children && (
            <div className={cn(
              'mt-1',
              orientation === 'horizontal' 
                ? 'absolute left-0 top-full bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-48 z-50'
                : 'pl-4 space-y-1'
            )}>
              {item.children.map((child: NavigationItem) => renderNavigationItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    const LinkComponent = item.external ? 'a' : Link;
    const linkProps = item.external 
      ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
      : { href: item.href };

    return (
      <LinkComponent
        key={item.href}
        {...linkProps}
        className={cn(
          linkVariants[variant],
          isItemActive ? activeLinkStyles[variant] : inactiveLinkStyles[variant],
          'flex items-center',
          level > 0 && orientation === 'vertical' && 'ml-4'
        )}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
        {item.badge && (
          <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
            {item.badge}
          </span>
        )}
      </LinkComponent>
    );
  };

  return (
    <nav className={cn(baseStyles[orientation], className)}>
      {items.map((item: NavigationItem) => renderNavigationItem(item))}
    </nav>
  );
};

// Pre-configured navigation for FWRD
export const FWRDNavigation: React.FC<{ className?: string }> = ({ className }) => {
  const navigationItems: NavigationItem[] = [
    {
      href: '/category/headwear',
      label: 'HEADWEAR',
      children: [
        { href: '/category/headwear/caps', label: 'Caps' },
        { href: '/category/headwear/beanies', label: 'Beanies' },
        { href: '/category/headwear/visors', label: 'Visors' },
        { href: '/category/headwear/bucket-hats', label: 'Bucket Hats' },
      ],
    },
    {
      href: '/category/apparel',
      label: 'APPAREL',
      children: [
        { href: '/category/apparel/t-shirts', label: 'T-Shirts' },
        { href: '/category/apparel/hoodies', label: 'Hoodies' },
        { href: '/category/apparel/polo-shirts', label: 'Polo Shirts' },
        { href: '/category/apparel/jackets', label: 'Jackets' },
      ],
    },
    {
      href: '/catalogue',
      label: 'CATALOGUE',
    },
    {
      href: '/find-reseller',
      label: 'FIND A RESELLER',
    },
  ];

  return (
    <Navigation 
      items={navigationItems} 
      orientation="horizontal" 
      variant="default"
      className={className}
    />
  );
};

export default Navigation;