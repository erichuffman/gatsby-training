import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { childrenType } from '../../global/js/customPropTypes';
import styles from './styles.module.scss';

const Heading = ({
  classes,
  text,
  level,
  styleLevel = level,
  primary,
  secondary,
  uppercase,
  children
}) => {
  const Element = `h${level}`;
  return (
    <Element
      className={classnames(styles.heading, styles[`level${styleLevel}`], {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.uppercase]: uppercase,
        [`${classes}`]: classes
      })}
    >
      {text || children}
    </Element>
  );
};

Heading.propTypes = {
  /** Tag level. Defaults to 2 */
  level: PropTypes.number,
  styleLevel: PropTypes.number,
  /** External classes. */
  classes: PropTypes.string,
  /** Content of title. */
  text: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  uppercase: PropTypes.bool,
  children: childrenType
};

Heading.defaultProps = {
  level: 2,
  primary: true
};

export default Heading;
