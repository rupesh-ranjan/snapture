export interface ICategory {
    type: string[];
    onClick: (event: React.MouseEvent<HTMLUListElement>) => void;
}
