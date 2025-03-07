import HomeContainer from "@/containers/HomeContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeContainer/>
    </div>
  );
}
