import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import graph from '@iconify/icons-eva/activity-fill';
// material
import { Grid, Button, Card, Container, Stack, Typography, Link } from '@mui/material';
// components
import Page from '../components/Page';
//
import AppWebsiteVisits2 from '../components/_dashboard/MobitelSubProjects/AppWebsiteVisits2';
import {
  AppNewsUpdate,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  AppNewUsers,
  AppBugReports,
  AppBugReports1,
  AppItemOrders,
  AppWeeklySales
} from '../components/_dashboard/MobitelSubProjects';

import AppCurrentVisits0 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits0';
import AppCurrentVisits1 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits1';
import AppCurrentVisits2 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits2';
import AppCurrentVisits3 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits3';
import AppCurrentVisits4 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits4';
import AppCurrentVisits5 from '../components/_dashboard/MobitelSubProjects/New folder/AppCurrentVisits5';
import LabTabs from '../components/_dashboard/MobitelSubProjects/LabTabs';
import LabTabsEng from '../components/_dashboard/MobitelSubProjects/LabTabsEng';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function MobitelSubProjects() {
  return (
    <Page title="Mobitel Projects | Project Database">
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
      <Container>
        <Stack direction="row" spacing={0.5} mb={4}>
          <Button fullWidth size="large" color="warning" variant="contained">
            <Icon icon={graph} color="#DF3E30" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects">
              &nbsp;&nbsp;All Projects
            </Link>
          </Button>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon={graph} color="#32a14f" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects1">
              &nbsp;&nbsp;Project 1
            </Link>
          </Button>

          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon={graph} color="#32a14f" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects2">
              &nbsp;&nbsp;Project 2
            </Link>
          </Button>

          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon={graph} color="#32a14f" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects3">
              &nbsp;&nbsp;Project 3
            </Link>
          </Button>

          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon={graph} color="#32a14f" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects4">
              &nbsp;&nbsp;Project 4
            </Link>
          </Button>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon={graph} color="#32a14f" height={16} />
            <Link underline="hover" component={RouterLink} to="/dashboard/MobitelSubProjects5">
              &nbsp;&nbsp;Project 5
            </Link>
          </Button>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppBugReports1 />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
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
          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentVisits4 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits5 />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits1 />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
