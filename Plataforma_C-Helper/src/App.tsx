import { BrowserRouter, Route } from "react-router-dom"

import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { Register } from "./pages/Register";
import { Courses } from "./pages/Courses";

import { AuthContextProvider } from './contexts/AuthContext';


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/courses" component={Courses} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
