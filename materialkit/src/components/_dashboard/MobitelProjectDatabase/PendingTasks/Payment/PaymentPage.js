import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
// material
import { Grid, Button, Card, Typography, Stack, Container, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// components
import Page from '../../../../Page';
import Datagrid from './Datagrid';
// ----------------------------------------------------------------------
// ---------------------------------------------------------------------

export default function PaymentPage() {
  return (
    <Page title="Mobitel Projects Database | Projects Management Database System">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h6" gutterBottom>
          Mobitel Projects Pending Tasks - Payment
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1.5}>
        <Button size="small" color="inherit" variant="outlined">
          <Link color="secondary" underline="hover" href="/dashboard/DatabasesMobitelProjects">
            Refresh
          </Link>
        </Button>
        <Button color="primary" variant="outlined">
          <Link
            underline="hover"
            component={RouterLink}
            to="/dashboard/DatabasesMobitelProjects/AddNew"
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
