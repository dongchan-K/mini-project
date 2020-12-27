import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const StyledGlobal = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Ubuntu';
  }  
  
  html,body,h1,h2,h3,h4,h5,h6,dl,dt,dd,fieldset,button,p{
    margin: 0;
    padding: 0;
  }
  
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    border: 0;
    cursor: pointer;
    background-color: inherit;
    outline: none;
  }
`

const StyledWrapper = styled.div`
  width: 940px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient( 45deg, #847072, #d8b484 );
`

const StyledHeader = styled.header`
  position: relative;
  margin-bottom: 20px;
  text-align: center;
`

const StyledMybooks = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`

const StyledAddBookButton = styled.button`
  background-color: #370d00;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  width: 120px;
  height: 35px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`

const StyledLogOut = styled.button`
  background-color: #fff;
  color: #370d00;
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  height: 35px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
`

const StyledBookWrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 0 10px 20px 10px;
  width: 280px;
  height: 350px;
  text-align: center;
  background-color: #d7cbbd;
  padding: 10px;
  border-radius: 5px;
`

const StyledBookTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #5d353e;
  margin-bottom: 10px;
`

const StyledBookAuthor = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #847072;
  margin-bottom: 10px;
`

const StyledBookImage = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 15px;
  box-shadow: 8px 8px 2px #999;
`

const StyledBookMesseage = styled.p`
  font-size: 1.3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 30px;
`

const StyledCommonButton = styled.button`
  margin-right: 10px;
  padding: 5px;
`

export { StyledGlobal, StyledWrapper, StyledHeader, StyledMybooks, StyledAddBookButton, StyledLogOut, 
        StyledBookWrapper, StyledBookTitle, StyledBookAuthor, StyledBookImage, StyledBookMesseage,
        StyledCommonButton };