// ログイン処理のカスタムフック

import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoaging] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoaging(true);
      // axios.get<type>でGETリクエストのレスポンスに型定義する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        // 成功時
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            // Contextにログインユーザーの情報を保存する
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoaging(false);
          }
        })
        // 失敗時
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoaging(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
