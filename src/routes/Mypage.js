/* Mypage.js */
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
/* ↓「useNavigate」をimport */
import {
    useNavigate,
    Navigate
} from "react-router-dom";

const Mypage = () => {
    /* ↓state変数「user」を定義 */
    const [user, setUser] = useState("");

    /* ↓ログインしているかどうかを判定する */
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    /* ↓「navigate」を定義 */
    const navigate = useNavigate();

    /* ↓関数「logout」を定義 */
    const logout = async () => {
        await signOut(auth);
        navigate("/login/");
    }

    return (
        <>
            {/* ↓ログインしていない場合はログインページにリダイレクトする設定 */}
            {!user ? (
                <Navigate to={`/login/`} />
            ) : (
                <>
                    <h1>マイページ</h1>
                    {/* ↓ユーザーのメールアドレスを表示（ログインしている場合） */}
                    <p>{user?.email}</p>
                    {/* ↓「onClick」を追加 */}
                    <button onClick={logout}>ログアウト</button>
                </>
                )}
        </>
    );
};

export default Mypage;