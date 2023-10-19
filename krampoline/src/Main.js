import './App.css';
import logo from './logo.svg'


function Main() {
  const name = process.env.NAME;
  console.log(process.env);

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {name}가 개발자가 된다
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Main;
