/// <reference types="react" />
interface IChipAvatarProps {
    children: JSX.Element | JSX.Element[];
    'data-cy'?: string;
}
declare const ChipAvatar: ({ children, "data-cy": dataCy }: IChipAvatarProps) => JSX.Element;
export default ChipAvatar;
