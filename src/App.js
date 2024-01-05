import logo from './logo.svg';
import './App.css';
import Content from "./Content.js"

function App() {
  return (
    <>
    
    <div className=" text-center cont">
  <div className="row text-centre">
    <div className="  col col-lg-3">

    <div className=" leftmost dropdown">
  <button className=" snake_icon  dropbtn"><i className="fa-solid fa-staff-snake"></i></button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
  </div>
  <button className="dropbtn hand_icon"><i className="fa-solid fa-hand"></i></button>
</div>
    </div>
    <div className=" width col col-lg-6">
     EXPLAROGANT INTERNATI
   
    </div>
    <div className="nav3 col col-lg-3">
    <i className=" user_icon fa-regular fa-circle-user"></i>
    <i className=" user_icon fa-regular fa-circle-user"></i>
    <button className="login">LOGIN</button>
    <div className="dropdown">
  <button className=" play_btn dropbtn"><i className="fa-solid fa-play"></i></button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


    <div className="dropdown">
  <button className="dropbtn">D</button>
  <div className="dropdown-content zoom ">
  <ul className="list-group">
  <li className="list-group-item">
  <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
  </li>
  <li className="list-group-item">
  <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
  </li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  
</ul>
  </div>
</div>
    </div>
  </div>
  </div>


  <Content/>




    </>
    
  );
}

export default App;
