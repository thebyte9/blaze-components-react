export const modal = {
  variants: {
    default: {
      container: [
        'font-manrope',
        'font-light',
        'justify-center',
        'items-center',
        'flex',
        'overflow-x-hidden',
        'overflow-y-auto',
        'fixed',
        'inset-0',
        'z-50',
        'outline-none',
        'rounded-lg',
        'focus:outline-none',
      ],
      skeleton: {
        container: ['z-50', 'items-center', 'justify-center', 'inset-0', 'px-1', 'py-4', 'mt-28'],
      },
      header: {
        container: [
          'font-manrope',
          'font-bold',
          'flex',
          'items-start',
          'justify-between',
          'px-1',
          'py-4',
          'rounded',
          'rounded-lg',
          'm-1',
          'bg-modal-header',
          'text-modal-header',
        ],
        title: ['text-xl', 'font-normal', 'text-modal-header', 'px-3', 'leading-5', 'font-manrope'],
        button: ['ml-auto', 'bg-transparent', 'border-0', 'outline-none', 'focus:outline-none', 'pr-2'],
        skeleton: ['justify-between', 'h-16', 'bg-gray-400', 'rounded-t-lg'],
      },
      content: {
        container: ['font-manrope', 'font-medium', 'bg-modal-content'],
        skeleton: ['bg-gray-300', 'w-full', 'h-96'],
      },
      footer: {
        container: [
          'font-manrope',
          'font-medium',
          'bg-modal-footer',
          'border-t',
          'border-footer',
          'py-4',
          'pr-8',
          'flex',
          'justify-end',
          'space-x-4',
          'rounded',
          'rounded-lg',
        ],
        skeleton: ['w-full', 'h-16', 'bg-gray-400', 'border-0', 'rounded-b-lg'],
      },
    },
  },
};
