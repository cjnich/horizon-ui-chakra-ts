import React, { useContext } from "react";
import {
  Button,
  Flex,
  FormControl,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/img/auth/bg.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { GlobalStateContext } from "contexts/Global";
import FormLabelComponent from "components/FormBuilder/FormLabel";
import FormInputComponent from "components/FormBuilder/FormInput";
import SignInHeader from "./SignInHeader";
import { Formik, Form } from "formik";


const SignIn = () => {
  const textColorSecondary = "gray.400";

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isMockAuthenticated, setIsMockAuthenticated } = useContext(GlobalStateContext);

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <SignInHeader />
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors: any = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                setIsMockAuthenticated(true);
                console.log("hrere", isMockAuthenticated);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabelComponent textLabel="Email" />
                <FormInputComponent
                  isRequired={true}
                  type="email"
                  name="email"
                  placeholder="mail@simmmple.com"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <FormLabelComponent textLabel="Password" />
                <InputGroup size="md">
                  <FormInputComponent
                    isRequired={true}
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Min. 8 characters"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <InputRightElement
                    display="flex"
                    alignItems="center"
                    mt="4px"
                  >
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                    />
                  </InputRightElement>
                </InputGroup>

                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type={"submit"}
                >
                  Sign In
                </Button>
              </FormControl>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
};

export default SignIn;
