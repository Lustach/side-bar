import { PropsWithChildren } from 'react';
import './sidebar.css'; // Import your CSS file for styling
import { SidebarProps } from './types';
import { MdClose } from "react-icons/md";
//1. Удалить пропс isLeft и сделать позишн  left right 
//2. Ещё будет пропс чилдрен(аналог слота) писать внутри тега сайдбара
//3. Должна быть возможность открывать два и более сайдбаров с ОДНОЙ стороны(наложение), только одна подложка(ступенька) чек Mutation observer?
//4. сделать оверлей на всё остальное приложение(кроме сайдбара) и дизейбл содержимого
//5. Когда закрывается второй или более сайдбар, предыдущий появляется

const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = ({ onClick, isOpen, position, style, className, dataKey }) => {
    return (
        <>
            <div data-key={dataKey} className={`sidebar ${isOpen ? 'open' : 'hide'} ${position === 'right' ? 'right' : 'left'}
             ${className ? className : ''}`} style={{ ...style }}>
                <button className={`toggle-button ${isOpen ? 'toggle-button__open' : 'toggle-button__hide'}`} onClick={onClick}>
                    <MdClose />
                </button>
            </div>
        </>
    );
};

export default Sidebar;