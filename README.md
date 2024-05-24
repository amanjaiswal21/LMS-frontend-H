#LMS Frontend

###Setup Instruction

1. Clone the project

```
     git clone https://github.com/amanjaiswal21/LMS-frontend-H.git
```

2.  Move into the directory

``` 
     cd lms-frontend-h
```

3. Install dependencies

```
    npm i
```

4. run the server

```  
    npm run dev

```



### Setup instructions for tailwind

[Tailwind official instructions doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
    npx tailwindcss init
```

3. Add file extension to tailwind config file in the content property

```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of `index.css` file

```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;

```


### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp


```