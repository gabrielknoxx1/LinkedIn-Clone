import React, { useState, useEffect } from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';
import Menu from '../Menu';

const Header: React.FC = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(false);
  }, []);

  function handleShowMenu() {

    setDisplay(true);

    if(display === true) {
      setDisplay(false);

    };

  }

  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button onClick={handleShowMenu}>
              <ProfileCircle src="https://avatars2.githubusercontent.com/u/60486860?s=460&u=af5c9c6fbb320ffefe0c682040666790f240e482&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
              
            </button>
            {display === true && (
                <Menu />
              )}
          </nav>
        </div>
        
      </Wrapper>
    </Container>
  );
};

export default Header;
