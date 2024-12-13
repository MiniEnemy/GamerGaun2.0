import { useEffect } from "react";
import { addTestData } from "../services";

const HomePage = () => {
  useEffect(() => {
    addTestData();
  }, []);

  return <h1>Testing Firebase Integration</h1>;
};

export default HomePage;
