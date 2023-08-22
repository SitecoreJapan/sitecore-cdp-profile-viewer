import { useState, useEffect } from "react";
import { cdpUrl, baseUrl, apiToken, clientKey } from "../constants/cdpenv";
import axios from "axios";
import { GuestData } from "../interfaces/GuestData";

const GuestRef: React.FC = () => {
  const [guest, setGuest] = useState<GuestData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userGuid = "6cfa0297-50bd-4b38-80fc-913a7488b9a8";
  const apiUrl = baseUrl + "/v2/guests/" + userGuid;
  const previewUrl = cdpUrl + "/#/guests/" + userGuid;

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
        More detail <a href={previewUrl}>{userGuid}</a>
      </p>
      {error && <p>{error}</p>}
      {guest && (
        <div>
          <p>Guest Type: {guest.guestType}</p>
          {guest.nationality === "Japan" ? (
        <p>Full Name: {guest.firstName} {guest.lastName}</p>
      ) : (
        <p>Full Name: {guest.title} {guest.lastName} {guest.firstName}</p>
      )}
                {guest.nationality === "Japan" ? (
        <p>Address: {guest.zipCode} {guest.state} {guest.city}</p>
      ) : (
        <p>Address: {guest.city} {guest.state} {guest.country} {guest.zipCode}</p>
      )}

          <p>gender: {guest.gender}</p>
          <p>dateOfBirth: {guest.dateOfBirth}</p>
          <p>Nationality: {guest.nationality}</p>
          <p>language: {guest.language}</p>

        </div>
      )}
    </>
  );
}

export default GuestRef;
