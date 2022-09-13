import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      username
      createdAt
      body
      likes {
        createdAt
        id
        username
      }
      comments {
        body
        createdAt
        id
      }
      likeCount
      commentCount
    }
  }
`;
const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      username
      createdAt
      body
      likes {
        createdAt
        id
        username
      }
      comments {
        body
        createdAt
        id
        username
      }
      likeCount
      commentCount
    }
  }
`;
const GET_MY_POSTS = gql`
  query GetMyPosts($username: String!) {
    getMyPosts(username: $username) {
      id
      username
      createdAt
      body
      likes {
        createdAt
        id
        username
      }
      comments {
        body
        createdAt
        id
      }
      likeCount
      commentCount
    }
  }
`;
export { GET_POSTS, GET_POST, GET_MY_POSTS };
