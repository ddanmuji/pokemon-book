import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  top: 0;
  left: 0;
  opacity: 0.8;
  transform: translate(-95px, -90px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default { Container, ImageWrapper, Image };
