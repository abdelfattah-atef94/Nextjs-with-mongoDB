// Mocks
import cards from '../__mocks__/cards';

// Components
import Layout from '../components/Layout';
import Card from '../components/Card';

const HomePage = () => (
  <Layout title="Noon Home">
    <h1>Welocme to Home</h1>
    <Card cards={cards} />
  </Layout>
)

export default HomePage
