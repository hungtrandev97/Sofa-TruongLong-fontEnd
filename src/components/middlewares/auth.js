import React from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { numberOnline, countNumberOnline } from "../../store/actions/actions";
import { apiCountNumberOnline } from "../../services/setting";
import { END_POINT } from "../../constants/DefaultValues.js";

let socket;
const AuthView = () => {
  const dispatch = useDispatch();
  const CallApiCountNumber = async () => {
    const req = await apiCountNumberOnline();
    if (req.status) {
      dispatch(countNumberOnline(req.data.CountPoint));
    }
  };
  socket = io(END_POINT);
  socket.on("numberOnlineServe", function (sockets) {
    dispatch(numberOnline(sockets));
    CallApiCountNumber();
  });
  return <></>;
};

export default AuthView;
