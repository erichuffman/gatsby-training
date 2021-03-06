import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Heading from '../components/Heading';

const MovieTemplate = ({ data }) => {
  const { movie } = data;
  return (
    <Layout>
      <Hero
        title={movie.title}
        subtitle={movie.field_promo_sentence}
        rating={movie.rating}
        stars={movie.stars}
        image={movie.relationships.mainImage.localFile.childImageSharp.fluid}
        path={movie.path.alias}
      />
      <Details>{movie.body.value}</Details>
    </Layout>
  );
};

export default MovieTemplate;

// Remember the `slug` context variable we passed in in gatsby-node?
// That's the $slug we are querying with here!
export const query = graphql`
  query($slug: String!) {
    movie: nodeMovie(path: { alias: { eq: $slug } }) {
      ...MovieFragment
    }
  }
`;

MovieTemplate.propTypes = {};
