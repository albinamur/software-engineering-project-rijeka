import styles from '../styles/Home.module.css'


export default function Information() {
    return (
        <>
        <container className={styles.container}>
        <p className={styles.information}>
          Your Result  
        </p>
        <p className={styles.infotext}> 
         Thank you for taking part in the statistic quiz. Here is your result:

        </p>
        </container>
        </>
        )
    }