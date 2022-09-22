import {React,useEffect } from "react";
import { Nav, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  Bag,
  Chat,
  Heart,
  House,
  Person,
  BoxArrowRight
} from "react-bootstrap-icons";
import Avatar from '../../assetes/image/avatar.svg';

function Sidebar(props) {
  return (
    <>
      <Nav className={`sidebar ${props.active ? "sidebar-collapse" :"sidebar-collapse-show"}`}>
        <div className="sidebar-avatar mt-3 border-bottom pb-3">
          <img src={Avatar} alt="UserName"/>
          <div className="mt-2">محدثه کریمی</div>
        </div>
      <Nav.Item>
                <NavLink to="" className="nav-link">
                    <House /> <span>داشبورد</span>
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="orders" className="nav-link">
                    <Bag /> <span>سفارش ها</span>
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Heart /><span> لیست های من</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Chat /> <span>دیدگاه ها</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Person /> <span>پروفایل</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <BoxArrowRight /> <span>خروج</span>
                </Nav.Link>
              </Nav.Item>
      </Nav>
    </>
  );
}

export default Sidebar;
