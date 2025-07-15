import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardHeader from "./CardHeader";
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
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/drawer/drawerSlice";

const CommonCard = ({ data: propsData = [], containerRef = "", title: propsTitle = "" }) => {
    const { favouriteItems } = useSelector((state) => state.drawer);
    const dispatch = useDispatch();
    const [favouriteData, setFavouriteData] = useState({})
    const { state } = useLocation();
    const data = propsData.length ? propsData : state?.info;
    const title = propsTitle != "" ? propsTitle : state?.data;
    const isScroll = state?.isScroll != "" ? true : false
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
    const toggleLike = (id) => {
        dispatch(toggleFavorite(id));
    };
    useEffect(() => {
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
        localStorage.setItem('favoriteCount', Object.values(favouriteItems).filter(Boolean).length.toString());
    }, [favouriteItems]);
    const Icon = state?.data ? iconMap[state.data] : null;
    return (
        <>
            {state?.isHeader && (
                <CardHeader title={state?.data} showMoreData={data}
                    isImage={state?.isImage} showMore={false} count={state?.info?.length} icon={state?.isImage ? <Icon /> : state?.icon} />
            )}
            <Box sx={{ width: '100%' }}>
                <Box
                    ref={containerRef ?? null}
                    sx={
                        isScroll
                            ? {
                                display: 'flex',
                                overflowX: 'auto',
                                gap: 1,
                                flexWrap: 'nowrap',
                                paddingBottom: 2,
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }
                            : {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))',
                                gap: 2,
                            }
                    }
                >
                    {data?.length > 0 ? (
                        data.map((game, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    backgroundImage: `linear-gradient(0deg, ${game?.color} 10%, transparent 80%), url(${game?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    height: '170px',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    p: 1,
                                    position: 'relative',
                                    minWidth: isScroll ? '145px' : 'auto',
                                    width: isScroll ? '145px' : 'auto',
                                    flexShrink: isScroll ? 0 : undefined,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        zIndex: 2,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => toggleLike(game?.title)}
                                >
                                    {favouriteItems[game?.title] ? (
                                        <FavoriteIcon sx={{ color: 'red' }} />
                                    ) : (
                                        <FavoriteBorderIcon sx={{ color: '#fff' }} />
                                    )}
                                </Box>

                                <Typography variant="subtitle1" fontWeight={600} sx={{ textAlign: "center" }} noWrap>
                                    {game?.title}
                                    {/* {title} */}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {/* {game?.text} */}
                                    {title}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography>No matching games found.</Typography>
                    )}
                </Box>
            </Box>

        </>
    );
}
export default CommonCard