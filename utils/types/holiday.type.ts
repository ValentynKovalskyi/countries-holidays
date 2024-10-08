export type Holiday = {
    name: string;
    date: string;
    localName: string;
    fixed: boolean;
    global: boolean;
    launchYear?: string;
    counties?: string[];
    types: string[];
};
