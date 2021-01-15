import React from 'react';
import styled from 'styled-components';

const SignTemplateHeader = styled.h1`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 36px;
  letter-spacing: 2px;
`

const SignTemplateSection = styled.section`
  position: relative;
  min-height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const SignTemplateWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

const SignTemplate = ({ children }) => {
  return (
      <SignTemplateSection>
        <SignTemplateHeader>Traveler</SignTemplateHeader>
        <SignTemplateWrapper>
          {children}
        </SignTemplateWrapper>
      </SignTemplateSection>
  );
};

export default SignTemplate;