import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';
import Footer from './components/Footer/Footer';
import MealDetails from './components/MealDetails/MealDetails';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import Login from './components/Login/Login';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const githubProvider = new GithubAuthProvider();

  // Github
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(user);
  return (
    <>
      <Header>
        <button onClick={handleGithubSignIn}>Github Sign In</button>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/meal/:mealId" element={<MealDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
