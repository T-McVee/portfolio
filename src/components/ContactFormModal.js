import ReactModal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderNone, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldFocusAfterRender={true}
        preventScroll={true}
        style={{
          overlay: {
            zIndex: 10,
            backgroundColor: '#d6d6d65f',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(1px)',
          },
          content: {
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            left: '5.5rem',
            right: '5.5rem',
            top: '8rem',
            bottom: '8rem',
          },
        }}
        testId={'modal'}
      >
        <FormWrapper>
          <ButtonClose onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </ButtonClose>
          <H1>Get in contact</H1>
          <Form onSubmit={handleSubmit}>
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
                placeholder="Your message"
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
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 3rem;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 11rem);
  margin: 2rem 5.5rem;
`;

const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.colorWhite};
  border: none;

  &:hover {
    cursor: pointer;
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
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};
`;

const Button = styled.button`
  font-size: 1.2rem;

  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorAccent1};
  padding: 1rem;
  border: none;
  border-radius: ${(props) => props.theme.radiusSmall};
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    outline: 1px solid black;
  }
`;
