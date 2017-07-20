import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TopicReducer from './topic_reducer';
import PostReducer from './post_reducer';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    topics: TopicReducer,
    posts: PostsReducer,
    currentPost: PostReducer
});

export default rootReducer;