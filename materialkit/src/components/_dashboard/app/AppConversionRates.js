import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Stack } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';
import LanguagePopover from './LanguagePopover';

// --Horizontal project milestones bar chart on dashboard----------------------------------------

const CHART_DATA = [{ data: [144, 193, 106, 178, 177, 179] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (sites) => fNumber(sites),
        title: {
          formatter: (sites) => `Sites`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '20%', borderRadius: 4 }
    },
    xaxis: {
      categories: ['On Air', 'PAT', 'SAR', 'Commisioned', 'Installed', 'Mobilized']
    }
  });

  return (
    <Card>
      <CardHeader title="Project Milestone Completions" subheader="(+23%) than last year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
