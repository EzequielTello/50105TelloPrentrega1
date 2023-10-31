import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponents";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a MotoCafe" />
    </div>
  );
}

export default App;
