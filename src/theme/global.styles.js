import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import { font, palette } from '~/theme';

const GlobalStyles = createGlobalStyle`
    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: ${font.serif};
        font-size: ${font.size};
        font-weight: ${font.weight};
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        height: 100%;
    }

    html {
        color: ${palette.bodyText};
        position: relative;
    }

    ul, ol, dl {
        padding: 0;
    }

    .no-scroll {
        overflow: hidden;
    }

    p {
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }

    span, strong, em {
        font-family: inherit;
        font-size: inherit;
    }

    strong {
        font-weight: 600;
    }

    .no-js-alert {
        display: block;
    }

    fieldset {
        border: 0;
        padding: 0;
    }

    details summary::marker {
        display: none;
    }
    
`;

export { GlobalStyles };
