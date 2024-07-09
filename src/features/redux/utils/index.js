// Function to generate the next ID based on the current state
export const generateId = (state) => {
    const maxId = state.reduce((max, todo) => Math.max(max, todo.id), 0);
    return maxId + 1;
};

