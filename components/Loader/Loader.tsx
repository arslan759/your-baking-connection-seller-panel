import React from 'react'
import styles from './styles.module.css'

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}>
        {/* Add your loader content here (e.g., spinner or animation) */}
      </div>
    </div>
  )
}

export default Loader
