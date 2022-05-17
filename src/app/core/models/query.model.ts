export interface SearchResult<Item> {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
}
