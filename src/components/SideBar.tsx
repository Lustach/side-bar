import { PropsWithChildren } from 'react';
import './sidebar.css'; // Import your CSS file for styling
import { SidebarProps } from './types';
import Overlay from './Overlay'

const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = ({ isOverlay, onClick, isOpen, position, style, className, dataKey }) => {
    return (
        <>
            {isOverlay ? <Overlay isOverlay /> : null}

            <div data-key={dataKey} className={`sidebar ${isOpen ? 'open' : 'hide'} ${position === 'right' ? 'right' : 'left'}
             ${className ? className : ''}`} style={{ ...style }}>
                <button className={`toggle-button ${isOpen ? 'toggle-button__open' : 'toggle-button__hide'}`} onClick={onClick}>
                    <span style={{ marginBottom: '2px' }}>&#x2715;</span>
                </button>
            </div>
        </>
    );
};

export default Sidebar;