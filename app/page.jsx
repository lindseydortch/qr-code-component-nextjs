import Card from "@/app/_components/card/Card";
import CardContent from "@/app/_ui/cardContent/CardContent";
import QRCode from "@/app/_ui/qrCode/QRCode";
import styles from "@/app/home.module.scss";

export default function Home() {
  return (
    <section className={styles.page}>
      <Card>
        <QRCode />
        <CardContent />
      </Card>
    </section>
  );
}
