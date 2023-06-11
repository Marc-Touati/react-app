import { Flex} from "@chakra-ui/react";
import { LOGINPAGE } from "../lib/routes";
import { Link, Link as RouterLink } from "react-router-dom";
import { useLogout } from "../hooks/auth";
import { Button } from "@chakra-ui/react";



export default function Navbar() {

  const {logout, isLoading} = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
      
        <Link color="teal" as={RouterLink} to={LOGINPAGE} fontWeight="bold">
            Home
        </Link> 
        <Button ml="auto" colorScheme= "teal" size="sm" onClick= {logout} isLoading= {isLoading}>
            Logout
            
        </Button> 
        
          
      </Flex>
    </Flex>
  );
}