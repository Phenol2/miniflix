import styles from "./Spinner.module.css"

const Spinner = () => {
return (
  <main className = {styles["loader-wrapper"]}>
      <div className={styles["loader"]}>
      </div>
    </main>  
      )
}

export default Spinner;