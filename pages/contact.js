import styles from '../styles/Home.module.css'



function Contact(){
    return (
    <>
    <container className={styles.container}>
    <p className={styles.use}>Contact</p>
    
        <h2>For any questions and concerns, please contact</h2>
       
    
        <ul className={styles.contactlist}>
            <p>Albina Murtezaj</p>
            <a href= "mailto:murtezaa@informatik.hu-berlin.de">murtezaa@informatik.hu-berlin.de</a>
            <p>Ahmed Tauqeer</p>
            <a href= "mailto:tauqeer.ahmed@studenti.unime.it">tauqeer.ahmed@studenti.unime.it</a>
            <p>Tomasz Ludyga </p>
    </ul>
  </container>

  

  
        </>
    )
}

export default Contact