import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Button2({
  label,
  containerClass,
  sliderClass,
}: {
  label: string;
  containerClass?: string;
  sliderClass?: string;
}) {
  return (
    <div className={`${styles.button} ${containerClass}`}>
      <motion.div className={`${styles.slider} ${sliderClass}`}>
        <div className={styles.el}>
          <PerspectiveText label={label} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: any }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
