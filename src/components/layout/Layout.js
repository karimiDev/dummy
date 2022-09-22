import Header from "./Header";
import {React,useState ,useEffect} from "react";
import Sidebar from "./Sidebar";

function Layout(props) {
  const [active,setActive]=useState(false);
  function collapse(){
    setActive(!active);
  }
  useEffect(()=>{
  const handleResize=()=>{
    if(window.innerWidth <768){
      setActive(true)
    }
    else{
      setActive(false)
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();
  return ()=>{
    window.removeEventListener("resize", handleResize);
  }
  },[])
  return (
    <>
      <section className="wrapper">
        <Sidebar active={active}/>
        <div className="wrapper-content">
          <Header collapse={collapse}/>
          <main>{props.children}</main>
        </div>
      </section>
    </>
  );
}

export default Layout;
