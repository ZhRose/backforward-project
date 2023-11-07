import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import type { MenuProps } from "antd";
//表示一个菜单项(MenuItem)是一个具有必需的属性(如标题、路径等)的对象,它是菜单组件(MenuProps)的属性(items)中的一个元素(索引为number)。
type MenuItem = Required<MenuProps>["items"][number];
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items: MenuItem[] = [
  {
    label: "栏目 1",
    key: "/home/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "栏目 2",
    key: "/home/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "栏目 3",
    key: "/home/page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "栏目 301",
        key: "/home/page3/page301",
      },
      {
        label: "栏目 302",
        key: "/home/page3/page302",
      },
      {
        label: "栏目 303",
        key: "/home/page3/page303",
      },
    ],
  },
  {
    label: "栏目 4",
    key: "/home/page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "Team 1",
        key: "/home/page4/page401",
      },
      {
        label: "Team 2",
        key: "/home/page4/page402",
      },
    ],
  },
  {
    label: "栏目 5",
    key: "page5",
    icon: <FileOutlined />,
  },
];

const mainMenu = () => {
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  const [openKeys, setOpenKeys] = useState([""]);
  const hdOpenChange = (keys: string[]) => {
    // 点击展开和收缩的时候执行这里的代码
    // 这些展开这的keys的数组， 设置为最后一项
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      onClick={menuClick}
      // openKeys 表示当前所有展开着的数组
      openKeys={openKeys}
      // 点击展开和收缩的时候执行这里的代码
      onOpenChange={hdOpenChange}
    />
  );
};
export default mainMenu;
