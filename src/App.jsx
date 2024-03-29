import Home from './Component/Home';
import Navber from './Component/Navber';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Repo from './Component/Routes/Repo';
import Followers from './Component/Routes/Followers';
import Following from './Component/Routes/Following';
import { createContext } from 'react';
import { useState } from 'react';
import Followersing from './Component/Routes/Followersing';
import Footer from './Component/Footer';
import ContectFrom from './Component/Routes/ContectFrom';
export const gitUser = createContext();
const App = () => {
  const [profile, setProfile] = useState(null);
  const [gThem, setGThem] = useState(null);

  return (
    <div className='bg-white min-h-screen dark:bg-black dark:text-white'>
      <gitUser.Provider value={[profile, setProfile, gThem, setGThem]}>
        <Router>
          <Navber />
          <Routes path="/">
            <Route path='/' element={<Home />} />
            <Route path='repo' element={<Repo />} />
            <Route path='followers' element={<Followers />} />
            <Route path='contect/from' element={<ContectFrom />} />
            <Route path='following' element={<Following />} />
            <Route path='/:username' element={<Followersing />} />
          </Routes>
          <Footer />
        </Router>
      </gitUser.Provider>
    </div>


  );
};

export default App;