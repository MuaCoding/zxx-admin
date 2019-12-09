//模块码表
export const MODULEDATA = [
  {
    code: "1",
    text: "系统首页",
    icon: "iconfont mbicon_index_line",
    children: [{ code: "11", text: "模块入口", url: "/home/index" }]
  },
  {
    code: "2",
    text: "商品管理",
    icon: "iconfont mbshangpin",
    children: [
      {
        code: "21",
        text: "商品列表",
        url: "/home/productList",
        icon: "iconfont mbshangpinliebiao"
      }
    ]
  },
  {
    code: "3",
    text: "交易管理",
    icon: "iconfont mbjiaoyi",
    children: [
      {
        code: "31",
        text: "交易信息",
        url: "/home/orderData",
        icon: "iconfont mbjiaoyi1"
      },
      {
        code: "32",
        text: "订单信息",
        url: "/home/orderAdmin",
        icon: "iconfont mbdingdan"
      },
      {
        code: "33",
        text: "退款管理",
        url: "/home/orderRefund",
        icon: "iconfont mbtuikuan"
      }
    ]
  },
  {
    code: "4",
    text: "会员管理",
    icon: "iconfont mbhuiyuan",
    children: [
      {
        code: "41",
        text: "会员信息",
        url: "/home/memberData",
        icon: "iconfont mbhuiyuan-"
      }
    ]
  },
  {
    code: "10",
    text: "测试",
    icon: "iconfont mbtest",
    children: [{ code: "test1", text: "测试模块", url: "/home/test" }]
  }
];

//商品类型码表
export const PRODUCTTYPES = [
  { key: "1", text: "服装鞋帽" },
  { key: "2", text: "数码产品" }
];

//商品规格码表
export const SPECLIST = [
  {
    key: "1",
    typeList: [
      {
        key: "1",
        text: "尺寸",
        checked: false,
        list: [
          { key: "1", active: false, text: "XL" },
          { key: "2", active: false, text: "XXL" },
          { key: "3", active: false, text: "3XL" },
          { key: "4", active: false, text: "4XL" }
        ]
      },
      {
        key: "2",
        text: "颜色",
        checked: false,
        list: [
          { key: "1", active: false, text: "藏青" },
          { key: "2", active: false, text: "深灰" },
          { key: "3", active: false, text: "米白" },
          { key: "4", active: false, text: "鲜红" }
        ]
      },
      {
        key: "3",
        text: "尺码",
        checked: false,
        list: [
          { key: "1", active: false, text: "41" },
          { key: "2", active: false, text: "42" },
          { key: "3", active: false, text: "43" },
          { key: "4", active: false, text: "44" }
        ]
      }
    ]
  },
  {
    key: "2",
    typeList: [
      {
        key: "1",
        text: "内存",
        checked: false,
        list: [
          { key: "1", active: false, text: "64G" },
          { key: "2", active: false, text: "128G" },
          { key: "3", active: false, text: "256G" },
          { key: "4", active: false, text: "512G" }
        ]
      },
      {
        key: "2",
        text: "颜色",
        checked: false,
        list: [
          { key: "1", active: false, text: "黑色" },
          { key: "2", active: false, text: "银色" },
          { key: "3", active: false, text: "黄色" },
          { key: "4", active: false, text: "红色" }
        ]
      },
      {
        key: "3",
        text: "尺寸",
        checked: false,
        list: [
          { key: "1", active: false, text: "6.9英寸" },
          { key: "2", active: false, text: "13.3英寸" },
          { key: "3", active: false, text: "15.6英寸" }
        ]
      }
    ]
  }
];

//订单状态码表
export const ORDERACTIVES = [
  { key: "1", text: "待发货" },
  { key: "2", text: "待收货" },
  { key: "3", text: "已收货" },
  { key: "4", text: "待退款" },
  { key: "5", text: "已退款" }
];

//退单状态码表
export const ORDEROUTS = [
  { key: "1", text: "待退款" },
  { key: "2", text: "已退款" }
];

//快递公司码表
export const EXPRESSLIST = [
  { key: "1", text: "申通快递" },
  { key: "2", text: "圆通快递" },
  { key: "3", text: "韵达快递" },
  { key: "4", text: "百世汇通" },
  { key: "5", text: "中通快递" },
  { key: "6", text: "邮政快递" },
  { key: "7", text: "韵达快递" }
];

//会员等级码表
export const VIPLIST = [
  { key: "1", text: "钻石会员" },
  { key: "3", text: "黄金会员" },
  { key: "4", text: "普通会员" }
];
