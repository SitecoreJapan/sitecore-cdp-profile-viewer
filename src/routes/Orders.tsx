// UserProfile.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Orders: React.FC = () => {
  const { orderRef } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {orderRef}</p>
    </div>
  );
};

export default Orders;
