{ currentUser:
  { id: 1,
    username: "username",
    image_url:"",
  },
  errors: [],
  posts: {
    1: {
      id: 1,
      title: "Debate on which champ is better",  
      image_url: "",
      topic_id: 1,
      author: {
        username: "",
        image_url: ""
        }
      },
    2: {
      id: 2,
      title: "Is anything worth trying?",
      image_url: "",
      topic_id: 1,
      author: {
        username: "",
        image_url: ""
        }
      }
    },
  post: {
    id: 1,
    title: "",
    body: "",
    image_url: "",
    topic_id: 1,
    author {
      username: "",
      image_url: "",
      },
    comments:
    { 1: {
      id: 1,
      body: "Vayne",
      author: {
        name: "",
        image_url: ""
        }
      },
      2: {
        id: 2,
        body: "Coding",
        author: {
          name: "",
          image_url: ""
          }
        }
      }
    },
  topics: {
    1: {
      id: 1,
      title: "League"
    },
    2: {
      id: 2,
      title: "Overwatch"
    }
  }
}
