// File: src/configs/runHoursKpiConfig.js

export const runHoursKpiConfig = {
    operatingHours: {
      title: 'Operating Hours',
      suffix: 'OperatingHours_PV_L1Counter',
      component: 'AreaGraph',
      kpiType: 'blendingQuery',
    },
    lastReset: {
      title: 'Last Counter Reset',
      suffix: 'ResetCounter_TS_L1',
      component: 'GaugePM',
      kpiType: 'regularQuery',
    },
    upcomingPM: {
      title: 'Upcoming PM',
      suffix: 'UpcomingPM_Label',
      component: 'PMStatusTimeline',
      kpiType: 'regularQuery',
    },
    counterHours: {
      title: 'Hours Since Last PM',
      suffix: 'SinceLastResetCounter_L1',
      component: 'CounterProgress',
      kpiType: 'regularQuery',
    },
    pmGantt: {
      title: 'PM Timeline (Gantt)',
      suffix: 'PMStatusGantt',
      component: 'GanttBar',
      kpiType: 'regularQuery',
    },
  };
  
  // Example usage:
  // generateTag('A53', 'Blowmolder1', runHoursKpiConfig.operatingHours.suffix)
  export const generateTag = (plantCode, assetTag, suffix) => {
    return `${plantCode}_${assetTag}_${suffix}`;
  };
  