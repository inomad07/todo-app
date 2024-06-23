import PropTypes from 'prop-types';
import { StyledNav, StyledTitle } from './style';

export default function Header({ title }) {
    return (
        <StyledNav>
            <StyledTitle>{title}</StyledTitle>
        </StyledNav>
    );
}

Header.propTypes = {
    title: PropTypes.string
};
