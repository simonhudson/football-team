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
        border-top: ${rem(10)} solid ${palette.primary.brand};
        color: ${palette.bodyText};
        position: relative;
    }

    html::before {
        background-color: #F4EBD9;
        background-image:
            radial-gradient(#EC7114 1px, transparent 1px),
            radial-gradient(#EC7114 1px, #fff 1px);
        background-position: 0 0, 20px 20px;
        background-size: 40px 40px;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.25;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
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
