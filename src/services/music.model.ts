type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

type Attributes = {
  amount?: string;
  currency?: string;
  term?: string;
  label?: string;
  rel?: string;
  type?: string;
  href?: string;
  im_id?: string;
  scheme?: string;
};

type ContentType = {
  im_contentType?: {
    attributes: Attributes;
  };
  attributes?: Attributes;
};

type Link = {
  attributes: Attributes;
};

type ID = {
  label: string;
  attributes: Attributes;
};

type Category = {
  attributes: Attributes;
};

type ReleaseDate = {
  label: string;
  attributes: {
    label: string;
  };
};

export type MusicData = {
  "im:name": {
    label: string;
  };
  "im:image": Image[];
  "im:itemCount": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: Attributes;
  };
  "im:contentType": ContentType;
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: Link;
  id: ID;
  "im:artist": {
    label: string;
  };
  category: Category;
  "im:releaseDate": ReleaseDate;
};

export interface ITunesRssResponse {
  feed: {
    entry: MusicData[]
  }
}
