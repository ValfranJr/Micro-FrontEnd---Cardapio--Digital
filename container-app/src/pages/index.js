import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const Menu = dynamic(() => import("catalogo/Menu"), { ssr: false });
const Pedido = dynamic(() => import("micro-pedido/Pedido"), { ssr: false });
export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1 className={styles.title}>
        <span className={geistSans.className}>Cardapio Digital</span>
      </h1>
      <Menu />
      <Pedido />
    </div>
  );
}
