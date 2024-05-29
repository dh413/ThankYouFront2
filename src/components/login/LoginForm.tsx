"use client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginInfoState } from "@/recoil/login";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loginInfo, setloginInfo] = useRecoilState(loginInfoState);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (id.trim() === "" || pw.trim() === "") {
      return false;
    } else {
      try {
        const response = await fetch(
          "https://tkapi.aladin.co.kr/api/thankyoulogin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, pw }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.data && result.data.pwdFailedCnt > 0) {
        } else {
          if (result.data) {
            setloginInfo(result.data);
            Cookies.set("user", JSON.stringify(result.data), { expires: 7 });

            router.push("/main");
          } else {
          }
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">로그인</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    아이디
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID를 입력하세요"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    패스워드
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="패스워드를 입력하세요"
                  />
                </div>
                <div className="btn-group w-100" role="group">
                  <button type="submit" className="btn btn-primary w-50">
                    확인
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-50"
                    onClick={() => window.location.reload()}
                  >
                    취소
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn btn-primary w-50">
                  땡큐 버전 기록 보기 {">>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
