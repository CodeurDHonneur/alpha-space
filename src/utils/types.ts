export type News = {
    id:           number;
    title:        string;
    authors:      Author[];
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     string[];
    events:       string[];
}

export type Author = {
    name:    string;
    socials: null;
}


export type NewsResponse = {
    count: number;
    next:  string;
    previous: string;
    results: News[]
}

export type FiltersParams = {
  term?: string;
}

export type NewsResponseWithParams = {
    response : NewsResponse;
    params: FiltersParams
}

export type HubbleImage = {
    photo_id:          number;
    photo_title:       string;
    photo_description: string;
    photo_url_m:       PhotoURLM;
    photo_date_taken:  Date;
    photo_height:      number;
    photo_width:       number;
    photo_license:     string;
    album_id:          number;
    album_name_tags:   string;
    url:               string;
    tags:              string;
}

export type HubbleImagesResponse = {
    total_count: number;
    results: HubbleImage[]
}
export type PhotoURLM = {
    thumbnail:         boolean;
    filename:          string;
    format:            string;
    width:             number;
    mimetype:          string;
    id:                string;
    last_synchronized: string;
    height:            number;
    url:               string;
}