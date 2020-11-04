import { Nav, Title } from './style';
import { TITLE } from '../../constants';

export default function Header() {
    return (
        <Nav>
            <Title>{TITLE}</Title>
        </Nav>
    );
}
