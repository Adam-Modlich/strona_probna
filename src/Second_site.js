import './second_site.scss';
import rzym from '../src/Pictures/rzym.jpg';
import portugalia from '../src/Pictures/portugalia.jpg';
import grecja from '../src/Pictures/Grecja1.jpg';
import paryz2 from '../src/Pictures/paryz2.jpg';



function Second_site() {
    return (
    <div className="second_site">
        <h2>Benefits</h2>
        <h1>Your Perfect Project Partner</h1>
        <div className="boxes_grid">
        <div className="box about_me">
            <h3><span>Website Developer </span><span id="content1">who will do it right</span></h3>
            <p>Cillum proident incididunt laborum irure eiusmod cillum mollit ipsum. Mollit ad eiusmod ea Lorem labore elit reprehenderit. Mollit quis tempor voluptate nulla. Nisi nostrud dolore minim incididunt qui magna laborum. Esse ut commodo eu veniam do sit. Ex cupidatat irure et sit dolor aliquip tempor ut cupidatat ullamco. Lorem anim labore fugiat minim fugiat nisi dolor ea.</p>
        </div>
        <div id="box1"><h3>Trips</h3>
            <p>
                Moją główną pasją są podróże. Już będąc małym dzieckiem chciałem zwiedzić cały świat, poznać wszystkie kultury, dania oraz ludzi.
            </p>  
                          
            <img id="img1" src={rzym}></img>
            <img id="img2" src={paryz2}></img>

        </div>
        <div id="box2"><h3>Coding</h3>
            <p>
                
            </p>
        </div>
        <div id="box3"><h3>Cooking</h3></div>
        <div id="box4"><h3>Sport</h3></div>
        </div>
    </div>
    );
  }
  
  
  
  
  export default Second_site;
  