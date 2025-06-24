import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStat {
  percentage: string;
  reason: string;
}

// Data from image, including duplicate reason for visual fidelity.
const lostReasons: ReasonStat[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' },
];

interface OtherDataStat {
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const otherData: OtherDataStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads that have not been contacted in the last 30 days.' },
];

const ReasonStatCards: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Reasons for leads lost */}
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {lostReasons.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-gray-800">{item.percentage}</p>
                <p className="text-sm text-gray-500 mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other data */}
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center">
                    <p className="text-4xl font-bold text-gray-800">{item.value}</p>
                    {item.hasInfo && (
                    <TooltipProvider delayDuration={200}>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <button className="ml-1.5 text-gray-400 hover:text-gray-600">
                                <Info size={16} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{item.infoText}</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReasonStatCards;
