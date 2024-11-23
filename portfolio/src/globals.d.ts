declare module '*.svg' {
    import React = require('react')
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const content: string;
    export default content;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
}
declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
}
declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';