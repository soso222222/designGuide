import { MenuBase } from "../../Menu/MenuBase";
import { MenuComponent } from "../../Menu/MenuComponent";
import { MenuPage } from "../../Menu/MenuPage";
import { MenuMyPage } from "../../Menu/MenuMyPage";
import { MenuDashboard } from "../../Menu/MenuDashboard";


export const myPage = [
  MenuDashboard, // dashboard
  MenuMyPage, //
];

export const category = [
  MenuDashboard, // dashboard
  MenuMyPage, //
  MenuBase, // 색상, 타이포 그래픽 등
  MenuComponent, // 버튼, input 등
  MenuPage, // 게시글
];

