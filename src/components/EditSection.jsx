import {
  Box,
  Button,
  Accordion,
  Stack,
  Span,
  For,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemBody,
  AccordionItemContent,
  Input,
} from "@chakra-ui/react";
import { Fragment } from "react";

// {
//   text: "Your Text Here",
//   fontSize: 40,
//   textColor: "#ffffff",
//   position: { x: 150, y: 150 },
//   expanded: true,
// },
export default function EditSection({ texts, setTexts }) {
  const addText = () => {
    const new_text = {
      //   text: "Your Text Here",
      //   fontSize: 40,
      //   textColor: "#ffffff",
      //   position: { x: 150, y: 150 },
      //   expanded: true,
    };
  };

  const changeTextTitle = (key, value) => {
    const dup = [...texts];

    for (const text of dup) {
      if (`${text.key}` === `${key}`) {
        text.text = value;
        break;
      }
    }
    console.log(texts);
    setTexts(dup);
  };

  return (
    <>
      <Box w="100%">
        <Button
          size="xs"
          fontWeight={"500"}
          colorPalette={"yellow"}
          onClick={addText}
        >
          Add Text
        </Button>

        {texts.length ? (
          <Stack gap="2" mt={"5"} w="100%">
            <Accordion.Root collapsible variant="enclosed" w="100%">
              <For each={texts}>
                {(txt, _) => (
                  <Fragment key={_}>
                    <AccordionItem value={txt.key} w="100%">
                      {/* Trigger */}
                      <AccordionItemTrigger w="100%">
                        <Span flex="1">{txt.text}</Span>
                        <AccordionItemIndicator />
                      </AccordionItemTrigger>
                      {/* Content */}
                      <AccordionItemContent>
                        <AccordionItemBody>
                          <Input
                            type="text"
                            defaultValue={txt.text}
                            onChange={(e) =>
                              changeTextTitle(txt.key, e.target.value)
                            }
                          />
                        </AccordionItemBody>
                      </AccordionItemContent>
                    </AccordionItem>
                  </Fragment>
                )}
              </For>
            </Accordion.Root>
          </Stack>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}
