import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/sign-in/authentication';

const App = () => {
  const Shop = () => {
    return <h1>Iam the Shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
