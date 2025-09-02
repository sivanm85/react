import UseMemo from "./components/useMemo";
import UseMyRef from "./components/UseMyRef";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flex">
      <UseMemo />
      <UseMyRef />
      <Timer />
    </div>
  );
}

export default App;
