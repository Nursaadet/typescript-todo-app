import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string; 
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  const [todos, setTodos] = useState([] as ITodoType[]);
const getTodos = async() => {
    try {
        const {data} =await axios<ITodoType[]>(url)
        setTodos(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getTodos()
},[])

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
