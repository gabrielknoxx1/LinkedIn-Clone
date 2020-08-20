import styled from 'styled-components';


export const Container = styled.div`
  
  position: absolute;
  top: 56px;
  right: 24px;
  width: 100%;
  max-width: 300px;
  border: 1px solid var(--color-link);
  background-color: var(--color-background);

  display: flex;
  flex-direction: column;
`;

export const Listagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
 div {
   display: flex;
   align-items: center;
   width: 100%;
 
   strong {
    margin-left: 24px;
    font-size: 18px;
  }
 
 }
  
`;

export const ImgPerfil = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 8px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  > strong {
    margin-left: 16px;
  }

  > a {
    text-decoration: none;
    margin-left: 16px;
    margin-bottom: 8px;
    color: var(--color-ad-text);
  }
`;

export const Btn = styled.div`
  
    width: calc(100% - 32px);
    height: 32px;
    border: 1px solid var(--color-linkedin);
    text-align: center;
    font-weight: bold;
    margin-top: 16px;
    padding-top: 4px; 
    color: #0077b5;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
`;


export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-separator);
  margin: 16px 0 12px;
`;

export const ListLink = styled.a`
  text-decoration: none;
  color: var(--color-ad-text);
  margin-left: 16px;
  margin-top: 8px;


`;



