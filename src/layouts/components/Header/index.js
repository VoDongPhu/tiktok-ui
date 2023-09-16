import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faCircleQuestion,
  faGlobe,
  faKeyboard,
  faMoon,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import image from '~/assets/images';

import Button from '~/components/Button/Button';
import Menu from '~/components/Propper/Menu';
import ToggleButton from '~/components/ToggleButton/ToggleButton';
import { faBookmark, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from '~/components/Search/Search';
import config from '~/config';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback ',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shorcut',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    toggleButton: <ToggleButton />,
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@nguyenvana',
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: 'Favorites',
    to: '/@nguyenvana',
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: 'Get Coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/setting',
  },

  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];
const currentUser = true;
function Header() {
  const handleMenuChange = (item) => {
    console.log(item);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={image.logo} alt="TikTok"></img>
          </Link>
        </div>

        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button upload>
                <FontAwesomeIcon className={cx('upload')} icon={faPlus} />
                Upload
              </Button>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload>
                <FontAwesomeIcon className={cx('upload')} icon={faPlus} />
                Upload
              </Button>
              <Button primary to="/">
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onLy={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Nguyen Van A"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9080a6a0c285c4631594e331e843509.jpeg?x-expires=1689300000&x-signature=UBu%2BkhsuaJ48Qv2VDM6%2FJjKeVs4%3D"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              ></Image>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
