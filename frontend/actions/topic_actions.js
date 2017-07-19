import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_CURRENT_TOPIC = 'RECEIVE_CURRENT_TOPIC'
export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS'

//non-async
export const receiveTopic = currentTopic => ({
    type: RECEIVE_CURRENT_TOPIC,
    currentTopic
})

export const receiveTopics = topics => ({
    type: RECEIVE_ALL_TOPICS,
    topics
})

// async

export const fetchTopic = id => dispatch => (
    APIUtil.fetchTopic(id).then(topic => (
        dispatch(receiveTopic(user))
    ))
);

export const fetchAllTopics = () => dispatch => (
    APIUtil.fetchAllTopics().then(topics => (
        dispatch(receiveTopics(topics))
    ))
);