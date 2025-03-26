import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CanvasSection from "./CanvasSection";
import EditSection from "./EditSection";

export default function Editor({ image }) {
  const [texts, setTexts] = useState([
    {
      key: 0,
      text: "Your Text Here",
      fontSize: 40,
      textColor: "#ffffff",
      position: { x: 150, y: 150 },
      expanded: true,
    },
    {
      key: 1,
      text: "Your Text Here",
      fontSize: 40,
      textColor: "#ffffff",
      position: { x: 150, y: 150 },
      expanded: true,
    },
    {
      key: 2,
      text: "Your Text Here",
      fontSize: 40,
      textColor: "#ffffff",
      position: { x: 150, y: 150 },
      expanded: true,
    },
  ]);
  return (
    <>
      <Flex gap={"5rem"}>
        <CanvasSection image={image} texts={texts} />
        <EditSection texts={texts} setTexts={setTexts} />
      </Flex>
    </>
  );
}
