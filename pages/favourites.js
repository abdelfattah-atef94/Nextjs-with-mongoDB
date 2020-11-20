// DB connect
import dbConnect from '../utils/dbConnect';

// Card Model
import CardModel from '../models/Card';

// Components
import Layout from '../components/Layout';
import Card from '../components/Card';

const FavouritesPage = ({ favourites }) => (
  <Layout title="Noon Favourites">
    <h1>Welcome to Favourites</h1>
    {
      !!favourites.length &&
      <Card cards={favourites} />
    }
    {
      favourites.length === 0 &&
      <h1>Sorry there is no favourite data in this time</h1>
    }
  </Layout>
)


export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const data = await CardModel.find({})
  return {
    props: {
      favourites: JSON.parse(JSON.stringify(data)).filter(card => card.is_favourite)
    }
  };
}

export default FavouritesPage
