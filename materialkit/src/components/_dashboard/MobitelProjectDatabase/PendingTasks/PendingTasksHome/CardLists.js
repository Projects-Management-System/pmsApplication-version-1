import PropTypes from 'prop-types';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import HODetailsPendingTasks from './HODetailsPendingTasks';
import AssignPendingTasks from './AssignPendingTasks';
import DependenciesPendingTasks from './DependenciesPendingTasks';
import PRPOProgressPendingTasks from './PRPOProgressPendingTasks';
import LogisticsPendingTasks from './LogisticsPendingTasks';
import ImplementationPendingTasks from './ImplementationPendingTasks';
import AcceptancePendingTasks from './AcceptancePendingTasks';
import PaymentPendingTasks from './PaymentPendingTasks';
// -------------------------------------------------------------------
export default function CardLists() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/HandoverDetails"
        >
          <HODetailsPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Assign"
        >
          <AssignPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Dependencies"
        >
          <DependenciesPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/PRPO"
        >
          <PRPOProgressPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Logistics"
        >
          <LogisticsPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Implementation"
        >
          <ImplementationPendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Acceptance"
        >
          <AcceptancePendingTasks />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks/Payment"
        >
          <PaymentPendingTasks />
        </Link>
      </Grid>
    </Grid>
  );
}
