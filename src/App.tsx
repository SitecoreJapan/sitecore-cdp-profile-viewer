import { useState, useEffect } from "react";
import { baseUrl, apiToken, clientKey } from "./constants/cdpenv";
import axios from "axios";

interface GuestData {
  firstName: string;
  // 他のプロパティも追加
}

function App() {
  const [guest, setGuest] = useState<GuestData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userGuid = "6cfa0297-50bd-4b38-80fc-913a7488b9a8";
  const apiUrl = baseUrl + "/v2/guests/" + userGuid;
  const cdpUrl = baseUrl + "/guests/" + userGuid;

  useEffect(() => {
    const authHeader = {
      username: clientKey,
      password: apiToken,
    };

    axios
      .get<GuestData>(apiUrl, { auth: authHeader })
      .then((response) => setGuest(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("データを取得できませんでした。");
      });
  }, []);

  return (
    <>
      <p>
        More detail <a href={cdpUrl}>{userGuid}</a>
      </p>
      {error && <p>{error}</p>}
      {guest && (
        <div>
          <p>First Name: {guest.firstName}</p>
          {/* 他の情報も表示 */}
        </div>
      )}
    </>
  );
}

export default App;
