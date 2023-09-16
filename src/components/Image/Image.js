import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import image from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallback, ...props }, ref) => {
  const [_fallback, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(fallback ? fallback : image.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={src || _fallback}
      alt={alt}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
});
Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
