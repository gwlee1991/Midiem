export const fetchAllTopics = () => (
    $.ajax({
        method: "GET",
        url: "/api/topics"
    })
);

export const fetchTopic = id => (
    $.ajax({
        method: "GET",
        url: `/api/topics/${id}`
    })
);