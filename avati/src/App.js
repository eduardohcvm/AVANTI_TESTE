import logo from './logo.svg';
import './App.css';

import LoginForm from "./componentes/Homepage";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Partners from "./componentes/Parceiros";

function App() {
  return (
    <div className="App">
        <Header/>
      <LoginForm />
        <Partners/>
        <Footer/>
    </div>
  );
}

export default App;
