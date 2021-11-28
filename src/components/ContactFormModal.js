import ReactModal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const root = document.getElementsByClassName('App');

ReactModal.setAppElement(root);

export const ContactFormModal = (props) => {
  const {
    showModal,
    handleFormChange,
    handleSubmit,
    name,
    email,
    message,
    handleCloseModal,
  } = props;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
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
      maxHeight: '672px',
      borderRadius: '8px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      left: isDesktop ? '5.5rem' : '1rem',
      right: isDesktop ? '5.5rem' : '1rem',
      top: isDesktop ? '8rem' : '4rem',
      bottom: isDesktop ? '8rem' : '4rem',
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
        // className="modal-content"
        // overlayClassName="modal-overlay"
        style={ModalStyles}
        testId={'modal'}
      >
        <FormWrapper>
          <ButtonClose onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </ButtonClose>
          <H1>Get in contact</H1>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormControl>
              <Label htmlFor="name">Your name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                value={name}
                onChange={handleFormChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="iam@tmcvee.com"
                value={email}
                onChange={handleFormChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="message">Message:</Label>
              <TextArea
                name="message"
                id="message"
                value={message}
                placeholder="Your message..."
                onChange={handleFormChange}
                required
              />
            </FormControl>
            <FormControl>
              <Button>Contact</Button>
            </FormControl>
          </Form>
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

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.colorAccent1};
  }
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  height: 8rem;
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  // border-bottom: 1px solid ${(props) => props.theme.colorBlack};
  border-radius: ${(props) => props.theme.radiusSmall};
  background-color: ${(props) => props.theme.colorLightGrey};
  padding: 0.5rem;
  resize: none;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colorAccent1};
  }
`;

const Button = styled.button`
  font-size: 1.2rem;

  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorAccent1};
  padding: 1rem;
  border: none;
  border-radius: ${(props) => props.theme.radiusSmall};

  &:hover {
    cursor: pointer;
    outline: 1px solid black;
  }
`;
