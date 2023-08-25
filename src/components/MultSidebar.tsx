import Sidebar from "./SideBar";
import { useState } from "react";
import Overlay from './Overlay';

const MultiSidebar = ({ layersNumber, isOverlay }: { layersNumber: number, isOverlay?: boolean }) => {
    const [layers, setLayers] = useState(layersNumber);

    const addLayers = () => {
        setLayers(layers + 1);
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        addLayers();
        const dataKey: string | null = event.currentTarget.getAttribute('data-key');
        if (dataKey !== null) {
            const selectedElement: HTMLElement | null = document.querySelector(`[data-key="sidebar-${dataKey}"]`);
            if (selectedElement) {
                selectedElement.style.width = 300 + (+dataKey + 1) * 20 + 'px';
            }
        }
    };

    const sidebars = [];
    for (let i = 0; i < layers; i++) {
        sidebars.push(
            <Sidebar
                key={i}
                dataKey={'sidebar-' + i}
                position={'left'}
                sidebarKey={i}
                overlay={isOverlay}

            >
                <button
                    data-key={i}
                    onClick={handleClick}>+ 1</button>
            </Sidebar>
        );
    }

    return (
        <>
            {isOverlay ? <Overlay isOverlay /> : null}
            {sidebars}
        </>
    )
};

export default MultiSidebar;
