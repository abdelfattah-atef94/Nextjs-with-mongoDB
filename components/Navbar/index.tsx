import Link from 'next/link';
import { useRouter } from "next/router";
// icons
import {Home} from '@styled-icons/fa-solid/Home';
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';

// styles
import { TopHeader, HyperLink, Logo, BottomHeader } from './styles';

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const homeSelected = pathname === '/';
  const favouritesSelected = pathname === '/favourites';
  return (
    <>
      <TopHeader>
        <Logo>Noon</Logo>
        <div>
          <Link href='/'>
              <HyperLink isSelected={homeSelected}>Home</HyperLink>
          </Link>
          <Link href='/favourites'>
            <HyperLink isSelected={favouritesSelected}>Favourites</HyperLink>
          </Link>
        </div>
      </TopHeader>
      
      <BottomHeader>
          <Link href='/'>
              <HyperLink isSelected={homeSelected}>
                <Home size={30}/>
              </HyperLink>
          </Link>
          <Link href='/favourites'>
            <HyperLink isSelected={favouritesSelected}>
              <HeartFill size={30}/>
            </HyperLink>
          </Link>
      </BottomHeader>
    </>
  )
};

export default Navbar
