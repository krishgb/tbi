import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import ImageEditor from "./ImageEditor";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(file);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <>
      <input {...getInputProps()} />
      {image ? (
        <>
          <ImageEditor image={image} />
        </>
      ) : (
        <Box
          {...getRootProps()}
          w="full"
          maxW="500px"
          m="auto"
          h="300px"
          border="2px dashed gray"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={4}
          cursor="pointer"
          _hover={{ borderColor: "blue.500" }}
        >
          <Text color="gray.500">
            {isDragActive
              ? "Drop the image here..."
              : "Drag & drop an image or click to select"}
          </Text>
        </Box>
      )}
    </>
  );
};

export default ImageUpload;
