import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountLink from '../../components/Account_Link';
import Button from '../../components/Button_Social';
import FromLogin from '../../components/Form_Login';
import Modal from '../../components/Modal';
import {
  IconGithub,
  IconGoogle,
} from '../../components/Icons';
import { InstagramLogo } from '../../components/Images';
import LeftPane from './LeftPane';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000); // Hiển thị Modal sau 3 giây

    return () => clearTimeout(timer); // Xóa timer khi component unmount
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExplore = () => {
    navigate('/explore', { replace: true });
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Pane */}
        <LeftPane />
        {/* RightPane */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6 border">
            <div className="flex justify-center items-center h-full mt-10 mb-10">
              <InstagramLogo />
            </div>

            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <Button
                label="Sign Up with Google"
                onClick={() =>
                  console.log('Google Sign Up clicked')
                }
                icon={<IconGoogle />}
                size="md"
                fullWidth
              />

              <Button
                label="Sign Up with Github"
                onClick={() =>
                  console.log('Github Sign Up clicked')
                }
                icon={<IconGithub />}
                size="md"
                fullWidth
              />
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>or with email</p>
            </div>
            <FromLogin />
            <AccountLink
              message="Don't have an account?"
              linkText="Sign up"
              linkHref="/explore"
              size="sm"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="md"
        position="center"
        title="Explore our application!"
        footerContent={
          <>
            <button
              onClick={handleCloseModal}
              className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 ml-2"
            >
              Cancel
            </button>
            <button
              onClick={handleExplore}
              className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 ml-2"
            >
              Confirm
            </button>
          </>
        }
      >
        <p>
          You can explore our application without signing
          up!
        </p>
      </Modal>
    </>
  );
};

export default LoginPage;
