import * as React from 'react'
import { headerProps as Props } from "../../../features/types";
import { Nav, Title } from './style';

export default function Header({ title }: Props) {
    return (
        <Nav>
            <Title>{title}</Title>
        </Nav>
    );
};
