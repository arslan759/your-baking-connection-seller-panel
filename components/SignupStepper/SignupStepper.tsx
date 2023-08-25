import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { steps } from 'Constants/constants'
import { SignupStepperProps } from 'types'

const SignupStepper = ({ activeStep, handleBack, handleReset, handleNext }: SignupStepperProps) => {
  return (
    <div>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <div className='my-label'>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'Josefin Sans',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  {step.label}
                </Typography>
              </div>
              <div className='text-white ml-[24px] w-[80%]'>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'Open Sans',
                    fontSize: '13px',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    letterSpacing: '1px',
                    '@media (min-width: 768px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  {step.description}
                </Typography>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <button onClick={handleBack}>back</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default SignupStepper
