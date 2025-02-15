import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper className="">
      <a href='/en/contact'>
      <button className="button">Book a Call</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

display: none; /* Hidden by default */

  @media (min-width: 768px) { /* Visible on md (>=768px) screens */
    display: inline-block;
  }
  .button {
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: #2c9caf;
    transition: all 1000ms;
    font-size: 10px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #2c9caf;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #70bdca;
    box-shadow: 4px 5px 17px -4px #268391;
    margin-left: 1em;
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #2c9caf;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }`;

export default Button;
