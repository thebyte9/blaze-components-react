/// <reference types="react" />
interface IMultiLevelMenuListItemProps {
    children: string | JSX.Element | JSX.Element[];
    to?: number;
    handleClickMenu?: (to: number | undefined) => {};
}
declare const MultiLevelMenuListItem: ({ children, to, handleClickMenu }: IMultiLevelMenuListItemProps) => JSX.Element;
export default MultiLevelMenuListItem;
