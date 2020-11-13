import React from "react";
import { toast } from "react-toastify";
import "./Toast.css";

export function NotifySuccess(title, mesage) {
  toast.success(<div className="toast_body_custom">a</div>, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function NotifyError(title, mesage) {
  toast.error(
    <div className="notification-container">
      <div className="notification-container__title">{title}</div>
      <span className="container__message">{mesage}</span>
    </div>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    }
  );
}
