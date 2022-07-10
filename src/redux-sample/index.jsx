import { store } from './app';
import ReduxSample from './app'
import { Provider } from "react-redux";

export default function ConRedx() {
    return (
        <Provider store={store}>
            <ReduxSample />
        </Provider>
    )
}