import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { accordionData } from 'Constants/constants'

const CustomAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      {accordionData.map((item, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              '&.MuiAccordion-root:before': {
                display: 'none',
              },
              '&.MuiAccordion-root:last-child': {
                border: 'none',
              },
              '&.MuiAccordion-root': {
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid #000',
                boxShadow: 'none',
                borderRadius: '0px',
                marginTop: '24px',
                paddingBottom: '32px',
                '@media (max-width: 768px)': {
                  marginTop: '4.5px',
                  paddingBottom: '4.5px',
                },
                '&.Mui-expanded': {
                  marginTop: '24px',
                  '@media (max-width: 768px)': {
                    marginTop: '4.5px',
                  },

                  // padding: '0px',
                },
              },
              '& .MuiAccordionSummary-root': {
                padding: '0px',
                minHeight: '0px',
                '&.Mui-expanded': {
                  // minHeight: '0px',
                },
              },
              '& .MuiAccordionSummary-content': {
                margin: '0px',
                width: '80%',
                '&.Mui-expanded': {
                  // marginTop: '8px',
                },
              },
              '& .MuiAccordionDetails-root': {
                padding: '0px',
                '&.Mui-expanded': {
                  padding: '0px',
                },
              },
            }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              key={index}
              sx={{
                marginBottom: '8px',
                '@media (max-width: 768px)': {
                  marginBottom: '4.5px',
                },
              }}
              expandIcon={
                expanded === `panel${index}` ? (
                  <img
                    src='/Images/minus-circle.svg'
                    alt='minus-icon'
                    className='h-[12px] md:h-[24px] w-[12px] md:w-[24px]'
                  />
                ) : (
                  <img
                    src='/Images/plus-circle.svg'
                    alt='plus-icon'
                    className='h-[12px] md:h-[24px] w-[12px] md:w-[24px]'
                  />
                )
              }
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography
                sx={{
                  fontFamily: 'Josefin Sans',
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  fontStyle: 'normal',
                  '@media (max-width: 768px)': {
                    fontSize: '11px',
                    lineHeight: 'normal',
                  },
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              key={index}
              sx={{
                width: '95%',
                fontFamily: 'Open Sans',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                fontStyle: 'normal',

                '@media (max-width: 768px)': {
                  lineHeight: 'normal',
                  fontSize: '8px',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Open Sans',
                  fontSize: '16px !important',
                  fontWeight: '400 !imporatnt',
                  lineHeight: '24px',
                  color: '#090909',
                  fontStyle: 'normal',
                  '@media (max-width: 768px)': {
                    fontSize: '8px !important',
                    lineHeight: 'normal',
                  },
                }}
              >
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default CustomAccordion
