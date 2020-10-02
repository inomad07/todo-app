import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: skyblue;
    padding: 15px;
`;

const Title = styled.div`
    text-align: center;
    color: #FFFF;
`;

const Header = ({ title }) => {
    return (
        <Nav>
            <Title>{ title }</Title>
        </Nav>
    );
};

Header.propTypes = {
    children: PropTypes.string
};

export default Header;