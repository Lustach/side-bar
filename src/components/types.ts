import { ReactElement, ReactPortal } from 'react';

// Your type definitions here
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = object | ReactNodeArray;
export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type Position = 'right' | 'left'
