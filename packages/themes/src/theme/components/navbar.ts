export const navbar = {
  variants: {
    default: {
      desktop: {
        container: ['hidden', 'md:flex', 'items-center', 'space-x-8'],
        menuItem: [
          'font-manrope',
          'py-5',
          'px-3',
          'text-gray-400',
          'transition',
          'duration-300',
          'hover:text-yellow-400',
          'hover:cursor-pointer',
          'cursor-pointer',
        ],
        icon: [
          'py-2',
          'px-2',
          'hover:bg-gray-100',
          'text-yellow-400',
          'rounded-full',
          'transition',
          'duration-300',
          'cursor-pointer',
        ],
        skeleton: {
          container: ['z-50', 'items-center', 'justify-center', 'inset-0', 'px-1', 'py-4', 'mt-28'],
        },
      },
      mobile: {
        container: ['hidden', 'md:hidden'],
        menuItem: ['font-manrope', 'block', 'py-2', 'px-4', 'text-sm', 'hover:bg-gray-200', 'cursor-pointer'],
        skeleton: {
          container: ['z-50', 'items-center', 'justify-center', 'inset-0', 'px-1', 'py-4', 'mt-28'],
        },
      },
    },
  },
};
