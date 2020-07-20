import React, { useContext, useState } from 'react';
import { ReactComponent as ReadmeLogoSVG } from '../assets/logo.svg';
import { ReactComponent as InfoSVG } from '../assets/info.svg';
import { ReactComponent as SunSVG } from '../assets/sun.svg';
import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import styled from 'styled-components';
import { ListContext } from '../contexts/ListContext';

import Modal from './Modal';

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

  /**
   * Modal
   */
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <HeaderWrap>
        <LogoWrap>
          <LogoIcon />
          <LogoText>Readme</LogoText>
        </LogoWrap>

        <Modal title='Modal title' showModal={showModal} closeModal={toggleModal}>
          This is the Modal content.
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

      <HeaderMessage>Currently you have {list?.length} items to read.</HeaderMessage>
    </>
  );
};
export default Header;
