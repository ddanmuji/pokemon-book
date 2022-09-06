import PokemonList from '@components/PokemonList';
import AppLayout from '@layouts/AppLayout';

const HomePage = () => {
  return (
    <AppLayout>
      <PokemonList />
    </AppLayout>
  );
};

export default HomePage;
