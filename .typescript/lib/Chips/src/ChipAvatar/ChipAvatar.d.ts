/// <reference types="react" />
interface IChipAvatarProps {
    children: JSX.Element | JSX.Element[];
    'data-testid'?: string;
}
declare const ChipAvatar: ({ children, "data-testid": testId }: IChipAvatarProps) => JSX.Element;
export default ChipAvatar;
