import { Button } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // ボタンクリック時の処理
    // テキスト入力の値を次のページに渡す
    navigate(`/`);
  };
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1>Error Page</h1>
        <p>This is the content of the home page.</p>
        <Button color="primary" onClick={handleButtonClick}>
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
