import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DarkUnica from "highcharts/themes/dark-unica";
import moment from "moment";
import {
  dateFormatterForXaxis,
  getFormatedDate,
  getTimeZoneTimeStamp,
  convertFromPstToPlantTimezone,
} from "../utils/timeZoneFormatter";
import { Box, Stack, Typography, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useWindowReSize from "../utils/windowResize";

// 🎨 Styles
const useStyles = makeStyles((theme: Theme) => ({
  typographyLegend: {
    "&.MuiTypography-root": {
      width: "10px",
      height: "5px",
      background: "#99CC33",
      display: "inline-block",
      borderRadius: "0.8px",
      marginRight: "10px",
      marginBottom: "2px",
    },
  },
  legendText: {
    "&.MuiTypography-root": {
      color: "#FFF",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: 500,
    },
  },
  legendValue: {
    "&.MuiTypography-root": {
      color: "#99CC33",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: 500,
      width: "50px",
    },
  },
}));

// ✅ Replaced context + redux usage with constants
const ChartHours2 = ({
  categories,
  data,
  lastValue,
  setGraphHeight,
  dateDifference,
}: any) => {
  console.log('sandbox area grpah data:', data)
  data.map((ele: any, index:number) => console.log( `ele(${index}):`, ele) )
  const contextProps = {
    selectedPlant: {
      plant_timezone: "UTC",
    },
  };

  const classes = useStyles();
  const containerRef = useRef<any>(null);
  const highChartRef = React.useRef<any>(null);
  const [options, setOptions] = useState({});
  const [appMode] = useState("dark");
  const [loading] = useState(false);
  const [width] = useWindowReSize();

  const dateFormatter = (item: any) => {
    if (moment(item).isValid() && contextProps.selectedPlant) {
      if (dateDifference <= 1) {
        return getFormatedDate(
          contextProps.selectedPlant.plant_timezone,
          getTimeZoneTimeStamp(
            contextProps.selectedPlant.plant_timezone,
            moment.utc(item).valueOf(),
            "YYYY-MM-DD hh:mma"
          ),
          "hh:mma"
        );
      } else if (dateDifference < 365) {
        return getFormatedDate(
          contextProps.selectedPlant.plant_timezone,
          getTimeZoneTimeStamp(
            contextProps.selectedPlant.plant_timezone,
            moment.utc(item).valueOf(),
            "YYYY-MM-DD hh:mma"
          ),
          "MM/DD hh:mma"
        );
      } else {
        return getFormatedDate(
          contextProps.selectedPlant.plant_timezone,
          getTimeZoneTimeStamp(
            contextProps.selectedPlant.plant_timezone,
            moment.utc(item).valueOf(),
            "YYYY-MM-DD hh:mma"
          ),
          "M/DD/YY hh:mma"
        );
      }
    } else {
      return item;
    }
  };

//   // Theme
//   useEffect(() => {
//     DarkUnica(Highcharts);
//   }, []);

  // Chart Options
  useEffect(() => {
    setOptions({
      plotOptions: {
        series: {
          animation: false,
          marker: { enabled: false },
          color: {
            linearGradient: { x1: 1, y1: 0, x2: 0, y2: 0 },
            stops: [[0, "#95c635"]],
          },
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#8ab93a"],
              [1, "#8ab93a10"],
            ],
          },
        },
      },
      credits: { enabled: false },
      chart: {
        zooming: { type: "x" },
        zoomType: "x",
        panning: true,
        panKey: "shift",
        showLoading: loading,
        style: { fontFamily: "Poppins" },
        type: "area",
        styledMode: true,
        spacingRight: 24,
        spacingLeft: 20,
        backgroundColor: "#293368",
        plotBackgroundColor: "#293368",
        height: 300,
      },
      title: { useHTML: true, text: "" },
      legend: { enabled: false },
      xAxis: {
        categories: categories,
        min: 0,
        max: categories.length - 1,
        labels: {
          format: "{value:%Y-%b-%e}",
          rotation: -50,
          formatter: (object: any) =>
            dateFormatterForXaxis(
              object.value,
              contextProps.selectedPlant,
              dateDifference
            ),
          style: { color: "#FFF", fontSize: "12px" },
        },
        tickPositioner: function () {
          const { tickPositions }: any = this;
          return tickPositions.filter((_: any, i: any) => i % 2 === 0);
        },
        gridLineColor: "#95c63550",
        gridLineWidth: 1,
      },
      yAxis: {
        labels: {
          formatter: (object: any) =>
            parseFloat(Number(object.value).toFixed(0)),
          align: "left",
          reserveSpace: true,
          x: -20,
          style: { color: "#FFF", fontSize: "12px", textAlign: "left" },
        },
        title: {
          align: "middle",
          text: "Hours",
          rotation: -90,
          style: { color: "#FFF" },
        },
        gridLineColor: "#95c63550",
        gridLineWidth: 1,
        tickPositioner: function () {
          const { dataMax, dataMin }: any = this;
          let list: number[]=[];
          for (let i = dataMin; i <= dataMax; i++) list.push(i);
          let size = list?.length / 8;
          return list?.filter((_: any, i: any) =>
            list.length <= 5 ? i % 2 === 0 : i % Math.round(size) === 0
          );
        },
      },
      // tooltip: {
      //   backgroundColor: "#FFF",
      //   style: { color: "#000" },
      //   formatter: function (this: any) {
      //     return `${convertFromPstToPlantTimezone(
      //       this.x,
      //       contextProps.selectedPlant?.plant_timezone,
      //       "MM/DD/YY hh:mmA z"
      //     )}<br>${this.series.name}: <b>${Math.round(this.y * 10000) / 10000}</b>`;
      //   },
      // },
      tooltip: {
        backgroundColor: "#FFF",
        style: { color: "#000" },
        formatter: function (this: any) {
          const currentPoint = this.point;
          const index = currentPoint.index;
          const seriesData = this.series.data;
          const prevPoint = seriesData[index - 1];
      
          const startTime = convertFromPstToPlantTimezone(
            prevPoint?.x ?? currentPoint.x,
            contextProps.selectedPlant?.plant_timezone,
            "MM/DD/YY hh:mmA z"
          );
          const stopTime = convertFromPstToPlantTimezone(
            currentPoint.x,
            contextProps.selectedPlant?.plant_timezone,
            "MM/DD/YY hh:mmA z"
          );
      
          return `
            <b>${this.series.name}</b><br/>
            <u>Started at:</u> ${startTime} — ${prevPoint?.y ?? currentPoint.y} hrs<br/>
            <u>Stopped at:</u> ${stopTime} — ${currentPoint.y} hrs
          `;
        },
      },      
      
      series: data.map((ele: any) => ({ ...ele, step: true })),
    });
  }, [data, categories]);

  useEffect(() => {
    if (containerRef.current) {
      const timer = setTimeout(() => {
        highChartRef?.current?.chart?.setSize(containerRef.current.clientWidth);
        setGraphHeight?.(containerRef.current?.clientHeight);
        return () => clearTimeout(timer);
      }, 500);
    }
  }, [width, data, categories]);

  return (
    <div style={{ width: "100%", margin: "15px 0px" }} ref={containerRef}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={highChartRef}
      />
      <Stack display="flex" justifyContent="space-between" direction="row" mt={2}>
        <Box style={{ padding: "0px 20px" }}>
          <Typography className={classes.legendText}>
            <Typography component="span" className={classes.typographyLegend} />
            Current Operating Hours
          </Typography>
        </Box>
        <Box style={{ padding: "0px 20px" }}>
          <Typography className={classes.legendValue}>
            {Number(lastValue).toFixed(0)}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default ChartHours2;
