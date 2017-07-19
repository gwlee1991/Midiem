import { RECEIVE_CURRENT_TOPIC, RECEIVE_ALL_TOPICS} from '../actions/topic_actions';
import merge from 'lodash/merge';

const nullTopic = {};


const TopicReducer = (state = nullTopic, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_TOPICS:
            const topics = action.topics;
            return merge({}, state, topics)
        case RECEIVE_CURRENT_TOPIC:
            const topic = action.topic;
            return merge({}, state, {topic})
        default: 
            return state;
    }
}

export default TopicReducer;