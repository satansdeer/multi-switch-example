import { useForm } from "react-hook-form";
import { MultiSwitch, StyledMultiSwitch } from "./MultiSwitch";

const items = [
  { name: "Cucumber", value: "cucumber" },
  { name: "Tomato", value: "tomato" },
];

function App() {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <form>
      <StyledMultiSwitch
        ref={register}
        name="vegetables"
        items={items}
        defaultValue="cucumber"
      />
    </form>
  );
}

export default App;
