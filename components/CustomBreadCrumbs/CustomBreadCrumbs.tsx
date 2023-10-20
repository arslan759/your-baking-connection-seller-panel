import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'

interface breadCrumb {
  name: string
  route: string
}

interface CustomBreadCrumbsProps {
  breadCrumbs: breadCrumb[]
}

const CustomBreadCrumbs = ({ breadCrumbs }: CustomBreadCrumbsProps) => {
  return (
    <Breadcrumbs>
      {breadCrumbs.map((breadCrumb, index) => (
        <Link href={breadCrumb.route} key={index}>
          <Typography
            sx={{
              fontSize: '18px !important',
              fontWeight: '600 !important',
              lineHeight: '28px',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              color: index === breadCrumbs.length - 1 ? '#7DDEC1' : '#888',
              cursor: 'pointer',
              fontFeatureSettings: "'clig' off, 'liga' off",
              '@media (max-width: 767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            {breadCrumb.name}
          </Typography>
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default CustomBreadCrumbs
