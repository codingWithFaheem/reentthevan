import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Layout } from './componenets';
import { Home, NotFound } from './pages';

function App() {
  return (
    <div className="">
    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route index element={<} /> */}

          </Route>

      
      
      </Routes>

    </div>
  );
}

export default App;
