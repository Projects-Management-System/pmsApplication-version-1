import react, { useState, useEffect } from 'react';
import axios from 'axios';
// material
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Button, Card, Container, Stack, Typography, Link } from '@mui/material';
// components
import Page from '../../../Page';
//
import AppWebsiteVisits2 from '../AppWebsiteVisits2';
import LabTabs from '../LabTabs';
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

export default function HuaweiProjectsMilestones() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [projectNamesArray, setprojectNamesArray] = useState([]);

  const [AllmilestoneData, setAllmilsetonesData] = useState([]);

  const [dropdownValue, setDropdownValue] = useState('All Huawei Projects');
  const [TSSRmilsetonesData, setTSSRmilsetonesData] = useState([]);
  const [POmilsetonesData, setPOmilsetonesData] = useState([]);
  const [LogisticsmilsetonesData, setLogisticsmilsetonesData] = useState([]);
  const [DependancymilsetonesData, setDependancymilsetonesData] = useState([]);
  const [ImplemenationmilsetonesData, setImplemenationmilsetonesData] = useState([]);
  const [CapitalizationmilsetonesData, setCapitalizationmilsetonesData] = useState([]);

  const projectNames = projectNamesArray;
  const implementationBy = 'Huawei';

  const fetchProjectNames = async () => {
    const req = await axiosInstance
      .get('/filteredVendorProjectsNamesArray', {
        params: { Vendor: implementationBy }
      })
      .then((res) => {
        setprojectNamesArray(res.data.filteredProjectNamesArray);
      });
  };

  // ------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------

  const fetchData = async () => {
    const req = await axiosInstance
      .get('/vendorProjectsDatabasesMilestoneData', {
        params: { Implementation_By: implementationBy, Project: dropdownValue }
      })
      .then((res) => {
        setAllmilsetonesData(res.data.vendorProjectsAllMilestoneData);

        setTSSRmilsetonesData(res.data.vendorProjectsTSSRMilestoneData);
        setPOmilsetonesData(res.data.vendorProjectsPOMilestoneData);
        setLogisticsmilsetonesData(res.data.vendorProjectsLogisticsMilestoneData);
        setDependancymilsetonesData(res.data.vendorProjectsDependancyMilestoneData);
        setImplemenationmilsetonesData(res.data.vendorProjectsImplemenationMilestoneData);
        setCapitalizationmilsetonesData(res.data.vendorProjectsCapitalizationMilestoneData);
      });
  };

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };

  useEffect(() => {
    fetchProjectNames();
    fetchData();
  }, [dropdownValue]);

  return (
    <Page title="Vendor Projects Milestones | Projects Management System">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" gutterBottom>
            Vendor Projects Milestones Completion - Huawei Projects
          </Typography>
          <Typography variant="h9" gutterBottom />
          <TextField
            style={{ float: 'right' }}
            sx={{ width: 200 }}
            size="small"
            id="outlined-select-currency"
            select
            value={dropdownValue}
            onChange={handleChange}
          >
            {projectNames.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="top" mb={0}>
          <Typography variant="h6" gutterBottom />
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={13}>
            <LabTabs
              TSSRmilestonesData={TSSRmilsetonesData}
              POmilsetonesData={POmilsetonesData}
              LogisticsmilsetonesData={LogisticsmilsetonesData}
              DependancymilsetonesData={DependancymilsetonesData}
              ImplemenationmilsetonesData={ImplemenationmilsetonesData}
              CapitalizationmilsetonesData={CapitalizationmilsetonesData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits2 AllmilestoneData={AllmilestoneData} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
