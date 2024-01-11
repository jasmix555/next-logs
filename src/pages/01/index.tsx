import Layout from "../component/Layout";
import { useState } from "react";
import style from "@/styles/styles.module.scss";

export default function Page01() {
  type listType = {
    text: string;
    list: string[];
  };

  const [list, setList] = useState<listType>({
    text: "",
    list: [],
  });

  return (
    <Layout>
      <h1>Randomizer</h1>
      <div className={style.wrapper}>
        <div className={style.functions}>
          <input
            type="text"
            placeholder="Insert text"
            className={style.input}
            name="item"
            id="item"
            value={list.text}
            // if press enter key and text is not empty, add text to list
            onKeyDown={(e) => {
              if (e.key === "Enter" && list.text.trim() !== "") {
                setList({
                  ...list,
                  list: [...list.list, list.text],
                  text: "",
                });
              }
            }}
            // if text is not empty, add text to list
            onChange={(e) => {
              setList({
                ...list,
                text: e.target.value,
              });
            }}
          />
          <button
            disabled={list.text === ""}
            className={style.addBtn}
            onClick={() => {
              setList({
                text: "",
                list: [...list.list, list.text],
              });
            }}
          >
            Add
          </button>
          <button
            disabled={list.list.length === 0}
            className={style.delAllBtn}
            onClick={() => {
              setList({
                ...list,
                list: [],
              });
            }}
          >
            Remove all
          </button>
          <button
            disabled={list.list.length === 0}
            className={style.randomizeBtn}
            onClick={() => {
              const randomList = list.list.sort(() => Math.random() - 0.5);
              setList({
                ...list,
                list: randomList,
              });
            }}
          >
            Randomize order
          </button>
        </div>
        <div className={style.list}>
          <ul className={style.ul}>
            {list.list.map((item, idx) => {
              return (
                <li key={idx} className={style.li}>
                  {idx + 1}. {item}
                  <button
                    className={style.delBtn}
                    onClick={() => {
                      setList({
                        ...list,
                        list: list.list.filter((_, i) => i !== idx),
                      });
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
