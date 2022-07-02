import React, { useState, useEffect } from 'react';
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Empty from './Empty';
// ----------------------------------------------------------------------
const userRole = localStorage.getItem('adminLevel');
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 70;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// -----------------------------------------------------------------------------------
export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      {userRole === 'Admin' ||
      userRole === 'Moderator' ||
      userRole === 'Vendor - Huawei' ||
      userRole === 'Vendor - ZTE' ||
      userRole === 'Editor' ? (
        <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      ) : (
        <Empty />
      )}
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
