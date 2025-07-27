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
                            "title": "FANCY BET (SRI LANKA vs BANGLADESH)",
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
                        { name: 'ENGLAND vs INDIA', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                    ],
                },
                {
                    title: 'INTERNATIONAL TWENTY20 MATCHES ',
                    icon: BlackIcon,
                    segment: 'INTERNATIONAL-TWENTY20-MATCHES ',
                    count: 3,
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
                            "title": "FANCY BET (SRI LANKA vs BANGLADESH)",
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
                        { name: 'SRILANKA vs BANGLADESH ', icon: HollowCircleIcon, count: 0 },
                        { name: 'MATCH ODDS', icon: HollowCircleIcon, count: 0 },
                        { name: 'ZIMBABWE vs SOUTH AFRICA ', icon: HollowCircleIcon, count: 0 },
                    ],
                },
                {
                    title: 'ENGLAND vs INDIA',
                    icon: BlackIcon,
                    segment: 'ENGLAND-INDIA ',
                    count: 2,
                    matches: [
                        { name: 'ENGLAND vs INDIA', icon: HollowCircleIcon, count: 0 },
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
                        { name: 'RANGPUR RIDERS vs HOBART HURRICANES ', icon: HollowCircleIcon, count: 0 },
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
            {
                title: 'aura', icon: TeenPattiIcon, segment: 'aura', count: 12, info: [
                    {
                        id: 4,
                        image: allImages.continuePlaying1,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 5,
                        image: allImages.continuePlaying2,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 6,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 7,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 8,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: '3 oaks gaming', icon: OaksGamingIcon, segment: '3-oaks-gaming', count: 10, info: [
                    {
                        id: 9,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 10,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 11,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 12,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 13,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'ae sexy', icon: AEGameIcon, segment: 'ae-sexy', count: 4, info: [
                    {
                        id: 14,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 15,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 16,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 17,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 18,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'aviatrix', icon: AviatrixIcon, segment: 'aviatrix', count: 5, info: [
                    {
                        id: 19,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 20,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 21,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 22,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 23,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'bestsolution', icon: BestSoultionIcon, segment: 'bestsolution', count: 30, info: [
                    {
                        id: 24,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 25,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 26,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 27,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 28,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'bti', icon: BitIcon, segment: 'bti', count: 10, info: [
                    {
                        id: 29,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 30,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 31,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 32,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 33,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'charismatic', icon: CharismaticIcon, segment: 'charismatic', count: 0, info: [
                    {
                        id: 34,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 35,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 36,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 37,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 38,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'evolution gaming', icon: EvolutionIcon, segment: 'evolution-gaming', count: 0, info: [
                    {
                        id: 39,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 40,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 41,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 42,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 43,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'ezugi', icon: EzugiIcon, segment: 'ezugi', count: 6, info: [
                    {
                        id: 44,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 45,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 46,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 47,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 48,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'fantasma games', icon: FantasmaGamesIcon, segment: 'fantasma-games', count: 8, info: [
                    {
                        id: 49,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 50,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 51,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 52,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 53,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'gamzix', icon: GamzixIcon, segment: 'gamzix', count: 9, info: [
                    {
                        id: 54,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 55,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 56,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 57,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 58,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'habanero', icon: HabaneroIcon, segment: 'habanero', count: 15, info: [
                    {
                        id: 59,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 60,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 61,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 62,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 63,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'jili games', icon: JiliGameIcon, segment: 'jili-games', count: 36, info: [
                    {
                        id: 64,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 65,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 66,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 67,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 68,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'kingnidas', icon: KingmidasIcon, segment: 'kingnidas', count: 45, info: [
                    {
                        id: 69,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 70,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 71,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 72,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 73,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'netEnt', icon: NetEntIcon, segment: 'netent', count: 0, info: [
                    {
                        id: 74,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 75,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 76,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 77,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 78,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'nolimit city', icon: NoLimitCityIcon, segment: 'nolimit-city', count: 33, info: [
                    {
                        id: 79,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 80,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 81,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 82,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 83,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'one game', icon: OneGameIcon, segment: 'one-game', count: 100, info: [
                    {
                        id: 84,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 85,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 86,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 87,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 88,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'pg soft', icon: PgSoftIcon, segment: 'pg-soft', count: 231, info: [
                    {
                        id: 89,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 90,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 91,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 92,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 93,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: "play go", icon: PlaysGoIcon, segment: 'plays-go', count: 23, info: [
                    {
                        id: 94,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 95,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 96,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 97,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 98,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'playtech', icon: PlayTechIcon, segment: 'playtech', count: 45, info: [
                    {
                        id: 99,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 100,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 101,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 102,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 103,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'playtechLive', icon: PlayTechIcon, segment: 'playtechlive', count: 56, info: [
                    {
                        id: 104,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 105,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 106,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 107,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 108,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'pragmatic play', icon: PragmenticGameIcon, segment: 'pragmatic-play', count: 67, info: [
                    {
                        id: 109,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 110,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 111,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 112,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 113,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'pragmatic play live', icon: PragmenticGameIcon, segment: 'pragmatic-play-live', count: 0, info: [
                    {
                        id: 114,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 115,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 116,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 117,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 118,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'quickspin', icon: QuickPinIcon, segment: 'quickspin', count: 0, info: [
                    {
                        id: 119,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 120,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 121,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 122,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 123,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'red tiger', icon: RedTigerIcon, segment: 'red-tiger', count: 43, info: [
                    {
                        id: 124,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 125,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 126,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 127,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 128,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'relax gaming', icon: RelexGamingIcon, segment: 'relax-gaming', count: 56, info: [
                    {
                        id: 129,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 130,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 131,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 132,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 133,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'royal gaming', icon: RoyalGamingIcon, segment: 'royal-gaming', count: 67, info: [
                    {
                        id: 134,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 135,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 136,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 137,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 138,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'smartsoft gaming', icon: SmartSoftIcon, segment: 'smartsoft-gaming', count: 7, info: [
                    {
                        id: 139,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 140,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 141,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 142,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 143,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'spinomenal', icon: SpinomenalIcon, segment: 'spinomenal', count: 10, info: [
                    {
                        id: 144,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 145,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 146,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 147,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 148,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'spribe', icon: SpriteIcon, segment: 'spribe', count: 1, info: [
                    {
                        id: 149,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 150,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 151,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 152,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 153,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'TVBet', icon: TvBetIcon, segment: 'tvbet', count: 2, info: [
                    {
                        id: 154,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 155,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 156,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 157,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 158,
                        image: allImages.continuePlaying5,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
            {
                title: 'voltEnt', icon: VoltEntIcon, segment: 'voltent', count: 3, info: [
                    {
                        id: 159,
                        image: allImages.continuePlaying1,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)"
                    }, {
                        id: 160,
                        image: allImages.continuePlaying2,
                        title: '7 UP&DOWN',
                        video: allImages._7Up_DownVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)"
                    }, {
                        id: 161,
                        image: allImages.continuePlaying3,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)"
                    }, {
                        id: 162,
                        image: allImages.continuePlaying4,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        video: allImages.teenpatti_testVideo,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)"
                    }, {
                        id: 163,
                        image: allImages.continuePlaying5,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)"
                    },
                ]
            },
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
                        id: 164,
                        image: allImages.continuePlaying1,
                        title: 'Avitaro',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgba(39, 201, 44, 0.8)",
                        video: allImages.aviatorsVideo
                    }, {
                        id: 165,
                        image: allImages.continuePlaying2,
                        title: 'Dregon Tiger',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(251, 53, 101)",
                        // video:allImages
                    }, {
                        id: 166,
                        image: allImages.continuePlaying3,
                        title: 'TeenPatti',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: " rgb(238, 97, 89)",
                        video: allImages.teenPattiVideo
                    }, {
                        id: 167,
                        image: allImages.continuePlaying4,
                        title: 'JetX',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(31, 178, 252)",
                        video: allImages.aviatorsVideo
                    }, {
                        id: 168,
                        image: allImages.continuePlaying5,
                        title: 'TeenPatti T20',
                        video: allImages.teenpattiT20Video,
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(190, 59, 250)",
                    },
                ]
            },
            {
                title: 'teen patti', icon: allImages.teenpatti, segment: 'teen-patti', count: 0, info: [
                    {
                        id: 169,
                        image: allImages.teenpatti1,
                        title: 'TEENPATTI ONE DAY',
                        video: allImages.teenpatti_one_dayVideo,
                        text: 'Aura',
                        color: "rgb(246, 55, 83)",
                        to: "/aura-game",
                    },
                    {
                        id: 170,
                        image: allImages.teenpatti2,
                        title: 'TEENPATTI T20',
                        text: 'Aura',
                        color: "rgb(69, 141, 250)",
                        video: allImages.teenpattiT20Video,
                        to: "/aura-game",
                    },
                    {
                        id: 171,
                        image: allImages.teenpatti3,
                        title: 'TEENPATTI MUFLIS',
                        text: 'Aura',
                        color: "rgb(31, 178, 252)",
                        video: allImages.muflis_teenpattiVideo,
                        to: "/aura-game",
                    },
                    {
                        id: 172,
                        image: allImages.teenpatti4,
                        title: '2 CARDS TEENPATTI',
                        video: allImages._2Card_teenpattiVideo,
                        text: 'Aura',
                        color: "rgb(190, 59, 250)",
                    },
                    {
                        id: 173,
                        image: allImages.teenpatti5,
                        title: 'TEENPATTI TEST',
                        video: allImages.teenpatti_testVideo,
                        text: 'Aura',
                        color: "rgba(39, 201, 44, 0.8)",
                        to: "/aura-game",
                    },
                    {
                        id: 174,
                        image: allImages.teenpatti6,
                        title: 'TEENPATTI OPEN',
                        text: 'Aura',
                        color: "rgb(31, 178, 252)",
                        to: "/aura-game",
                        // video:allImages.
                    },
                ],
            },
            {
                title: 'live', icon: allImages.livegame, segment: '32Cards', count: 12, info: [{
                    id: 175,
                    image: allImages.live1,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                    video: allImages._32Cards
                },
                {
                    id: 176,
                    image: allImages.live2,
                    title: 'HI LOW',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)", to: "/aura-game",
                },
                {
                    id: 177,
                    image: allImages.live3,
                    title: 'POKER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)", to: "/aura-game",
                },
                {
                    id: 178,
                    image: allImages.live4,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)", to: "/aura-game",
                },
                {
                    id: 179,
                    image: allImages.live5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)", to: "/aura-game",
                },
                {
                    id: 180,
                    image: allImages.live6,
                    title: 'TEENPATTI ONE DAY',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    video: allImages.teenpatti_one_dayVideo, to: "/aura-game",
                },
                {
                    id: 181,
                    image: allImages.live7,
                    title: 'TEENPATTI T20',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    video: allImages.teenpattiT20Video, to: "/aura-game",
                },
                {
                    id: 182,
                    image: allImages.live8,
                    title: 'MATKA',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)", to: "/aura-game",
                },
                {
                    id: 183,
                    image: allImages.live9,
                    title: '7 UP&DOWN',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    video: allImages._7Up_DownVideo, to: "/aura-game",
                },
                {
                    id: 184,
                    image: allImages.live10,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)", to: "/aura-game",
                },
                ]
            },
            {
                title: 'virtual', icon: allImages.virtual, segment: 'virtual', count: 34, info: [{
                    id: 185,
                    image: allImages.virtual1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 186,
                    image: allImages.virtual2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)", to: "/aura-game",
                },
                {
                    id: 187,
                    image: allImages.virtual3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 188,
                    image: allImages.virtual4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 189,
                    image: allImages.virtual5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 190,
                    image: allImages.virtual6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 191,
                    image: allImages.virtual7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 192,
                    image: allImages.virtual8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 193,
                    image: allImages.virtual9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 194,
                    image: allImages.virtual10,
                    title: 'AMAR AKBAR ANTHONY (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'roulette', icon: allImages.roulette, segment: 'roulette', count: 56, info: [{
                    id: 195,
                    image: allImages.live1,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 196,
                    image: allImages.live2,
                    title: 'HI LOW',
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 197,
                    image: allImages.live3,
                    title: 'POKER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 198,
                    image: allImages.live4,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 199,
                    image: allImages.live5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 200,
                    image: allImages.live6,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 201,
                    image: allImages.live7,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 202,
                    image: allImages.live8,
                    title: 'MATKA',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 203,
                    image: allImages.live9,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 204,
                    image: allImages.live10,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'live baccarat', icon: allImages.LiveBaccarat, segment: 'live-baccarat', count: 0, info: [{
                    id: 205,
                    image: allImages.liveBaccarat1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 206,
                    image: allImages.liveBaccarat2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 207,
                    image: allImages.liveBaccarat3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 207,
                    image: allImages.liveBaccarat4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 208,
                    image: allImages.liveBaccarat5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 209,
                    image: allImages.liveBaccarat6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 210,
                    image: allImages.liveBaccarat7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 211,
                    image: allImages.liveBaccarat8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 212,
                    image: allImages.liveBaccarat9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 213,
                    image: allImages.liveBaccarat10,
                    title: 'AMAR AKBAR ANTHONY (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'live roulette', icon: allImages.LiveRoulette, segment: 'live-roulette', count: 0, info: [{
                    id: 214,
                    image: allImages.liveRoulette1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 215,
                    image: allImages.liveRoulette2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 216,
                    image: allImages.liveRoulette3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 217,
                    image: allImages.liveRoulette4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 218,
                    image: allImages.liveRoulette5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 219,
                    image: allImages.liveRoulette6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 220,
                    image: allImages.liveRoulette7,
                    title: 'HI LOW (liveRoulette)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 221,
                    image: allImages.liveRoulette8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 222,
                    image: allImages.liveRoulette9,
                    title: 'POKER (liveRoulette)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 223,
                    image: allImages.liveRoulette10,
                    title: 'AMAR AKBAR ANTHONY (liveRoulette)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'live sic bo', icon: allImages.teenpatti, segment: 'live-sic-bo', count: 100, info: [{
                    id: 224,
                    image: allImages.liveSicBo1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 225,
                    image: allImages.liveSicBo2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 226,
                    image: allImages.liveSicBo3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 227,
                    image: allImages.liveSicBo4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 228,
                    image: allImages.liveSicBo5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 229,
                    image: allImages.liveSicBo6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 230,
                    image: allImages.liveSicBo7,
                    title: 'HI LOW (liveSicBo)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 231,
                    image: allImages.liveSicBo8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 232,
                    image: allImages.liveSicBo9,
                    title: 'POKER (liveSicBo)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 233,
                    image: allImages.liveSicBo10,
                    title: 'AMAR AKBAR ANTHONY (liveSicBo)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'live blackjack', icon: allImages.LiveBlackjack, segment: 'live-blackjack', count: 101, info: [{
                    id: 234,
                    image: allImages.liveBlackjack1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 235,
                    image: allImages.liveBlackjack2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 236,
                    image: allImages.liveBlackjack3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 237,
                    image: allImages.liveBlackjack4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 238,
                    image: allImages.liveBlackjack5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 239,
                    image: allImages.liveBlackjack6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 240,
                    image: allImages.liveBlackjack7,
                    title: 'HI LOW (liveBlackjack)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 241,
                    image: allImages.liveBlackjack8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 242,
                    image: allImages.liveBlackjack9,
                    title: 'POKER (liveBlackjack)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 243,
                    image: allImages.liveBlackjack10,
                    title: 'AMAR AKBAR ANTHONY (liveBlackjack)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'table game', icon: allImages.tableGames, segment: 'table-game', count: 23, info: [{
                    id: 244,
                    image: allImages.tableGames1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 245,
                    image: allImages.tableGames2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 246,
                    image: allImages.tableGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 247,
                    image: allImages.tableGames4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 248,
                    image: allImages.tableGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 249,
                    image: allImages.tableGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 250,
                    image: allImages.tableGames7,
                    title: 'HI LOW (tableGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 251,
                    image: allImages.tableGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 252,
                    image: allImages.tableGames9,
                    title: 'POKER (tableGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 253,
                    image: allImages.tableGames10,
                    title: 'AMAR AKBAR ANTHONY (tableGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'live poker', icon: allImages.livePoker, segment: 'live-poker', count: 45, info: [{
                    id: 254,
                    image: allImages.livePoker1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 255,
                    image: allImages.livePoker2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 256,
                    image: allImages.livePoker3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 257,
                    image: allImages.livePoker4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 258,
                    image: allImages.livePoker5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 259,
                    image: allImages.livePoker6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 260,
                    image: allImages.livePoker7,
                    title: 'HI LOW (livePoker)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 261,
                    image: allImages.livePoker8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 262,
                    image: allImages.livePoker9,
                    title: 'POKER (livePoker)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 263,
                    image: allImages.livePoker10,
                    title: 'AMAR AKBAR ANTHONY (livePoker)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            // { title: 'live dealer', icon: liveDealer, segment: 'live-dealer', count: 0 },
            {
                title: 'baccarat', icon: allImages.bacarret, segment: 'baccarat', count: 45, info: [
                    {
                        id: 264,
                        image: allImages.baccarat1,
                        title: 'TEENPATTI T20',
                        to: "/aura-game",
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(246, 55, 83)"
                    },
                    {
                        id: 265,
                        image: allImages.baccarat2,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)",
                        to: "/aura-game",
                    },
                    {
                        id: 266,
                        image: allImages.baccarat3,
                        title: 'Multi-Language Support',
                        text: 'Available in Hindi, English, and more',
                        color: "rgb(190, 59, 250)",
                        to: "/aura-game",
                    },
                    {
                        id: 267,
                        image: allImages.baccarat4,
                        title: 'Multiplayer Gameplay',
                        text: 'Play with friends or join public tables',
                        color: "rgb(31, 178, 252)",
                        to: "/aura-game",
                    },
                    {
                        id: 268,
                        image: allImages.baccarat5,
                        title: '7 UP&DOWN',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(246, 55, 83)",
                        to: "/aura-game",
                    },
                    {
                        id: 269,
                        image: allImages.baccarat6,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)",
                        to: "/aura-game",
                    },
                    {
                        id: 270,
                        image: allImages.baccarat7,
                        title: 'Multi-Language Support',
                        text: 'Available in Hindi, English, and more',
                        color: "rgb(190, 59, 250)",
                        to: "/aura-game",
                    },
                    {
                        id: 271,
                        image: allImages.baccarat8,
                        title: 'Multiplayer Gameplay',
                        text: 'Play with friends or join public tables',
                        color: "rgb(31, 178, 252)",
                        to: "/aura-game",
                    },
                    {
                        id: 272,
                        image: allImages.baccarat9,
                        title: 'Flexible Bet Range',
                        text: 'Bet from ₹10 to ₹1,000',
                        to: "/aura-game",
                        color: "rgb(246, 55, 83)",
                        to: "/aura-game",
                    },
                    {
                        id: 273,
                        image: allImages.baccarat10,
                        title: 'Real Dealers',
                        text: 'Experience live Teen Patti with real hosts',
                        color: "rgb(69, 141, 250)",
                        to: "/aura-game",
                    },
                ]
            },
            {
                title: 'poker', icon: allImages.poker, segment: 'poker', count: 56, info: [{
                    id: 274,
                    image: allImages.poker1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 275,
                    image: allImages.poker2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 276,
                    image: allImages.poker3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 277,
                    image: allImages.poker4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 278,
                    image: allImages.poker5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 279,
                    image: allImages.poker6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 280,
                    image: allImages.poker7,
                    title: 'HI LOW (VIRTUAL)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 281,
                    image: allImages.poker8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 282,
                    image: allImages.poker9,
                    title: 'POKER (VIRTUAL)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'blackjack', icon: allImages.Blackjack, segment: 'blackjack', count: 67, info: [{
                    id: 283,
                    image: allImages.blackjack1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 284,
                    image: allImages.blackjack2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 285,
                    image: allImages.blackjack3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 286,
                    image: allImages.blackjack4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 287,
                    image: allImages.blackjack5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 288,
                    image: allImages.blackjack6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 289,
                    image: allImages.blackjack7,
                    title: 'HI LOW (blackjack)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 290,
                    image: allImages.blackjack8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 291,
                    image: allImages.blackjack9,
                    title: 'POKER (blackjack)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 292,
                    image: allImages.blackjack10,
                    title: 'AMAR AKBAR ANTHONY (blackjack)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'lucky7', icon: allImages.luckey7, segment: 'lucky7', count: 0, info: [{
                    id: 293,
                    image: allImages.Lucky7,
                    title: 'luckey7',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: '32cards', icon: allImages._32Cards, segment: '32cards', count: 3, info: [{
                    id: 294,
                    image: allImages._32Cards,
                    title: '32Cards',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'casual games', icon: allImages.casualGame, segment: 'casual-games', count: 0, info: [{
                    id: 295,
                    image: allImages.casualGame1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 296,
                    image: allImages.casualGame2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 297,
                    image: allImages.casualGame3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 298,
                    image: allImages.casualGame4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 299,
                    image: allImages.casualGame5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 300,
                    image: allImages.casualGame6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 301,
                    image: allImages.casualGame7,
                    title: 'HI LOW (casualGame)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 302,
                    image: allImages.casualGame8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 303,
                    image: allImages.casualGame9,
                    title: 'POKER (casualGame)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 304,
                    image: allImages.casualGame10,
                    title: 'AMAR AKBAR ANTHONY (casualGame)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 305,
                    image: allImages.casualGame11,
                    title: 'AMAR AKBAR ANTHONY (casualGame)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'dragon tiger', icon: allImages.dregonTiger, segment: 'dragon-tiger', count: 0, info: [{
                    id: 306,
                    image: allImages.dragonTiger1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 307,
                    image: allImages.dragonTiger2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 308,
                    image: allImages.dragonTiger,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'game show', icon: allImages.teenpatti, segment: 'game-show', count: 5, info: [{
                    id: 309,
                    image: allImages.teenpatti1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 310,
                    image: allImages.teenpatti2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 311,
                    image: allImages.teenpatti3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 312,
                    image: allImages.teenpatti4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 313,
                    image: allImages.teenpatti5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 314,
                    image: allImages.teenpatti6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Live Dragon Tiger', icon: allImages.teenpatti, segment: 'live-dragon-tiger', count: 0, info: [{
                    id: 315,
                    image: allImages.liveDragonTiger1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 316,
                    image: allImages.liveDragonTiger2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 317,
                    image: allImages.liveDragonTiger3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 318,
                    image: allImages.liveDragonTiger4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 319,
                    image: allImages.liveDragonTiger5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 320,
                    image: allImages.liveDragonTiger6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 321,
                    image: allImages.liveDragonTiger7,
                    title: 'HI LOW (liveDragonTiger)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 322,
                    image: allImages.liveDragonTiger8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 323,
                    image: allImages.liveDragonTiger9,
                    title: 'POKER (liveDragonTiger)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 324,
                    image: allImages.liveDragonTiger10,
                    title: 'AMAR AKBAR ANTHONY (liveDragonTiger)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Top Card', icon: allImages.teenpatti, segment: 'top-card', count: 8, info: [{
                    id: 325,
                    image: allImages.topCard1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 326,
                    image: allImages.topCard2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 327,
                    image: allImages.topCard3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 328,
                    image: allImages.topCard4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 329,
                    image: allImages.topCard5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 330,
                    image: allImages.topCard6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 331,
                    image: allImages.topCard7,
                    title: 'HI LOW (topCard)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 332,
                    image: allImages.topCard8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 333,
                    image: allImages.topCard9,
                    title: 'POKER (topCard)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Video slots', icon: allImages.teenpatti, segment: 'video-slots', count: 10, info: [{
                    id: 334,
                    image: allImages.videoSlots1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 335,
                    image: allImages.videoSlots2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 336,
                    image: allImages.videoSlots3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 337,
                    image: allImages.videoSlots4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 338,
                    image: allImages.videoSlots5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 339,
                    image: allImages.videoSlots6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 340,
                    image: allImages.videoSlots7,
                    title: 'HI LOW (videoSlots)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 341,
                    image: allImages.videoSlots8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 342,
                    image: allImages.videoSlots9,
                    title: 'POKER (videoSlots)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 343,
                    image: allImages.videoSlots10,
                    title: 'AMAR AKBAR ANTHONY (videoSlots)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Crash games', icon: allImages.teenpatti, segment: 'crash-games', count: 20, info: [{
                    id: 344,
                    image: allImages.crashGames1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 345,
                    image: allImages.crashGames2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 346,
                    image: allImages.crashGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 347,
                    image: allImages.crashGames4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 348,
                    image: allImages.crashGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 349,
                    image: allImages.crashGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 350,
                    image: allImages.crashGames7,
                    title: 'HI LOW (crashGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 351,
                    image: allImages.crashGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 352,
                    image: allImages.crashGames9,
                    title: 'POKER (crashGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 353,
                    image: allImages.crashGames10,
                    title: 'AMAR AKBAR ANTHONY (crashGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Lottery', icon: allImages.teenpatti, segment: 'lottery', count: 30, info: [{
                    id: 354,
                    image: allImages.lottery1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 355,
                    image: allImages.lottery2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 356,
                    image: allImages.lottery3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 357,
                    image: allImages.lottery4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 358,
                    image: allImages.lottery5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 359,
                    image: allImages.lottery6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 360,
                    image: allImages.lottery7,
                    title: 'HI LOW (lottery)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 361,
                    image: allImages.lottery8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 362,
                    image: allImages.lottery9,
                    title: 'POKER (lottery)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'LiveLottery', icon: allImages.teenpatti, segment: 'livlottery', count: 40, info: [{
                    id: 362,
                    image: allImages.liveLottery1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 363,
                    image: allImages.liveLottery2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 364,
                    image: allImages.liveLottery3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 365,
                    image: allImages.liveLottery4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 366,
                    image: allImages.liveLottery5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 367,
                    image: allImages.liveLottery6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 368,
                    image: allImages.liveLottery7,
                    title: 'HI LOW (liveLottery)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 369,
                    image: allImages.liveLottery8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 370,
                    image: allImages.liveLottery9,
                    title: 'POKER (liveLottery)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 371,
                    image: allImages.liveLottery10,
                    title: 'AMAR AKBAR ANTHONY (liveLottery)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'Fishing game', icon: allImages.teenpatti, segment: 'fishing-game', count: 50, info: [{
                    id: 372,
                    image: allImages.fishingGames1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 373,
                    image: allImages.fishingGames2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 374,
                    image: allImages.fishingGames3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 375,
                    image: allImages.fishingGames4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 376,
                    image: allImages.fishingGames5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 377,
                    image: allImages.fishingGames6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 378,
                    image: allImages.fishingGames7,
                    title: 'HI LOW (fishingGames)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 379,
                    image: allImages.fishingGames8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 380,
                    image: allImages.fishingGames9,
                    title: 'POKER (fishingGames)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 381,
                    image: allImages.fishingGames10,
                    title: 'AMAR AKBAR ANTHONY (fishingGames)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'scratch card', icon: allImages.teenpatti, segment: 'scratch-card', count: 60, info: [{
                    id: 382,
                    image: allImages.scratchCard1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 383,
                    image: allImages.scratchCard2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 384,
                    image: allImages.scratchCard3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 385,
                    image: allImages.scratchCard4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 386,
                    image: allImages.scratchCard5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 387,
                    image: allImages.scratchCard6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 388,
                    image: allImages.scratchCard7,
                    title: 'HI LOW (scratchCard)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 389,
                    image: allImages.scratchCard8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 390,
                    image: allImages.scratchCard9,
                    title: 'POKER (scratchCard)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 391,
                    image: allImages.scratchCard10,
                    title: 'AMAR AKBAR ANTHONY (scratchCard)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'virtual sports', icon: allImages.teenpatti, segment: 'visual-sports', count: 0, info: [{
                    id: 392,
                    image: allImages.virtualSports1,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)"
                },
                {
                    id: 393,
                    image: allImages.virtualSports2,
                    title: '7 UP&DOWN',
                    video: allImages._7Up_DownVideo,
                    text: 'Aura',
                    color: "rgb(251, 53, 101)",
                    to: "/aura-game",
                },
                {
                    id: 394,
                    image: allImages.virtualSports3,
                    title: 'DRAGON TIGER',
                    text: 'Aura',
                    color: "rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 395,
                    image: allImages.virtualSports4,
                    title: 'TEENPATTI ONE DAY',
                    video: allImages.teenpatti_one_dayVideo,
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                {
                    id: 396,
                    image: allImages.virtualSports5,
                    title: 'ANDER BAHAR',
                    text: 'Aura',
                    color: "rgb(190, 59, 250)",
                    to: "/aura-game",
                },
                {
                    id: 397,
                    image: allImages.virtualSports6,
                    title: 'SIX PLAYER POKER',
                    text: 'Aura',
                    color: "rgb(69, 141, 250)",
                    to: "/aura-game",
                },
                {
                    id: 398,
                    image: allImages.virtualSports7,
                    title: 'HI LOW (virtualSports)',
                    text: 'Aura',
                    color: "rgb(246, 55, 83)",
                    to: "/aura-game",
                },
                {
                    id: 399,
                    image: allImages.virtualSports8,
                    title: '32CARD CASINO',
                    text: 'Aura',
                    color: "rgba(39, 201, 44, 0.8)",
                    to: "/aura-game",
                },
                {
                    id: 400,
                    image: allImages.virtualSports9,
                    title: 'POKER (virtualSports)',
                    text: 'Aura',
                    color: " rgb(238, 97, 89)",
                    to: "/aura-game",
                },
                {
                    id: 401,
                    image: allImages.virtualSports10,
                    title: 'AMAR AKBAR ANTHONY (virtualSports)',
                    text: 'Aura',
                    color: "rgb(31, 178, 252)",
                    to: "/aura-game",
                },
                ]
            },
            {
                title: 'sportsbook', icon: allImages.teenpatti, segment: 'sportsbook', count: 0, info: [{
                    id: 402,
                    image: allImages.sportsbook,
                    title: 'TEENPATTI T20',
                    to: "/aura-game",
                    video: allImages.teenpattiT20Video,
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
            { title: 'In Play', icon: YouTubeIcon, segment: 'in_play', count: 1, id: 1 },
            { title: 'Upcoming', icon: CalendarMonthIcon, segment: 'upcoming', count: 112, id: 2 },
            { title: 'Favourites', icon: FavoriteBorderIcon, segment: 'favourite', count: 0, id: 3 },
        ],
    },
};

export const casionData = categoriesData?.categories?.items?.map(item => ({
    info: item?.info,
    title: item?.title,
    icon: item?.icon
}));
