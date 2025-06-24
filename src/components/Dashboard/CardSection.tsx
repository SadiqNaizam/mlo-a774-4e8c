import React from 'react';
import FunnelCard from './FunnelCard';
import SourceCard from './SourceCard';

const CardSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FunnelCard />
      <SourceCard />
    </section>
  );
};

export default CardSection;
