import styles from '../styles/Home.module.css'

export default function Quiz() {

    return (
        <>
        <container className={styles.container}>
            <div>
                <div>
                    <h1>
                        Quiz!
                    </h1>
                    <h3><a href="/register">Register here</a></h3>
                    <h3><a href="/login">Login</a></h3>
                    <h3><a href="Level/level1">Play!</a></h3>
                    <h3><a href="/highscores">Your High Scores</a></h3>
                </div>
            </div>
        </container>

        </>
    )
}