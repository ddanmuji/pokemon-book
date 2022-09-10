import { FC, ReactNode } from 'react';
import * as styles from './detail.styles';

const { Container } = styles;

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DetailLayout;
