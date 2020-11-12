import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To BackWithLove',
  description: 'We sell the best delicious bakery',
  keywords: 'pastries, bakery, daily delicious bakery, online delivery bakery',
};

export default Meta;
