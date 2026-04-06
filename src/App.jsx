import { format } from "date-fns";
import "./App.css";

function App() {
  return (
    <>
      {/*creating two lines for date and time*/}
      <p>{format(new Date(), "h:mm a")}</p>
      <p>{format(new Date(2026, 3, 6), "MM/dd/yyyy")}</p>
    </>
  );
}

export default App;
