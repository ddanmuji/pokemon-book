import { FC, ReactNode } from 'react';
import S from './DetailLayout.styled';

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <S.Container>
      {children}
      <S.ImageWrapper>
        <S.Image src="/svg/pocketball.svg" />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default DetailLayout;
