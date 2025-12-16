import styles from "@/app/_ui/qrCode/qrCode.module.scss";
import Image from "next/image";

function QRCode() {
  return (
    <div className={styles.qrCodeImageContainer}>
      <Image
        src="/images/image-qr-code.png"
        alt="Image of QR Code"
        fill
        preload
        sizes="auto"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

export default QRCode;
