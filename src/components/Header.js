import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  marginBottom: '20px',
  backgroundColor: '#8aaacc',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  variant: 'dark',
};
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Logo style={{ width: '8rem', height: 'auto' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
