import React, { useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import styles from './styles.module.scss';

const GridItem = ({ title, path, image, children }) => {
  return (
    <div className={styles.gridItem} tabIndex={1}>
      <Image fluid={image} />

      <div className={styles.details}>
        <div className={styles.detailsInner}>
          <Link className={styles.title} to={path}>
            {title}
          </Link>
          <div>Stars</div>
          <div>Description</div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;

GridItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string
};