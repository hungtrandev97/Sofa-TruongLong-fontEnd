/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Modal, ModalBody } from "reactstrap";
import { bool, func, string } from "prop-types";
import FormLogin from "../Forms/Login";

function AcountUserModel({ modal, toggle, type }) {
  const externalCloseBtn = (
    <div
      role="button"
      tabIndex={0}
      className="AgreementModal__close"
      onClick={toggle}
    />
  );
  return (
    <Modal
      className="AgreementModal"
      isOpen={modal}
      toggle={toggle}
      external={externalCloseBtn}
      centered
      size="lg"
      backdrop="static"
      scrollable
      modalClassName="AgreementModal__Modal"
    >
      <ModalBody>
        <FormLogin />
      </ModalBody>
    </Modal>
  );
}

AcountUserModel.propTypes = {
  modal: bool,
  toggle: func,
  type: string,
};
AcountUserModel.defaultProps = {
  modal: false,
  toggle: () => {},
  type: "term",
};

export default AcountUserModel;
