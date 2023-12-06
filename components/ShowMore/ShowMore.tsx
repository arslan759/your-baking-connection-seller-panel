import React, { useState } from 'react'
import { Typography } from '@mui/material'

interface ShowMoreProps {
  text: string
  words: number
  textAlign?: string
  color?: string
  showMoreColor?: string
  fontSize?: number
  fontWeight?: number
  fontFamily?: string
  lineHeight?: string
  textTransform?: string
}

const ShowMore = ({
  text,
  words,
  textAlign,
  color,
  showMoreColor,
  fontSize = 18,
  fontWeight = 600,
  fontFamily = 'Josefin Sans',
  lineHeight = '28px !important',
  textTransform = 'none',
}: ShowMoreProps) => {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const displayText = showAll ? text : text?.slice(0, words)
  return (
    <>
      <Typography
        sx={{
          fontSize: `${fontSize}px !important`,
          fontWeight: `${fontWeight} !important`,
          lineHeight: lineHeight,
          fontFamily: fontFamily,
          textTransform: textTransform,
          textAlign: textAlign ? textAlign : 'justify',
          color: color ? color : '#888',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '12px !important',
            lineHeight: '16px',
          },
        }}
      >
        {displayText} {!showAll && text?.length > words && '...'} {` `}
        {!showAll && text?.length > words && (
          <span
            style={{
              color: showMoreColor ? showMoreColor : '#7DDEC1',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
            onClick={toggleShowAll}
          >
            Show more
          </span>
        )}
        {showAll && (
          <span
            style={{
              color: '#7DDEC1',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
            onClick={toggleShowAll}
          >
            Show less
          </span>
        )}
      </Typography>
    </>
  )
}

export default ShowMore
