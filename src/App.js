import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged = "Aldo";
  const userLoggedJSX = <strong>Ruang Aldo For Future!</strong>;

  let a =3;
  let b =4;

  return (
    <div className="App">
      <p>{userLogged}</p>
      <p>{userLoggedJSX}</p>

      {a+b/200}
    </div>
  );
}

export default App;
