import { useDispatch, useSelector } from 'react-redux'
import { add, remove, toggle, update } from '../features/redux/slices/todoSlice'
import TodoList from '../features/components/TodoList'
import Form from '../features/components/Form'
import Header from '../common/components/Header'
import { Container, GlobalStyle } from './style'

export default function App() {
    const todoList = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (text) => {
        dispatch(add({text}))
    };

    const onRemoveTodo = (id) => {
        dispatch(remove({id}))
    };

    const onToggleTodo = (id) => {
        dispatch(toggle({id}))
    };

    const onUpdateTodo = (id, text) => {
        dispatch(update({id, text}))
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Form
                    onAddTodo    = { onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { onRemoveTodo }
                    onToggleItem = { onToggleTodo }
                    onUpdateItem = { onUpdateTodo}
                />
            </Container>
        </>
    )
}
