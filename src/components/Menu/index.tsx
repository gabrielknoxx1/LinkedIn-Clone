import React, { useState } from 'react';

import { Container, Btn, Separator, Profile , ImgPerfil, Listagem, ListItem, ListLink } from './styles';

const Menu: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(false);


  
  return (
    <Container>
      <Listagem>
        <Profile>
         <div>
          <ImgPerfil 
            src="https://avatars2.githubusercontent.com/u/60486860?s=460&u=af5c9c6fbb320ffefe0c682040666790f240e482&v=4" 
            alt="Perfil"
          />
          <strong> Gabriel Sousa</strong>
         </div>
          <ListItem>
            <p>Desenvolvedor React - Ui Design</p>     
            <Btn>Visualizar Perfil</Btn>
          </ListItem>
        </Profile>
        
        <Separator />
        
        <ListItem>
          <strong>Conta</strong>
          <Separator />
          <ListLink href="config">Configurações e privacidade</ListLink>
          <ListLink href="help">Ajuda</ListLink>
          <ListLink href="ling">Idioma</ListLink>
        </ListItem>

        <Separator />
        
        <ListItem>
          <strong>Gerenciar</strong>
          <Separator />
        
          <ListLink href="manage">Publicações e atividades</ListLink>
          <ListLink href="vaga">Conta de anuncio de vaga</ListLink>
        </ListItem>
        
        <Separator />

        <ListItem>
          <a href="sair">Sair</a>
        </ListItem>
        
          </Listagem>
    </Container>
  
    );
}

export default Menu;