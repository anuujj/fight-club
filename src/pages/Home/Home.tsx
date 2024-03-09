import styles from './home.module.scss';
export default function Home() {
    return (
        <div className={styles.home}>
        <h1 className={styles.title}>Welcome to Bracket land!</h1>
        </div>
    );
}