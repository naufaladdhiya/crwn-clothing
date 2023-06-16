import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/sign-in/authentication';
import Shop from './routes/shop/shop.component';

const App = () => {

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
