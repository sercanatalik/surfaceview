import * as React from "react";


export class LogoBig extends React.Component<{}, {}> {
    render() {
        const css = `
        * {
        box-sizing: border-box;
      }
      :root {
        --background-color: black;
        --text-color: hsl(0, 0%, 100%);
      }
      body {
        margin: 0;
      }
      .wrapper {
        display: grid;
        place-content: center;
        background-color: var(--background-color);
        min-height: 10vh;
        font-family: "Oswald", sans-serif;
        font-size: clamp(1.5rem, 1rem + 18vw, 3rem);
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-color);
      }
      
      .wrapper > div {
        grid-area: 1/1/-1/-1;
      }
      .top {
        clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);
      }
      .bottom {
        clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
        color: transparent;
        background: -webkit-linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background: linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background-clip: text;
        -webkit-background-clip: text;
        transform: translateX(-0.02em);
      } `
        return (
            <div>
                <style>
                    {css}
                </style>
                <div>
                <section className="wrapper">
         <div className="top">Surface View</div>
         <div className="bottom" aria-hidden="true">Surface View</div>
</section>   </div>  
            </div>  
        );
    }
}