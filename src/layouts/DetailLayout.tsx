import { FC, ReactNode } from 'react';
import S from './Detail.styled';

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default DetailLayout;
