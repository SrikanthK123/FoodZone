
import './App.css';
import AnimationRouters from './components/AnimationRouters';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import {store,persistor} from "./store/store"
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <NavBar />
            <AnimationRouters />
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
