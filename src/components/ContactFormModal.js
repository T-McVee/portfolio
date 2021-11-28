import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ContactFormModal = (props) => {
  const { showModal, handleCloseModal } = props;

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <FormWrapper>
          <button onClick={handleCloseModal}>Close</button>
          <H1>Get in contact</H1>
          <Form>
            <FormControl>
              <Label for="name">Your name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                required
              />
            </FormControl>
            <FormControl>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="iam@tmcvee.com"
                required
              />
            </FormControl>
            <FormControl>
              <Label for="message">Message:</Label>
              <TextArea name="message" id="message" required />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 11rem);
  margin: 2rem 5.5rem;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  font-family: Helvetica, Arial, sans-serif;
  padding: 1rem;
  margin-bottom: 1rem;
`;
