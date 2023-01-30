/* Login.js */

/* ↓新たに5つimportしています */
import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            alert("メールアドレスまたはパスワードが間違っています");
        }
    };

    /* ↓ログインを判定する設定 */
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    return (
        <>
            {/* ↓ログインしている場合、マイページにリダイレクトする設定 */}
            {user ? (
                <Navigate to={`/`} />
            ) : (
                <>
                    <div className="container">
                        <div className="row">
                        <div className="col"></div>
                            <div className="col-8">
                                <h1>ログインページ</h1>
                                {/* onSubmitを追加↓ */}
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>メールアドレス</label>
                                        {/* ↓「value」と「onChange」を追加 */}
                                        <input
                                            name="email"
                                            type="email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label>パスワード</label>
                                        {/* ↓「value」と「onChange」を追加 */}
                                        <input
                                            name="password"
                                            type="password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                    </div>
                                    <button>ログイン</button>
                                </form>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>

                </>
            )}
        </>
    );
};

export default Login;