// ログイン画面のボタンコンポーネント（画面のメインボタンコンポーネント）

import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

// ユーザーカードクリック時にモーダルを呼ぶためのonClickの引数にidを設定
// モーダルに表示するユーザー情報を取得するため
type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  // disabledとloadingには初期値でfalseを設定
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    // 引数付きの関数を設定する場合は{() => method()}の形にする
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          　{fullName}
        </Text>
      </Stack>
    </Box>
  );
});
