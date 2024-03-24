import React from "react";
import { FormLabel, Text, useColorModeValue } from "@chakra-ui/react";

const FormLabelComponent = (
    props: {
        textLabel: string;
    }
) => {
  const { textLabel } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  return (
    <React.Fragment>
      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >{textLabel}<Text color={brandStars}>*</Text>
      </FormLabel>
    </React.Fragment>
  );
};

export default FormLabelComponent;
