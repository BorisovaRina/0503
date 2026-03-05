function reducer(state = { items: [], count: 0 }, action) {
    switch(action.type) {
        case 'ADD':
            return {
                items: [...state.items, action.payload],
                count: state.count + 1
            };
            
        case 'REMOVE':
            return {
                items: state.items.filter(item => item.id !== action.payload),
                count: state.count - 1
            };
            
        case 'UPDATE':
            return {
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                ),
                count: state.count
            };
            
        case 'RESET':
            return { items: [], count: 0 };
            
        default:
            return state;
    }
}

console.log("Redux Reducer:");
let state = reducer(undefined, { type: '@@INIT' });
console.log("Начальное состояние:", state);

state = reducer(state, { type: 'ADD', payload: { id: 1, name: 'Item 1' } });
console.log("После ADD:", state);

state = reducer(state, { type: 'ADD', payload: { id: 2, name: 'Item 2' } });
console.log("После второго ADD:", state);

state = reducer(state, { type: 'REMOVE', payload: 1 });
console.log("После REMOVE:", state);
