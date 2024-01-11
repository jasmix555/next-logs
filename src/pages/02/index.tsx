import React, { useState } from "react";
import Layout from "../component/Layout";
import TabOne from "./component/TabOne";
import TabTwo from "./component/TabTwo";
import style from "./styles.module.scss";

const Sample02 = () => {
  const [tab, setTab] = useState(1);

  const First = () => {
    return (
      <div className={style.tabWrap}>
        <TabOne />
      </div>
    );
  };

  const Second = () => {
    return (
      <div className={style.tabWrap}>
        <TabTwo />
      </div>
    );
  };

  return (
    <Layout>
      <h1>Change Tabs Page</h1>
      <div className={style.wrapper}>
        <div className={style.tabBtns}>
          <button
            className={tab === 1 ? style.active : ""}
            onClick={() => setTab(1)}
          >
            Tab 1
          </button>
          <button
            className={tab === 2 ? style.active : ""}
            onClick={() => setTab(2)}
          >
            Tab 2
          </button>
        </div>
        <div className={style.tabs}>{tab === 1 ? <First /> : <Second />}</div>
      </div>
    </Layout>
  );
};

export default Sample02;
