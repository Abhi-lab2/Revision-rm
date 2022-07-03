export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Hey",
      username: "Nrupul",
      userId: "1",
      parentId: null,
      timestamp: "Sun June 02 2022 18:15:45 GMT+0530",
    },
    {
      id: "2",
      body: "Hello",
      username: "Yogesh",
      userId: "2",
      parentId: null,
      timestamp: "Sun June 02 2022 18:15:45 GMT+0530",
    },
    {
      id: "3",
      body: "Wrote the test suites, waiting for approval?",
      username: "Denish",
      userId: "2",
      parentId: "1",
      timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
    },
    {
      id: "4",
      body: "looking forward for the demo!",
      username: "Shawon",
      userId: "2",
      parentId: "2",
      timestamp: "Sun Aug 02 2020 18:45:45 GMT+0530",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  // Every time use value comes here...
  return {
    id: Math.random().toString(36),
    body: text,
    parentId,
    userId: "1",
    username: "Megan",
    timestamp: new Date().toString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
