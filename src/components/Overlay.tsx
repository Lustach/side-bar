import { useEffect, useState } from 'react';

const Overlay = ({ isOverlay }: { isOverlay: boolean }) => {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        if (isOverlay) {
            const overlayNode = document.querySelector('.sidebar');
            let observer: MutationObserver | null;
            if (overlayNode) {
                observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        // Check if the .hide class is added to the observed element's classList
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            const classList = overlayNode.classList;
                            if (classList.contains('hide')) {
                                setFlag(false)
                            } else {
                                setFlag(true)
                            }
                        }
                    });
                });

                const config = {
                    attributes: true,
                    attributeOldValue: true,
                };

                observer.observe(overlayNode, config);
            }

            return () => {
                if (observer) {
                    observer.disconnect();
                }
            };
        }
    }, [isOverlay]);

    return <>

        {flag && isOverlay ?
            <div className="overlay"></div> : null}
    </>
};

export default Overlay;