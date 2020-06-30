import * as React from "react";
import styled from 'styled-components';

import { headerProps as Props } from "../../../features/types";

const Nav = styled.div`
    background-color: skyblue;
    padding: 15px;
`;

const Title = styled.div`
    text-align: center;
    color: #FFFF;
`;

const Header = ({ title }: Props) => {
    return (
        <Nav>
            <Title>{title}</Title>
        </Nav>
    );
};

export default Header;