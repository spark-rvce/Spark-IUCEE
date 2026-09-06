import React from 'react';
import PageShell from '../../components/PageShell';
import EventsAndActivities from '../../components/EventsAndActivities';

const Activities = () => {
  return (
    <PageShell
      title="Activities & Events"
      subtitle="Recent initiatives, workshops, seminars, and industry visits that define SPARK's impact."
    >
      <EventsAndActivities />
    </PageShell>
  );
};

export default Activities;
