import React from 'react';
import CircleAvatar from './components/Circle_Avatar';

const App: React.FC = () => {
  const handleAvatarClick = () => {
    console.log('Avatar clicked!');
  };

  return (
    <div>
      <CircleAvatar
        src="https://cdn-icons-png.flaticon.com/512/18499/18499151.png"
        alt="User Avatar"
        size='sm'
        borderColor="#ff0000"
        borderWidth={1}
        onClick={handleAvatarClick}
      />
    </div>
  );
};

export default App;
