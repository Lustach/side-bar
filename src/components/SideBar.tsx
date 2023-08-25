import { useState, PropsWithChildren, CSSProperties } from 'react';
import './sidebar.css'; // Import your CSS file for styling
import type { Position } from './types'; //
//1. Удалить пропс isLeft и сделать позишн  left right 
//2. Ещё будет пропс чилдрен(аналог слота) писать внутри тега сайдбара
//3. Должна быть возможность открывать два и более сайдбаров с ОДНОЙ стороны(наложение), только одна подложка(ступенька) чек Mutation observer?
//4. сделать оверлей на всё остальное приложение(кроме сайдбара) и дизейбл содержимого
//5. Когда закрывается второй или более сайдбар, предыдущий появляется
interface SidebarProps {
    position: Position
    sidebarKey?: number
    style?: CSSProperties
    className?: CSSProperties
    dataKey?: string
    overlay?: boolean
}
const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = ({ position, style, children, className, dataKey, sidebarKey }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={'actions-block'}>
                <button className={`toggle-button ${isOpen ? 'toggle-button__open' : 'toggle-button__hide'}`} onClick={toggleSidebar} style={{ top: 40 + Number(sidebarKey) * 30 + 'px' }}>
                    {`>`}
                </button>
                {sidebarKey}
            </div>
            <div data-key={dataKey} className={`sidebar ${isOpen ? 'open' : 'hide'} ${position === 'right' ? 'right' : 'left'} ${className ? className : ''}`} style={{ ...style }}>
                {children}
            </div>
        </>
    );
};

export default Sidebar;