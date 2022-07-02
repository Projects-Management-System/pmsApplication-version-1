import { useFormik } from 'formik';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-eva/home-outline';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../../Page';
import CardList from './CardList';
//

// ----------------------------------------------------------------------

export default function MobitelProjectsSetingsHome() {
  return (
    <Page title="Mobitel Projects Settings | Projects Management Database">
      <Container>
        <Typography variant="h6" gutterBottom>
          Mobitel Projects Settings
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 2 }}
        />
        <CardList />
      </Container>
    </Page>
  );
}
