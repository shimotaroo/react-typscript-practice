import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  // Router.tsxに定義した404ページへのルーティングだけだと、/home/xxxxの場合はこのファイルに流れてしまい
  // 404ページが表示されないのでここにも定義しておく
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
