import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TopicReducer from './topic_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    topics: TopicReducer
});

export default rootReducer;