import react, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Card, Container, Stack, Typography, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import graph from '@iconify/icons-eva/activity-fill';
// components
import Page from '../../../Page';
//
import {
  AppNewsUpdate,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  AppNewUsers,
  AppBugReports,
  AppBugReports1,
  AppItemOrders,
  AppWeeklySales
} from '..';

import AppCurrentVisits0 from '../New folder/AppCurrentVisits0';
import AppCurrentVisits from '../AppCurrentVisits';
import AppCurrentVisits1 from '../New folder/AppCurrentVisits1';
import AppCurrentVisits2 from '../New folder/AppCurrentVisits2';
import AppCurrentVisits3 from '../New folder/AppCurrentVisits3';
import AppCurrentVisits4 from '../New folder/AppCurrentVisits4';
import AppCurrentVisits5 from '../New folder/AppCurrentVisits5';

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

export default function AllVendorProjectsInsights() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [projectNamesArray, setprojectNamesArray] = useState([]);

  const [xAxisMonthsArray, setXAxisMonthsArray] = useState();

  const [ScopeData, setScopeData] = useState([]);
  const [HandoverData, setHandoverData] = useState([]);
  const [PATPassData, sePATPassData] = useState();
  const [OnAirData, setOnAirData] = useState();
  const [HoldSitesData, setHoldSitesData] = useState();
  const [ChartDatForColumnGraph, setChartDatForColumnGraph] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  const [XaxisData, setXaxisData] = useState([]);
  const [ProjectCompletion, setProjectCompletion] = useState([0, 0, 0]);
  const [SitesOnAir, setSitesOnAir] = useState([0, 0, 0]);
  const [PatCompletionData, setPatCompletionData] = useState([0, 0, 0, 0, 0]);
  const [SARData, setSARData] = useState([0, 0, 0, 0, 0]);
  const [CommissioningData, setCommissioningData] = useState([0, 0, 0]);
  const [InstallationData, setInstallationData] = useState([0, 0, 0, 0, 0, 0]);
  const [MobilizationData, setMobilizationData] = useState([0, 0, 0]);
  const [XAxisDaysLabel, setxAxisDaysLabel] = useState([]);
  const [WeeklyProgressData, setweeklyProgressData] = useState([]);
  const [CompletedSites, setcompletedSites] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('All Vendor Projects');

  useEffect(() => {
    fetchProjectNames();
    fetchData();
    fetchChartDataforColumnGraphs();
    fetchScopeData();
  }, [dropdownValue]);

  const fetchProjectNames = async () => {
    const req = await axiosInstance.get('/vendorProjectsOverviewTableProjectsArray').then((res) => {
      setprojectNamesArray(res.data.vendorProjectsNamesArrayForInsights);
    });
  };

  const projectNames = projectNamesArray;

  const fetchChartDataforColumnGraphs = async () => {
    const req = await axiosInstance
      .get('/vendorProjectsDatabasesChartDataColumnChartData', {
        params: { Project: dropdownValue }
      })
      .then((res) => {
        setChartDatForColumnGraph(res.data.chartDataForFrontEnd);
        setXaxisData(res.data.XaxisDataForTheGraphs);
      });
  };

  const fetchData = async () => {
    const req = await axiosInstance
      .get('/vendorProjectsDatabases', {
        params: { Project: dropdownValue }
      })
      .then((res) => {
        setHandoverData(res.data.HandOverDataToSquares);
        sePATPassData(res.data.PatDataForFrontEnd);
        setHoldSitesData(res.data.HoldSitesDataforSquares);
        setOnAirData(res.data.OnAirDataForFrontEnd);
        setProjectCompletion(res.data.ProjectCompletionForFrontEnd);
        setSitesOnAir(res.data.sitesOnAirDataForFrontEnd);
        setPatCompletionData(res.data.patCompletionDataForFrontEnd);
        setSARData(res.data.sarDataForFrontEnd);
        setCommissioningData(res.data.commissioningDataForFrontEnd);
        setInstallationData(res.data.installationDataForFrontEnd);
        setMobilizationData(res.data.mobilizeDataforFrontEnd);
        setxAxisDaysLabel(res.data.SevenDaysOfWeek);
        setweeklyProgressData(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSites(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const fetchScopeData = async () => {
    const req = await axiosInstance
      .get('/vendorProjectsOverviewTable', {
        params: { ProjectName: dropdownValue }
      })
      .then((res) => {
        setScopeData(res.data.scopeDataToTheFrontEnd);
      });
  };

  // // function getXaxisData() {
  // const getXaxisData = () => {
  //   const theMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  //   const now = new Date();
  //   const monthsArray = [];

  //   for (let i = 0; i < 11; i += i) {
  //     const future = new Date(now.getFullYear(), now.getMonth() - i, 1);
  //     const month = theMonths[future.getMonth()];
  //     const year = future.getFullYear();
  //   }

  //   for (let j = 0; j < 11; j += j) {
  //     monthsArray.push(`${theMonths[now.getMonth()]}/01/${now.getFullYear().toString()}`);
  //     now.setMonth(now.getMonth() - 1);
  //   }

  //   const nextMonth = new Date(now.setMonth(now.getMonth() + 1));
  //   const nextMm = `0${nextMonth.getMonth()}`.slice(-2);
  //   const nextMy = nextMonth.getFullYear() + 1;
  //   const nextMonthDate = `${nextMm}/01/${nextMy}`;
  //   console.log(nextMonthDate);
  //   monthsArray.unshift(nextMonthDate);
  //   monthsArray.reverse();
  //   const XaxisMonths = monthsArray;
  //   setXAxisMonthsArray(XaxisMonths);
  //   // console.log(monthsArray);
  //   // return monthsArray;
  // };

  // const axisData = xAxisMonthsArray;
  // console.log(xAxisMonthsArray);
  //  ---------------------------------------------------------------------------------------------------------------------------
  //  ---------------------------------------------------------------------------------------------------------------------------

  return (
    <Page title="Vendor Projects Insights | Project Database">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" gutterBottom>
            Vendor Projects Insights - All Projects
          </Typography>
          <Typography variant="h9" gutterBottom />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="caption1">Select project</Typography>
          <TextField
            style={{ float: 'right' }}
            sx={{ width: 200 }}
            size="small"
            id="outlined-select-currency"
            select
            value={dropdownValue}
            onChange={handleChange}
          >
            {projectNames.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppWeeklySales scopeData={ScopeData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppBugReports1 handoverData={HandoverData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppItemOrders patData={PATPassData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppNewUsers onAirData={OnAirData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppBugReports holdData={HoldSitesData} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits chartData={ChartDatForColumnGraph} xaxisData={XaxisData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits projectCompletion={ProjectCompletion} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits0 sitesOnAir={SitesOnAir} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits1 patCompletionData={PatCompletionData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits2 sarData={SARData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits3 commissioningData={CommissioningData} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentVisits4 installationData={InstallationData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits5 mobilizationData={MobilizationData} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits1
              xAxisDaysLabel={XAxisDaysLabel}
              weeklyProgressData={WeeklyProgressData}
              completedSites={CompletedSites}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
