import PropTypes from 'prop-types';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import LoremIpsum from './LoremIpsum';

// -----------------------------------------------

export default function CardList() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/settings/VendorProjects">
          <LoremIpsum />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/settings/VendorProjects">
          <LoremIpsum />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/settings/VendorProjects">
          <LoremIpsum />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/settings/VendorProjects">
          <LoremIpsum />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link underline="none" component={RouterLink} to="/dashboard/settings/VendorProjects">
          <LoremIpsum />
        </Link>
      </Grid>
    </Grid>
  );
}
