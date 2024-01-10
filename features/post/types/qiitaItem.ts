/**
 * @see https://qiita.com/api/v2/docs#get-apiv2items
 */
type QiitaItem = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: QiitaGroup;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: QiitaTag[];
  title: string;
  updated_at: string;
  url: string;
  user: QiitaUser;
  page_views_count: number;
  team_membership: QiitaTeamMembership;
  organization_url_name: string;
  slide: boolean;
};

type QiitaGroup = {
  created_at: string;
  description: string;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
};

type QiitaTag = {
  name: string;
  versions: string[];
};

type QiitaUser = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
};

type QiitaTeamMembership = {
  name: string;
};

export { type QiitaItem };
