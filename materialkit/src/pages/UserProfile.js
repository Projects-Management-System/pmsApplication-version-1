import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Card, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import UserDetails from '../components/_dashboard/UserProfile/UserDetails';
import ProfilePic from '../components/_dashboard/UserProfile/ProfilePic';

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
export default function UserProfile() {
  return (
    <Page title="Users List | Project Database System">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" gutterBottom>
            User Profile
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} />
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProfilePic />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <UserDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
