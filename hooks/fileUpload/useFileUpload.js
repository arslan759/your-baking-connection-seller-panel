import { useState } from 'react'

const useFileUpload = () => {
  const [loading, setLoading] = useState(true)

  const uploadFile = async (file, path) => {
    const isMulti = false
    const formData = new FormData()
    formData.append('isMulti', isMulti)
    formData.append('photos', file)
    formData.append('uploadPath', path)

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    }

    try {
      const response = await fetch(`${process.env.CANONICAL_URL}/upload`, requestOptions)
      const result = await response.json()

      setLoading(false)

      return { result }
    } catch (error) {
      console.log(error)
    }
  }

  return [uploadFile, loading]
}

export default useFileUpload
