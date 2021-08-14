// 選択したユーザー情報を特定し、モーダルを表示するカスタムフック

import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    // TSの機能で変数の末尾に!をつけることでundefinedの可能性を排除することができる
    // !はあまり気軽に使わない方がいい（TSの機能を無視するので）
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};

// setSelectedUser(targetUser);の型エラーについて
// selectedUserはUser型またはnullで定義しているが、findメソッドで一致するものがない場合はundefinedになるのでエラーになってしまう
// 解決方法1
// 以下の書き方によりundefinedの場合はnullに変換する
// setSelectedUser(targetUser ?? null);
// 解決方法2
// 条件分岐でundefinedの場合はエラーになるようにエラーハンドリングする
