import styled from 'styled-components';
import MainImg from '../assets/헬로번장.svg';

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  padding: 1rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const MainImgSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: calc(3rem + 1.5vh);
`;

const MainImage = styled.img`
  width: calc(40rem + 2vh);
`;

const MainDescription = styled.div`
  text-align: center;
  line-height: 1.4;
  font-size: calc(1rem + 1.2vh);

  span:nth-of-type(1) {
    color: blue;
  }
  span:nth-of-type(2) {
    color: red;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <MainImgSection>
        <MainImage src={MainImg} alt="Main Image" />
      </MainImgSection>
      <MainDescription>
        조던... 응모해봤자 매번 떨어지시죠? 리셀하려하니 주머니 사정이 감당이
        안되시고. <br /> 중고로 사려니 여러 플랫폼 옮겨다니며 찾기도 귀찮으시고.{' '}
        <br /> 중고 명품의 투탑! <span>헬로마켓</span> 과 <span>번개장터</span>
        에서 대신 최저가를 찾아드리겠습니다
      </MainDescription>
    </Container>
  );
};

export default MainPage;
