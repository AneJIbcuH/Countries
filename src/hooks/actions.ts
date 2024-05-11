import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { countriesActions } from "../store/testSlice";

const actions = {
  ...countriesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
