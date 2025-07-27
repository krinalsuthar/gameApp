import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CardHeader from "./CardHeader";
import { motion } from 'framer-motion';
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
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const CommonCard = ({ data: propsData = [], containerRef = "", title: propsTitle = "" }) => {
    const { favouriteItems, count } = useSelector((state) => state.drawer);
    const dispatch = useDispatch();
    const { state } = useLocation();
    const data = propsData.length ? propsData : state?.info;
    const title = propsTitle != "" ? propsTitle : state?.data;
    const navigate = useNavigate()
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
    }, [favouriteItems, count]);
    const Icon = state?.data ? iconMap[state.data] : null;
    return (
        <>
            {state?.isHeader && (
                <CardHeader
                    title={state?.data}
                    showMoreData={data}
                    isImage={state?.isImage}
                    showMore={false}
                    count={state?.info?.length}
                    icon={state?.isImage ? <Icon /> : state?.icon}
                />
            )}
            <Box sx={{ width: '100%' }}>
                <motion.div
                    ref={containerRef ?? null}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: isScroll ? 'flex' : 'grid',
                        overflowX: isScroll ? 'auto' : 'unset',
                        gap: isScroll ? 8 : 16,
                        flexWrap: isScroll ? 'nowrap' : 'wrap',
                        paddingBottom: isScroll ? 16 : 0,
                        scrollbarWidth: 'none',
                    }}
                >
                    {data?.length > 0 ? (
                        data.map((game, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.25)',
                                    transition: { type: 'spring', stiffness: 300 }
                                }}
                                style={{ borderRadius: '10px', overflow: 'hidden' }}
                            >
                                <Box
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
                                        cursor: 'pointer',
                                        '&:hover .play-icon': {
                                            opacity: 1,
                                        },
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
                                        onClick={() => toggleLike(game?.id)}
                                    >
                                        {favouriteItems[game?.id] ? (
                                            <FavoriteIcon sx={{ color: 'red' }} />
                                        ) : (
                                            <FavoriteBorderIcon sx={{ color: '#ffc107' }} />
                                        )}
                                    </Box>
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: 8,
                                            right: 8,
                                            backgroundColor: '#FFD600',
                                            color: '#000',
                                            border: 'none',
                                            borderRadius: '8px 0% 8px 0%',
                                            opacity: 0,
                                            zIndex: 2,
                                            cursor: 'pointer',
                                            padding: '6px 8px',
                                        }}
                                        onClick={() => {
                                            // manual navigation to preserve RouterLink behavior
                                            navigate(game?.to, {
                                                state: game?.state ? { data: game?.data } : { data: game?.video },
                                            });
                                        }}
                                    >
                                        <PlayArrowRoundedIcon />
                                    </motion.button>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ textAlign: 'center' }} >
                                        {game?.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: 'center',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))
                    ) : (
                        <Typography>No matching games found.</Typography>
                    )}
                </motion.div>
            </Box >
        </>
    );
}
export default CommonCard