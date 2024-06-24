import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle, StyledContainer } from './style'
import TodoList from '../features/components/TodoList';
import Form from '../features/components/Form';
import Header from '../common/components/Header';
import { add, remove, toggle, update, load } from '../features/redux/thunks';
import { TITLE, PLACEHOLDER } from '../common/constants';


export default function App() {
    const todoList = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(add(todo))
    };

    const onRemoveTodo = (id) => {
        dispatch(remove(id))
    };

    const onToggleTodo = (id) => {
        dispatch(toggle(id))
    };

    const onUpdateTodo = (id, todo) => {
        dispatch(update(id, todo))
    };

    const onLoadTodos = () => {
        dispatch(load())
    };

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <Header
                    title        = {TITLE}
                />
                <Form
                    placeholder  = {PLACEHOLDER}
                    onAddTodo    = { onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { onRemoveTodo }
                    onToggleItem = { onToggleTodo }
                    onUpdateItem = { onUpdateTodo }
                    onLoadTodos  = { onLoadTodos }
                />
            </StyledContainer>
        </>
    )
}

