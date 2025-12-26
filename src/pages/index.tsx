import Link from "next/link";
import Layout from "../component/Layout";
import style from "@/styles/styles.module.scss";

export default function Home() {
  return (
    <Layout>
      <h1>Next Logs</h1>
      <div className={style.container}>
        <Link href="/01">Roulette Page</Link>
        <Link href="/02">Change tabs Page</Link>
        <Link href="/03">Page 03</Link>
        <Link href="/04">Page 04</Link>
      </div>
    </Layout>
  );
}
