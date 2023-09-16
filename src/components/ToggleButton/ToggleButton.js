import classNames from 'classnames/bind';
import styles from './ToggleButton.module.scss';

const cx = classNames.bind(styles);
function ToggleButton() {
  return (
    <label className={cx('switch')}>
      <input type="checkbox"></input>
      <span className={cx('slider')}></span>
    </label>
  );
}

export default ToggleButton;
