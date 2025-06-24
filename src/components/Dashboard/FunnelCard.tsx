import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  tooltipText?: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', tooltipText: 'average time on this stage', color: 'bg-slate-800' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">600</span>
          <span className="ml-2 text-gray-500">active leads</span>
        </div>

        <div className="w-full h-2 rounded-full flex overflow-hidden mb-6 bg-gray-200">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>

        <ul className="space-y-3 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full ${stage.color} mr-3`}></span>
                <span className="text-gray-600">{stage.name}</span>
              </div>
              <span className="text-gray-800 font-medium justify-self-end">{stage.count}</span>
              <span className="text-gray-500 justify-self-end">${new Intl.NumberFormat().format(stage.value)}</span>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <span className="text-gray-500 justify-self-end cursor-default">{stage.duration}</span>
                  </TooltipTrigger>
                  {stage.tooltipText && (
                    <TooltipContent>
                      <p>{stage.tooltipText}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;
