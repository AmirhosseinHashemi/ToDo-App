import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
import ItemsList from "./components/ItemsList/ItemsList";
import Item from "./components/Item/Item";

function App() {
  return (
    <>
      <Header>
        <ThemeButton />
        <Input />
      </Header>

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
