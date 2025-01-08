import Table from './components/Table';
import TShirtDesigner from './components/TShirtCustomizer';


function App() {
  return (
    <div className="container grid-background" style={{ overflowY: "auto", minHeight: "100vh" }}>
     <Table />
     <TShirtDesigner />
    </div>
  );
}

export default App;
