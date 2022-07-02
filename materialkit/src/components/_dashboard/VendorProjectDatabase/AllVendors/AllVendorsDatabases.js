import React, { useState } from 'react';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography, Link } from '@mui/material';
// components
import Page from '../../../Page';
import AddDetails from './AddDetails';
import Datagrid from './Datagrid';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function AllVendorsDatabases() {
  const [isVisible1, setIsVisible1] = useState(false);

  return (
    <Page title="Vendor Projects Databases | Project Management Database">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h6" gutterBottom>
          Vendor Projects Databases - All Projects
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1.5}>
        <Button size="small" color="inherit" variant="outlined">
          <Link color="secondary" underline="hover" href="/dashboard/DatabasesVendorProjectsAll">
            Refresh
          </Link>
        </Button>
        <Button color="primary" variant="outlined">
          <Link
            underline="hover"
            component={RouterLink}
            to="/dashboard/DatabasesVendorProjects/AddNew"
          >
            Add New
          </Link>
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Datagrid />
      </Stack>
    </Page>
  );
}
