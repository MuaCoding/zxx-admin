import React, { Component } from "react";
import { Table, Divider, Button, Layout } from "antd";
import { API_URL } from "@/static/base_data/fetch_router";

const { Content } = Layout;

class productList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      tables: [
        {
          title: '商品图片',
          dataIndex: 'goods_img',
          render(goods_img) {
             // return goods_img&&goods_img.map((item, index) => {
             return <img src={goods_img[0]} alt='' style={{ width: 100 }} />
             //使其返回数组中的一项
             //})//.join(",");   //因为数据中user_name可能是两个人所以用逗号分隔开
          },
          align: 'center'
       },
       {
          title: '商品名称',
          dataIndex: 'goods_name',
          align: 'center',
          width: 100,
       },
       {
          title: '商品介绍',
          dataIndex: 'goods_remark',
          align: 'center'
       },
       {
          title: '商品原价',
          dataIndex: 'goods_price',
          align: 'center',
          width: 100,
       },
       {
          title: '商品现价',
          dataIndex: 'goods_sale_price',
          align: 'center',
          width: 100,
       },
       {
          title: '商品库存',
          align: 'center',
          dataIndex: 'goods_stock',
          width: 100,
       },
       {
          title: '操作',
          dataIndex: 'operate',
          key: 'operate',
          align: 'center',
          width: 100,
          render: (text, record, index) => (
             <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button icon="edit" type="primary" onClick={() => this.sendActive(2, record)}>
                   商品编辑
                </Button>
             </div>
          )
       }
      ],
    };
  }
  render() {
    return <div></div>;
  }
}

export default productList;
