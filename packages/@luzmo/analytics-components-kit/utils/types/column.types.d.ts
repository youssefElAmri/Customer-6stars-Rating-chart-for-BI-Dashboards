export type HierarchyLevel = {
    id: string;
    color: string;
    level: number;
    name: Record<string, string>;
};
export type Currency = {
    id: string;
    name: string;
    symbol: string;
};
export type JoinType = {
    id: string;
    currency_id: string | null;
    securable_id: string;
    hierarchy_enabled?: boolean;
    join: {
        column_id: string;
        created_at: string;
        update_at: string;
        updated_at?: string;
        subtype?: string;
        type: 'lookup' | 'exact';
        joins_id: string;
    };
};
export type Column = {
    cardinality?: number;
    color: string;
    currency_id?: string;
    currency?: Currency;
    duration_format: 'long' | 'short' | 'time';
    duration_levels: number[];
    expression?: string;
    format: string;
    hierarchy_enabled: boolean;
    hierarchyLevels: HierarchyLevel[];
    highestLevel: number;
    id: string;
    informat?: string;
    isLabel?: boolean;
    joins: JoinType[];
    level?: number;
    lowestLevel: number;
    name: Record<string, string>;
    description?: Record<string, string>;
    order?: number;
    securable_id: string;
    source_name?: string;
    subtype: ColumnSubtype;
    type: ColumnType;
    version?: number;
    width?: number;
};
export type ColumnType = 'numeric' | 'hierarchy' | 'datetime' | 'spatial';
export type ColumnSubtype = 'duration' | 'currency' | 'coordinates' | 'hierarchy_element_expression' | 'topography';
