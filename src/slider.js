import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';

export default function SliderSizes() {
  return (
    <Box width={300}>
        <Link to="/">Menu principal</Link>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}