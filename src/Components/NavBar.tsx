import { HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch:(searchText:string)=>void;
}
const NavBar = ({onSearch}:NavBarProps) => {
  return (
    <HStack justifyContent='space-between' padding="10px">
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
    )
}

export default NavBar