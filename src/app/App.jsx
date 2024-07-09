import { useDispatch, useSelector } from 'react-redux';
import Form from '../features/components/Form';
import Header from '../common/components/Header';
import TodoList from '../features/components/TodoList';
import { add, remove, toggle, update, loadTodos } from '../features/redux/actions';
import { GlobalStyle, Container } from './style'


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
        dispatch(loadTodos())
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Form
                    onAddTodo       = { onAddTodo }
                />
                <TodoList
                    list            = { todoList }
                    onRemoveItem    = { onRemoveTodo }
                    onToggleItem    = { onToggleTodo }
                    onUpdateItem    = { onUpdateTodo }
                    onLoadTodos     = { onLoadTodos }
                />
            </Container>
        </>
    )
}
