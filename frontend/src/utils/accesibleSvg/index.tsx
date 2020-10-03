import React, { ComponentType, FC, useMemo } from 'react';
import randomId from 'utils/randomId';
import { AcceptedProps, InjectedProps } from './types';

export default function accessibleSvg(
    Svg: ComponentType<InjectedProps>,
    defaultTitle?: string,
    defaultDesc?: string,
): FC<AcceptedProps> {
    return ({ children, title, desc, ...props }) => {
        const titleId = useMemo(() => randomId(), []);
        const descId = useMemo(() => randomId(), []);

        const actualTitle = title || defaultTitle;
        const actualDesc = desc || defaultDesc;

        const ariaLabelledBy = [...(actualTitle ? [titleId] : []), ...(actualDesc ? [descId] : [])].join(' ');

        return (
            <Svg
                {...{
                    ...(ariaLabelledBy
                        ? {
                              'aria-labelledby': ariaLabelledBy,
                          }
                        : {
                              'aria-hidden': 'true',
                          }),
                    role: 'img',
                }}
                {...props}
            >
                {children}
                {actualTitle && <title id={titleId}>{actualTitle}</title>}
                {actualDesc && <desc id={descId}>{actualDesc}</desc>}
            </Svg>
        );
    };
}
