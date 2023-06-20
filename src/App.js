import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Layout } from './componenets';
import { About, Home, NotFound } from './pages';

function App() {
  return (
    <div className="">
    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />

          {/* <Route path="" element={<} /> */}

          </Route>

      
      
      </Routes>

    </div>
  );
}

export default App;
