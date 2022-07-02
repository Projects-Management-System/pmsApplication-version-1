import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Card, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
//
import AppWebsiteVisits2 from '../components/_dashboard/MobitelProjects/AppWebsiteVisits2';
import {
  AppNewsUpdate,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales
} from '../components/_dashboard/MobitelProjects';

import AppCurrentVisits0 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits0';
import AppCurrentVisits1 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits1';
import AppCurrentVisits2 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits2';
import AppCurrentVisits3 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits3';
import AppCurrentVisits4 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits4';
import AppCurrentVisits5 from '../components/_dashboard/MobitelProjects/New folder/AppCurrentVisits5';
import LabTabs from '../components/_dashboard/MobitelProjects/LabTabs';
import LabTabsEng from '../components/_dashboard/MobitelProjects/LabTabsEng';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function MobitelProjects() {
  return (
    <Page title="Mobitel Projects | Projects Management Database System">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
          <Typography variant="h4" gutterBottom>
            Mobitel Sub Projects
          </Typography>
          <Typography variant="h9" gutterBottom />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" mb={0} />
        <Stack direction="row" alignItems="center" justifyContent="top" mb={0}>
          <Typography variant="h6" gutterBottom />
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits0 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits1 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits2 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits3 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits4 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits5 />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits1 />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits2 />
          </Grid>
          <Grid item xs={12} md={6} lg={14}>
            <LabTabs />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <LabTabsEng />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
