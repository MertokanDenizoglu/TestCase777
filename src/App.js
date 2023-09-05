import { useState } from "react";
import Header from "./components/Header";
import DashboardLayout from "./layouts/DashboardLayout";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


function App() {
  const [active,setActive]=useState(1)
  return (
    <DashboardLayout>
    <SideBar/>
     <Header active={active} setActive={setActive}/>
     {active === 1 ? (<Section1/>) : (null)}
     {active === 2 ? (<Section2/>) : (null)}
     <Footer/>
    </DashboardLayout>
  );
}

export default App;
