import { Provider } from 'react-redux';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';

import Counter from './Counter';
import reducer from './reducer';

import './App.css';

function App() {
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
        <div className="App">
            {
                <Provider store={store}>
                    <Counter />
                </Provider>
            }
        </div>
    );
}

export default App;
