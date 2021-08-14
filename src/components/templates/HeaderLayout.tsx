import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

// {children}のようにタグで囲った要素の型にはreactに含まれるReactNodeを指定する
type Props = {
  children: ReactNode;
};

// VFCで関数コンポーネントの型定義
// VFC<Props>でpropsの型定義
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
