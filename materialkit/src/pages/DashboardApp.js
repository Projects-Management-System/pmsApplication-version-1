import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import AppBugReports1 from '../components/_dashboard/app/AppBugReports1';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
export default function DashboardApp() {
  const navigate = useNavigate();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [ChartDataForColumnGraphMobitel, setChartDatForColumnGraphMobitel] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  const [ChartDataForColumnGraphVendor, setChartDatForColumnGraphVendor] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ScopeDataMobitel, setScopeDataMobitel] = useState([]);
  const [HandoverDataMobitel, setHandoverDataMobitel] = useState([]);
  const [PATPassDataMobitel, sePATPassDataMobitel] = useState();
  const [OnAirDataMobitel, setOnAirDataMobitel] = useState();
  const [HoldSitesDataMobitel, setHoldSitesDataMobitel] = useState();
  const [XaxisDataMobitel, setXaxisDataMobitel] = useState([]);
  const [ProjectCompletionMobitel, setProjectCompletionMobitel] = useState([]);
  const [XAxisDaysLabelMobitel, setxAxisDaysLabelMobitel] = useState([]);
  const [WeeklyProgressDataMobitel, setweeklyProgressDataMobitel] = useState([
    { name: 'Completed', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Targeted', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  const [CompletedSitesMobitel, setcompletedSitesMobitel] = useState([]);

  const [ScopeDataVendor, setScopeDataVendor] = useState([]);
  const [HandoverDataVendor, setHandoverDataVendor] = useState([]);
  const [PATPassDataVendor, sePATPassDataVendor] = useState();
  const [OnAirDataVendor, setOnAirDataVendor] = useState();
  const [HoldSitesDataVendor, setHoldSitesDataVendor] = useState();
  const [ProjectCompletionVendor, setProjectCompletionVendor] = useState([]);
  const [WeeklyProgressDataVendor, setweeklyProgressDataVendor] = useState([
    { name: 'Completed', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Targeted', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  const [CompletedSitesVendor, setcompletedSitesVendor] = useState([]);

  useEffect(() => {
    fetchMobitelData();
    fetchVendorData();
    fetchMobitelScopeData();
    fetchVendorScopeData();
    fetchMobitelColumnGraphData();
    fetchVendorColumnGraphData();
  }, []);

  const fetchMobitelColumnGraphData = () => {
    axiosInstance
      .get('/mobitelProjectsDatabasesChartDataColumnChartData', {
        params: { Project: 'All Mobitel Projects' }
      })
      .then((res) => {
        setChartDatForColumnGraphMobitel(res.data.chartDataForFrontEnd);
        setXaxisDataMobitel(res.data.XaxisDataForTheGraphs);
      });
  };

  const fetchMobitelData = () => {
    axiosInstance
      .get('/mobitelProjectsDatabases', {
        params: { Project: 'All Mobitel Projects' }
      })
      .then((res) => {
        setHandoverDataMobitel(res.data.HandOverDataToSquares);
        sePATPassDataMobitel(res.data.PatDataForFrontEnd);
        setHoldSitesDataMobitel(res.data.HoldSitesDataforSquares);
        setOnAirDataMobitel(res.data.OnAirDataForFrontEnd);
        setProjectCompletionMobitel(res.data.ProjectCompletionForFrontEnd);
        setxAxisDaysLabelMobitel(res.data.SevenDaysOfWeek);
        setweeklyProgressDataMobitel(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSitesMobitel(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const fetchMobitelScopeData = () => {
    axiosInstance
      .get('/mobitelProjectsOverviewTable', {
        params: { ProjectName: 'All Mobitel Projects' }
      })
      .then((res) => {
        setScopeDataMobitel(res.data.scopeDataToTheFrontEnd);
      });
  };

  const fetchVendorColumnGraphData = () => {
    axiosInstance
      .get('/vendorProjectsDatabasesChartDataColumnChartData', {
        params: { Project: 'All Vendor Projects' }
      })
      .then((res) => {
        setChartDatForColumnGraphVendor(res.data.chartDataForFrontEnd);
      });
  };

  const fetchVendorData = () => {
    axiosInstance
      .get('/vendorProjectsDatabases', {
        params: { Project: 'All Vendor Projects' }
      })
      .then((res) => {
        setHandoverDataVendor(res.data.HandOverDataToSquares);
        sePATPassDataVendor(res.data.PatDataForFrontEnd);
        setHoldSitesDataVendor(res.data.HoldSitesDataforSquares);
        setOnAirDataVendor(res.data.OnAirDataForFrontEnd);
        setProjectCompletionVendor(res.data.ProjectCompletionForFrontEnd);
        setweeklyProgressDataVendor(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSitesVendor(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const fetchVendorScopeData = () => {
    axiosInstance
      .get('/vendorProjectsOverviewTable', {
        params: { ProjectName: 'All Vendor Projects' }
      })
      .then((res) => {
        setScopeDataVendor(res.data.scopeDataToTheFrontEnd);
      });
  };

  const ScopeData = ScopeDataMobitel + ScopeDataVendor;
  const HandoverData = parseInt(HandoverDataMobitel, 10) + parseInt(HandoverDataVendor, 10);
  const PATPassData = parseInt(PATPassDataMobitel, 10) + parseInt(PATPassDataVendor, 10);
  const OnAirData = OnAirDataMobitel + OnAirDataVendor;
  const HoldSitesData = HoldSitesDataMobitel + HoldSitesDataVendor;

  // -- ChartDataForColumnGraph ------------------------------------------------------------

  const onAir1 = ChartDataForColumnGraphMobitel[0];
  const onAir2 = ChartDataForColumnGraphVendor[0];
  const onAir = onAir1.map((a, i) => a + onAir2[i]);
  // ----------------------------------------------
  const PAT1 = ChartDataForColumnGraphMobitel[1];
  const PAT2 = ChartDataForColumnGraphVendor[1];
  const PAT = PAT1.map((a, i) => a + PAT2[i]);
  // --------------------------------------------
  const SAR1 = ChartDataForColumnGraphMobitel[2];
  const SAR2 = ChartDataForColumnGraphVendor[2];
  const SAR = SAR1.map((a, i) => a + SAR2[i]);
  // --------------------------------------------
  const Com1 = ChartDataForColumnGraphMobitel[3];
  const Com2 = ChartDataForColumnGraphVendor[3];
  const Com = Com1.map((a, i) => a + Com2[i]);
  // --------------------------------------------
  const Ins1 = ChartDataForColumnGraphMobitel[4];
  const Ins2 = ChartDataForColumnGraphVendor[4];
  const Ins = Ins1.map((a, i) => a + Ins2[i]);
  // --------------------------------------------
  const Mob1 = ChartDataForColumnGraphMobitel[5];
  const Mob2 = ChartDataForColumnGraphVendor[5];
  const Mob = Mob1.map((a, i) => a + Mob2[i]);
  // ----------------------------------------------
  const columnChartData = [];
  columnChartData.push(
    { name: 'On Air', type: 'column', data: onAir },
    { name: 'PAT', type: 'column', data: PAT },
    { name: 'SAR', type: 'column', data: SAR },
    { name: 'Commisioned', type: 'column', data: Com },
    { name: 'Installed', type: 'column', data: Ins },
    { name: 'Mobilized', type: 'column', data: Mob }
  );

  // console.log(columnChartData);

  return (
    <Page title="Dashboard | Projects Management Database System">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" gutterBottom>
            All Projects Overview
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} />
        </Stack>
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
            <br />
            <AppWebsiteVisits chartData={columnChartData} xaxisData={XaxisDataMobitel} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <br />
            <AppCurrentVisits
              projectCompletionMobitel={ProjectCompletionMobitel}
              projectCompletionVendor={ProjectCompletionVendor}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12} mb={0}>
            <AppWebsiteVisits1
              xAxisDaysLabel={XAxisDaysLabelMobitel}
              weeklyProgressDataMobitel={WeeklyProgressDataMobitel}
              weeklyProgressDataVendor={WeeklyProgressDataVendor}
              completedSitesMobitel={CompletedSitesMobitel}
              completedSitesVendor={CompletedSitesVendor}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
