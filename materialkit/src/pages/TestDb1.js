import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Card, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Testdataforms from '../components/_dashboard/TestDb1/Testdataforms';
// ----------------------------------------------------------------------
// ---------------------------------------------------------------------

export default function TestDb1() {
  return (
    <Page title="Test DB | Project Database">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="top" mb={6}>
          <Typography variant="h5" gutterBottom>
            Test Database
          </Typography>
        </Stack>
        <Grid item xs={12} sm={6} md={12}>
          <Testdataforms />
        </Grid>
      </Container>
    </Page>
  );
}
