import { Flex, Heading, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      border="1px solid #cccccc50"
      p={"10px 30px"}
      borderRadius={"5px"}
      w={"60%"}
      m={"auto"}
      mt={"2rem"}
      color="white"
      justifyContent={"space-between"}
    >
      <Heading as={"h1"} fontWeight={700}>
        Cool Text
      </Heading>

      <Button
        variant={"surface"}
        colorPalette={"gray"}
        size="sm"
        fontWeight={600}
        // bg="white"
        // color="black"
        // _hover={{ bg: "black", color: "white" }}
      >
        Sign In
      </Button>
    </Flex>
  );
}
