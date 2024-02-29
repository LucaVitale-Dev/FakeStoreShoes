import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import data from "./utility/data";

function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div className="box-border flex flex-col">
      {/* <Banner /> */}
      <div className=" overflow-hidden h-screen w-full grid grid-cols-6">
        <SideBar datas={datas} setDatas={setDatas} />
        <MainContainer datas={datas} setDatas={setDatas} />
      </div>
    </div>
  );
}

export default App;
