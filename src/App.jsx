import { Button, Flex, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
// import { useColorMode } from "./components/ui/color-mode";
// import { useEffect } from "react";

const Demo = () => {
  // const { setColorMode } = useColorMode();
  // useEffect(() => {
  //   setColorMode("dark");
  // }, []);

  return (
    <>
      <Header />

      <Main />
    </>
  );
};

export default Demo;
