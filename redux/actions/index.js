import { all } from "redux-saga/effects";
import blog from "./blog";
import app from "./app";

export default function* rootSaga() {
  yield all([ blog(), app()]);
}
