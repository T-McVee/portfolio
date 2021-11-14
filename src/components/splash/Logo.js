import styled from 'styled-components';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoBody>
        T-<span className="bold">McVee</span>
      </LogoBody>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const LogoBody = styled.div`
  font-size: 1.5rem;
`;
