import React, { useState } from 'react';
import ButtonAccount from '../Button_Account';
import InputField from '../Input';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Alert from '../Alert_with_Icon';
import { IconWarningFill } from '../Icons';

const FromLogin: React.FC = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['user']);
  const [alert, setAlert] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    icon: React.ReactNode;
  } | null>(null);

  const handleLogin = (
    username: string,
    password: string,
  ) => {
    if (username === 'test' && password === 'test') {
      setCookie('user', 'test', { path: '/' });
      navigate('/');
    } else {
      setAlert({
        message: 'Invalid credentials',
        type: 'warning',
        icon: <IconWarningFill />,
      });
    }
  };

  return (
    <div>
      {alert && (
        <Alert message={alert.message} type={alert.type} icon={<IconWarningFill />} />
      )}
      <form
        action="#"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(
            e.target as HTMLFormElement,
          );
          handleLogin(
            formData.get('Username') as string,
            formData.get('Password') as string,
          );
        }}
        className="space-y-4"
      >
        <InputField
          id="Username"
          label="Username"
          name="Username"
          type="text"
          placeholder="Enter your username"
        />
        <InputField
          id="Password"
          label="Password"
          name="Password"
          type="password"
          placeholder="Enter your password"
        />
        <ButtonAccount
          size="md"
          label="Login"
          variant="secondary"
          onClick={() => {}}
          fullWidth
        />
      </form>
    </div>
  );
};

export default FromLogin;
