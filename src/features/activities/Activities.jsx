import React from 'react';
import PageShell from '../../components/PageShell';
import EventsAndActivities from '../../components/EventsAndActivities';
import SEOHead from '../../components/SEOHead';

const Activities = () => {
  return (
    <PageShell
      title="Activities & Events"
      subtitle="Recent initiatives, workshops, seminars, and industry visits that define SPARK's impact."
    >
      <SEOHead
        title="Activities & Events | SPARK IUCEE RVCE"
        description="Recent initiatives, workshops, seminars, and industry visits that define SPARK IUCEE RVCE's impact at RV College of Engineering."
        path="/activities"
      />
      <EventsAndActivities />
    </PageShell>
  );
};

export default Activities;
