import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessWindow = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const routerNavigate = useNavigate();

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(countdownTimer);
      routerNavigate('/');
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [timeLeft]);

  return (
    <>
      <p className="text-center">You have been successfully registered</p>
      <p className="text-center">You will be redirected in {timeLeft} seconds</p>
    </>
  );
};

export default SuccessWindow;
