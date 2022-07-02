import PropTypes from 'prop-types';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import AllVendorProjects from './AllVendorProjects';
import HuaweiProjects from './HuaweiProjects';
import MobitelProjects from './ZTEProjects';
import VendorDatabases from './VendorDatabases';
// ----------------------------------------------------------------------
export default function ProductList() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/VendorProjectsOverviewAll">
          <AllVendorProjects />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/VendorProjectsOverviewHuawei">
          <HuaweiProjects />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/VendorProjectsOverviewZTE">
          <MobitelProjects />
        </Link>
      </Grid>
    </Grid>
  );
}
