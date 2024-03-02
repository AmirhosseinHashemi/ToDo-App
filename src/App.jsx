import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ItemsList from "./components/ItemsList/ItemsList";
import Item from "./components/Item/Item";

function App() {
  return (
    <>
      <Header />
      <Main>
        <ItemsList>
          <Item />
          <Item />
        </ItemsList>
      </Main>
    </>
  );
}

export default App;
