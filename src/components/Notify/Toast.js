import React from "react";
import { toast } from "react-toastify";
import "./Toast.css";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";

export function NotifySuccess(title, mesage) {
  toast.success(
    <div className="notification-container">
      <RiErrorWarningFill size="2rem" color="#fff" />
      <div className="notification-container-nav">
        <div className="notification-container__title">{title}</div>
        <span className="notification-container__message">{mesage}</span>
      </div>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
}

export function NotifyError(title, mesage) {
  toast.error(
    <div className="notification-container">
      <RiErrorWarningFill size="2rem" color="#fff" />
      <div className="notification-container-nav">
        <div className="notification-container__title">{title}</div>
        <span className="notification-container__message">{mesage}</span>
      </div>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    }
  );
}

export function NotifyWarning(title, mesage) {
  toast.warning(
    <div className="notification-container">
      <IoIosWarning size="2rem" color="#fff" />
      <div className="notification-container-nav">
        <div className="notification-container__title">{title}</div>
        <span className="notification-container__message">{mesage}</span>
      </div>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    }
  );
}
