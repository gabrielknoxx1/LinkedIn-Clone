import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars2.githubusercontent.com/u/60486860?s=460&u=af5c9c6fbb320ffefe0c682040666790f240e482&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Gabriel Sousa</h1>
        <h2>Desenvolvedor Front end - Ui Designer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">758</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">188</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
