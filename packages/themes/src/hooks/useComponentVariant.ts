interface IUseVariantsProps {
  [key: string]: any;
  variants: string[];
  variant: string;
  component: string;
  element?: string;
}

export function useComponentVariant({ variants, variant, component, element = 'container' }: IUseVariantsProps): any {
  const result = variants[variant][component][element];
  if (Array.isArray(result)) {
    return result?.filter(Boolean).join(' ');
  } else {
    return result;
  }
}
