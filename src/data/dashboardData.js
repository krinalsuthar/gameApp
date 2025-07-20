// D:\Practice\gamekhelo\gamelheloApp\src\assets\TrendingGamesImages\thumb4.png
import image1 from "../assets/TrendingGamesImages/thumb1.png"
import image2 from "../assets/TrendingGamesImages/thumb2.png"
import image3 from "../assets/TrendingGamesImages/thumb3.png"
import image4 from "../assets/TrendingGamesImages/thumb4.png"
import image5 from "../assets/TrendingGamesImages/thumb5.png"
import image6 from "../assets/TrendingGamesImages/thumb6.png"
import image7 from "../assets/TrendingGamesImages/thumb7.png"
import image8 from "../assets/TrendingGamesImages/cricket.png"
import image9 from "../assets/TrendingGamesImages/soccer.png"
import image10 from "../assets/TrendingGamesImages/tennis.png"
import {
    AccountCircle,
    AttachMoney,
    MoneyOff,
    Description,
    ReceiptLong,
    Wallet,
    TrendingUp,
    GroupAdd,
    LocalOffer,
    Report,
    History,
    Redeem,
    SportsScore,
    Settings,
    LockReset,
} from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { faScroll, faCoins, faMoneyBill1, faGift, faGifts, faBaseball, faDice, faEquals, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
export const TrendingGamesData = {
    data: [{ title: "AVIATOR", text: "Spribe", image: image1, color: "rgb(246, 55, 83)", to: '/aviator' },
    { title: "Crazy Time", text: "Evolution Gaming", image: image2, color: "rgb(69, 141, 250)" },
    { title: "JetX", text: "Smartsoft Gaming", image: image3, color: "rgb(190, 59, 250)", to: '/aviator' },
    { title: "Dragon Tiger", text: "Evolution Gaming", image: image4, color: "rgb(31, 178, 252)" },
    { title: "Andar Bahar.", text: "Aura", image: image5, color: " rgb(238, 97, 89)" },
    { title: "Teenpatti T20", text: "Aura", image: image6, color: " rgb(251, 53, 101)", to: "/aura-game" },
    { title: "7 up & down", text: "Aura", image: image7, color: "rgba(39, 201, 44, 0.8)", to: "/aura-game" }]
}
export const TopGamesData = {
    data: [
        { image: image8, color: "rgba(0, 0, 0, 0.5)", title: "cricket" },
        { image: image9, color: "rgba(0, 0, 0, 0.5)", title: "soccer" },
        { image: image10, color: "rgba(0, 0, 0, 0.5)", title: "tennis" },
    ]
}
export const sportsData = [
    {
        sport: 'Cricket',
        matches: [
            {
                tag: 'LIVE',
                series: 'Test Matches',
                time: '',
                teams: 'Zimbabwe 🆚 South Africa',
                odds: ['10', '10.5', '18.5', '19', '1.17', '1.18'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 9 },
                    { label: 'MO', value: 2 },
                ],
            },
            {
                tag: 'Today',
                series: 'Test Matches',
                time: '03:30 PM',
                teams: 'England 🆚 India',
                odds: ['100', '110', '5.9', '6', '1.21', '1.22'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 6 },
                    { label: 'MO', value: 1 },
                ],
            },
            {
                tag: 'Today',
                series: "Women's T20 Blast",
                time: '04:30 PM',
                teams: 'Surrey W 🆚 Essex W',
                odds: ['1.46', '1.62', '-', '-', '2.6', '3.3'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: "Women's T20 Blast Div 2",
                time: '07:00 PM',
                teams: 'Leicestershire Foxes W 🆚 Derbyshire Falcons W',
                odds: ['2.24', '2.86', '-', '-', '1.54', '1.8'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 2 },
                ],
            },
            {
                tag: 'Today',
                series: 'Tamil Nadu Premier League',
                time: '07:15 PM',
                teams: 'Tiruppur Tamizhans 🆚 Dindigul Dragons',
                odds: ['1.8', '1.81', '-', '-', '2.22', '2.24'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 5 },
                ],
            },
            {
                tag: 'Today',
                series: 'T20 Blast',
                time: '07:30 PM',
                teams: 'Northamptonshire 🆚 Worcestershire',
                odds: ['2.42', '2.46', '-', '-', '1.69', '1.7'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 48 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: 'Test Matches',
                time: '07:30 PM',
                teams: 'West Indies 🆚 Australia',
                odds: ['1.15', '1.16', '75', '80', '7.8', '8'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 7 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: 'T20 Blast',
                time: '09:00 PM',
                teams: 'Surrey 🆚 Essex',
                odds: ['3.3', '3.6', '-', '-', '1.39', '1.43'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 48 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 3 },
                ],
            },
            {
                tag: 'Tomorrow',
                series: 'Major League Cricket',
                time: '12:30 AM',
                teams: 'Washington Freedom 🆚 Mi New York',
                odds: ['1.6', '2.22', '-', '-', '1.82', '2.64'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 5 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Tomorrow',
                series: 'Major League Cricket',
                time: '04:30 AM',
                teams: 'Los Angeles Knight Riders 🆚 San Francisco Unicorns',
                odds: ['1.46', '7', '-', '-', '1.4', '2.68'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Tuesday',
                series: 'Irish Inter Provincial T20 Trophy',
                time: '03:15 PM',
                teams: 'Leinster Lightning 🆚 Munster Reds',
                odds: ['3.65', '3.85', '-', '-', '1.35', '1.38'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
        ],
    },
    {
        sport: 'Tennis',
        matches: [
            {
                tag: 'LIVE',
                series: "Men's Wimbledon 2025",
                teams: 'Dimitrov 🆚 Moutet',
                odds: ['1.36', '1.38', '-', '-', '3.7', '3.75'],
            },
            {
                tag: 'LIVE',
                series: "Men's Wimbledon 2025",
                teams: 'Marozsan 🆚 Munar',
                odds: ['22', '26', '-', '-', '1.04', '1.05'],
            },
            {
                tag: 'LIVE',
                series: "Men's Wimbledon 2025",
                teams: 'Evans 🆚 Djokovic',
                odds: ['-', '1.01', '-', '-', '1000', '-'],
            },
            {
                tag: 'LIVE',
                series: "Women's Wimbledon 2024",
                teams: 'H Baptiste 🆚 Vict Mboko',
                odds: ['1.04', '1.05', '-', '-', '23', '25'],
            },
            {
                tag: 'LIVE',
                series: 'Troyes Challenger 2025',
                teams: 'Trungelliti 🆚 Martineau',
                odds: ['1.55', '1.63', '-', '-', '2.58', '2.82'],
            },
        ],
    },
];
export const sportData = [
    {
        sport: 'Cricket',
        matches: [
            {
                tag: 'LIVE',
                series: 'Test Matches',
                time: '',
                teams: 'Zimbabwe 🆚 South Africa',
                odds: ['10', '10.5', '18.5', '19', '1.17', '1.18'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 9 },
                    { label: 'MO', value: 2 },
                ],
            },
            {
                tag: 'Today',
                series: 'Test Matches',
                time: '03:30 PM',
                teams: 'England 🆚 India',
                odds: ['100', '110', '5.9', '6', '1.21', '1.22'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 6 },
                    { label: 'MO', value: 1 },
                ],
            },
            {
                tag: 'Today',
                series: "Women's T20 Blast",
                time: '04:30 PM',
                teams: 'Surrey W 🆚 Essex W',
                odds: ['1.46', '1.62', '-', '-', '2.6', '3.3'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: "Women's T20 Blast Div 2",
                time: '07:00 PM',
                teams: 'Leicestershire Foxes W 🆚 Derbyshire Falcons W',
                odds: ['2.24', '2.86', '-', '-', '1.54', '1.8'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 2 },
                ],
            },
            {
                tag: 'Today',
                series: 'Tamil Nadu Premier League',
                time: '07:15 PM',
                teams: 'Tiruppur Tamizhans 🆚 Dindigul Dragons',
                odds: ['1.8', '1.81', '-', '-', '2.22', '2.24'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 5 },
                ],
            },
            {
                tag: 'Today',
                series: 'T20 Blast',
                time: '07:30 PM',
                teams: 'Northamptonshire 🆚 Worcestershire',
                odds: ['2.42', '2.46', '-', '-', '1.69', '1.7'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 48 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: 'Test Matches',
                time: '07:30 PM',
                teams: 'West Indies 🆚 Australia',
                odds: ['1.15', '1.16', '75', '80', '7.8', '8'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 7 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Today',
                series: 'T20 Blast',
                time: '09:00 PM',
                teams: 'Surrey 🆚 Essex',
                odds: ['3.3', '3.6', '-', '-', '1.39', '1.43'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 48 },
                    { label: 'MO', value: 2 },
                    { label: 'O', value: 3 },
                ],
            },
            {
                tag: 'Tomorrow',
                series: 'Major League Cricket',
                time: '12:30 AM',
                teams: 'Washington Freedom 🆚 Mi New York',
                odds: ['1.6', '2.22', '-', '-', '1.82', '2.64'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 5 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Tomorrow',
                series: 'Major League Cricket',
                time: '04:30 AM',
                teams: 'Los Angeles Knight Riders 🆚 San Francisco Unicorns',
                odds: ['1.46', '7', '-', '-', '1.4', '2.68'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
            {
                tag: 'Tuesday',
                series: 'Irish Inter Provincial T20 Trophy',
                time: '03:15 PM',
                teams: 'Leinster Lightning 🆚 Munster Reds',
                odds: ['3.65', '3.85', '-', '-', '1.35', '1.38'],
                categories: [
                    { label: 'M', value: 1 },
                    { label: 'F', value: 0 },
                    { label: 'MO', value: 1 },
                    { label: 'O', value: 0 },
                ],
            },
        ],
    },
];
export const userProfileData = [
    {
        label: 'Profile',
        value: 'profile',
        to: '/user-profile',
        icon: AccountCircle,
        data: [[{ icon: faCoins, text: "Balance", bal: 0.00 }, { icon: faScroll, text: "Withdrawable", bal: 0.00 }, { icon: faMoneyBill1, text: "Liability / Outstanding", bal: 0.00 }, { icon: faGift, text: "Bonus", bal: 0.00 }, { icon: faGifts, text: "Wager Bonus", bal: 0.00 }], [{ icon: faBaseball, text: "Sport (0 bets)", bal: 0.00 }, { icon: faDice, text: "Casino (0 bets)", bal: 0.00 }, { icon: faEquals, text: "Total (0 bets)", bal: 0.00 }], [{ icon: faHandHoldingUsd, text: "Deposit (0 times)", bal: 0.00 }, { icon: faHandHoldingUsd, text: "Last Deposit (0 times)", bal: 0.00 }], [{ icon: faScroll, text: "Withdraw (0 times)", bal: 0.00 }, { icon: faBaseball, text: "Last Withdraw (0 bets)", bal: 0.00 }]]
    },
    {
        label: 'Deposit',
        value: 'deposit',
        to: '/login',
        icon: AttachMoney
    },
    {
        label: 'Withdraw',
        value: 'withdraw',
        to: '/login',
        icon: MoneyOff
    },
    {
        label: 'Account Statement',
        value: 'accountStatement',
        to: '/common-table',
        icon: Description,
        data: [
            { title: "Account Statement" },
            {
                tableCol: [
                    {
                        id: 'date',
                        numeric: false,
                        disablePadding: true,
                        label: 'Date',
                        rowSpan: 2,
                        value: "10-12-2003"
                    },
                    {
                        id: 'type',
                        numeric: false,
                        disablePadding: false,
                        label: 'Type',
                        rowSpan: 2,
                        value: "online"
                    },
                    {
                        id: 'gameName',
                        numeric: false,
                        disablePadding: false,
                        label: 'Game Name',
                        rowSpan: 2,
                        value: "casino"
                    },
                    {
                        id: 'sport',
                        numeric: false,
                        disablePadding: false,
                        label: 'Sport',
                        rowSpan: 2,
                        value: ""
                    },
                    {
                        id: 'description',
                        numeric: false,
                        disablePadding: false,
                        label: 'Description',
                        rowSpan: 2,
                        value: "win"
                    },
                    {
                        id: 'mainWallet',
                        label: 'Main Wallet',
                        colSpan: 2,
                        children: [
                            { id: 'mainWalletCredit', label: 'Credit', numeric: true, value: "100" },
                            { id: 'mainWalletDebit', label: 'Debit', numeric: true, value: "20" },
                        ],
                    },
                    {
                        id: 'bonusWallet',
                        label: 'Bonus Wallet',
                        colSpan: 2,
                        children: [
                            { id: 'bonusWalletCredit', label: 'Credit', numeric: true, value: "10" },
                            { id: 'bonusWalletDebit', label: 'Debit', numeric: true, value: "5" },
                        ],
                    },
                    {
                        id: 'balance',
                        numeric: true,
                        disablePadding: false,
                        label: 'Balance',
                        rowSpan: 2,
                        value: "20"
                    },
                ],
                tableRows: [{
                    date: "10-12-2003", type: "online", gameName: "casino", sport: "cricket",
                    description: "win", mainWalletCredit: "100", mainWalletDebit: "20",
                    bonusWalletCredit: "10", bonusWalletDebit: "5", balance: "85"
                },
                {
                    date: "11-12-2003", type: "offline", gameName: "poker", sport: "football",
                    description: "loss", mainWalletCredit: "200", mainWalletDebit: "50",
                    bonusWalletCredit: "30", bonusWalletDebit: "10", balance: "170"
                },
                {
                    date: "11-12-2003", type: "offline", gameName: "poker", sport: "football",
                    description: "loss", mainWalletCredit: "200", mainWalletDebit: "50",
                    bonusWalletCredit: "30", bonusWalletDebit: "10", balance: "170"
                },
                {
                    date: "12-12-2003", type: "online", gameName: "roulette", sport: "",
                    description: "draw", mainWalletCredit: "300", mainWalletDebit: "100",
                    bonusWalletCredit: "40", bonusWalletDebit: "20", balance: "220"
                },
                {
                    date: "13-12-2003", type: "offline", gameName: "blackjack", sport: "hockey",
                    description: "win", mainWalletCredit: "150", mainWalletDebit: "60",
                    bonusWalletCredit: "20", bonusWalletDebit: "15", balance: "95"
                },
                {
                    date: "14-12-2003", type: "online", gameName: "slots", sport: "tennis",
                    description: "loss", mainWalletCredit: "180", mainWalletDebit: "80",
                    bonusWalletCredit: "25", bonusWalletDebit: "10", balance: "115"
                },
                {
                    date: "15-12-2003", type: "offline", gameName: "casino", sport: "kabaddi",
                    description: "win", mainWalletCredit: "220", mainWalletDebit: "30",
                    bonusWalletCredit: "35", bonusWalletDebit: "20", balance: "205"
                },
                {
                    date: "16-12-2003", type: "online", gameName: "teen patti", sport: "rugby",
                    description: "draw", mainWalletCredit: "110", mainWalletDebit: "90",
                    bonusWalletCredit: "10", bonusWalletDebit: "5", balance: "25"
                },
                {
                    date: "17-12-2003", type: "offline", gameName: "andar bahar", sport: "cricket",
                    description: "win", mainWalletCredit: "300", mainWalletDebit: "100",
                    bonusWalletCredit: "50", bonusWalletDebit: "30", balance: "220"
                },
                {
                    date: "18-12-2003", type: "online", gameName: "ludo", sport: "football",
                    description: "loss", mainWalletCredit: "90", mainWalletDebit: "60",
                    bonusWalletCredit: "15", bonusWalletDebit: "5", balance: "40"
                },
                {
                    date: "19-12-2003", type: "offline", gameName: "snake", sport: "basketball",
                    description: "win", mainWalletCredit: "130", mainWalletDebit: "50",
                    bonusWalletCredit: "20", bonusWalletDebit: "10", balance: "90"
                },
                {
                    date: "20-12-2003", type: "online", gameName: "chess", sport: "chess",
                    description: "win", mainWalletCredit: "80", mainWalletDebit: "20",
                    bonusWalletCredit: "5", bonusWalletDebit: "2", balance: "63"
                },
                {
                    date: "21-12-2003", type: "offline", gameName: "carrom", sport: "table tennis",
                    description: "loss", mainWalletCredit: "100", mainWalletDebit: "50",
                    bonusWalletCredit: "10", bonusWalletDebit: "5", balance: "55"
                }]
            }
        ]
    },
    {
        label: 'Transaction History',
        value: 'transactionHistory',
        to: '/common-table',
        icon: ReceiptLong,
        data: [
            { title: "Transaction History" },
            {
                tableCol: [
                    {
                        id: 'date',
                        numeric: false,
                        disablePadding: true,
                        label: 'Date',
                        rowSpan: 2,
                        value: "10-12-2003"
                    },
                    {
                        id: 'D/Wtype',
                        numeric: false,
                        disablePadding: false,
                        label: 'D/W Type',
                        rowSpan: 2,
                        value: "online"
                    },
                    {
                        id: 'Description',
                        numeric: false,
                        disablePadding: false,
                        label: 'Description',
                        rowSpan: 2,
                        value: "casino"
                    },
                    {
                        id: 'Amount',
                        numeric: false,
                        disablePadding: false,
                        label: 'Amount',
                        rowSpan: 2,
                        value: ""
                    },
                    {
                        id: 'Bank Details',
                        numeric: false,
                        disablePadding: false,
                        label: 'Bank Details',
                        rowSpan: 2,
                        value: "win"
                    },
                    {
                        id: 'Mobile No',
                        numeric: true,
                        disablePadding: false,
                        label: 'Mobile No',
                        rowSpan: 2,
                        value: "20"
                    },
                    {
                        id: 'Status',
                        numeric: true,
                        disablePadding: false,
                        label: 'Status',
                        rowSpan: 2,
                        value: "20"
                    },
                    {
                        id: 'Remark',
                        numeric: true,
                        disablePadding: false,
                        label: 'Remark',
                        rowSpan: 2,
                        value: "20"
                    },
                    {
                        id: 'Action',
                        numeric: true,
                        disablePadding: false,
                        label: 'Actions',
                        rowSpan: 2,
                        value: "20"
                    },
                ]
            }
        ]
    },
    {
        label: 'Staking Wallet',
        value: 'stakingWallet',
        to: '/login',
        icon: Wallet,
    },
    {
        label: 'P/L Report',
        value: 'profit/loss Report',
        to: '/common-table',
        icon: TrendingUp,
        data: [
            { title: "P/L Report" },
            {
                tableCol: [
                    {
                        id: 'sportGame',
                        numeric: false,
                        disablePadding: true,
                        label: 'Sport/Game',
                        rowSpan: 2,
                        value: 'Cricket'
                    },
                    {
                        id: 'market',
                        numeric: false,
                        disablePadding: false,
                        label: 'Market',
                        rowSpan: 2,
                        value: 'Match Odds'
                    },
                    {
                        id: 'result',
                        numeric: false,
                        disablePadding: false,
                        label: 'Result',
                        rowSpan: 2,
                        value: 'Team A Won'
                    },
                    {
                        id: 'gameName',
                        numeric: false,
                        disablePadding: false,
                        label: 'Gamename',
                        rowSpan: 2,
                        value: 'Qualifier 1'
                    },
                    {
                        id: 'pl',
                        numeric: true,
                        disablePadding: false,
                        label: 'P/L',
                        rowSpan: 2,
                        value: '+1500'
                    },
                    {
                        id: 'startedDate',
                        numeric: false,
                        disablePadding: false,
                        label: 'Started Date',
                        rowSpan: 2,
                        value: '2025-07-17'
                    }
                ]

            }
        ]
    },
    {
        label: 'My Referrals',
        value: 'myReferrals',
        to: '/login',
        icon: GroupAdd
    },
    {
        label: 'Promotion Center',
        value: 'promotionCenter',
        to: '/promotion-refer',
        icon: LocalOffer
    },
    {
        label: 'Manual Deposit Report',
        value: 'manualDepositReport',
        to: '/common-table',
        icon: Report,
        data: [
            { title: "Manual Deposit Report" },
            {
                tableCol: [
                    {
                        id: 'date',
                        numeric: false,
                        disablePadding: true,
                        label: 'Date',
                        rowSpan: 2,
                        value: '2025-07-17'
                    },
                    {
                        id: 'utrNo',
                        numeric: false,
                        disablePadding: false,
                        label: 'UTR No',
                        rowSpan: 2,
                        value: 'UTR123456'
                    },
                    {
                        id: 'amount',
                        numeric: true,
                        disablePadding: false,
                        label: 'Amount',
                        rowSpan: 2,
                        value: '₹5000'
                    },
                    {
                        id: 'paymentProof',
                        numeric: false,
                        disablePadding: false,
                        label: 'Payment Proof',
                        rowSpan: 2,
                        value: 'Uploaded'
                    },
                    {
                        id: 'status',
                        numeric: false,
                        disablePadding: false,
                        label: 'Status',
                        rowSpan: 2,
                        value: 'Pending'
                    },
                    {
                        id: 'reason',
                        numeric: false,
                        disablePadding: false,
                        label: 'Reason',
                        rowSpan: 2,
                        value: 'Verification Required'
                    },
                    {
                        id: 'action',
                        numeric: false,
                        disablePadding: false,
                        label: 'Action',
                        rowSpan: 2,
                        value: 'Approve/Reject'
                    }
                ]
            }
        ]
    },
    {
        label: 'Bet History',
        value: 'betHistory',
        to: '/common-table',
        icon: History,
        data: [
            { title: "Manual Deposit Report" },
            {
                tableCol: [
                    {
                        id: 'betId',
                        numeric: false,
                        disablePadding: true,
                        label: 'Bet Id',
                        rowSpan: 2,
                        value: 'B123456'
                    },
                    {
                        id: 'market',
                        numeric: false,
                        disablePadding: false,
                        label: 'Market',
                        rowSpan: 2,
                        value: 'Match Odds'
                    },
                    {
                        id: 'type',
                        numeric: false,
                        disablePadding: false,
                        label: 'Type',
                        rowSpan: 2,
                        value: 'Back'
                    },
                    {
                        id: 'odds',
                        numeric: true,
                        disablePadding: false,
                        label: 'Odds',
                        rowSpan: 2,
                        value: '2.5'
                    },
                    {
                        id: 'stake',
                        numeric: true,
                        disablePadding: false,
                        label: 'Stake',
                        rowSpan: 2,
                        value: '1000'
                    },
                    {
                        id: 'run',
                        numeric: true,
                        disablePadding: false,
                        label: 'Run',
                        rowSpan: 2,
                        value: '50'
                    },
                    {
                        id: 'selection',
                        numeric: false,
                        disablePadding: false,
                        label: 'Selection',
                        rowSpan: 2,
                        value: 'Team A'
                    },
                    {
                        id: 'pl',
                        numeric: true,
                        disablePadding: false,
                        label: 'P&L',
                        rowSpan: 2,
                        value: '+2500'
                    },
                    {
                        id: 'status',
                        numeric: false,
                        disablePadding: false,
                        label: 'Status',
                        rowSpan: 2,
                        value: 'Won'
                    },
                    {
                        id: 'betTakenDate',
                        numeric: false,
                        disablePadding: false,
                        label: 'Bet Taken Date',
                        rowSpan: 2,
                        value: '2025-07-17'
                    }
                ]
            }
        ]
    },
    {
        label: 'Bonus Report',
        value: 'bonusReport',
        to: '/common-table',
        icon: Redeem,
        data: [
            { title: "Bonus Report" },
            {
                tableCol: [
                    {
                        id: 'srNo',
                        numeric: true,
                        disablePadding: true,
                        label: 'Sr.no',
                        rowSpan: 2,
                        value: '1'
                    },
                    {
                        id: 'playerName',
                        numeric: false,
                        disablePadding: false,
                        label: 'Player Name',
                        rowSpan: 2,
                        value: 'John Doe'
                    },
                    {
                        id: 'bonusName',
                        numeric: false,
                        disablePadding: false,
                        label: 'Bonus Name',
                        rowSpan: 2,
                        value: 'Welcome Bonus'
                    },
                    {
                        id: 'bonusCode',
                        numeric: false,
                        disablePadding: false,
                        label: 'Bonus Code',
                        rowSpan: 2,
                        value: 'WELCOME100'
                    },
                    {
                        id: 'balance',
                        numeric: true,
                        disablePadding: false,
                        label: 'Balance',
                        rowSpan: 2,
                        value: '₹1500'
                    },
                    {
                        id: 'dateTime',
                        numeric: false,
                        disablePadding: false,
                        label: 'Date/Time',
                        rowSpan: 2,
                        value: '2025-07-17 14:30'
                    }
                ]

            }
        ]
    },
    {
        label: 'Sport Result Report',
        value: 'sportResultReport',
        to: '/common-table',
        icon: SportsScore,
        data: [
            { title: "Sport Result Report" },
            {
                tableCol: [
                    {
                        id: 'date',
                        numeric: false,
                        disablePadding: true,
                        label: 'Date',
                        rowSpan: 2,
                        value: '17 Jul 2025 11:15 PM'
                    },
                    {
                        id: 'marketType',
                        numeric: false,
                        disablePadding: false,
                        label: 'Market Type',
                        rowSpan: 2,
                        value: 'WIN'
                    },
                    {
                        id: 'marketName',
                        numeric: false,
                        disablePadding: false,
                        label: 'Market Name',
                        rowSpan: 2,
                        value: 'Horse Racing / GB / Worcester 17th Jul / 2m4f Hcap Chs'
                    },
                    {
                        id: 'result',
                        numeric: false,
                        disablePadding: false,
                        label: 'Result',
                        rowSpan: 2,
                        value: 'King Of The Story'
                    }
                ],
                tableRows: [
                    {
                        date: '17 Jul 2025 11:15 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / GB / Worcester 17th Jul / 2m4f Hcap Chs',
                        result: 'King Of The Story'
                    },
                    {
                        date: '17 Jul 2025 11:15 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / GB / Worcester 17th Jul / 2m7f Nov Hcap Chs',
                        result: 'Jubilant'
                    },
                    {
                        date: '17 Jul 2025 11:15 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / GB / Worcester 17th Jul / 2m7f Hcap Chs',
                        result: 'Grillon De Monty'
                    },
                    {
                        date: '17 Jul 2025 11:07 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / IE / Killarney 17th Jul / 2m4f Mdn Hrd',
                        result: 'Nitty Gritty'
                    },
                    {
                        date: '17 Jul 2025 11:07 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / IE / Killarney 17th Jul / 2m4f Hrd',
                        result: 'Emily Love'
                    },
                    {
                        date: '17 Jul 2025 11:07 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / IE / Killarney 17th Jul / 2m4f Hcap Hrd',
                        result: 'Swelltime'
                    },
                    {
                        date: '17 Jul 2025 11:07 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / IE / Killarney 17th Jul / To Be Placed',
                        result: 'Hees Dynamite'
                    },
                    {
                        date: '17 Jul 2025 11:03 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / FR / Vichy (FRA) 17th Jul / 1m1f Stks',
                        result: 'Hungry Heart'
                    },
                    {
                        date: '17 Jul 2025 11:03 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / FR / Vichy (FRA) 17th Jul / 1m Stks',
                        result: 'Dropshot'
                    },
                    {
                        date: '17 Jul 2025 11:03 PM',
                        marketType: 'WIN',
                        marketName: 'Horse Racing / FR / Vichy (FRA) 17th Jul / 1m2f Listed',
                        result: 'Al Uqda'
                    }
                ]
            }
        ]

    },
    {
        label: 'Chip Setting',
        value: 'chipSetting',
        to: '/login',
        icon: Settings
    },
    // {
    //     label: 'Change Password',
    //     value: 'changePassword',
    //     to: '/login',
    //     icon: LockReset
    // },
    // {
    //     label: 'LogOut',
    //     value: 'logout',
    //     to: '/login',
    //     icon: LogoutIcon
    // }
];
export const liveSportsData = sportsData
    .map((sport) => {
        const liveMatches = sport.matches?.filter((match) => match.tag === "LIVE") || [];
        if (liveMatches.length > 0) {
            return {
                sport: sport.sport,
                matches: liveMatches,
            };
        }
        return null; // remove sport with no live matches
    })
    .filter(Boolean);
