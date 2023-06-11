import { Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
    } from "@chakra-ui/react";

import { REGISTER } from "../lib/routes";
import {Link as RouterLink} from "react-router-dom";
import {useLogin} from "../hooks/auth"
import { useForm } from "react-hook-form";
import {emailValidate,passwordValidate} from "../utils/form-validate";
import { LOGINPAGE } from "../lib/routes";



export default function Login() {
    const {login, isLoading} = useLogin();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    async function handleLogin(data){
        console.log(data);
        const succeeded = await login({email : data.email, password: data.password,redirectTo:LOGINPAGE,});
    
        if (succeeded) reset();
    }
    console.log(errors);

    return (
    <Center w = "100% h = 100vh">
        <Box mx ="1" maxW = "md" p="9" borderRadius="lg" borderWidth="1px">
            <Heading mb = "4" size="lg" text-align="center">
                Log in
            </Heading>
            <form onSubmit={ handleSubmit(handleLogin)}>
                <FormControl isInvalid={errors.email} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="user@email.com"{...register('email', emailValidate)}/>
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    
                    
                </FormControl>
                <FormControl isInvalid={errors.password} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="password" placeholder="password1234"{...register('password', passwordValidate)}/>
                    <FormErrorMessage>{errors.password &&errors.password.message}</FormErrorMessage>
                    
                </FormControl>
                <Button mt="4" type="submit" colorScheme="teal" size="md" w="full" isLoading={isLoading}
                 loadingText="Logging in">Log in</Button>
            </form>
            <Text fontSize="xlg" aling="center" mt="6">Don't Have an account ?{" "}
                <Link as={RouterLink}
                to={REGISTER}
                color="teal.800"
                fontWeight="medium"
                textDecor="underline"
                _hover={{ background: "teal.100" }}>Register</Link>
            </Text>
        </Box>
    </Center>
    );
    
}
