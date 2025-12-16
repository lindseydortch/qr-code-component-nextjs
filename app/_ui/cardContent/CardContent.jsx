import styles from "@/app/_ui/cardContent/cardContent.module.scss";

function CardContent() {
  return (
    <div className={styles.content}>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default CardContent;
