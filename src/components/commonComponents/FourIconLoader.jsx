import React from 'react';
import { InstagramIcon } from '../../assets/SVGs/allSVGs';
import { useLocation } from 'react-router-dom';
import {
    TeenPattiIcon,
    OaksGamingIcon,
    AEGameIcon,
    AviatrixIcon,
    BestSoultionIcon,
    BitIcon,
    CharismaticIcon,
    EvolutionIcon,
    EzugiIcon,
    FantasmaGamesIcon,
    GamzixIcon,
    HabaneroIcon,
    JiliGameIcon,
    KingmidasIcon,
    NetEntIcon,
    NoLimitCityIcon,
    OneGameIcon,
    PgSoftIcon,
    PlaysGoIcon,
    PlayTechIcon,
    PragmenticGameIcon,
    QuickPinIcon,
    RedTigerIcon,
    RelexGamingIcon,
    RoyalGamingIcon,
    SmartSoftIcon,
    SpinomenalIcon,
    SpriteIcon,
    TvBetIcon,
    VoltEntIcon,
} from '../../assets/SVGs/allSVGs';

const FourIconLoader = () => {
    const location = useLocation();
    const { title } = location?.state
    const iconMap = {
        aura: TeenPattiIcon,
        '3 oaks gaming': OaksGamingIcon,
        'ae sexy': AEGameIcon,
        aviatrix: AviatrixIcon,
        bestsolution: BestSoultionIcon,
        bti: BitIcon,
        charismatic: CharismaticIcon,
        'evolution gaming': EvolutionIcon,
        ezugi: EzugiIcon,
        'fantasma games': FantasmaGamesIcon,
        gamzix: GamzixIcon,
        habanero: HabaneroIcon,
        'jili games': JiliGameIcon,
        kingnidas: KingmidasIcon,
        netEnt: NetEntIcon,
        'nolimit city': NoLimitCityIcon,
        'one game': OneGameIcon,
        'pg soft': PgSoftIcon,
        'play go': PlaysGoIcon,
        playtech: PlayTechIcon,
        playtechLive: PlayTechIcon,
        'pragmatic play': PragmenticGameIcon,
        'pragmatic play live': PragmenticGameIcon,
        quickspin: QuickPinIcon,
        'red tiger': RedTigerIcon,
        'relax gaming': RelexGamingIcon,
        'royal gaming': RoyalGamingIcon,
        'smartsoft gaming': SmartSoftIcon,
        spinomenal: SpinomenalIcon,
        spribe: SpriteIcon,
        TVBet: TvBetIcon,
        voltEnt: VoltEntIcon,
    };
    const Icon = title ? iconMap[title] : null;

    const iconStyle = {
        position: 'absolute',
        width: 30,
        height: 30,
        transition: 'all 2s ease',
    };

    const containerStyle = {
        position: 'relative',
        width: 60,
        height: 60,
        animation: 'rotateLoader 3s infinite cubic-bezier(0.3, 1, 0, 1)',
    };

    const iconAnimationStyle = {
        animation: 'iconMove 2s infinite ease',
    };

    return (
        <>
            <style>{`
                @keyframes rotateLoader {
                    0% {
                        transform: rotate(0deg);
                    }
                    33% {
                        transform: rotate(90deg);
                    }
                    66% {
                        transform: rotate(180deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes iconMove {
                    0% {
                        transform: translate(0, 0);
                       
                    }
                    33% {
                        transform: translate(0, 0);
                          width: 60px;
                          height: 60px 
                    }
                    66% {
                        transform: translate(5px, 5px);
                         width: 60px;
                         height: 60px
                    }
                    100% {
                        transform: translate(4px, 4x);
                        
                    }
                }
            `}</style>

            <div style={containerStyle}>
                <div style={{ ...iconStyle, top: 0, left: 0, ...iconAnimationStyle }}>
                    <Icon />
                </div>
                <div style={{ ...iconStyle, top: 0, right: 0, ...iconAnimationStyle }}>
                    <Icon />
                </div>
                <div style={{ ...iconStyle, bottom: 0, right: 0, ...iconAnimationStyle }}>
                    <Icon />
                </div>
                <div style={{ ...iconStyle, bottom: 0, left: 0, ...iconAnimationStyle }}>
                    <Icon />
                </div>
            </div>
        </>
    );
};

export default FourIconLoader;