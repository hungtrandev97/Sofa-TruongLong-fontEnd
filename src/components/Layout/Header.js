import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Power, ChevronDown, Menu } from "react-feather";

import ToggleState from "../Common/ToggleState";
import TriggerResize from "../Common/TriggerResize";
import HeaderRun from "./Header.run";

import { logoutUser } from "../../store/actions/actions";

class Header extends Component {
  componentDidMount() {
    HeaderRun();
  }

  render() {
    return (
      <header className="topnavbar-wrapper">
        {/* START Top Navbar */}
        <nav className="navbar topnavbar" style={{ background: "#585757" }}>
          {/* START navbar header */}
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">
              <div className="brand-logo">
                <img
                  height={45}
                  width={130}
                  className="img-fluid"
                  src="/img/default/logotruonglong.png"
                  alt="App Logo"
                />
              </div>
              <div className="brand-logo-collapsed">
                <img
                  width={45}
                  height={45}
                  src="/img/default/logotruonglong.png"
                  alt="App Logo"
                />
              </div>
            </a>
          </div>
          {/* END navbar header */}

          {/* START Left navbar */}
          <ul className="navbar-nav mr-auto flex-row">
            <li className="nav-item">
              {/* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
              <TriggerResize>
                <ToggleState state="aside-collapsed">
                  <a
                    href="!#"
                    className="nav-link d-none d-md-block d-lg-block d-xl-block"
                  >
                    <Menu />
                  </a>
                </ToggleState>
              </TriggerResize>
              {/* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
              <ToggleState state="aside-toggled" nopersist>
                <a href="!#" className="nav-link sidebar-toggle d-md-none">
                  <Menu />
                </a>
              </ToggleState>
            </li>
          </ul>
          {/* END Left navbar */}
          {/* START Right Navbar */}
          <ul className="navbar-nav flex-row">
            <UncontrolledDropdown tag="li" className="nav-item">
              <DropdownToggle tag="a" className="nav-link">
                <div className="d-sm-flex" style={{ cursor: "pointer" }}>
                  <span className="text-bold">Admin</span>
                  <ChevronDown className="ml-2" />
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  tag="a"
                  href="/pages/login"
                  onClick={(e) => {
                    e.preventDefault();
                    // eslint-disable-next-line react/destructuring-assignment
                    this.props.logoutUser();
                  }}
                >
                  <Power size={14} className="mr-2" />
                  <span className="align-middle">Đăng Xuất</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* END Offsidebar menu */}
          </ul>
          {/* END Right Navbar */}
        </nav>
        {/* END Top Navbar */}
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func,
};
Header.defaultProps = {
  logoutUser: () => {},
};

const mapStateToProps = () => ({});
const mapActionToProps = { logoutUser };
export default connect(mapStateToProps, mapActionToProps)(Header);
