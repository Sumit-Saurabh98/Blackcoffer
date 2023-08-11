import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

const dataFields = [
  'Intensity',
  'Likelihood',
  'Relevance',
  'Year',
  'Country',
  'Topics',
  'Region',
  'City'
];

function renderRow(props) {
  const { index, style } = props;

  return (
    <div>
      <ListItem style={{ ...style, display: 'flex', justifyContent: 'center', paddingTop:"40px"}} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={dataFields[index]} style={{ fontSize: '30px', textAlign: 'center'}} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: '100%', maxWidth: 300, bgcolor: '#1F2937', color: '#FFFFFF' }}
    >
      <FixedSizeList
        height={719}
        width={300}
        itemSize={60} 
        itemCount={dataFields.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
