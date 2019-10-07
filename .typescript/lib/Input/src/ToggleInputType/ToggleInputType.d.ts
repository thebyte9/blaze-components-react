/// <reference types="react" />
interface IToggleInputTypeProps {
    type: string | undefined;
    toggleType: (newType: string) => void;
}
declare const ToggleInputType: ({ type, toggleType }: IToggleInputTypeProps) => JSX.Element;
export default ToggleInputType;
