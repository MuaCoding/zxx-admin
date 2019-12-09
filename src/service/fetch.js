import { BASE_URL } from './../assets/mock/fetch_router'
import { message } from 'antd';
function loading(text, type) {
   let hide = message[type](text, 0);
   setTimeout(hide, 1000);
}
const request = (url, config) => {
   let link = url.substring(0, 4) !== 'http' ? BASE_URL + url : url
   return fetch(link, config).then((res) => {
      document.getElementsByClassName('loader--style3')[0].display = 'none'
      if (!res.ok) {
         loading('服务器发生故障，请稍后重试', 'error')
      } else {
         return res.json();
      }
   }).then((resJson) => {
      return resJson;
   }).catch((error) => {
      document.getElementsByClassName('loader--style3')[0].display = 'none'
      loading('服务器发生故障，请稍后重试', 'error')
   });
};

// GET请求
export const get = (url) => {
   return request(url, { method: 'GET' });
};

// POST请求
export const post = (url, data) => {
   document.getElementsByClassName('loader--style3')[0].display = 'block'
   let str = ''
   for (var key in data) {
      let newstr = ''
      newstr += key + '=' + data[key] + '&'
      str += newstr
   }
   str = str.substring(0, str.length - 1)
   return request(url, {
      body: str,
      headers: {
         "content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      method: 'POST'
   });
};