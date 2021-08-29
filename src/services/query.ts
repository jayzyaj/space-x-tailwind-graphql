import { gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query pastLaunchesList($limit: Int!) {
    launchesPast(limit: $limit) {
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

export { EXCHANGE_RATES };
