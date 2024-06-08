import "./App.css";
import { DefaultTooltip } from "./DefaultTooltip";
import { WithCustomTooltip } from "./WithCustomTooltip";
import { WithCustomTooltipFixed } from "./WithCustomTooltipFixed";

function App() {
  return (
    <>
      {/* <DefaultTooltip /> */}
      {/* <WithCustomTooltip /> */}
      <WithCustomTooltipFixed />
    </>
  );
}

export default App;
