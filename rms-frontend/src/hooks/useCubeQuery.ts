// File: src/hooks/useCubeQuery.ts
import { useEffect, useState } from 'react';
import { mockGraphData } from '../mockCubeData';
import { generateTag } from '../configs/runHoursKpiConfig';

export interface CubeSeriesPoint {
  x: number;
  y: number;
}

export interface CubeSeries {
  name: string;
  data: CubeSeriesPoint[];
}

interface CubeResult {
  categories: string[];
  series: CubeSeries[];
  lastValue: number;
  isLoading: boolean;
  error: string | null;
}
interface input{
    plantCode: string,
    assetTag: string,
    suffix: string,
    queryType: 'blendingQuery' | 'regularQuery'
}
const useCubeQuery = (
prop: input
): CubeResult => {
  const [categories, setCategories] = useState<string[]>([]);
//   const [series, setSeries] = useState<CubeSeries[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [lastValue, setLastValue] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const tagName = generateTag(prop.plantCode, prop.assetTag, prop.suffix);

    setTimeout(() => {
      try {
        console.log('tagName:',tagName)
        let data = mockGraphData[tagName as keyof typeof mockGraphData];
            console.log('data:',data)
        // if (!data) throw new Error('Tag not found');
        if(!data){
            console.warn(`Missing tag: ${tagName}, falling back to 'd2'`);
            data= mockGraphData['d2'];
        }

        setCategories(data.categories);
        setSeries(data.series);
        setLastValue(data.lastValue);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 800);
  }, [prop.plantCode, prop.assetTag, prop.suffix, prop.queryType]);

  return { categories, series, lastValue, isLoading, error };
};

export default useCubeQuery;