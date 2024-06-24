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
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import hungryCheetahImg from './hungryCheetahImg.jpg'
import StarBoyImg from './StarBoyImg.png'
import KesariyaImg from './KesariyaImg.jpg'
import AnuvanuvuuImg from './AnuvanuvuuImg.jpg'
import HeartStereoImg from './HeartStereoImg.jpg'
import SatrangaImg from './SatrangaImg.jpg'
import SalaamRockyBhaiImg from './SalaamRockyBhaiImg.jpg'
import TheresNothingImg from './TheresNothingImg.jpg'
import YouandIImg from './YouandIImg.jpg'
//songs
import HungryCheetah from './HungryCheetah.mp3'
import StarBoy from './StarBoy.mp3'
import Kesariya from './Kesariya.mp3'
import Anuvanuvuu from './Anuvanuvuu.mp3'
import HeartStereo from './HeartStereo.mp3'
import Satranga  from './Satranga.mp3'
import SalaamRockyBhai from './SalaamRockyBhai.mp3'
import TheresNothing from './TheresNothing.mp3'
import YouandI from './YouandI.mp3' 

import Amplify_icon from '../assets/Amplify_final_icon1.png'

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
    Amplify_icon,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Hungry Cheetah",
        image: hungryCheetahImg,
        file:HungryCheetah,
        desc:"OG",
        duration:"1:59"
    },
    {
        id:1,
        name: "Starboy",
        image: StarBoyImg,
        file:StarBoy,
        desc:"The Weekend",
        duration:"3:50"
    },
    {
        id:2,
        name: "Kesariya",
        image: KesariyaImg,
        file:Kesariya,
        desc:"Brahmāstra",
        duration:"2:52"
    },
    {
        id:3,
        name: "Anuvanuvuu",
        image: AnuvanuvuuImg,
        file:Anuvanuvuu,
        desc:"Om Bheem Bush",
        duration:"3:31"
    },
    {
        id:4,
        name: "Heart Stereo",
        image: HeartStereoImg,
        file:HeartStereo,
        desc:"Gym Class Heroes",
        duration:"3:31"
    },
    {
        id:5,
        name: "Satranga",
        image: SatrangaImg,
        file:Satranga,
        desc:"Animal",
        duration:"4:51"
    },
    {
        id:6,
        name: "Salaam Rocky Bhai ",
        image: SalaamRockyBhaiImg,
        file:SalaamRockyBhai,
        desc:"KGF",
        duration:"4:17"
    },
    {
        id:7,
        name: "There's Nothing",
        image: TheresNothingImg,
        file:TheresNothing,
        desc:"Shawn Mendes",
        duration:"3:25"
    },
    {
        id:8,
        name: "You & I ",
        image: YouandIImg,
        file:YouandI ,
        desc:"Jalsa",
        duration:"4:59"
    },
    
]