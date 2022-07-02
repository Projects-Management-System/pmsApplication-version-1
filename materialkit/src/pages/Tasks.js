import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
//
import { AppTasks, AppTasks1 } from '../components/_dashboard/tasks';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function Insights() {
  return (
    <Page title="Insights | Project Database">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Tasks
          </Typography>
          <Typography variant="h9" gutterBottom>
            Manage your tasks from here.
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="top" mb={3}>
          <Typography variant="h7" gutterBottom>
            Reminders
          </Typography>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks1 />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
