import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const realisticTrackingData = [
    { name: 'March', closedWon: 88, closedLost: 65 },
    { name: 'April', closedWon: 25, closedLost: 42 },
    { name: 'May', closedWon: 62, closedLost: 95 },
    { name: 'June', closedWon: 85, closedLost: 8 },
    { name: 'July', closedWon: 68, closedLost: 45 },
    { name: 'August', closedWon: 30, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-lg text-sm">
        <p className="font-bold mb-2">{label}</p>
        <p style={{ color: payload[0].stroke }} className="font-medium">{`Closed Won: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].stroke }} className="font-medium">{`Closed Lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingGraph: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="mt-2 flex items-baseline gap-x-6 gap-y-2 flex-wrap">
                    <p>
                        <span className="text-2xl font-bold text-gray-800">680</span>
                        <span className="ml-2 text-gray-500 text-sm">total closed</span>
                    </p>
                    <p>
                        <span className="text-2xl font-bold text-gray-800">70</span>
                        <span className="ml-2 text-gray-500 text-sm">total lost</span>
                    </p>
                </div>
            </div>
             <Button variant="outline" className="text-sm text-gray-600 font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                last 6 months
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
            </Button>
        </div>

        <div className="flex space-x-2 mt-4">
            <Button variant="secondary" size="sm" className="bg-gray-200 text-gray-700 h-8">Leads came</Button>
            <Button variant="secondary" size="sm" className="bg-blue-100 text-blue-700 h-8">Leads Converted</Button>
            <Button variant="secondary" size="sm" className="bg-gray-200 text-gray-700 h-8">Total deals size</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={realisticTrackingData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <defs>
                    <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }}/>
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="closedWon" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, strokeWidth: 2, fill: 'white' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'white' }}/>
              <Area type="monotone" dataKey="closedLost" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, strokeWidth: 2, fill: 'white' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'white' }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
                <span className="w-3 h-3 rounded-sm bg-[#10b981] mr-2"></span>
                <span>Closed won</span>
            </div>
            <div className="flex items-center">
                <span className="w-3 h-3 rounded-sm bg-[#ef4444] mr-2"></span>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingGraph;
