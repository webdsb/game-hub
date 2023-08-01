import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px">
        <Image src={logo} boxSize='60px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
    )
}

export default NavBar