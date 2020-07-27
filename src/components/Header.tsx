import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';
import Modal from './Modal';
import { ReactComponent as ReadmeLogoSVG } from '../assets/logo.svg';
import { ReactComponent as InfoSVG } from '../assets/info.svg';
import { ReactComponent as SunSVG } from '../assets/sun.svg';
import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;

const LogoIcon = styled(ReadmeLogoSVG)`
  stroke: ${(props) => props.theme.baseUI};
  width: 2rem;
  height: 2rem;
  margin-right: 0.25rem;
  backface-visibility: hidden;
  overflow: hidden;
  vertical-align: middle;
`;

const LogoText = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const HeaderIcons = styled.div`
  display: flex;
`;

const InfoIcon = styled(InfoSVG)`
  stroke: ${(props) => props.theme.baseUI};
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  backface-visibility: hidden;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
`;

const SunIcon = styled(SunSVG)`
  fill: ${(props) => props.theme.baseUI};
  width: 2rem;
  height: 2rem;
  backface-visibility: hidden;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
`;

const MoonIcon = styled(MoonSVG)`
  fill: ${(props) => props.theme.baseUI};
  width: 2rem;
  height: 2rem;
  backface-visibility: hidden;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
`;

const HeaderMessage = styled.h3`
  font-size: 1.25rem;
  text-align: center;
`;

const Header = (props: { isDarkMode: boolean; onClick: () => void }) => {
  const { list } = useContext(ListContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <HeaderWrap>
        <LogoWrap>
          <LogoIcon />
          <LogoText>Readme</LogoText>
        </LogoWrap>

        <Modal title='Readme' showModal={showModal} closeModal={toggleModal}>
          <p>
            Readme is a simple list that holds the pages that you haven't read yet, but you would
            like to at some point in the future.
          </p>
          <p>
            Your Readme list is stored in your browser's localStorage, so you won't lose your items,
            just visit https://readme-app.netlify.app to see your Readme list.
          </p>
          <p>
            Reorder your items by simply dragging and dropping them into the correct place. Once you
            have read an item, simply delete it from your list.
          </p>
          <p>
            Readme has two options for themes: Light Mode and Dark Mode. You can change your theme
            anytime to customise Readme to your liking.
          </p>
          <p>Add a title and link to start your Readme list.</p>
        </Modal>

        <HeaderIcons>
          <InfoIcon onClick={toggleModal} />

          {props.isDarkMode ? (
            <SunIcon onClick={props.onClick} />
          ) : (
            <MoonIcon onClick={props.onClick} />
          )}
        </HeaderIcons>
      </HeaderWrap>

      <HeaderMessage>
        Currently you have {list?.length} {list?.length !== 1 ? 'items' : 'item'} to read.
      </HeaderMessage>
    </>
  );
};
export default Header;
