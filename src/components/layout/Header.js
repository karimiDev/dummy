import { Bell, Envelope, House } from "react-bootstrap-icons";

function Header(props) {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <div className="sidebar-icon d-inline-block" onClick={props.collapse}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="d-flex">
          <div className="header-icon">
            <Bell size={20}/>
          </div>
          <div className="header-icon">
            <Envelope size={20} />
            <span className="font-fa">5</span>
          </div>
          <div className="header-icon">
            <House size={20}/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
