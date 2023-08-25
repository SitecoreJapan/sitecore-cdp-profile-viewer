// UserProfile.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrdersResponse } from '../interfaces/Orders';
import { baseUrl, clientKey, apiToken } from '../constants/cdpenv';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from '@nextui-org/react';

const Orders: React.FC = () => {
  const { guestRef } = useParams();

  const [order, setOrders] = useState<OrdersResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiOrdersUrl = baseUrl + '/v2/orders?guestRef=' + guestRef;

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
      .get<OrdersResponse>(apiOrdersUrl, { auth: authHeader })
      .then((response) => setOrders(response.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Invalid Guest ID');
      });
  }, []);
  return (
    <div className="mx-auto max-w-2xl text-center">
      {error && (
        <>
          <p>{error}</p>
        </>
      )}
      {order && (
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Order list</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Number of Items: {order.items.length}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={'/guests/' + guestRef}>Back to Profile</Link>
          </CardFooter>
        </Card>
      )}
      <Button color="primary" onClick={handleButtonClick}>
        Back to Home
      </Button>
    </div>
  );
};

export default Orders;
