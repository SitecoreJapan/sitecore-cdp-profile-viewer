import { useState, useEffect } from 'react';
import { cdpUrl, baseUrl, apiToken, clientKey } from '../constants/cdpenv';
import axios from 'axios';
import { GuestData } from '../interfaces/GuestData';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from '@nextui-org/react';

const GuestRef: React.FC = () => {
  const [guest, setGuest] = useState<GuestData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { guestRef } = useParams();

  const apiUrl = baseUrl + '/v2/guests/' + guestRef;
  const previewUrl = cdpUrl + '/#/guests/' + guestRef;

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const authHeader = {
      username: clientKey,
      password: apiToken,
    };

    axios
      .get<GuestData>(apiUrl, { auth: authHeader })
      .then((response) => setGuest(response.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Invalid Guest ID');
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        {error && (
          <>
            <p>{error}</p>
          </>
        )}
        {guest && (
          <>
            <Card className="max-w-[800px]">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">
                    {guest.nationality === 'Japan' ? (
                      <p>
                        Full Name: {guest.firstName} {guest.lastName}
                      </p>
                    ) : (
                      <p>
                        Full Name: {guest.title} {guest.lastName}
                        {guest.firstName}
                      </p>
                    )}
                  </p>
                  <p className="text-small text-default-500">
                    Guest Type: {guest.guestType}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Gender: {guest.gender}</p>{' '}
                <p>dateOfBirth: {guest.dateOfBirth}</p>
                <p>Nationality: {guest.nationality}</p>
                <p>language: {guest.language}</p>{' '}
                {guest.nationality === 'Japan' ? (
                  <p>
                    Address: {guest.zipCode} {guest.state} {guest.city}
                  </p>
                ) : (
                  <p>
                    Address: {guest.city} {guest.state} {guest.country}{' '}
                    {guest.zipCode}
                  </p>
                )}
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={previewUrl}>
                  More detail
                </Link>
              </CardFooter>
            </Card>
          </>
        )}
        <Button color="primary" onClick={handleButtonClick}>
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default GuestRef;
