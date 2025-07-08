// mockCubeData.js
export const mockGraphData = {
    A53_Blowmolder1_OperatingHours_PV_L1Counter: {
      categories: [
        '2025-07-01T00:00:00Z',
        '2025-07-01T01:00:00Z',
        '2025-07-01T02:00:00Z',
      ],
      series: [
        {
          name: 'Operating Hours',     
           data: [10, 150, 150, 200, 300, 300, 400],

        //   data: [
        //     { x: new Date('2025-07-01T00:00:00Z').getTime(), y: 120 },
        //     { x: new Date('2025-07-01T01:00:00Z').getTime(), y: 125 },
        //     { x: new Date('2025-07-01T02:00:00Z').getTime(), y: 130 },
        //   ],
        },
      ],
      lastValue: 130,
    },
    d2: {
      categories: [
        '2025-07-01T00:00:00Z',
        '2025-07-01T01:00:00Z',
        '2025-07-01T02:00:00Z',
      ],
      series: [
        {
          name: 'Operating Hours',
          data: [
            { x: new Date('2025-07-01T00:00:00Z').getTime(), y: 210 },
            { x: new Date('2025-07-01T01:00:00Z').getTime(), y: 215 },
            { x: new Date('2025-07-01T02:00:00Z').getTime(), y: 218 },
          ],
        },
      ],
      lastValue: 218,
    },
  };
  
//----------------------------------------------------------------
  const dummyCategories = [
    "2025-07-03T02:35:00Z",
    "2025-07-03T02:40:00Z",
    "2025-07-03T02:45:00Z",
    "2025-07-03T02:50:00Z",
    "2025-07-03T03:00:00Z",
    "2025-07-03T03:30:00Z",
    "2025-07-03T04:00:00Z",
    "2025-07-03T04:30:00Z",
  ];
  
  const dummyData = [
    {
      name: "Blower_L1",
      data: [10, 150, 150, 200, 300, 300, 400],
    },
  ];