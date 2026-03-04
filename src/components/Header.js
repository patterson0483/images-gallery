import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  marginBottom: '20px',
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  variant: 'dark',
};
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
