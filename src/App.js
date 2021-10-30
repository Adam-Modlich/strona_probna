import logo from './logo.svg';
import picture from '../src/Pictures/picture_of_me.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="begin_site">
        <ul className="navbar">
          <li id="begin1"> Modlich Adam </li>
          <li id="benefits1"> Benefits</li>
          <li id="projects1"> Projects</li>
          <li id="process1"> Process</li>
          <li id="faq1"> FAQ</li>
          <li id="contact1"> Contact me </li>
        </ul>
        <header>
          <img src={picture} alt=""/>
          <h2>MODLICH ADAM</h2>
          <h1>WEBSITE DEVELOPER</h1>
        </header>
      </div>
    </div>
  );
}




export default App;
