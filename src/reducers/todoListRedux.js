// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    SELECT: "SELECT",
    EDIT: "EDIT"
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    add: item => {
        return { type: types.ADD, payload: item };
    },
    remove: index => {
        return { type: types.REMOVE, payload: index };
    },
    select: index => {
        return { type: types.SELECT, payload: index };
    },
    edit: index => {
        return { type: types.EDIT, payload: index};
    }
};

// Initial state of the store
const initialState = {
    todos: [
        [
            "Click to remove",
            false
        ],
        [
            "Learn React",
            false
        ],
        [
            "Write Code",
            false
        ],
        [
            "Ship App",
            false
        ]

        //{
        //    id: 1,
        //    text: 'Hello World!',
        //    done: false
        //},
        //{
        //    id: 1,
        //    text: 'Hello World!',
        //    done: false
        //},
        //{
        //    id: 1,
        //    text: 'Hello World!',
        //    done: false
        //},
    ]


};


// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos]
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload)
            };
        }
        case types.SELECT: {
            return {
                ...state,

            };
        }
        case types.EDIT: {
            return {

            };
        }
    }

    return state;
};
