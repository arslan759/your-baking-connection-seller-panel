import { Typography } from '@mui/material'
import React from 'react'
import { useDropzone } from 'react-dropzone'

interface FileDropzoneProps {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleImageUploadClick: () => void
  imageUploadRef: any
  uploadError: string
}

const FileDropzone = ({
  handleFileUpload,
  handleImageUploadClick,
  imageUploadRef,
  uploadError,
}: FileDropzoneProps) => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop: (files: any) => {
      console.log('files are ', files)
      handleFileUpload(files)
    },
  })

  //   const files = acceptedFiles.map((file: any) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ))

  return (
    <div className='w-full h-full'>
      <div {...getRootProps({ className: 'dropzone w-full h-full ' })}>
        {/* <input {...getInputProps()} /> */}
        <Typography
          sx={{
            fontSize: '14px !important',
            fontFamily: 'Open Sans',
            fontWeight: '400 !important',
            lineHeight: 'normal',
            color: '#090909',
            letterSpacing: '0.5px !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            width: '100%',
            height: '100%',
            // border: '1px solid red',
          }}
        >
          <img src='/Images/photo-icon.svg' alt='photo-icon' className='w-[24px] h-[24px]' />
          <span>
            Drag and drop or{' '}
            <span
              onClick={open}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              browse
            </span>{' '}
          </span>

          <input
            // ref={imageUploadRef}
            {...getInputProps()}
            // type='file'
            // onChange={(e) => handleFileUpload(e)}
            // className='hidden'
          />

          <span style={{ color: 'red' }}>{uploadError}</span>
        </Typography>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </div>
  )
}

export default FileDropzone
