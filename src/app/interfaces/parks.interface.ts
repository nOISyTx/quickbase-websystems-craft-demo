export interface Park {
    title: string;
    link: string;
    linkText: string;
    body: string;
    image: string;
    category: string;
}

export interface ParksData {
    parks: Park[];
}
