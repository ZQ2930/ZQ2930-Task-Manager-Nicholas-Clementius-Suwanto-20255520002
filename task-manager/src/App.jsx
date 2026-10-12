import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      judul: 'Mempelajari State dan Props',
      kategori: 'Belajar',
      isCompleted: false
    },
    {
      id: 2,
      judul: 'Membuat Navbar dengan React Router',
      kategori: 'Pekerjaan',
      isCompleted: false
    }
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          }
        />

        <Route
          path="/tambah"
          element={
            <AddTask
              onAddTask={handleAddTask}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}
export default App;