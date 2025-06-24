import React from 'react';
import CardSection from '../components/Dashboard/CardSection';
import LeadsTrackingGraph from '../components/Dashboard/LeadsTrackingGraph';
import ReasonStatCards from '../components/Dashboard/ReasonStatCards';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * A simple tab component for navigating between Sales and Leads views.
 * This is a local component as it is specific to this page's layout.
 */
const DashboardTabs: React.FC = () => {
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        <a
          href="#"
          className="whitespace-nowrap py-3 px-1 border-b-2 border-transparent font-medium text-sm text-muted-foreground hover:text-foreground hover:border-gray-300 transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          Sales
        </a>
        <a
          href="#"
          className="whitespace-nowrap py-3 px-1 border-b-2 border-primary font-semibold text-sm text-primary"
          aria-current="page"
          onClick={(e) => e.preventDefault()}
        >
          Leads
        </a>
      </nav>
    </div>
  );
};

/**
 * The main dashboard page for the Sales Dashboard application.
 * It assembles various data visualization components within a standard application layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <DashboardTabs />
        <CardSection />
        <LeadsTrackingGraph />
        <ReasonStatCards />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
