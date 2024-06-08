import "./App.css";
import { DefaultTooltip } from "./DefaultTooltip";
import { WithCustomTooltip } from "./WithCustomTooltip";
import { WithCustomTooltipFixed } from "./WithCustomTooltipFixed";

function App() {
  return (
    <>
      <div className="allWrapper">
        <DefaultTooltip />
        <WithCustomTooltip />
        <WithCustomTooltipFixed />
      </div>
    </>
  );
}

export default App;
