import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
const ProductDetailDescription = () => {
  const servingSize = [
    'One-person cake: 4-6 ounces (113-170 grams)',
    'Two to three people: 8-12 ounces (225-350 grams)',
    'Five people: 16-24 ounces (450-700 grams)',
  ]

  const ingredients = [
    '1 cup (2 sticks) unsalted butter, room temperature',
    '1 cup granulated sugar',
    '1/2 cup light brown sugar, packed',
    '2 large eggs, room temperature',
    '2 teaspoons vanilla extract',
    '2 1/2 cups all-purpose flour',
    '1 teaspoon baking soda',
    '1 teaspoon kosher salt',
    '1 cup semisweet chocolate chips',
    '1 cup dark chocolate chips',
  ]

  const nutritionalFacts = [
    {
      id: 1,
      nutrition: 'calories',
      quantity: 219,
    },
    {
      id: 2,
      nutrition: 'calories from fat',
      quantity: 110,
    },
    {
      id: 3,
      nutrition: 'total fat',
      quantity: 12,
    },
    {
      id: 4,
      nutrition: 'saturated fat',
      quantity: 7,
    },
    {
      id: 5,
      nutrition: 'sugars',
      quantity: 19,
    },
    {
      id: 6,
      nutrition: 'protein',
      quantity: 2,
    },
    {
      id: 7,
      nutrition: 'sodium',
      quantity: 150,
    },
  ]

  const allergens = [
    {
      id: 1,
      allergen: 'contains peanuts',
      img: '/Images/allergen-peanut.svg',
    },
    {
      id: 2,
      allergen: 'contains dairy',
      img: '/Images/allergen-dairy.svg',
    },
    {
      id: 3,
      allergen: 'contains eggs',
      img: '/Images/allergen-gluten.svg',
    },
    {
      id: 4,
      allergen: 'contains soy',
      img: '/Images/allergen-gluten.svg',
    },
    {
      id: 5,
      allergen: 'contains gluten',
      img: '/Images/allergen-gluten.svg',
    },
  ]

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-y-[48px] gap-x-[12px] w-full'>
        {/* Product Ingredients */}
        <div className='w-full lg:w-[50%]'>
          <Typography
            sx={{
              fontSize: '20px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              color: '#000',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (max-width:767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/product-ingredients.svg'
              alt='ingredient-icon'
              className='w-[25px] h-[25px]'
            />
            <span>Ingredients</span>
          </Typography>

          <div className='mt-[20px]'>
            <ul
              className=''
              style={{
                listStylePosition: 'inside',
              }}
            >
              {ingredients.map((item, index) => (
                <li key={index}>
                  <Typography
                    sx={{
                      fontSize: '18px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '400 !important',
                      lineHeight: 'normal',
                      color: '#888',
                      display: 'inline',
                      '@media (max-width:767px)': {
                        fontSize: '14px !important',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Nutritional Facts */}
        <div className='w-full lg:w-[30%]'>
          <Typography
            sx={{
              fontSize: '20px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              color: '#000',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (max-width:767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/product-nutrition.svg'
              alt='nutrition-icon'
              className='w-[25px] h-[25px]'
            />
            <span>nutritional facts</span>
          </Typography>

          <div className='mt-[20px]'>
            {nutritionalFacts.map((item, index) => (
              <div
                key={index}
                className='flex justify-between pb-[12px] mb-[12px]'
                style={{
                  borderBottom: '1px solid #888',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px !important',
                    fontFamily: 'Open Sans',
                    fontWeight: '400 !important',
                    lineHeight: 'normal',
                    textTransform: 'capitalize',
                    color: '#888',
                    '@media (max-width:767px)': {
                      fontSize: '14px !important',
                    },
                  }}
                >
                  {item.nutrition}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px !important',
                    fontFamily: 'Open Sans',
                    fontWeight: '400 !important',
                    lineHeight: 'normal',
                    color: '#888',
                    '@media (max-width:767px)': {
                      fontSize: '14px !important',
                    },
                  }}
                >
                  {item.quantity}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-[48px] flex flex-col lg:flex-row gap-y-[48px] gap-x-[12px] w-full'>
        {/*Product  Serving Size */}
        <div className='w-full lg:w-[50%]'>
          <Typography
            sx={{
              fontSize: '20px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              color: '#000',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (max-width:767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/product-serving.svg'
              alt='serving-icon'
              className='w-[25px] h-[25px]'
            />
            <span>serving size</span>
          </Typography>

          <div className='w-fit mt-[20px]'>
            <ul
              className=''
              style={{
                listStylePosition: 'inside',
              }}
            >
              {servingSize.map((item, index) => (
                <li key={index}>
                  <Typography
                    sx={{
                      fontSize: '18px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '400 !important',
                      lineHeight: 'normal',
                      color: '#888',
                      display: 'inline',
                      '@media (max-width:767px)': {
                        fontSize: '14px !important',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*Product  Allergens */}
        <div className='w-full lg:w-[50%]'>
          <Typography
            sx={{
              fontSize: '20px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              color: '#000',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (max-width:767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/product-allergens.svg'
              alt='allergen-icon'
              className='w-[25px] h-[25px]'
            />
            <span>allergens</span>
          </Typography>

          <div className='mt-[20px] flex flex-col md:flex-row flex-wrap gap-x-[32px] gap-y-[16px]'>
            {allergens.map((item, index) => (
              <div key={index}>
                <Typography
                  sx={{
                    fontSize: '16px !important',
                    fontFamily: 'Open Sans',
                    fontWeight: '400 !important',
                    lineHeight: '24px',
                    color: '#888',
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    '@media (max-width:767px)': {
                      fontSize: '14px !important',
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.allergen}
                    className='w-[22px] md:w-[28px] h-[22px] md:h-[28px]'
                  />
                  <span>{item.allergen}</span>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailDescription
