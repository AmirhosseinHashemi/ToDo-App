import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
import ItemsList from "./components/ItemsList/ItemsList";
import Item from "./components/Item/Item";
import Footer from "./components/Footer/Footer";

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
          <Item />
          <Item />
        </ItemsList>
      </Main>

      <Footer />
    </>
  );
}

export default App;
