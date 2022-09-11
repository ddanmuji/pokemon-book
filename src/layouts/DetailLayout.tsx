import { FC, ReactNode } from 'react';
import S from './DetailLayout.styled';

interface DetailLayoutProps {
  children: ReactNode;
  isLoading: boolean;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children, isLoading }) => {
  return isLoading ? (
    <S.Loading src="/images/loading.gif" alt="loading..." />
  ) : (
    <S.Container>
      {children}
      <S.ImageWrapper>
        <S.Image src="/svg/pocketball.svg" />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default DetailLayout;
