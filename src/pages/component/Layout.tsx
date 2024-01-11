import Link from "next/link";
import style from "@/styles/styles.module.scss";
import { FaHome } from "react-icons/fa";

export default function Layout({ children }: any) {
  return (
    <>
      <div className={style.header}>
        <Link href={"/"}>
          <FaHome />
        </Link>
      </div>
      <main className={style.wrapper}>{children}</main>
    </>
  );
}
