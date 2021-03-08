/// <reference types="react" />
interface IChipAvatarProps {
    children: JSX.Element | JSX.Element[];
    'data-testid'?: string;
}
declare const ChipAvatar: ({ children, "data-testid": dataCy }: IChipAvatarProps) => JSX.Element;
export default ChipAvatar;
