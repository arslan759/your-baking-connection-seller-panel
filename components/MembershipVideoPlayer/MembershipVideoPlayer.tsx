import React, { useRef, useState } from 'react'

const MembershipVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setShowPlayButton(false)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setShowPlayButton(true)
    }
  }

  return (
    <div className='w-full h-full relative'>
      <video
        ref={videoRef}
        style={{
          objectFit: 'fill',
        }}
        controls
        width='100%'
        height='100%'
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src='/Videos/bakery-cinematic.mp4' type='video/mp4' />
        {`Sorry, your browser doesn't support videos`}
      </video>
      {showPlayButton && (
        <div
          className='hidden md:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] cursor-pointer'
          onClick={handlePlay}
        >
          <img
            src='/Images/play-btn.svg'
            alt='play-btn'
            className='w-[60px] md:w-[180px] h-[60px] md:h-[180px]'
          />
        </div>
      )}
      {showPlayButton && (
        <div
          className={`absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]`}
          onClick={handlePlay}
        ></div>
      )}
    </div>
  )
}

export default MembershipVideoPlayer
