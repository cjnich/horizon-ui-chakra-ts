import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const SignInHeader = () => {
  const textColorSecondary = "gray.400";
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Box me="auto">
      <Heading color={textColor} fontSize="36px" mb="10px">
        Sign In
      </Heading>
      <Text
        mb="36px"
        ms="4px"
        color={textColorSecondary}
        fontWeight="400"
        fontSize="md"
      >
        Enter your email and password to sign in!
      </Text>
    </Box>
  );
};

export default SignInHeader;
