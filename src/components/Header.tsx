import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from '@nextui-org/react';
import { cdpUrl } from '../constants/cdpenv';

const Header: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="\Sitecore_2022_Logo_RGB.svg"
          alt="Logo"
          width="150"
          height="100"
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href={cdpUrl} variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
