import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Entire = styled.header`
  width: 100%;
  height: 5vh;
  padding: 1%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.accentBody};
  color: ${(props) => props.theme.text};
`;

const Title = styled.span`
  font-size: 20px;
`;

const Header = () => {
  return (
    <Entire>
      <Link to="/">
        <Title>헬로 번장</Title>
      </Link>
    </Entire>
  );
};

export default Header;
