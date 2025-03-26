import { useEffect, useRef } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

export default function CanvasSection({ image, texts }) {
  const canvas_ref = useRef(null);
  const anchor_ref = useRef(null);

  useEffect(() => {
    const canvas = canvas_ref.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = () => {
      const CANVAS_SIZE = 500;
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;

      // Calculate aspect ratio
      const scale = Math.min(CANVAS_SIZE / img.width, CANVAS_SIZE / img.height);
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      // Center the image
      const offsetX = (CANVAS_SIZE - newWidth) / 2;
      const offsetY = (CANVAS_SIZE - newHeight) / 2;

      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      drawTexts(ctx);
    };

    const drawTexts = (ctx) => {
      texts.forEach(({ text, fontSize, textColor, position }) => {
        ctx.font = `${fontSize}px Geist, sans-serif`;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        ctx.fillText(text, position.x, position.y);
      });
    };
  }, [image, texts]);

  const handleDownload = () => {
    const canvas = canvas_ref.current;
    const link = anchor_ref.current;
    link.href = canvas.toDataURL("image/png");
    link.download = "edited-image.png";
    link.click();
  };
  return (
    <>
      <Box
        borderRadius="10px"
        padding="4"
        bg="gray.900"
        backdropFilter={"blur(10px)"}
        borderWidth="1px"
        borderColor="border.disabled"
      >
        <canvas ref={canvas_ref}></canvas>
        <Flex justifyContent={"center"}>
          <Button
            onClick={handleDownload}
            m="auto"
            w="70%"
            mt="1rem"
            variant="surface"
            colorPalette={"teal"}
          >
            Download
          </Button>
        </Flex>
      </Box>

      <a ref={anchor_ref} style={{ display: "hidden" }} />
    </>
  );
}
