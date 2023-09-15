import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import { UserProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Dashboard />
      </UserProvider>
    </div>
  );
}

export default App;
