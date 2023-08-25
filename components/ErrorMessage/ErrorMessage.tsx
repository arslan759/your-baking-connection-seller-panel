import React, { useEffect } from 'react'

interface ErrorMessageProps {
  error: string
  setError: (error: string) => void
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, setError }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError('')
    }, 5000)

    return () => {
      // Clear the timer if the component unmounts or the error changes
      clearTimeout(timeoutId)
    }
  }, [error, setError])

  return <p style={{ color: 'red', fontSize: '15px', marginTop: '10px' }}>{error}</p>
}

export default ErrorMessage
