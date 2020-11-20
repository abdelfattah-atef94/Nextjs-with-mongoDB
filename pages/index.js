// DB connect
import dbConnect from '../utils/dbConnect';

// Card Model
import CardModel from '../models/Card';

// Components
import Layout from '../components/Layout';
import Card from '../components/Card';

const HomePage = ({ cards }) => {
  return (
    <Layout title="Noon Home">
      <h1>Welocme to Home</h1>
      <Card cards={cards} />
    </Layout>
  );
}


export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const data = await CardModel.find({})
  return {
    props: {
      cards: JSON.parse(JSON.stringify(data))
    }
  };
}

export default HomePage
