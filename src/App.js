import logo from './logo.svg';
import picture from '../src/Pictures/picture_of_me.jpg';
import './App.css';
import './second_site.css';

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
      <div className="second_site">
        <h2>Benefits</h2>
        <h1>Your Perfect Project Partner</h1>
        <div className="boxes_grid">
          <div className="box about_me">
            <h3>Website Developer who will do it right</h3>
          </div>
          <div id="box1">Trips</div>
          <div id="box2">Coding</div>
          <div id="box3">Cooking</div>
          <div id="box4">Sport</div>
        </div>
      </div>
    </div>
  );
}

export default App;
