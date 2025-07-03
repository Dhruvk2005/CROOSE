import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage(props:any) {
  return (
    <div className='w-[90%]' style={{boxShadow:"none",border:"0"}}>
      <Accordion className='w-[100%] '>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='text-[12px] font-semibold bg-[#F9FAFB] '>{props?.title}</div>
        </AccordionSummary>
        <AccordionDetails>
          {props?.desc}
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
