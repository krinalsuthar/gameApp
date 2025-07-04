import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CasinoIcon from '@mui/icons-material/Casino';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TableChartIcon from '@mui/icons-material/TableChart';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CricketIcon, SoccerIcon, TennisIcon, BlackIcon, HollowCircleIcon, TeenPattiIcon, OaksGamingIcon, AEGameIcon, AviatrixIcon, BestSoultionIcon, BitIcon, CharismaticIcon, EvolutionIcon, EzugiIcon, FantasmaGamesIcon, GamzixIcon, HabaneroIcon, JiliGameIcon, KingmidasIcon, NetEntIcon, NoLimitCityIcon, OneGameIcon, PgSoftIcon, PlaysGoIcon, PlayTechIcon, PragmenticGameIcon, QuickPinIcon, RedTigerIcon, RelexGamingIcon, RoyalGamingIcon, SmartSoftIcon, SpinomenalIcon, SpriteIcon, TvBetIcon, VoltEntIcon } from '../assets/SVGs/allSVGs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import teenpatti from "../assets/drawerIcons/teenpatti.png"
import _32Cards from "../assets/drawerIcons/32Cards.png";
import bacarret from "../assets/drawerIcons/bacarret.png";
import Blackjack from "../assets/drawerIcons/Blackjack.png";
import casualGame from "../assets/drawerIcons/casualGame.png";
import dregonTiger from "../assets/drawerIcons/dregonTiger.png";
import LiveBaccarat from "../assets/drawerIcons/LiveBaccarat.png";
import LiveBlackjack from "../assets/drawerIcons/LiveBlackjack.png";
import liveDealer from "../assets/drawerIcons/liveDealer.jpg";
import livegame from "../assets/drawerIcons/livegame.png";
import livePoker from "../assets/drawerIcons/livePoker.jpg";
import LiveRoulette from "../assets/drawerIcons/LiveRoulette.png";
import luckey7 from "../assets/drawerIcons/luckey7.png";
import poker from "../assets/drawerIcons/poker.png";
import roulette from "../assets/drawerIcons/roulette.png";
import tableGames from "../assets/drawerIcons/tableGames.png";
import virtual from "../assets/drawerIcons/virtual.png";



export const drawerData = {
    sports: [
        {
            sport: 'cricket',
            icon: CricketIcon,
            segment: 'cricket',
            count: 3, // Number of leagues
            leagues: [
                {
                    title: 'one day internationals',
                    icon: BlackIcon,
                    segment: 'one-day-internationals',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'one day internationals', icon: HollowCircleIcon, segment: 'onedayinternationals', count: 0 },
                        { name: 'pakistan vs england', icon: HollowCircleIcon, segment: 'pakistan-vs-england', count: 0 },
                    ],
                },
                {
                    title: 'test matches',
                    icon: BlackIcon,
                    segment: 'test-matches',
                    count: 3, // Number of matches
                    matches: [
                        { name: 'test matches', icon: HollowCircleIcon, segment: 'test-matches', count: 0 },
                        { name: 'england vs india', icon: HollowCircleIcon, segment: 'england-vs-india', count: 0 },
                        { name: 'westindies vs australia', icon: HollowCircleIcon, segment: 'westindies-vs-australia', count: 0 },
                    ],
                },
                {
                    title: 'irish inter provincial t20 trophy',
                    icon: BlackIcon,
                    segment: 'irish-inter-provincial-t20-trophy',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'north-west warriors vs munster reds', icon: HollowCircleIcon, segment: 'north-west-warriors-vs-munster-reds', count: 0 },
                        { name: 'noethern knights vs leinter lightning', icon: HollowCircleIcon, segment: 'noethern-knights-vs-leinter-lightning', count: 0 },
                    ],
                },
            ],
        },
        {
            sport: 'soccer',
            icon: SoccerIcon,
            segment: 'soccer',
            count: 5, // Number of leagues
            leagues: [
                {
                    title: 'chinese super league',
                    icon: BlackIcon,
                    segment: 'chinese-super-league',
                    count: 3, // Number of matches
                    matches: [
                        { name: 'beijing guoan yunnan yukun', icon: HollowCircleIcon, segment: 'beijing-guoan-yunnan-yukun', count: 0 },
                        { name: 'henan songshan longmen shandong taishan', icon: HollowCircleIcon, segment: 'henan-songshan-longmen-shandong-taishan', count: 0 },
                        { name: 'shenzhen peng city shanghai port fc', icon: HollowCircleIcon, segment: 'shenzhen-peng-city-shanghai-port-fc', count: 0 },
                    ],
                },
                {
                    title: 'us mls',
                    icon: BlackIcon,
                    segment: 'us-mls',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'los angeles fc vancouver with caps', icon: HollowCircleIcon, segment: 'los-angeles-fc-vancouver-with-caps', count: 0 },
                        { name: 'columbus vs phinladelphia', icon: HollowCircleIcon, segment: 'columbus-vs-phinladelphia', count: 0 },
                    ],
                },
                {
                    title: 'swedish all svenskan',
                    icon: BlackIcon,
                    segment: 'swedish-all-svenskan',
                    count: 4, // Number of matches
                    matches: [
                        { name: 'varnamo vs elfsborg', icon: HollowCircleIcon, segment: 'varnamo-vs-elfsborg', count: 0 },
                        { name: 'djurgardens vs norrkoping', icon: HollowCircleIcon, segment: 'djurgardens-vs-norrkoping', count: 0 },
                        { name: 'hacken vs gais', icon: HollowCircleIcon, segment: 'hacken-vs-gais', count: 0 },
                        { name: 'mjallby vs malmoff', icon: HollowCircleIcon, segment: 'mjallby-vs-malmoff', count: 0 },
                    ],
                },
                {
                    title: "friendlies women's international",
                    icon: BlackIcon,
                    segment: 'friendlies-womens-international',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'england vs jamaica', icon: HollowCircleIcon, segment: 'england-vs-jamaica', count: 0 },
                        { name: 'algeria vs congo', icon: HollowCircleIcon, segment: 'algeria-vs-congo', count: 0 },
                    ],
                },
                {
                    title: 'norwegian eliteserien',
                    icon: BlackIcon,
                    segment: 'norwegian-eliteserien',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'beijing guoan yunnan yukun', icon: HollowCircleIcon, segment: 'beijing-guoan-yunnan-yukun', count: 0 },
                        { name: 'columbus vs phinladelphia', icon: HollowCircleIcon, segment: 'columbus-vs-phinladelphia', count: 0 },
                    ],
                },
            ],
        },
        {
            sport: 'tennis',
            icon: TennisIcon,
            segment: 'tennis',
            count: 3, // Number of leagues
            leagues: [
                {
                    title: 'chinese super league',
                    icon: BlackIcon,
                    segment: 'chinese-super-league',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'beljing guoan yunnan yukun', icon: HollowCircleIcon, segment: 'beljing-guoan-yunnan-yukun', count: 0 },
                        { name: 'henan songshan longmen vs shandong taishan', icon: HollowCircleIcon, segment: 'henan-songshan-longmen-vs-shandong-taishan', count: 0 },
                    ],
                },
                {
                    title: 'us mls',
                    icon: BlackIcon,
                    segment: 'us-mls',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'los angeles fcv vancouver whitecaps', icon: HollowCircleIcon, segment: 'los-angeles-fcv-vancouver-whitecaps', count: 0 },
                        { name: 'columbus vs philadelphia', icon: HollowCircleIcon, segment: 'columbus-vs-philadelphia', count: 0 },
                    ],
                },
                {
                    title: 'swedish all svenskan',
                    icon: BlackIcon,
                    segment: 'swedish-all-svenskan',
                    count: 2, // Number of matches
                    matches: [
                        { name: 'varnamo vs elfsborg', icon: HollowCircleIcon, segment: 'varnamo-vs-elfsborg', count: 0 },
                        { name: 'djurgardens vs norrkoping', icon: HollowCircleIcon, segment: 'djurgardens-vs-norrkoping', count: 0 },
                    ],
                },
            ],
        },
    ],
};

export const providersData = {
    providers: {
        title: 'Providers',
        icon: AcUnitIcon,
        segment: 'providers',
        count: 32,
        items: [
            { title: 'aura', icon: TeenPattiIcon, segment: 'aura', count: 12 },
            { title: '3 oaks gaming', icon: OaksGamingIcon, segment: '3-oaks-gaming', count: 10 },
            { title: 'ae sexy', icon: AEGameIcon, segment: 'ae-sexy', count: 4 },
            { title: 'aviatrix', icon: AviatrixIcon, segment: 'aviatrix', count: 5 },
            { title: 'bestsolution', icon: BestSoultionIcon, segment: 'bestsolution', count: 30 },
            { title: 'bti', icon: BitIcon, segment: 'bti', count: 10 },
            { title: 'charismatic', icon: CharismaticIcon, segment: 'charismatic', count: 0 },
            { title: 'evolution gaming', icon: EvolutionIcon, segment: 'evolution-gaming', count: 0 },
            { title: 'ezugi', icon: EzugiIcon, segment: 'ezugi', count: 6 },
            { title: 'fantasma games', icon: FantasmaGamesIcon, segment: 'fantasma-games', count: 8 },
            { title: 'gamzix', icon: GamzixIcon, segment: 'gamzix', count: 9 },
            { title: 'habanero', icon: HabaneroIcon, segment: 'habanero', count: 15 },
            { title: 'jili games', icon: JiliGameIcon, segment: 'jili-games', count: 36 },
            { title: 'kingnidas', icon: KingmidasIcon, segment: 'kingnidas', count: 45 },
            { title: 'netEnt', icon: NetEntIcon, segment: 'netent', count: 0 },
            { title: 'nolimit city', icon: NoLimitCityIcon, segment: 'nolimit-city', count: 33 },
            { title: 'one game', icon: OneGameIcon, segment: 'one-game', count: 100 },
            { title: 'pg soft', icon: PgSoftIcon, segment: 'pg-soft', count: 231 },
            { title: "play's go", icon: PlaysGoIcon, segment: 'plays-go', count: 23 },
            { title: 'playtech', icon: PlayTechIcon, segment: 'playtech', count: 45 },
            { title: 'playtechLive', icon: PlayTechIcon, segment: 'playtechlive', count: 56 },
            { title: 'pragmatic play', icon: PragmenticGameIcon, segment: 'pragmatic-play', count: 67 },
            { title: 'pragmatic play live', icon: PragmenticGameIcon, segment: 'pragmatic-play-live', count: 0 },
            { title: 'quickspin', icon: QuickPinIcon, segment: 'quickspin', count: 0 },
            { title: 'red tiger', icon: RedTigerIcon, segment: 'red-tiger', count: 43 },
            { title: 'relax gaming', icon: RelexGamingIcon, segment: 'relax-gaming', count: 56 },
            { title: 'royal gaming', icon: RoyalGamingIcon, segment: 'royal-gaming', count: 67 },
            { title: 'smartsoft gaming', icon: SmartSoftIcon, segment: 'smartsoft-gaming', count: 7 },
            { title: 'spinomenal', icon: SpinomenalIcon, segment: 'spinomenal', count: 10 },
            { title: 'spribe', icon: SpriteIcon, segment: 'spribe', count: 1 },
            { title: 'TVBet', icon: TvBetIcon, segment: 'tvbet', count: 2 },
            { title: 'voltEnt', icon: VoltEntIcon, segment: 'voltent', count: 3 },
        ],
    },
};

export const categoriesData = {
    categories: {
        title: 'Categories',
        icon: CasinoIcon,
        segment: 'categories',
        count: 29,
        items: [
            {
                title: 'teen patti', icon: teenpatti, segment: 'teen-patti', count: 0, info: [
                    {
                        image: '/images/info/bet-range.png',
                        heading: 'Flexible Bet Range',
                        title: 'Bet from ₹10 to ₹1,000',
                    },
                    {
                        image: '/images/info/real-dealer.png',
                        heading: 'Real Dealers',
                        title: 'Experience live Teen Patti with real hosts',
                    },
                    {
                        image: '/images/info/languages.png',
                        heading: 'Multi-Language Support',
                        title: 'Available in Hindi, English, and more',
                    },
                    {
                        image: '/images/info/multiplayer.png',
                        heading: 'Multiplayer Gameplay',
                        title: 'Play with friends or join public tables',
                    },
                ],
            },
            { title: 'live', icon: livegame, segment: '32Cards', count: 12 },
            { title: 'virtual', icon: virtual, segment: 'virtual', count: 34 },
            { title: 'roulette', icon: roulette, segment: 'roulette', count: 56 },
            { title: 'live baccarat', icon: LiveBaccarat, segment: 'live-baccarat', count: 0 },
            { title: 'live roulette', icon: LiveRoulette, segment: 'live-roulette', count: 0 },
            { title: 'live sic bo', icon: teenpatti, segment: 'live-sic-bo', count: 100 },
            { title: 'live blackjack', icon: LiveBlackjack, segment: 'live-blackjack', count: 101 },
            { title: 'table game', icon: tableGames, segment: 'table-game', count: 23 },
            { title: 'live poker', icon: livePoker, segment: 'live-poker', count: 45 },
            // { title: 'live dealer', icon: liveDealer, segment: 'live-dealer', count: 0 },
            { title: 'baccarat', icon: bacarret, segment: 'baccarat', count: 45 },
            { title: 'poker', icon: poker, segment: 'poker', count: 56 },
            { title: 'blackjack', icon: Blackjack, segment: 'blackjack', count: 67 },
            { title: 'lucky7', icon: luckey7, segment: 'lucky7', count: 0 },
            { title: '32cards', icon: _32Cards, segment: '32cards', count: 3 },
            { title: 'casual games', icon: casualGame, segment: 'casual-games', count: 0 },
            { title: 'dragon tiger', icon: dregonTiger, segment: 'dragon-tiger', count: 0 },
            { title: 'game show', icon: teenpatti, segment: 'game-show', count: 5 },
            { title: 'Live Dragon Tiger', icon: teenpatti, segment: 'live-dragon-tiger', count: 0 },
            { title: 'Top Card', icon: teenpatti, segment: 'top-card', count: 8 },
            { title: 'Video slots', icon: teenpatti, segment: 'video-slots', count: 10 },
            { title: 'Crash games', icon: teenpatti, segment: 'crash-games', count: 20 },
            { title: 'Lottery', icon: teenpatti, segment: 'lottery', count: 30 },
            { title: 'LivLOttery', icon: teenpatti, segment: 'livlottery', count: 40 },
            { title: 'Fishing game', icon: teenpatti, segment: 'fishing-game', count: 50 },
            { title: 'scratch card', icon: teenpatti, segment: 'scratch-card', count: 60 },
            { title: 'visual sports', icon: teenpatti, segment: 'visual-sports', count: 0 },
            { title: 'sportsbook', icon: teenpatti, segment: 'sportsbook', count: 0 },
        ],
    },
};

export const startingData = {
    starting: {
        title: 'startingData',
        icon: CasinoIcon,
        segment: 'startingData',
        count: 29,
        items: [
            { title: 'In Play', icon: YouTubeIcon, segment: 'teen-patti', count: 1 },
            { title: 'Upcoming', icon: CalendarMonthIcon, segment: 'live', count: 112 },
            { title: 'Favourites', icon: FavoriteBorderIcon, segment: 'virtual', count: 0 },
        ],
    },
};
