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
    data: [{ title: "AVIATOR", text: "Spribe", image: image1, color: "rgb(246, 55, 83)" },
    { title: "Crazy Time", text: "Evolution Gaming", image: image2, color: "rgb(69, 141, 250)" },
    { title: "JetX", text: "Smartsoft Gaming", image: image3, color: "rgb(190, 59, 250)" },
    { title: "Dragon Tiger", text: "Evolution Gaming", image: image4, color: "rgb(31, 178, 252)" },
    { title: "Andar Bahar.", text: "Aura", image: image5, color: " rgb(238, 97, 89)" },
    { title: "Teenpatti T20", text: "Aura", image: image6, color: " rgb(251, 53, 101)" },
    { title: "7 up & down", text: "Aura", image: image7, color: "rgba(39, 201, 44, 0.8)" }]
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
        to: '/login',
        icon: Description
    },
    {
        label: 'Transaction History',
        value: 'transactionHistory',
        to: '/login',
        icon: ReceiptLong
    },
    {
        label: 'Staking Wallet',
        value: 'stakingWallet',
        to: '/login',
        icon: Wallet
    },
    {
        label: 'P/L Report',
        value: 'plReport',
        to: '/login',
        icon: TrendingUp
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
        to: '/login',
        icon: LocalOffer
    },
    {
        label: 'Manual Deposit Report',
        value: 'manualDepositReport',
        to: '/login',
        icon: Report
    },
    {
        label: 'Bet History',
        value: 'betHistory',
        to: '/login',
        icon: History
    },
    {
        label: 'Bonus Report',
        value: 'bonusReport',
        to: '/login',
        icon: Redeem
    },
    {
        label: 'Sport Result Report',
        value: 'sportResultReport',
        to: '/login',
        icon: SportsScore
    },
    {
        label: 'Chip Setting',
        value: 'chipSetting',
        to: '/login',
        icon: Settings
    },
    {
        label: 'Change Password',
        value: 'changePassword',
        to: '/login',
        icon: LockReset
    },
    {
        label: 'LogOut',
        value: 'logout',
        to: '/login',
        icon: LogoutIcon
    }
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

