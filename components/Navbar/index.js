import Link from 'next/link';

// icons
import {Home} from '@styled-icons/fa-solid/Home';
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';

// styles
import { TopHeader, HyperLink, Logo, BottomHeader } from './styles';

const Navbar = () => (
  <>
    <TopHeader>
      <Logo>Noon</Logo>
      <div>
        <Link href='/'>
            <HyperLink>Home</HyperLink>
        </Link>
        <Link href='/favourites'>
          <HyperLink>Favourites</HyperLink>
        </Link>
      </div>
    </TopHeader>
    
    <BottomHeader>
        <Link href='/'>
            <HyperLink>
              <Home size={30}/>
            </HyperLink>
        </Link>
        <Link href='/favourites'>
          <HyperLink>
            <HeartFill size={30}/>
          </HyperLink>
        </Link>
    </BottomHeader>
  </>
);

export default Navbar
