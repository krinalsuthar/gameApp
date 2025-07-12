import CasinoIcon from '@mui/icons-material/Casino';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CricketIcon, SoccerIcon, TennisIcon, BlackIcon, HollowCircleIcon, TeenPattiIcon, OaksGamingIcon, AEGameIcon, AviatrixIcon, BestSoultionIcon, BitIcon, CharismaticIcon, EvolutionIcon, EzugiIcon, FantasmaGamesIcon, GamzixIcon, HabaneroIcon, JiliGameIcon, KingmidasIcon, NetEntIcon, NoLimitCityIcon, OneGameIcon, PgSoftIcon, PlaysGoIcon, PlayTechIcon, PragmenticGameIcon, QuickPinIcon, RedTigerIcon, RelexGamingIcon, RoyalGamingIcon, SmartSoftIcon, SpinomenalIcon, SpriteIcon, TvBetIcon, VoltEntIcon } from '../assets/SVGs/allSVGs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as allImages from "../assets"


export const drawerData = {
    sports: [
        {
            sport: 'cricket',
            icon: CricketIcon,
            segment: 'cricket',
            count: 3,
            leagues: [
                {
                    title: ' WOMENS INTERNATIONAL TWENTY20 MATCHES',
                    icon: BlackIcon,
                    segment: 'WOMENS-INTERNATIONAL-TWENTY20-MATCHES ',
                    count: 2,
                    info: [
                        {
                            "key": "matchOdds",
                            "title": "MATCH ODDS",
                            "type": "team",
                            "data": {
                                "Bangladesh": {
                                    "back": [3.15, 3.2, 3.25],
                                    "lay": [3.35, 3.4, 3.5]
                                },
                                "Sri Lanka": {
                                    "back": [1.4, 1.42, 1.43],
                                    "lay": [1.44, 1.45, 1.46]
                                }
                            }
                        },
                        {
                            "key": "bookmaker",
                            "title": "BOOKMAKER",
                            "type": "bookmaker",
                            "data": {
                                "Bangladesh": {
                                    "status": "SUSPENDED"
                                },
                                "Sri Lanka": {
                                    "back": [1.42],
                                    "lay": [1.45]
                                }
                            }
                        },
                        {
                            "key": "toss",
                            "title": "TOSS",
                            "type": "team",
                            "data": {
                                "BAN": {
                                    "back": [1.98],
                                    "lay": [1]
                                },
                                "SL": {
                                    "back": [1.98],
                                    "lay": [1]
                                }
                            }
                        },
                        {
                            "key": "fancy",
                            "title": "FANCY BET (SRI LANKA V BANGLADESH)",
                            "type": "fancy",
                            "stakeLimit": "50 - 50000",
                            "maxProfit": 200000,
                            "data": [
                                {
                                    "label": "6 OVER RUN BAN",
                                    "back": { "odds": 45, "stake": 100 },
                                    "lay": { "odds": 47, "stake": 100 }
                                },
                                {
                                    "label": "6 OVER RUN SL",
                                    "back": { "odds": 51, "stake": 100 },
                                    "lay": { "odds": 53, "stake": 100 }
                                },
                                {
                                    "label": "10 OVER RUN BAN",
                                    "back": { "odds": 73, "stake": 100 },
                                    "lay": { "odds": 75, "stake": 100 }
                                },
                                {
                                    "label": "10 OVER RUN SL",
                                    "back": { "odds": 83, "stake": 100 },
                                    "lay": { "odds": 85, "stake": 100 }
                                },
                                {
                                    "label": "20 OVER RUN BAN",
                                    "back": { "odds": 178, "stake": 100 },
                                    "lay": { "odds": 181, "stake": 100 }
                                },
                                {
                                    "label": "20 OVER RUN SL",
                                    "back": { "odds": 160, "stake": 100 },
                                    "lay": { "odds": 163, "stake": 100 }
                                }
                            ]
                        }
                    ],
                    matches: [
                        { name: 'ENGLAND V INDIA', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                    ],
                },
                {
                    title: 'INTERNATIONAL TWENTY20 MATCHES ',
                    icon: BlackIcon,
                    segment: 'INTERNATIONAL-TWENTY20-MATCHES ',
                    count: 3,
                    matches: [
                        { name: 'SRILANKA V BANGLADESH ', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                        { name: 'ZIMBABWE V SOUTH AFRICA ', icon: HollowCircleIcon, count: 0 },
                    ],
                },
                {
                    title: 'ENGLAND V INDIA',
                    icon: BlackIcon,
                    segment: 'ENGLAND-INDIA ',
                    count: 2,
                    matches: [
                        { name: 'ENGLAND V INDIA', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                        { name: 'BOOKMARKES', icon: HollowCircleIcon, count: 0 },
                        { name: 'LOKESH RAHUL BOUNDARIES', icon: HollowCircleIcon, count: 0 },
                        { name: 'LOKESH RAHUL RUNS', icon: HollowCircleIcon, count: 0 },
                        { name: '1ST INNINGS RUN IND', icon: HollowCircleIcon, count: 0 },
                        { name: 'FALL OF 4TH WKT IND', icon: HollowCircleIcon, count: 0 },
                        { name: 'RISHABH PANT RUNS', icon: HollowCircleIcon, count: 0 },
                        { name: '45 OVER RUN IND', icon: HollowCircleIcon, count: 0 },
                    ],
                },
                {
                    title: 'GLOBAL SUPER LEAGUE T20 ',
                    icon: BlackIcon,
                    segment: 'GLOBAL-SUPER-LEAGUE-T20  ',
                    count: 2,
                    matches: [
                        { name: 'RANGPUR RIDERS V HOBART HURRICANES ', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                    ],
                },
            ],
        },
        {
            sport: 'soccer',
            icon: SoccerIcon,
            segment: 'soccer',
            count: 5,
            leagues: [
                {
                    title: 'chinese super league',
                    icon: BlackIcon,
                    segment: 'chinese-super-league',
                    count: 3,
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
                    count: 2,
                    matches: [
                        { name: 'los angeles fc vancouver with caps', icon: HollowCircleIcon, segment: 'los-angeles-fc-vancouver-with-caps', count: 0 },
                        { name: 'columbus vs phinladelphia', icon: HollowCircleIcon, segment: 'columbus-vs-phinladelphia', count: 0 },
                    ],
                },
                {
                    title: 'swedish all svenskan',
                    icon: BlackIcon,
                    segment: 'swedish-all-svenskan',
                    count: 4,
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
                    count: 2,
                    matches: [
                        { name: 'england vs jamaica', icon: HollowCircleIcon, segment: 'england-vs-jamaica', count: 0 },
                        { name: 'algeria vs congo', icon: HollowCircleIcon, segment: 'algeria-vs-congo', count: 0 },
                    ],
                },
                {
                    title: 'norwegian eliteserien',
                    icon: BlackIcon,
                    segment: 'norwegian-eliteserien',
                    count: 2,
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
            count: 3,
            leagues: [
                {
                    title: 'chinese super league',
                    icon: BlackIcon,
                    segment: 'chinese-super-league',
                    count: 2,
                    matches: [
                        { name: 'beljing guoan yunnan yukun', icon: HollowCircleIcon, segment: 'beljing-guoan-yunnan-yukun', count: 0 },
                        { name: 'henan songshan longmen vs shandong taishan', icon: HollowCircleIcon, segment: 'henan-songshan-longmen-vs-shandong-taishan', count: 0 },
                    ],
                },
                {
                    title: 'us mls',
                    icon: BlackIcon,
                    segment: 'us-mls',
                    count: 2,
                    matches: [
                        { name: 'los angeles fcv vancouver whitecaps', icon: HollowCircleIcon, segment: 'los-angeles-fcv-vancouver-whitecaps', count: 0 },
                        { name: 'columbus vs philadelphia', icon: HollowCircleIcon, segment: 'columbus-vs-philadelphia', count: 0 },
                    ],
                },
                {
                    title: 'swedish all svenskan',
                    icon: BlackIcon,
                    segment: 'swedish-all-svenskan',
                    count: 2,
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
                title: 'Continue Playing', icon: allImages.ContinuePlaying, segment: 'continue-playing ', count: 34, info: [
                    {
                        image: allImages.continuePlaying1,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        image: allImages.continuePlaying2,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: " rgb(251, 53, 101)"
                    }, {
                        image: allImages.continuePlaying3,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: " rgb(238, 97, 89)"
                    }, {
                        image: allImages.continuePlaying4,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgb(31, 178, 252)"
                    }, {
                        image: allImages.continuePlaying5,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'teen patti', icon: allImages.teenpatti, segment: 'teen-patti', count: 0, info: [
                    {
                        image: allImages.teenpatti1,
                        title: 'TEENPATTI ONE DAY',
                        text: 'Aura',
                        color: "rgb(246, 55, 83)"
                    },
                    {
                        image: allImages.teenpatti2,
                        title: 'TEENPATTI T20',
                        text: 'Aura',
                        color: "rgb(69, 141, 250)"
                    },
                    {
                        image: allImages.teenpatti3,
                        title: 'TEENPATTI MUFLIS',
                        text: 'Aura',
                        color: "rgb(31, 178, 252)"
                    },
                    {
                        image: allImages.teenpatti4,
                        title: '2 CARD STEENPATTI',
                        text: 'Aura',
                        color: "rgb(190, 59, 250)"
                    },
                    {
                        image: allImages.teenpatti5,
                        title: 'TEENPATTI TEST',
                        text: 'Aura',
                        color: "rgba(39, 201, 44, 0.8)"
                    },
                    {
                        image: allImages.teenpatti6,
                        title: 'TEENPATTI OPEN',
                        text: 'Aura',
                        color: "rgb(31, 178, 252)"
                    },
                ],
            },
            {
                title: 'live', icon: allImages.livegame, segment: '32Cards', count: 12, info: [{
                    image: allImages.live1,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.live2,
                    title: 'HI LOW',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.live3,
                    title: 'POKER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.live4,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.live5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.live6,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.live7,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.live8,
                    title: 'MATKA',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.live9,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.live10,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'virtual', icon: allImages.virtual, segment: 'virtual', count: 34, info: [{
                    image: allImages.virtual1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.virtual2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.virtual3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.virtual4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.virtual5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.virtual6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.virtual7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.virtual8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.virtual9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.virtual10,
                    title: 'AMAR AKBAR ANTHONY (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'roulette', icon: allImages.roulette, segment: 'roulette', count: 56, info: [{
                    image: allImages.live1,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.live2,
                    title: 'HI LOW',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.live3,
                    title: 'POKER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.live4,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.live5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.live6,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.live7,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.live8,
                    title: 'MATKA',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.live9,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.live10,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'live baccarat', icon: allImages.LiveBaccarat, segment: 'live-baccarat', count: 0, info: [{
                    image: allImages.liveBaccarat1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveBaccarat2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveBaccarat3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveBaccarat4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveBaccarat5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveBaccarat6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveBaccarat7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveBaccarat8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveBaccarat9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveBaccarat10,
                    title: 'AMAR AKBAR ANTHONY (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'live roulette', icon: allImages.LiveRoulette, segment: 'live-roulette', count: 0, info: [{
                    image: allImages.liveRoulette1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveRoulette2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveRoulette3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveRoulette4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveRoulette5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveRoulette6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveRoulette7,
                    title: 'HI LOW (liveRoulette)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveRoulette8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveRoulette9,
                    title: 'POKER (liveRoulette)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveRoulette10,
                    title: 'AMAR AKBAR ANTHONY (liveRoulette)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'live sic bo', icon: allImages.teenpatti, segment: 'live-sic-bo', count: 100, info: [{
                    image: allImages.liveSicBo1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveSicBo2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveSicBo3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveSicBo4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveSicBo5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveSicBo6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveSicBo7,
                    title: 'HI LOW (liveSicBo)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveSicBo8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveSicBo9,
                    title: 'POKER (liveSicBo)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveSicBo10,
                    title: 'AMAR AKBAR ANTHONY (liveSicBo)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'live blackjack', icon: allImages.LiveBlackjack, segment: 'live-blackjack', count: 101, info: [{
                    image: allImages.liveBlackjack1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveBlackjack2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveBlackjack3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveBlackjack4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveBlackjack5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveBlackjack6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveBlackjack7,
                    title: 'HI LOW (liveBlackjack)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveBlackjack8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveBlackjack9,
                    title: 'POKER (liveBlackjack)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveBlackjack10,
                    title: 'AMAR AKBAR ANTHONY (liveBlackjack)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'table game', icon: allImages.tableGames, segment: 'table-game', count: 23, info: [{
                    image: allImages.tableGames1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.tableGames2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.tableGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.tableGames4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.tableGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.tableGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.tableGames7,
                    title: 'HI LOW (tableGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.tableGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.tableGames9,
                    title: 'POKER (tableGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.tableGames10,
                    title: 'AMAR AKBAR ANTHONY (tableGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'live poker', icon: allImages.livePoker, segment: 'live-poker', count: 45, info: [{
                    image: allImages.livePoker1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.livePoker2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.livePoker3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.livePoker4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.livePoker5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.livePoker6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.livePoker7,
                    title: 'HI LOW (livePoker)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.livePoker8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.livePoker9,
                    title: 'POKER (livePoker)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.livePoker10,
                    title: 'AMAR AKBAR ANTHONY (livePoker)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            // { title: 'live dealer', icon: liveDealer, segment: 'live-dealer', count: 0 },
            {
                title: 'baccarat', icon: allImages.bacarret, segment: 'baccarat', count: 45, info: [
                    {
                        image: allImages.baccarat1,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgb(246, 55, 83)"
                    },
                    {
                        image: allImages.baccarat2,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)"
                    },
                    {
                        image: allImages.baccarat3,
                        title: 'Multi-Language Support',
                        text: 'Available in Hindi, English, and more',
                        color: "rgb(190, 59, 250)"
                    },
                    {
                        image: allImages.baccarat4,
                        title: 'Multiplayer Gameplay',
                        text: 'Play with friends or join public tables',
                        color: "rgb(31, 178, 252)"
                    },
                    {
                        image: allImages.baccarat5,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgb(246, 55, 83)"
                    },
                    {
                        image: allImages.baccarat6,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)"
                    },
                    {
                        image: allImages.baccarat7,
                        title: 'Multi-Language Support',
                        text: 'Available in Hindi, English, and more',
                        color: "rgb(190, 59, 250)"
                    },
                    {
                        image: allImages.baccarat8,
                        title: 'Multiplayer Gameplay',
                        text: 'Play with friends or join public tables',
                        color: "rgb(31, 178, 252)"
                    },
                    {
                        image: allImages.baccarat9,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        color: "rgb(246, 55, 83)"
                    },
                    {
                        image: allImages.baccarat10,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)"
                    },
                ]
            },
            {
                title: 'poker', icon: allImages.poker, segment: 'poker', count: 56, info: [{
                    image: allImages.poker1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.poker2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.poker3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.poker4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.poker5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.poker6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.poker7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.poker8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.poker9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                ]
            },
            {
                title: 'blackjack', icon: allImages.Blackjack, segment: 'blackjack', count: 67, info: [{
                    image: allImages.blackjack1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.blackjack2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.blackjack3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.blackjack4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.blackjack5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.blackjack6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.blackjack7,
                    title: 'HI LOW (blackjack)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.blackjack8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.blackjack9,
                    title: 'POKER (blackjack)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.blackjack10,
                    title: 'AMAR AKBAR ANTHONY (blackjack)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'lucky7', icon: allImages.luckey7, segment: 'lucky7', count: 0, info: [{
                    image: allImages.Lucky7,
                    title: 'luckey7',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                ]
            },
            {
                title: '32cards', icon: allImages._32Cards, segment: '32cards', count: 3, info: [{
                    image: allImages._32Cards,
                    title: '32Cards',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                ]
            },
            {
                title: 'casual games', icon: allImages.casualGame, segment: 'casual-games', count: 0, info: [{
                    image: allImages.casualGame1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.casualGame2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.casualGame3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.casualGame4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.casualGame5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.casualGame6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.casualGame7,
                    title: 'HI LOW (casualGame)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.casualGame8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.casualGame9,
                    title: 'POKER (casualGame)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.casualGame10,
                    title: 'AMAR AKBAR ANTHONY (casualGame)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.casualGame11,
                    title: 'AMAR AKBAR ANTHONY (casualGame)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'dragon tiger', icon: allImages.dregonTiger, segment: 'dragon-tiger', count: 0, info: [{
                    image: allImages.dragonTiger1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.dragonTiger2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.dragonTiger,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },

                ]
            },
            {
                title: 'game show', icon: allImages.teenpatti, segment: 'game-show', count: 5, info: [{
                    image: allImages.teenpatti1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.teenpatti2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.teenpatti3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.teenpatti4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.teenpatti5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.teenpatti6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                ]
            },
            {
                title: 'Live Dragon Tiger', icon: allImages.teenpatti, segment: 'live-dragon-tiger', count: 0, info: [{
                    image: allImages.liveDragonTiger1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveDragonTiger2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveDragonTiger3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveDragonTiger4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveDragonTiger5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveDragonTiger6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveDragonTiger7,
                    title: 'HI LOW (liveDragonTiger)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveDragonTiger8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveDragonTiger9,
                    title: 'POKER (liveDragonTiger)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveDragonTiger10,
                    title: 'AMAR AKBAR ANTHONY (liveDragonTiger)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'Top Card', icon: allImages.teenpatti, segment: 'top-card', count: 8, info: [{
                    image: allImages.topCard1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.topCard2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.topCard3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.topCard4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.topCard5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.topCard6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.topCard7,
                    title: 'HI LOW (topCard)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.topCard8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.topCard9,
                    title: 'POKER (topCard)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                ]
            },
            {
                title: 'Video slots', icon: allImages.teenpatti, segment: 'video-slots', count: 10, info: [{
                    image: allImages.videoSlots1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.videoSlots2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.videoSlots3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.videoSlots4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.videoSlots5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.videoSlots6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.videoSlots7,
                    title: 'HI LOW (videoSlots)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.videoSlots8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.videoSlots9,
                    title: 'POKER (videoSlots)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.videoSlots10,
                    title: 'AMAR AKBAR ANTHONY (videoSlots)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'Crash games', icon: allImages.teenpatti, segment: 'crash-games', count: 20, info: [{
                    image: allImages.crashGames1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.crashGames2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.crashGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.crashGames4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.crashGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.crashGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.crashGames7,
                    title: 'HI LOW (crashGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.crashGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.crashGames9,
                    title: 'POKER (crashGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.crashGames10,
                    title: 'AMAR AKBAR ANTHONY (crashGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'Lottery', icon: allImages.teenpatti, segment: 'lottery', count: 30, info: [{
                    image: allImages.lottery1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.lottery2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.lottery3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.lottery4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.lottery5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.lottery6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.lottery7,
                    title: 'HI LOW (lottery)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.lottery8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.lottery9,
                    title: 'POKER (lottery)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                ]
            },
            {
                title: 'LiveLottery', icon: allImages.teenpatti, segment: 'livlottery', count: 40, info: [{
                    image: allImages.liveLottery1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveLottery2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.liveLottery3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveLottery4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.liveLottery5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.liveLottery6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.liveLottery7,
                    title: 'HI LOW (liveLottery)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.liveLottery8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.liveLottery9,
                    title: 'POKER (liveLottery)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.liveLottery10,
                    title: 'AMAR AKBAR ANTHONY (liveLottery)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'Fishing game', icon: allImages.teenpatti, segment: 'fishing-game', count: 50, info: [{
                    image: allImages.fishingGames1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.fishingGames2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.fishingGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.fishingGames4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.fishingGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.fishingGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.fishingGames7,
                    title: 'HI LOW (fishingGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.fishingGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.fishingGames9,
                    title: 'POKER (fishingGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.fishingGames10,
                    title: 'AMAR AKBAR ANTHONY (fishingGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'scratch card', icon: allImages.teenpatti, segment: 'scratch-card', count: 60, info: [{
                    image: allImages.scratchCard1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.scratchCard2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.scratchCard3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.scratchCard4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.scratchCard5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.scratchCard6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.scratchCard7,
                    title: 'HI LOW (scratchCard)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.scratchCard8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.scratchCard9,
                    title: 'POKER (scratchCard)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.scratchCard10,
                    title: 'AMAR AKBAR ANTHONY (scratchCard)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'virtual sports', icon: allImages.teenpatti, segment: 'visual-sports', count: 0, info: [{
                    image: allImages.virtualSports1,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.virtualSports2,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)"
                },
                {
                    image: allImages.virtualSports3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)"
                },
                {
                    image: allImages.virtualSports4,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                {
                    image: allImages.virtualSports5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)"
                },
                {
                    image: allImages.virtualSports6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)"
                },
                {
                    image: allImages.virtualSports7,
                    title: 'HI LOW (virtualSports)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)"
                },
                {
                    image: allImages.virtualSports8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    image: allImages.virtualSports9,
                    title: 'POKER (virtualSports)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)"
                },
                {
                    image: allImages.virtualSports10,
                    title: 'AMAR AKBAR ANTHONY (virtualSports)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)"
                },
                ]
            },
            {
                title: 'sportsbook', icon: allImages.teenpatti, segment: 'sportsbook', count: 0, info: [{
                    image: allImages.sportsbook,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                ]
            },
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
