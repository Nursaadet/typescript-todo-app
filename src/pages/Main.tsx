import { Container } from "@mui/material";
import Header from "../components/Header";
import { useState } from "react";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string; 
}

const Main = () => {
  const [todos, setTodos] = useState([] as ITodoType[]);

  return (
    <Container>
      <Header />
      <button onClick={()=>setTodos([{id:6,isDone:false,task:"ghj"}])}>Click</button>
    </Container>
  );
};

export default Main;
