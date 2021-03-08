/// <reference types="react" />
interface IChipLabelProps {
    children: string | JSX.Element | JSX.Element[];
    'data-testid'?: string;
}
declare const ChipLabel: ({ children, "data-testid": testId }: IChipLabelProps) => JSX.Element;
export default ChipLabel;
