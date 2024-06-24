import PropTypes from 'prop-types';
import { Nav, Title } from './style';

export default function Header({ title }) {
    return (
        <Nav>
            <Title>{title}</Title>
        </Nav>
    );
}

Header.propTypes = {
    title: PropTypes.string
};
