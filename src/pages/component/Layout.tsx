import Link from "next/link";
import style from "@/styles/styles.module.scss";

type headerProps = {
  text: string;
  children?: React.ReactNode;
};

export default function Layout({ children, text }: headerProps) {
  return (
    <>
      <div className={style.header}>
        <Link href={"/"}>{text}</Link>
      </div>
      <main>{children}</main>
    </>
  );
}
