import { connect, useSelector, useDispatch } from 'react-redux';

import { dec, inc, rnd } from './actions';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    // const { dispatch, subscribe, getState } = store;

    // const { inc, dec, rnd } = actions;

    // const { dec, inc, rnd } = bindActionCreators(actions, dispatch);

    // console.log(inc, counter);

    // subscribe(() => {
    //     document.querySelector('#counter').innerHTML = getState().value;
    // });
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">
                DEC
            </button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">
                INC
            </button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return { counter: state.value };
// };

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, actions)(Counter);

export default Counter;
