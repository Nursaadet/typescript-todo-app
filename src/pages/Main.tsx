import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string;
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  const [todos, setTodos] = useState([] as ITodoType[]);
  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const addTodo = async (task:string) => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

type AddFn = (task: string) => Promise<void>; 

const addTodo:AddFn = async (task) => {
    try {
      await axios.post(url,{task, isDone:false})
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo} />
    </Container>
  );
};

export default Main;
