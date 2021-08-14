// ユーザー管理画面に等間隔で配置するユーザーカード

import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

// パラメータの末尾に?をつけることで必須制約を消すことができる
type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  // disabledとloadingには初期値でfalseを設定
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
