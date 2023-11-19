import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import SnapContainer from "./components/SnapContainer";
import Snap from "./components/Snap";
import SnapDataProvider from "./providers/SnapDataProvider";
import UpdateSnap from "./components/UpdateSnap";

function App() {
  return (
    <>
      <Menu />
      <SnapDataProvider>
        <SnapContainer>
          <UpdateSnap />
        </SnapContainer>
      </SnapDataProvider>
    </>
  );
}

export default App;
