import styles from '../styles/Home.module.css'


export default function Information() {
    return (
        <>
        <container className={styles.container}>
        <p className={styles.information}>
          Your High Scores  
        </p>
        <p className={styles.infotext}> 
        These are our results for level 1: 
        </p>
        <p className={styles.infotext}> 
        These are our results for level 2: 
        </p>
        <p className={styles.infotext}> 
        These are our results for level 3: 
        </p>
        </container>
        </>
        )
    }