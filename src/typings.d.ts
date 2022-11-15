declare module '*.scss';
declare module '*.png';
declare module '*.ico';
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'react-loadable';
