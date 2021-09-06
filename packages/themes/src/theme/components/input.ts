export const input = {
  variants: {
    text: {
      default: [
        'form-input',
        'font-manrope',
        'font-light',
        'rounded-input',
        'border-input-base',
        'bg-input-base',
        'text-input-primary',
        'px-4',
        'block',
        'w-full',
        'min-w-min',
        'dark:bg-gray-800',
        'dark:text-white',
        'hover:border-input-hover',
        'focus:outline-none',
        'focus:border-input-focus',
        'disabled:cursor-not-allowed',
      ],
      error: {
        container: ['relative block'],
        label: ['text-red-600', 'min-w-max', 'mr-8'],
        input: [
          'form-input',
          'font-manrope',
          'font-light',
          'rounded-input',
          'border-input-red',
          'bg-input-base',
          'text-input-red',
          'pl-4',
          'pr-10',
          'w-full',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-white',
          'hover:border-input-hover',
          'focus:outline-none',
          'focus:border-transparent',
          'focus:ring-2',
          'focus:ring-input-error',
          'disabled:cursor-not-allowed',
        ],
        message: ['text-input-error'],
        icon: ['absolute', 'text-input-error', 'bg-transparent', 'h-5', 'w-5', 'right-3'],
      },
      loading: {
        container: ['relative block'],
        label: ['text-input-loading', 'min-w-max', 'mr-8'],
        input: [
          'form-input',
          'font-manrope',
          'font-light',
          'rounded-input',
          'border-input-loading',
          'bg-input-base',
          'text-input-base',
          'pl-4',
          'pr-10',
          'w-full',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-white',
          'hover:border-input-hover',
          'focus:outline-none',
          'focus:border-transparent',
          'focus:ring-2',
          'focus:ring-input-loading',
          'disabled:cursor-not-allowed',
        ],
        message: ['text-input-error'],
        icon: ['absolute', 'text-input-loading', 'bg-transparent', 'h-5', 'w-5', 'right-3', 'animate-spin'],
      },
      warning: {
        container: ['relative block'],
        label: ['text-input-warning', 'min-w-max', 'mr-8'],
        input: [
          'form-input',
          'font-manrope',
          'font-light',
          'rounded-input',
          'border-input-warning',
          'bg-input-base',
          'text-input-base',
          'pl-4',
          'pr-10',
          'w-full',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-white',
          'hover:border-input-hover',
          'focus:outline-none',
          'focus:border-transparent',
          'focus:ring-2',
          'focus:ring-input-warning',
          'disabled:cursor-not-allowed',
        ],
        message: ['text-input-error'],
        icon: ['absolute', 'text-input-warning', 'bg-transparent', 'h-5', 'w-5', 'right-3'],
      },
      success: {
        container: ['relative block'],
        label: ['text-input-success', 'min-w-max', 'mr-8'],
        input: [
          'form-input',
          'font-manrope',
          'font-light',
          'rounded-input',
          'border-input-success',
          'bg-input-base',
          'text-input-base',
          'pl-4',
          'pr-10',
          'w-full',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-white',
          'hover:border-input-hover',
          'focus:outline-none',
          'focus:border-transparent',
          'focus:ring-2',
          'focus:ring-input-success',
          'disabled:cursor-not-allowed',
        ],
        message: ['text-input-error'],
        icon: ['absolute', 'text-input-success', 'bg-transparent', 'h-5', 'w-5', 'right-3'],
      },
      label: {
        container: ['text-gray-700', 'mr-6', 'min-w-max'],
      },
      skeleton: {
        vertical: {
          container: ['animate-pulse'],
          label: ['mt-1', 'bg-gray-400', 'rounded-input', 'w-20', 'h-4'],
          input: ['mt-1', 'bg-gray-400', 'rounded-input', 'min-w-min', 'h-10'],
        },
        horizontal: {
          container: ['grid', 'grid-cols-3', 'gap-4', 'items-center', 'mt-1'],
          label: ['bg-gray-400', 'rounded-input', 'h-4', 'animate-pulse'],
          input: ['bg-gray-400', 'rounded-input', 'h-10', 'col-span-2', 'col-end-auto', 'animate-pulse'],
        },
      },
    },
  },
};