/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'principal': ['Oswald', 'sans-serif'],
        'secondary': ['Kanit', 'sans-serif']
      },
      colors: {
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Bright-Red-Ligth": "hsl(12, 98%, 95%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
        "Very-Dark-Blue": "hsl(228, 20%, 15%)",
        "Dark-Grayish-Blue": "hsl(228, 39%, 70%)"
      },
      backgroundImage: {
        "logo-1": "url('../images/logo.webp')",
        "logo-2": "url('../images/logo2.webp')",
        "close-menu": "url('../images/bars.svg')",
        "open-menu": "url('../images/bars.svg')",
        "cross": "url('../images/cross.svg')",
        "html-1": "url('../images/HTML.svg')",
        "css-1": "url('../images/CSS.svg')",
        "js-1": "url('../images/JS.svg')",
        "typescript-1": "url('../images/Typescript.svg')",
        "react-1": "url('../images/React.svg')",
        "nodejs-1": "url('../images/Node.js.svg')",
        "jquery-1": "url('../images/Jquery.svg')",
        "redux-1": "url('../images/Redux.svg')",
        "nextjs-1": "url('../images/Next.js.svg')",
        "svelte-1": "url('../images/Svelte.svg')",
        "bootstrap-1": "url('../images/Bootstrap.svg')",
        "tailwind-1": "url('../images/Tailwind_CSS.svg')",
        "sass-1": "url('../images/Sass.svg')",
        "mysql-1": "url('../images/MySQL.svg')",
        "mongodb-1": "url('../images/MongoDB.svg')",
        "docker-1": "url('../images/Docker.svg')",
        "dart-1": "url('../images/Dart.svg')",
        "flutter-1": "url('../images/Flutter.svg')",
        "flame-1": "url('../images/Flame.webp')",
        "firebase-1": "url('../images/Firebase.svg')",
        "astro-1": "url('../images/Astro.svg')",
        "net-1": "url('../images/Net.svg')",
        "netcore-1": "url('../images/NetCore.svg')",
        "csharp-1": "url('../images/CSharp.svg')",
        "blazor-1": "url('../images/Blazor.svg')"
      },
      keyframes: {
        bouncex: {
            "0%, 100%": { transform: "none", animation_timing_function: "cubic-bezier(0.8,0,1,1)"},
            "4%": { transform: "translateX(15%)", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "8%": { transform: "none", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "12%": { transform: "translateX(15%)", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "16%, 96%": { transform: "none", animation_timing_function: "cubic-bezier(0,0,0.2,1)"}
        },
        bouncex2: {
            "0%, 100%": { transform: "none", animation_timing_function: "cubic-bezier(0.8,0,1,1)" },
            "4%": { transform: "translateX(-15%)", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "8%": { transform: "none", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "12%": { transform: "translateX(-15%)", animation_timing_function: "cubic-bezier(0,0,0.2,1)"},
            "16%, 96%": { transform: "none", animation_timing_function: "cubic-bezier(0,0,0.2,1)"}
        },
        spinx: {
          "to": { transform: "rotateY(360deg)"}
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        swing: {
            "15%": { transform: "translateX(5px)" },
            "30%": { transform: "translateX(-5px)" },
            "50%": { transform: "translateX(3px)" },
            "80%": { transform: "translateX(2px)" },
            "100%": { transform: "translateX(0)" },
          },
  
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        bouncex: "bouncex 2s infinite",
        bouncex2: "bouncex2 2s infinite",
        spinx: "swing 0.8s linear"
      }
    },
  },
  plugins: [],
}

