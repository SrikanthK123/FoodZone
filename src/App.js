
import './App.css';
import AnimationRouters from './components/AnimationRouters';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import {PersistGate} from "redux-persist/integration/react"
import persistStore from 'redux-persist/es/persistStore';




function App() {
  let persistor = persistStore(store)
  return (
    <div className="App">
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
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
