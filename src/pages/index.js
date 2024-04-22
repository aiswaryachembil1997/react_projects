// pages/index.js

import UserList from '../components/UserList';

const Home = () => {
  return (
    <div>
      <h1 className='my-3 text-center'>USERS DATA</h1>
      <UserList />
    </div>
  );
};

export default Home;
