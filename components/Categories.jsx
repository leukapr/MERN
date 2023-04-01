// pages/categories.js
import sanityClient from '../lib/client';
import React from 'react';

export async function getStaticProps() {
  const query = `*[_type == "category"]{
    image,
    title,
    slug,
    description,
    parent->{_id, title}
  }`;
  const categories = await sanityClient.fetch(query);

  return {
    props: {
      categories,
    },
    revalidate: 60, // Ajoutez un délai de régénération pour les pages statiques (en secondes).
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <div key={category.slug.current}>
          <img src={category.image.url} alt={category.title} />
          <h2>{category.title}</h2>
          <p>Slug: {category.slug.current}</p>
          {category.parent && <p>Parent: {category.parent.title}</p>}
        </div>
      ))}
    </div>
  );
}
