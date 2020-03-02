/// <reference types="react" />
interface IChipLabelProps {
    children: string | JSX.Element | JSX.Element[];
    'data-cy'?: string;
}
declare const ChipLabel: ({ children, "data-cy": dataCy }: IChipLabelProps) => JSX.Element;
export default ChipLabel;
