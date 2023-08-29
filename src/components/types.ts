import { CSSProperties } from 'react';

export type Position = 'right' | 'left'
export interface SidebarProps {
    isOpen: boolean
    position: Position
    style?: CSSProperties
    className?: CSSProperties
    dataKey?: string
    overlay?: boolean
    onClick?: () => void
}