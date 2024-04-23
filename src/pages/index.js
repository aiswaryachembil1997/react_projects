// pages/index.js

import UserList from '../components/UserList';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className='container-fluid background-color'>
     
        <NavBar />
      
        <div className='mt-auto'>
          <UserList />
        </div>
     <Footer />
    </div>
  );
};

export default Home;
