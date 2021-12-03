import ReactModal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { ContactForm } from './modal/ContactForm';

const root = document.getElementsByClassName('App');
ReactModal.setAppElement(root);

export const Modal = (props) => {
  const {
    showModal,
    handleFormChange,
    handleFormSubmit,
    isSubmited,
    formInfo,
    handleCloseModal,
  } = props;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // for testing
  useEffect(() => {
    console.log(isSubmited);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  const postSubmitStyles = () => {
    if (!isSubmited) return isDesktop ? '5rem' : '4rem';
    return isDesktop ? '16rem' : '6rem';
  };

  const ModalStyles = {
    overlay: {
      zIndex: 10,
      backgroundColor: '#d6d6d65f',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(1px)',
    },
    content: {
      border: 'none',
      maxHeight: '768px',
      borderRadius: '8px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      left: isDesktop ? '5.5rem' : '1rem',
      right: isDesktop ? '5.5rem' : '1rem',
      top: postSubmitStyles(),
      bottom: postSubmitStyles(),
    },
  };

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldFocusAfterRender={true}
        preventScroll={true}
        style={ModalStyles}
        testId={'modal'}
      >
        <FormWrapper>
          <ButtonClose onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </ButtonClose>
          <H1>{isSubmited ? 'Cheers!' : 'Get in contact'}</H1>
          {isSubmited ? (
            <Message>
              <Emoji>🍻</Emoji>
              <P>Your request has been received.</P>
              <P>We'll contact you shortly.</P>
              <Button onClick={handleCloseModal}>Close</Button>
            </Message>
          ) : (
            <ContactForm
              formInfo={formInfo}
              handleFormChange={handleFormChange}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </FormWrapper>
      </ReactModal>
    </div>
  );
};

const H1 = styled.h1`
  font-size: 3rem;
  width: 100%;
  margin-bottom: 2rem;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 2.5rem;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 11rem);
  margin: 2rem 5.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    margin: 1rem 1rem;
    width: calc(100% - 2rem);
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  transition: color ${(props) => props.theme.time},
    transform ${(props) => props.theme.time};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colorAccent1};
    transform: scale(1.1);
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const Emoji = styled.span`
  font-size: 4rem;
  margin-left: 0.5rem;
`;

const Button = styled.button`
  font-size: 1.2rem;

  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorAccent1};
  padding: 1rem;
  border: none;
  border-radius: ${(props) => props.theme.radiusSmall};
  margin-top: 0.5rem;

  &:hover {
    cursor: pointer;
    outline: 1px solid black;
  }
`;
