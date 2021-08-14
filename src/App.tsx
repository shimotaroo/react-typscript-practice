// 外部からインポートしてきたものとローカルからインポートしてきたものの間に1行いれると見やすい
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    // ChakraProviderタグで囲った中でChakra UIを使うことができる
    // ルートコンポーネントで定義する
    // テーマプロパティでGlobalなスタイルを適用できる
    <ChakraProvider theme={theme}>
      {/* React Routerを使う場合は全体をBrowserRouterタグで囲む */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
