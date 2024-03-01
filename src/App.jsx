import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import data from "./utility/data";

function App() {
  const [datas, setDatas] = useState(data);
  const [error, setError] = useState(false);

  return (
    <div className="box-border flex flex-col">
      {/* <Banner /> */}
      <div className=" overflow-hidden h-screen w-full grid grid-cols-8">
        <SideBar
          datas={datas}
          setDatas={setDatas}
          error={error}
          setError={setError}
        />
        <MainContainer
          datas={datas}
          setDatas={setDatas}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default App;
