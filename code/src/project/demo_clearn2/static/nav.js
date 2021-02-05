

// typenews/typename  一篇文章
// news/typename  文章列表
const NAV = [
  {
    name: '首页',
    path: "/",
    id: "1",
    showInNav: true,//是否显示在导航菜单上

  },
  {
    name: '学术/继教',
    id: "2",
    showInNav: true,
    subImg:require('@project/ynshlxh/assets/img/navXsjj.png'),
    children: [
      { id: "2_1", pId: "2", path: "/news/xshd", typename: 'xshd', name: "学术活动" },
      { id: "2_2", pId: "2", path: "/news/jxjy", typename: 'jxjy', name: "继续教育" },
    
    ],

  },
  {
    name: '学会工作',
    id: "3",
    showInNav: true,
    subImg:require('@project/ynshlxh/assets/img/navxhgz.png'),
    onlyOne:true,
    children: [
      { id: "3_1", pId: "3", path: "/news/xhgz", typename: 'xhgz', name: "学会工作" },
    ],
  },
  {
    name: '党建工作',
    id: "4",
    showInNav: true,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navdjgz.png'),
    children: [
      { id: "4_1", pId: "4", path: "/news/djgz", typename: 'djgz', name: "党建工作" },
    ],
  },
  {
    name: '云南护理简报',
    id: "5",
    showInNav: true,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navynhljb.png'),
    children: [
      { id: "5_1", pId: "5", path: "/newspdf/ynhljb", typename: 'ynhljb', name: "云南护理简报" },
    ],
  },
  {
    name: '行业动态',
    id: "6",
    showInNav: true,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navhydt.png'),
    children: [
      { id: "6_1", pId: "6", path: "/news/hydt", typename: 'hydt', name: "行业动态" },
    ],
  },
  {
    name: '护理天地',
    id: "7",
    showInNav: true,
    subImg:require('@project/ynshlxh/assets/img/navhltd.png'),
    children: [
      { id: "7_1", pId: "7", path: "/news/hlzs", typename: 'hlzs', name: "护理知识" },
      { id: "7_2", pId: "7", path: "/news/jkyd", typename: 'jkyd', name: "健康园地" },
    ],
  },
  {
    name: '政策法规',
    id: "8",
    showInNav: true,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navzcfg.png'),
    children: [
      { id: "8-1", pId: "8", path: "/news/zcfg", typename: 'zcfg', name: "政策法规" },
    ]
  },
  {
    name: '关于学会',
    id: "9",
    showInNav: true,
    subImg:require('@project/ynshlxh/assets/img/navgyxh.png'),
    children: [
      { id: "9_1", pId: "9", path: "/typenews/xhjs", typename: 'xhjs', name: "学会介绍" },
      { id: "9_2", pId: "9", path: "/typenews/ljlsz", typename: 'ljlsz', name: "历届理事长" }, 
      { id: "9_3", pId: "9", path: "/typenews/lsmd", typename: 'lsmd', name: "理事名单" },
      // { id: "9_4", pId: "9", path: "/typenews/gzwyh", typename: 'gzwyh', name: "工作委员会" },
      { id: "9_5", pId: "9", path: "/typenews/xhzc", typename: 'xhzc', name: "学会章程" },
      { id: "9_6", pId: "9", path: "/typenews/zzjg", typename: 'zzjg', name: "组织架构" },
      { id: "9_7", pId: "9", path: "/typenews/xhdsj", typename: 'xhdsj', name: "学会大事记" },
      { id: "9_8", pId: "9", path: "/news/zsxh", typename: 'zsxh', name: "州市学会" },
      { id: "9_9", pId: "9", path: "/map", typename: 'lxwm', name: "联系我们" },
    ]
  },
  {
    name: '专业委员会',
    id: "10",
    showInNav: true,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navzywyh.png'),
    children: [
      { id: "10-1", pId: "10", path: "/newsZywyh/zywyh", typename: 'zywyh', name: "专业委员会" },
    ]
  },
  {
    name: '搜索',
    typename: 'ss', 
    id: "11",
    subImg:require('@project/ynshlxh/assets/img/navsearch.png'),
    showInNav: false,
    onlyOne:true,
    children: [
      { id: "11-1", pId: "11", path: "/search/ss", typename: 'ss', name: "搜索" },
    ]
  },
  {
    name: '通知公告',
    id: "12",
    showInNav: false,
    onlyOne:true,
    subImg:require('@project/ynshlxh/assets/img/navtzgg.png'),
    children: [
      { id: "12-1", pId: "12", path: "/news/tzgg", typename: 'tzgg', name: "通知公告" },
    ]
  },
]
// 获取最底层typename
const getBottomTypeName = (id) => {
  const currentTab = getNavById(id);
  const result = [];
  const findSubTypename = (data) => {
    if (data.children) {
      data.children.forEach(v => {
        findSubTypename(v)
      });
    } else {
      result.push(data.typename);
    }

  }
  findSubTypename(currentTab)
  return result;

}
const getMenuData = () => {
  return NAV.filter(v => v.showInNav)
}
const getRootIdByChildId = (id) => {
  let currentTab = getNavById(id);
  let result = '1';
  const fn = (data) => {
    if (data && !data.pId) {
      return data.id;
    } else {
      return fn(getNavById(data.pId));
    }
  };

  result = fn(currentTab);
  return result;
}
const getNavById = (id) => {
  return findTab(NAV, id);
}
const getNavByType = (typename) => {
  return findTabType(NAV, typename);
}
const findTab = (data, id) => {
  let result;
  if (!data) {
    return;
  }
  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.id === id) {
      result = item;
      break;
    } else if (item.children && item.children.length > 0) {
      result = findTab(item.children, id);
      if (result) return result //如果找到，就直接返回，结束后面的循环
    }
  }
  return result;
}
const findTabType = (data, typename) => {
  let result;
  if (!data) {
    return;
  }
  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.typename === typename) {
      result = item;
      break;
    } else if (item.children && item.children.length > 0) {
      result = findTabType(item.children, typename);
      if (result) return result //如果找到，就直接返回，结束后面的循环
    }
  }
  return result;
}

export default {
  NAV,
  getMenuData,

  getNavById,
  getNavByType,
  getRootIdByChildId,
  getBottomTypeName

};
