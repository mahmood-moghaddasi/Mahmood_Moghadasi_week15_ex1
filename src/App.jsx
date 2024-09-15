import { useEffect, useState } from "react";
import Input from "./main.jsx";
import cities from "./cities.json";

function App() {
  const [hint, setHint] = useState("");
  const [value, setValue] = useState("");
  const valueLength = value.length;
  const splitString = (str) => {
    return str.slice(0, valueLength);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (!value) {
      setHint("");
      return;
    }
    const city = cities.filter((city) => {
      if (value == splitString(city)) return city;
    });

    setHint(city[0]);
  }, [value]);
  return (
    <Input
      handleChange={handleChange}
      hint={hint}
      setHint={setHint}
      setValue={setValue}
      value={value}
    ></Input>
  );
}

export default App;
