import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import { logoutUser } from "../../../store/actions/actions";
import "./ComsumerHeaderAcount.css";

function ConsumerHeaderAcount(props) {
  const { loginUser } = useSelector((state) => state.authRedux);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const dispatch = useDispatch();
  const history = useHistory();

  const { colorTextAndImage } = props;

  return (
    <Nav className="ml-auto align-items-center ConsumerHeaderAcount" navbar>
      <NavItem>
        {/* Avatar */}
        <div className="ConsumerHeaderAcount__avatar">
          <img
            className="img-fluid"
            src="/img/user/default_avatar.png"
            alt="Avatar"
          />
        </div>
      </NavItem>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          tag="a"
          className="nav-link ConsumerHeaderAcount__dropdownToggle"
          style={{
            color: `${colorTextAndImage === "white" ? "#fff" : "#009fe3"}`,
          }}
        >
          {loginUser !== null ? loginUser.firstName : ""}
          {colorTextAndImage === "white" ? (
            <img
              src="/img/common/arrow_down.png"
              alt="caret"
              width={24}
              height={24}
            />
          ) : (
            <img
              src="/img/common/arrow-down-blue.png"
              alt="caret"
              width={24}
              height={24}
            />
          )}
        </DropdownToggle>
        <DropdownMenu
          style={{
            minWidth: "147px",
            top: "75px",
            left: "-50px",
            borderRadius: "10px",
            boxShadow: "1px 2px 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* <StyledDropdownItemProfile tag="a">
          Profile
        </StyledDropdownItemProfile> */}
          <DropdownItem
            className="ConsumerHeaderAcount__dropdownItem"
            tag="a"
            onClick={(e) => {
              e.preventDefault();
              dispatch(logoutUser());
              history.replace("/");
            }}
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}

ConsumerHeaderAcount.propTypes = {
  colorTextAndImage: PropTypes.string,
};

ConsumerHeaderAcount.defaultProps = {
  colorTextAndImage: "white",
};

export default ConsumerHeaderAcount;
