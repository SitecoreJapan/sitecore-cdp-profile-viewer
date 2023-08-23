import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/guests/${inputText}`);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
          Sitecore CDP Profile Viewer
        </h1>
        <Input
          type="text"
          value={inputText}
          label="Guest ID"
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button color="primary" onClick={handleButtonClick}>
          Check
        </Button>

        <p>Sample GuestID : 6cfa0297-50bd-4b38-80fc-913a7488b9a8</p>
      </div>
    </>
  );
};

export default Home;
