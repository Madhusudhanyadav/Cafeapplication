import "./App.css";
import Navbar from "./components/homepage/Navbar";

function App() {
  const head = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHOGGm58kde1ka7aqEettaP_i0VuS82on5gRD1mHaFw&s"
      alt="cafeApplication" width={20}
    ></img>
  );
  return (
    <>
      <Navbar title={head} />
    </>
  );
}

export default App;
