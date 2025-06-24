import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

// Data from the image, percentages sum to 110% for visual fidelity.
const sourceData: SourceData[] = [
    { name: 'Clutch', value: 3000, percentage: 50, color: '#ef4444' }, // red-500
    { name: 'Behance', value: 1000, percentage: 40, color: '#f59e0b' }, // amber-500
    { name: 'Instagram', value: 1000, percentage: 10, color: '#10b981' }, // emerald-500
    { name: 'Dribbble', value: 1000, percentage: 10, color: '#34d399' }, // emerald-400
  ];

const SourceCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sourceData}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={2}
                startAngle={90}
                endAngle={450}
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <ul className="text-sm">
            {sourceData.map((source) => (
              <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-1">
                <div className="flex items-center">
                  <span
                    className="w-2.5 h-2.5 rounded-full mr-3"
                    style={{ backgroundColor: source.color }}
                  ></span>
                  <span className="text-gray-600">{source.name}</span>
                </div>
                <span className="text-gray-500 justify-self-end">
                  ${new Intl.NumberFormat().format(source.value)}
                </span>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-gray-800 font-medium justify-self-end cursor-default">
                        {source.percentage}%
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>from leads total</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourceCard;
