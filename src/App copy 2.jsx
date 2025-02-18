//RED AND WHITE LOGO //

import logo from './rnw.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>                    
          {/* RW3 <code>src/App.js</code> and save to reload. */}
          <code>RED AND WHITE MULTIMEDIA EDUCATION</code> 
          {/* and save to reload. */}

        </p>
        <a
          className="App-link"
          href="https://www.rnwmultimedia.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}


function App2() {
  var a = 40;
  var b = 20;
  var sum = a+b

    return (
      <>
      <h1>Sum 3+6 = {3+6}</h1>
      <h1>sum 3+6 = {a+b}</h1>
      {console.log("hello")}
      {console.log("World")}

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deleniti deserunt cupiditate repellat sequi excepturi rerum praesentium nobis tempora amet blanditiis modi necessitatibus iure dolores error velit veniam provident! Nulla aut officia ea deleniti, pariatur iste, commodi perferendis itaque nobis, voluptatem expedita ad! Facilis exercitationem esse quos iste recusandae iure.</p>
      </>
    )
}

export default App2


