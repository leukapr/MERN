import Categories from '../components/Categorie';
import { client } from '../../lib/client';

const CategoriesPage = ({ categories }) => {
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
};

export async function getStaticProps() {
  // Récupérez les données des catégories à l'aide de votre client Sanity.
  const query = `*[_type == "category"]`;
  const categories = await Client.fetch(query);

  return {
    props: {
      categories,
    },
  };
}

export default CategoriesPage;
