import React from 'react'
import styles from "./Loading.module.css"

function Loading() {
  
  
  return (
    <>
<div className={styles.container}>
    <div className={styles.gif} >
        
    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_zofjftfj.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
    </div>
    </div>
 </>
  )
}

export default Loading;

