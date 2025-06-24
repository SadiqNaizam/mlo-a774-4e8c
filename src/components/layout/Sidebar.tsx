import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Menu,
} from 'lucide-react';

// Define the type for a navigation item
interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

// Navigation data
const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'customers', label: 'Customers', icon: User },
  { id: 'proposals', label: 'Proposals', icon: FileText },
  { id: 'invoices', label: 'Invoices', icon: Receipt },
  { id: 'items', label: 'Items', icon: ShoppingCart },
  { id: 'mail', label: 'Mail', icon: Mail },
  { id: 'shoebox', label: 'Shoebox', icon: Archive },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
];

const helpNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const renderNavList = (items: NavItem[]) => (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.id);
            }}
            className={cn(
              'flex items-center p-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors',
              {
                'bg-blue-100 text-blue-700 hover:bg-blue-200': activeItem === item.id,
              }
            )}
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="w-64 bg-gray-50 flex flex-col p-4 border-r border-border h-full flex-shrink-0">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold text-sm">
            BO
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-800 lg:hidden">
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-grow">
        {renderNavList(mainNavItems)}
      </nav>

      <div className="mt-auto">
        {renderNavList(helpNavItems)}
      </div>
    </aside>
  );
};

export default Sidebar;
