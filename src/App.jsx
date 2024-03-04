import { useState } from "react";

import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
import ItemsList from "./components/ItemsList/ItemsList";
import Footer from "./components/Footer/Footer";
import Message from "./components/Message/Message";

function App() {
  const [tasks, setTasks] = useState([]);
  const [typeOfTasks, setTypeOfTasks] = useState("all");

  const unCompletedTaskNumbers = tasks.filter(
    (task) => task.completed === false
  ).length;

  function handleTaskAsDone(id) {
    setTasks((preTasks) =>
      preTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  function handleClearCompleted() {
    setTasks((preTasks) => preTasks.filter((task) => task.completed === false));
  }

  return (
    <>
      <Header>
        <ThemeButton />
        <Input setTasks={setTasks} />
      </Header>

      {tasks.length === 0 ? (
        <Message message={"Add Your First To Do. 🌱"} />
      ) : (
        <Main>
          <ItemsList
            tasks={tasks}
            typeOfTasks={typeOfTasks}
            setTasks={setTasks}
            onHandleAsDone={handleTaskAsDone}
          ></ItemsList>
        </Main>
      )}

      {tasks.length !== 0 && (
        <Footer
          unCompletedTaskNumbers={unCompletedTaskNumbers}
          onClearCompleted={handleClearCompleted}
          typeOfTasks={typeOfTasks}
          setTypeOfTasks={setTypeOfTasks}
        />
      )}
    </>
  );
}

export default App;
