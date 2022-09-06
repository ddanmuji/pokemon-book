import { getImageUrl } from '@utils/index';
import * as styles from './pokemonList.styles';

const { Container, Index, Item, List, LoadingWrapper, Name } = styles;

const PokemonList = () => {
  return (
    <Container>
      <List>
        <Item>
          <img src={getImageUrl(1)} />
          <Name>test</Name>
          <Index>###01</Index>
        </Item>
      </List>
    </Container>
  );
};

export default PokemonList;
