import React, { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";

// ------------------ memo
// memoriza el componente y usa el dato memorizado,
// no renderiza hasta que uno de sus propertis cambian
// en forma general no se debe usar el memo. ya que al memorizar
// Reac internamente hace la comparacion de datos para renderizar y esto
// conlleva un proceso mas pesado
// mayormente la memorizacion se usa en lista con grandes registro-
// se usa en componentes que hacen peticion API.

// memoriza un componente
// vuelve a memorizar al cambiar las props
// Evita re renders
// se debe usar en componentes que llaman a los APIS
// se usa en aquellos componentes que manejan listas enormes de usuarios

// ------------------ useMemo
// useMemo memoriza el valor de una funcion para no volver renderizar.
// use useMemo para filtrar una cantidad de usuarios.
// Almacena el valor que retorna una funcion

// Memoriza un valor calculado
// para propiedades computadas
// para procesos pesados

// ------------------ useCallback
// Almacena directamente la definicion de una funcion para evitar re renderizados.

// Memoriza una funcion, para no volver a definirla en cada render
// Usarlo siempre que se pase una funcion como argumento de un efecto
// Usarlo siempre que se pase una funcion props a un componente memorizado

const initialState = [
  { id: 1, name: "Kendra" },
  { id: 2, name: "Jane" },
];

const AppMemo = () => {
  const [users, setUsers] = useState(initialState);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
    setText("");
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // las computadas son funciones que retornan un valor
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        // console.log("filter process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  useEffect(() => {
    console.log("App Render");
  });

  // Esta funcion se renderiza cuando hay cambios
  // const handleDelete = (userId) => {
  //   const filtedUser = users.filter((user) => user.id !== userId);
  //   setUsers(filtedUser);
  // };

  const handleDelete = useCallback(
    (userId) => {
      const filtedUser = users.filter((user) => user.id !== userId);
      setUsers(filtedUser);
    },
    [users]
  );

  // cuando cambie los usuarios se vuelvan a definir
  const printUsers = useCallback(() => {
    // cuando una funcion manipula al estado, tienes que incluir al useEffect
    console.log("changed users", users);
  }, [users]);

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  return (
    <div>
      <h2>memo - useMemo - useCallback</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
};

export default AppMemo;
