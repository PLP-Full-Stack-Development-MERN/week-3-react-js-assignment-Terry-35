import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <Header />
      <Profile name="Prudence Gikundi" email="prudence@example.com" />
      <Counter />
    </div>
  );
}

export default App;
