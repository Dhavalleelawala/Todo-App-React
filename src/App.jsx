import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// const AddTodo = lazy(() => import("./components/AddTodo"));
const Signup = lazy(() => import("./components/Signup"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            {/* <Route path="/" element={<AddTodo />} /> */}
            <Route path="/" element={<Signup/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
