import Link from "next/link";
import Layout from "./component/Layout";

export default function Home() {
  return (
    <Layout text={"Home Page"}>
      <h1>Next Logs</h1>
      <Link href="/01">Roulette Page</Link>
    </Layout>
  );
}
