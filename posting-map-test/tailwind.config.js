import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        //inputの修正
        function ({ addComponents }) {
            addComponents({
                'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: '0',
                },
                'input[type="number"]': {
                    '-moz-appearance': 'textfield',
                },
                'input[type="number"]::-ms-clear': {
                    display: 'none',
                },
            });
        },
    ],
};
