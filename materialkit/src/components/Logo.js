import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src="https://i.ibb.co/ByvfwxN/logo12.png"
      // src="../../../public/favicon/favicon.ico"
      sx={{ width: 50, height: 50, ...sx }}
    />
  );
}
