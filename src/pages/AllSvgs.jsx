import React from 'react';
import {
    CricketIcon,
    InPlayIcon,
    SportsbookIcon,
    CasinoIcon,
    SoccerIcon,
    TennisIcon,
    BlackIcon,
    HollowCircleIcon,
    BoldFireIcon,
    RightArrowIcon,
    LeftArrowIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YouTubeIcon,
    LinkedInIcon,
    TelegramIcon,
    DiscortIcon,
    WhatsAppIcon,
    PinterestIcon,
    EmailIcon,
    TelephoneIcon,
    GPayIcon,
    BhimIcon,
    PhonePeIcon,
    PaytmIcon,
    VisaCardIcon,
    GiftBoxIcon,
    TeenPattiIcon,
    CharismaticIcon,
    OaksGamingIcon,
    AEGameIcon,
    AviatrixIcon,
    BestSoultionIcon,
    BitIcon,
    EvolutionIcon,
    EzugiIcon,
    FantasmaGamesIcon,
    GamzixIcon,
    HabaneroIcon,
    JiliGameIcon,
    KingmidasIcon,
    NagaGameIcon,
    NetEntIcon,
    NoLimitCityIcon,
    OneGameIcon,
    PgSoftIcon,
    PlayTechIcon,
    PlaysGoIcon,
    PragmenticGameIcon,
    QuickPinIcon,
    RedTigerIcon,
    RoyalGamingIcon,
    SmartSoftIcon,
    SpinomenalIcon,
    SpriteIcon,
    TvBetIcon,
    VoltEntIcon,
    RelexGamingIcon,

} from '../assets/SVGs/allSVGs';

const AllIconsDisplay = () => {
    const icons = [
        { name: 'Cricket', component: CricketIcon },
        { name: 'InPlay', component: InPlayIcon },
        { name: 'Sportsbook', component: SportsbookIcon },
        { name: 'Casino', component: CasinoIcon },
        { name: 'Soccer', component: SoccerIcon },
        { name: 'Tennis', component: TennisIcon },
        { name: 'Black', component: BlackIcon },
        { name: 'HollowCircle', component: HollowCircleIcon },
        { name: 'BoldFire', component: BoldFireIcon },
        { name: 'RightArrow', component: RightArrowIcon },
        { name: 'LeftArrow', component: LeftArrowIcon },
        { name: 'Facebook', component: FacebookIcon },
        { name: 'Twitter', component: TwitterIcon },
        { name: 'Instagram', component: InstagramIcon },
        { name: 'YouTube', component: YouTubeIcon },
        { name: 'LinkedIn', component: LinkedInIcon },
        { name: 'Telegram', component: TelegramIcon },
        { name: 'Discort', component: DiscortIcon },
        { name: 'WhatsApp', component: WhatsAppIcon },
        { name: 'Pinterest', component: PinterestIcon },
        { name: 'Email', component: EmailIcon },
        { name: 'Telephone', component: TelephoneIcon },
        { name: 'GPay', component: GPayIcon },
        { name: 'TvBet', component: TvBetIcon },
        { name: 'VoltEnt', component: VoltEntIcon },
        { name: 'Teenpatti', component: TeenPattiIcon },
        { name: 'CharismaticIcon', component: CharismaticIcon },
        { name: 'OaksGamingIcon', component: OaksGamingIcon },
        { name: 'AEGameIcon', component: AEGameIcon },
        { name: 'AviatrixIcon', component: AviatrixIcon },
        { name: 'BestSoultionIcon', component: BestSoultionIcon },
        { name: 'BitIcon', component: BitIcon },
        { name: 'EvolutionIcon', component: EvolutionIcon },
        { name: 'EzugiIcon', component: EzugiIcon },
        { name: 'FantasmaGamesIcon', component: FantasmaGamesIcon },
        { name: 'GamzixIcon', component: GamzixIcon },
        { name: 'HabaneroIcon', component: HabaneroIcon },
        { name: 'JiliGameIcon', component: JiliGameIcon },
        { name: 'KingmidasIcon', component: KingmidasIcon },
        { name: 'NagaGameIcon', component: NagaGameIcon },
        { name: 'NetEntIcon', component: NetEntIcon },
        { name: 'NoLimitCityIcon', component: NoLimitCityIcon },
        { name: 'OneGameIcon', component: OneGameIcon },
        { name: 'PgSoftIcon', component: PgSoftIcon },
        { name: 'PlaysGoIcon', component: PlaysGoIcon },
        { name: 'PlatTechIcon', component: PlayTechIcon },
        { name: 'PragmenticGameIcon', component: PragmenticGameIcon },
        { name: 'QuickPinIcon', component: QuickPinIcon },
        { name: 'RedTigerIcon', component: RedTigerIcon },
        { name: 'RelexGamingIocn', component: RelexGamingIcon },
        { name: 'RoyalGamingIcon', component: RoyalGamingIcon },
        { name: 'SmartSoftIcon', component: SmartSoftIcon },
        { name: 'SpinomenalIcon', component: SpinomenalIcon },
        { name: 'SpriteIcon', component: SpriteIcon },
        { name: 'TvBetIcon', component: TvBetIcon },
        { name: 'VoltEntIcon', component: VoltEntIcon },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '16px',
            padding: '16px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {icons.map(({ name, component: Icon }) => (
                <div
                    key={name}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '8px',
                        background: '#f5f5f5',
                        borderRadius: '4px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                >
                    <Icon />
                    <span style={{
                        marginTop: '8px',
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif',
                        textAlign: 'center'
                    }}>
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default AllIconsDisplay;