import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img3 from './img3.jpg'
///////
import img17 from './17.jpg'
import img19 from './19.jpg'
import img20 from './20.jpg'
import img21 from './21.jpg'
import img22 from './22.jpg'
import img23 from './23.jpg'
import haide from './haide.mp3'
import mohasti from './Mahasti - Mosafer [320].mp3'
import moeen from './Moein - Faghat To [320].mp3'
import yas from './Yas - Boghz Yani.mp3'
import rapremix from "../frontend-assets/rapremix.mp3"
import TaylorSwift from "../frontend-assets/TaylorSwift.mp3"
import JenniferLopez from "../frontend-assets/JenniferLopez.mp3"
import Shakira from "../frontend-assets/Shakira.mp3"
import Shakiraj from "../frontend-assets/shakiraj.jpg"
import eykhoda from "../frontend-assets/ey-khoda.jpg"
import moeein from "../frontend-assets/moeein.jpg"
import mohasimosafer from "../frontend-assets/mohasimosafer.jpg"
import boghz from "../frontend-assets/boghz.jpg"
import taylor from "../frontend-assets/taylor.jpg"
import lopez from "../frontend-assets/lopez.jpg"



export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "تاپ 50 ایرانی",
        image: img17,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "البوم موعین",
        image: img19,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "البوم هایده",
        image: img20,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "البوم مهستی",
        image: img21,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "البوم یاس",
        image: img22,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "البوم رپ  ",
        image: img23,
        desc:"این بخش بصورت هفتگی اپدیت میشود",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "اهنگ هایده",
        image: eykhoda,
        file:haide,
        desc:"شادی خود را با این اهنگ رقم بزنید",
        duration:"3:00"
    },
    {
        id:1,
        name: "اهنگ معین",
        image: moeein,
        file:moeen,
        desc:"فقط تو",
        duration:"2:20"
    },
    {
        id:2,
        name: " اهنگ رپ ریمیکس",
        image: img3,
        file:rapremix,
        desc:"عالم یک رنگی",
        duration:"2:32"
    },
    {
        id:3,
        name: "اهنگ مهستی ",
        image: mohasimosafer,
        file:mohasti,
        desc:"مسافر",
        duration:"2:50"
    },
    {
        id:4,
        name: "اهنگ یاس",
        image: boghz,
        file:yas,
        desc:"بقض یعنی",
        duration:"3:10"
    },
    {
        id:5,
        name: "اهنگ تیلور سویفت",
        image: taylor,
        file:TaylorSwift,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "اهنگ جنیفر لوپذ",
        image: lopez,
        file:JenniferLopez,
        desc:"on the flor",
        duration:"2:18"
    },
    {
        id:7,
        name: "اهنگ شکیرا",
        image: Shakiraj,
        file:Shakira,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]