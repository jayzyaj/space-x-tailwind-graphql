import { gql } from "@apollo/client";

const LAUNCH_LIST_QUERY = gql`
  query pastLaunchesList($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

const LAUNCH_DETAIL_QUERY = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

export { LAUNCH_LIST_QUERY, LAUNCH_DETAIL_QUERY };
