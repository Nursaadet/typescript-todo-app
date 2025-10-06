import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";
import "./style.css";

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <Grid
      container
      
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      {/* In Progress Todos */}
      <Grid
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
          flex: { xs: "70%", sm: "30%", md: "40%" },
          position: "relative",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
          mt={2}
        >
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" m={3}>
            No InProgress Todos!
          </Typography>
        )}
      </Grid>

      {/* Completed Todos */}
      <Grid
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "0.5rem",
          flex: { xs: "70%", sm: "30%", md: "40%" },
          position: "relative",
        }}
      >
        <Typography
          className="title"
          align="center"
          variant="h4"
          mt={2}
          sx={{color:"green"}}
        >
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" m={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;

