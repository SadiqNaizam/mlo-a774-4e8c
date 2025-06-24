import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-border sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Proposal</DropdownMenuItem>
          <DropdownMenuItem>New Invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
