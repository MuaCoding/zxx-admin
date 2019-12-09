import { message } from "antd";

//公共组件1.Alert弹框提醒
export const Alert = (msg, type) => {
  let metType = type === 200 ? "success" : "error";
  message[metType](msg);
};
