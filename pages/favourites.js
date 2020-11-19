// Mocks
import cards from '../__mocks__/cards';

// Components
import Layout from '../components/Layout';
import Card from '../components/Card';

const FavouritesPage = () => (
  <Layout title="Noon Favourites">
    <h1>Welcome to Favourites</h1>
    <Card cards={cards} />
  </Layout>
)

export default FavouritesPage
