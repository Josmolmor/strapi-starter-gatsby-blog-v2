import { HeroHeader, HeroText, LetsTalkIllustration, SubHeroText, TitleContent } from './styles';
import { Button } from '../index';
import React, { FC } from 'react';
import { BannerTypes } from './types';

const Banner: FC<BannerTypes> = ({ data, ctaButtonText, ...rest }) => {
    return (
        <HeroHeader {...rest}>
            <TitleContent>
                <HeroText>{data.strapiHomepage.Hero.HeroText}</HeroText>
                {data.strapiHomepage.Hero?.SubHeroText && (
                    <SubHeroText>{data.strapiHomepage.Hero.SubHeroText}</SubHeroText>
                )}
                {ctaButtonText && <Button to="/contact">{ctaButtonText}</Button>}
            </TitleContent>
            <LetsTalkIllustration />
        </HeroHeader>
    );
};

export default Banner;
