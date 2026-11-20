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