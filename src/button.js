import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function ButtonComponent() {
    return (
        
        <Stack direction="row" spacing={2}>
            <Link to="/">Menu principal</Link>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
    )
  }
  
  export default ButtonComponent