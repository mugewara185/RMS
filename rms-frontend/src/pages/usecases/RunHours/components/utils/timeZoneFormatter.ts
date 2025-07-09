export const dateFormatterForXaxis = (
    val: any,
    plant: any,
    dateDifference: number
  ) => val;
  
  export const getFormatedDate = (
    timezone: string,
    timestamp: string,
    format: string
  ): string => {
    return timestamp; // just return the timestamp string
  };
  
  export const getTimeZoneTimeStamp = (
    timezone: string,
    utcTimestamp: number,
    format: string
  ): string => {
    return utcTimestamp.toString(); // fix: convert number to string
  };
  
  export const convertFromPstToPlantTimezone = (
    timestamp: any,
    plantTimezone: string,
    format: string
  ): string => {
    return timestamp;
  };
  