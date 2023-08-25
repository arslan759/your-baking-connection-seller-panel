export const stylesModuleMui = {
  heading: {
    marginTop: '14px',
    textAlign: 'center',
  },

  text: {
    marginTop: '14px',
    textAlign: 'center',
    px: '20%',
  },

  textField: {
    mr: '2.5%',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      color: 'white',
      height: '45px',
      padding: '5px',
      borderRadius: '12px',
      fontSize: '12px',

      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
}
