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
import { CricketIcon, TennisIcon } from "../assets/SVGs/allSVGs"
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
    data: [{ image: image8, },
    { image: image9, },
    { image: image10, },
    ]
}

// export const sportsData = [
//     {
//         sport: 'Cricket',
//         // icon: CricketIcon,
//         matches: [
//             {
//                 series: 'Test Matches',
//                 teams: 'England 🆚 India',
//                 odds: ['13', '13.5', '2.46', '2.48', '1.92', '1.93'],
//             },
//             {
//                 series: 'Womens International Twenty20 Matches',
//                 teams: 'England W A 🆚 New Zealand W A',
//                 odds: ['1.38', '1.44', '-', '-', '3.25', '3.7'],
//             },
//         ],
//     },
//     {
//         sport: 'Tennis',
//         // icon: TennisIcon,
//         matches: [
//             {
//                 series: "Men's Wimbledon 2025",
//                 teams: 'Dimitrov 🆚 Moutet',
//                 odds: ['1.36', '1.38', '-', '-', '3.7', '3.75'],
//             },
//             {
//                 series: "Men's Wimbledon 2025",
//                 teams: 'Marozsan 🆚 Munar',
//                 odds: ['22', '26', '-', '-', '1.04', '1.05'],
//             },
//             {
//                 series: "Men's Wimbledon 2025",
//                 teams: 'Evans 🆚 Djokovic',
//                 odds: ['-', '1.01', '-', '-', '1000', '-'],
//             },
//             {
//                 series: "Women's Wimbledon 2024",
//                 teams: 'H Baptiste 🆚 Vict Mboko',
//                 odds: ['1.04', '1.05', '-', '-', '23', '25'],
//             },
//             {
//                 series: 'Troyes Challenger 2025',
//                 teams: 'Trungelliti 🆚 Martineau',
//                 odds: ['1.55', '1.63', '-', '-', '2.58', '2.82'],
//             },
//         ],
//     },
// ];

export const sportsData = [
    {
        sport: 'Cricket',
        matches: [
            {
                tag: 'LIVE',
                series: 'Test Matches',
                teams: 'England 🆚 India',
                odds: ['13', '13.5', '2.46', '2.48', '1.92', '1.93'],
            },
            {
                tag: 'LIVE',
                series: 'Womens International Twenty20 Matches',
                teams: 'England W A 🆚 New Zealand W A',
                odds: ['1.38', '1.44', '-', '-', '3.25', '3.7'],
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
                teams: 'England 🆚 India',
                odds: ['12', '12.5', '3.55', '3.6', '1.56', '1.57'],
            },
            {
                tag: 'LIVE',
                series: 'Womens International Twenty20 Matches',
                time: '',
                teams: 'England W A 🆚 New Zealand W A',
                odds: ['-', '-', '-', '-', '-', '-'],
            },
            {
                tag: 'Today',
                time: '07:30 PM',
                series: 'Test Matches',
                teams: 'West Indies 🆚 Australia',
                odds: ['1.32', '1.33', '25', '28', '4.8', '5'],
            },
            {
                tag: 'Today',
                time: '08:15 PM',
                series: 'Irish Inter Provincial T20 Trophy',
                teams: 'North-West Warriors 🆚 Northern Knights',
                odds: ['-', '-', '-', '-', '-', '-'],
            },
            {
                tag: 'Tomorrow',
                time: '04:30 AM',
                series: 'Major League Cricket',
                teams: 'Los Angeles Knight Riders 🆚 Mi New York',
                odds: ['2.3', '2.34', '-', '-', '1.74', '1.76'],
            },
            {
                tag: 'Tomorrow',
                time: '07:00 PM',
                series: "Women's T20 Blast",
                teams: 'Durham W 🆚 Somerset W',
                odds: ['2.24', '3', '-', '-', '1.6', '1.8'],
            },
            {
                tag: 'Tomorrow',
                time: '07:15 PM',
                series: 'Tamil Nadu Premier League',
                teams: 'Chepauk Super Gillies 🆚 Dindigul Dragons',
                odds: ['1.7', '1.9', '-', '-', '2.12', '2.44'],
            },
            {
                tag: 'Tomorrow',
                time: '08:00 PM',
                series: "Women's T20 Blast",
                teams: 'The Blaze W 🆚 Hampshire W',
                odds: ['1.3', '2.22', '-', '-', '1.82', '5.8'],
            },
            {
                tag: 'Tomorrow',
                time: '11:05 PM',
                series: 'Womens International Twenty20 Matches',
                teams: 'England W 🆚 India W',
                odds: ['2.14', '2.16', '-', '-', '1.87', '1.88'],
            },
            {
                tag: 'Saturday',
                time: '12:30 AM',
                series: 'Major League Cricket',
                teams: 'San Francisco Unicorns 🆚 Texas Super Kings',
                odds: ['1.91', '2', '-', '-', '2', '2.1'],
            },
            {
                tag: 'Saturday',
                time: '03:40 AM',
                series: 'Major League Cricket',
                teams: 'Washington Freedom 🆚 Seattle Orcas',
                odds: ['2.42', '2.64', '-', '-', '1.61', '1.71'],
            },
        ],
    },
];
