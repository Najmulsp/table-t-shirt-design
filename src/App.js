
import Table from './components/Table';
import TShirtCustomizer from './components/TShirtCustomizer';
import TShirtDesigner from './components/TshirtDesigner';

function App() {
  return (
    <div className="container grid-background" style={{ overflowY: "auto", minHeight: "100vh" }}>
     <Table />
     <TShirtDesigner />
     <TShirtCustomizer />
    </div>
  );
}

export default App;
