import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import mypic1 from '../img/img1.jpg';
import mypic2 from '../img/img2.jpg';

const SignFormWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const SignImageWrpper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  transition: 3s;
  ${props => 
    props.pos === 'register' &&
    css`
    left: 50%;
    `}
`;

const SignImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SignWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 3s;
  ${props => 
    props.pos === 'register' && 
    css`
    left: -50%;
    `}
`

const SignHeader = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
`

const SignInput = styled.input`
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f1f1f1;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
`

const SignButton = styled.button`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  margin: 8px 0;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
`

const SignText = styled.p`
  position: relative;
  margin-top: 20px;
  color: #555;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const typeMapping = {
  login: {
    headingText: 'Sign In',
    colorText: '#3ae067',
    signImg: `${mypic2}`,
    
  } ,
  register: {
    headingText: 'Sign Up',
    colorText: '#4bdbeb',
    signImg: `${mypic1}`, 
  }
}

const SignForm = ({ type }) => {
  const typeHeading = typeMapping[type].headingText;
  const typeImage = typeMapping[type].signImg;
  const typeColor = typeMapping[type].colorText;

  return (
    <SignFormWrapper>
      <SignImageWrpper pos={type} >
        <SignImage src={typeImage} alt='#' />
      </SignImageWrpper>
      <SignWrapper pos={type} >
        <form>
        <SignHeader>{typeHeading}</SignHeader>
        {type === 'login' ? (
          <SignInput type="text" placeholder="Id" />
        ) : (
          <SignInput type="text" placeholder="Create Id" />
        )}
        

        {type === 'login' ? (
          <SignInput type="password" placeholder="Password" />
        ) : (
          <SignInput type="password" placeholder="Create Password" />
        )}
        

        {type === 'register' &&
          <SignInput type="password" placeholder="Confirm Password" />
        }
        {type === 'register' && 
          <SignInput type="password" placeholder="Create Nickname" />
        }

        <SignButton style={{background: `${typeColor}`}}>{typeHeading}</SignButton>

        {type === 'login' ? (
        <SignText>DON'T HAVE AN ACCOUNT? 
          <Link to="/register" style={{fontWeight: '600', textDecoration: 'none', color: '#3ae067'}} > Sign Up</Link>
        </SignText> 
        ) : (
        <SignText>ALREADY HAVE AN ACCOUNT? 
          <Link to="/login" style={{fontWeight: '600', textDecoration: 'none', color: '#4bdbeb'}} > Sign In</Link>
        </SignText> 
        )
        }
        </form>
      </SignWrapper>
    </SignFormWrapper>
  );
};

export default SignForm;