import { useState } from "react";

import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
import ItemsList from "./components/ItemsList/ItemsList";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskAsDone(id) {
    setTasks((preTasks) =>
      preTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  return (
    <>
      <Header>
        <ThemeButton />
        <Input setTasks={setTasks} />
      </Header>

      <Main>
        <ItemsList
          tasks={tasks}
          setTasks={setTasks}
          onHandleAsDone={handleTaskAsDone}
        ></ItemsList>
      </Main>

      <Footer />
    </>
  );
}

export default App;
