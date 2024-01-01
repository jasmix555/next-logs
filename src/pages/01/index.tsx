import Layout from "../component/Layout";
import { useState } from "react";
import style from "@/styles/styles.module.scss";

export default function Page01() {
  type todoListType = {
    text: string;
    list: string[];
  };

  const [toDo, setoDo] = useState<todoListType>({
    text: "",
    list: [],
  });

  return (
    <Layout>
      <h1>Roulette</h1>
      <div className={"wrapper"}>
        <div className="contentWrapper">
          <div className="insert">
            <input
              type="text"
              placeholder="Insert text"
              className={style.input}
              name="item"
              id="item"
              value={toDo.text}
              onKeyDown={(e) => {
                if (e.key === "Enter" && toDo.text.trim() !== "") {
                  setoDo({
                    ...toDo,
                    list: [...toDo.list, toDo.text],
                    text: "",
                  });
                }
              }}
              onChange={(e) => {
                setoDo({
                  ...toDo,
                  text: e.target.value,
                });
              }}
            />
            <button
              disabled={toDo.text === ""}
              className={style.addBtn}
              onClick={() => {
                setoDo({
                  text: "",
                  list: [...toDo.list, toDo.text],
                });
              }}
            >
              Add
            </button>
          </div>
          <div className="list">
            <ul className={style.ul}>
              {toDo.list.map((item, idx) => {
                return (
                  <li key={idx} className={style.li}>
                    {item}
                    <button
                      className={style.delBtn}
                      onClick={() => {
                        setoDo({
                          ...toDo,
                          list: toDo.list.filter((_, i) => i !== idx),
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
      </div>
    </Layout>
  );
}
