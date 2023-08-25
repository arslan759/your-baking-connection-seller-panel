import React, { useState } from 'react'
import styles from './styles.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import { ToggleNavBarProps } from 'types'

function ToggleNavBar({ navbarIconColor }: ToggleNavBarProps) {
  const [open, setOpen] = useState(false)

  const isOpen = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  }

  return (
    <div>
      <div className={styles.menu} onClick={isOpen}>
        <MenuIcon sx={{ color: navbarIconColor }} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.menu_container}
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit='exit'
          >
            <div className={styles.btn_close} onClick={closeMenu}>
              X
            </div>
            <motion.a
              href='/'
              className='font-Josefin'
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 1,
                },
              }}
            >
              HOME
            </motion.a>
            <motion.a
              className='font-Josefin'
              href='/about-bakers'
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              }}
            >
              ABOUT BAKERS
            </motion.a>
            <motion.a
              className='font-Josefin'
              href='/membership'
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.6,
                },
              }}
            >
              MEMBERSHIP
            </motion.a>
            <motion.a
              className='font-Josefin'
              href='/gallery'
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.4,
                },
              }}
            >
              GALLERY
            </motion.a>
            <motion.a
              className='font-Josefin'
              href='/search'
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
            >
              SEARCH
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ToggleNavBar
