import { useState } from "react";
import { ChakraProvider, Box, Input, Button, Text } from "@chakra-ui/react";

function App() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            mb={4}
          />
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
        {submitted && (
          <Text mt={4}>You entered: {submitted}</Text>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;