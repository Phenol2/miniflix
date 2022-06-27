import styles from "./MainSpinner.module.css"
import Logo from "../icons/Flix2.png"

const Spinner = () => {
return (
  <main className = {styles["loader-wrapper"]}>
      <div className={styles["loader"]}>
      </div>
     <div className = {styles["logo-container"]}> <img src = {Logo} alt = "logo" /></div>
    </main>  
      )
}

export default Spinner;