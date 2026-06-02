import { KIDS, LOGOUT, PROFILE, WEDDING, SYSTEM_CONFIG, SPROFILE, DPROFILE  } from "../utils/path";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Profile } from "../pages/Profile";
import { Kids } from "../pages/Kids";
import { SystemConfigurationPage } from "../pages/SystemConfigurationPage";
import { Logout } from "../pages/Logout";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ConstructionIcon from '@mui/icons-material/Construction';
import { DeepikaProfile } from "../pages/DeepikaProfile";
import { Family } from "../pages/Family";

export const LeftMenuItems = [
    {
        name: "profile",
        path: PROFILE,
        element:  ()=> (<Profile></Profile>),
        icon: AccountBoxIcon,
        label:"Profile",
        key: 1
    },
    {
        name: "dprofile",
        path: DPROFILE,
        element:  ()=> (<DeepikaProfile></DeepikaProfile>),
        icon: AccountBoxIcon,
        label:"Habs",
        key: 2
    },
    {   name: "Family",
        path: WEDDING,
        element:  ()=> (<Family></Family>),
        icon: FavoriteIcon,
        label:"Family",
        key:3
    },
    {   name: "Kids",
        path: KIDS,
        element:  ()=> (<Kids></Kids>),
        icon: FavoriteIcon,
        label:"Kids",
        key:4
    },
    {   name: "System Configuration",
        path: SYSTEM_CONFIG,
        element:  ()=> (<SystemConfigurationPage></SystemConfigurationPage>),
        icon: ConstructionIcon,
        label:"System Configuration",
        key:5
    }

];

export const LogoutItem = {   name: "Logout",
    path: LOGOUT,
    element:  ()=> (<Logout></Logout>),
    icon: ExitToAppIcon,
    label:"Logout",
    key:3
}

