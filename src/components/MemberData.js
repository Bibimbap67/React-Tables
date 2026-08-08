import { Tag } from 'antd';
import ian from '../assets/ian.png';
import haerin from '../assets/haerin.png';
import sakura from "../assets/sakura.png";
import kazuha from "../assets/kazuha.png";
import mina from "../assets/mina.png";
import chaeyoung from "../assets/chaeyoung.png";
import liz from "../assets/liz.png";
import julie from "../assets/julie.png";
import karina from "../assets/karina.png";
import winter from "../assets/winter.png";
import haewon from "../assets/haewon.png";
import chaeryoung from "../assets/chaeryeong.png";
import miyeon from "../assets/miyeon.png";

const myBias = [
  {id: '1', stageName: "Ian (이안)", name: "Jeong Lee-an", age: 17, position: "Dancer, Vocalist, Visual, Center", image: ian},

  {id: '2', stageName: "Miyeon (미연)", name: "Cho Mi-yeon", age: 29, position: "Main Vocalist", image: miyeon},

  {id: '3', stageName: "Chaeryeong (채령)", name: "Lee Chae-ryeong", age: 25, position: "Main Dancer, Sub-Vocalist, Sub-Rapper", image: chaeryoung},

  {id: '4', stageName: "Haewon (해원)", name: "Oh Hae-won", age: 23, position: "Leader, Main Vocalist", image: haewon},

  {id: '5', stageName: "Haerin (해린)", name: "Kang Haerin", age: 20, position: "N/A", image: haerin},

  {id: '6', stageName: "Winter (윈터)", name: "Kim Min-jeong", age: 25, position: "Main Vocalist, Lead Dancer, Visual", image: winter},
  {id: '7', stageName: "Karina (카리나)", name: "Yu Ji-min", age: 26, position: "Leader, Main Dancer, Lead Rapper", image: karina},

  {id: '8', stageName: "Julie (쥴리)", name: "Julie Han", age: 26, position: "Leader, Main Rapper, Lead Dancer", image: julie},

  {id: '9', stageName: "Liz (리즈)", name: "Kim Ji-won", age: 22, position: "Main Vocalist", image: liz},

  {id: '10', stageName: "Mina (미나)", name: "Myoui Mina", age: 29, position: "Main Dancer, Sub-Vocalist", image: mina},
  {id: '11', stageName: "Chaeyoung (채영)", name: "Son Chae-young", age: 27, position: "Main Dancer, Sub-Vocalist", image: chaeyoung},
  
  {id: '12', stageName: "Sakura (사쿠ラ)", name: "Miyawaki Sakura", age: 28, position: "Vocalist, Rapper, Dancer", image: sakura},
  {id: '13', stageName: "Kazuha (카즈하)", name: "Nakamura Kazuha", age: 23, position: "Sub-Vocalist, Rapper, Dancer", image: kazuha},
];

const columns = [
  { title: 'Photo', dataIndex: 'image', key: 'image', width: 90, render: (src) => (<img src={src} className="member-photo" />), },
  { title: 'Stage Name', dataIndex: 'stageName', key: 'stageName', render: (x) => <Tag className="member-tag">{x}</Tag> },
  { title: 'Birth Name', dataIndex: 'name', key: 'name', render: (x) => <Tag className="member-tag">{x}</Tag> },
  { title: 'Age', dataIndex: 'age', key: 'age', render: (x) => <Tag className="member-tag">{x}</Tag> },
  { title: 'Position', dataIndex: 'position', key: 'position', render: (x) => <Tag className="member-tag">{x}</Tag> },
];


const theirGroups = [

  {
    id: 1,
    groupName:"Hearts2Hearts",
    fandomName:"S2U (하츄)",
    color: "#62c1e5",
    aboutThisGroup:"Hearts2Hearts (하츠투하츠), also shortened as H2H, is an 8-member South Korean girl group under SM Entertainment. The members are: Jiwoo, Carmen, Yuha, Stella, Juun, A-na, Ian, and Ye-on. They debuted on February 24, 2025, with their first single album, The Chase.",
    member: [myBias[0]]
  },

  {
    id: 2,
    groupName:"NewJeans",
    fandomName: "Bunnies",
    color: "#0431c3",
    aboutThisGroup: "NewJeans (NJZ) is a K-pop girl group under ADOR and HYBE Labels. Debuting in 2022, they rose to fame with hits like Attention. Originally a five-member group, they became a four-member group in December 2025 following Danielle's contract termination.",
    member: [myBias[4]]
  },

  {
    id: 3,
    groupName:"LE SSERAFIM",
    fandomName: "FEARNOT",
    color: "#A6BAD0",
    aboutThisGroup: "LE SSERAFIM (르세라핌) is a 5-member K-pop girl group under HYBE and Source Music, consisting of Chaewon, Sakura, Yunjin, Kazuha, and Eunchae. They debuted in 2022 with FEARLESS. Originally a 6-member group, Kim Garam left in July 2022, leaving the group with its current five members.",
    member: [myBias[11], myBias[12]]
  },

  {
    id: 4,
    groupName:"Aespa",
    fandomName: "MY's",
    color: "#000000",
    aboutThisGroup: "aespa (에스파) is a 4-member K-pop girl group under SM Entertainment, consisting of Karina, Giselle, Winter, and NingNing. They debuted in 2020 with Black Mamba and made their Japanese debut with Hot Mess in 2024. Known for their futuristic concepts and powerful performances, aespa also signed with Warner Records for global promotions.",
    member: [myBias[5], myBias[6]]
  },

  {
    id: 5,
    groupName:"i-dle",
    fandomName:"NEVERLAND",
    color: "#580E8B",
    aboutThisGroup:"i-dle (아이들), formerly known as (G)I-DLE, is a 5-member K-pop girl group under CUBE Entertainment: Soyeon, Miyeon, Minnie, Yuqi, and Shuhua. They debuted in 2018 with I Am. After Soojin left in 2021, the group continued as five members. In 2025, they rebranded from (G)I-DLE to i-dle to mark their 7th anniversary.",
    member: [myBias[1]]
  },


  {
    id: 6,
    groupName:"ITZY",
    fandomName: "Midzy",
    color: "#FD3DB5",
    aboutThisGroup: "ITZY (있지) is a 5-member South Korean girl group under JYP Entertainment, consisting of Yeji, Lia, Ryujin, Chaeryeong, and Yuna. They debuted on February 11, 2019, with their first single album, IT’z Different.",
    member: [myBias[2]]
  },

  {
    id: 7,
    groupName:"NMIXX",
    fandomName: "NSWER",
    color: "#B2BDD9",
    aboutThisGroup: "NMIXX (엔믹스) (formerly known as JYPn) is a 6-member South Korean girl group under JYP Entertainment, consisting of Haewon, Lily, Sullyoon, Bae, Jiwoo, and Kyujin. Jinni left the group on December 9, 2022. They debuted on February 22, 2022, with their first single album, AD MARE. They’ll make their Japanese debut on December 9, 2026, with the album, N＝MIXX.",
    member: [myBias[3]]
  },

  

  {
    id: 8,
    groupName:"Kiss of life",
    fandomName: "KISSY",
    color: "#F3BC83",
    aboutThisGroup: "KISS OF LIFE (키스 오브 라이프), or KIOF, is a 4-member K-pop girl group under S2 Entertainment: Julie, Natty, Belle, and Haneul. They debuted in 2023 with their first mini album, KISS OF LIFE, and made their Japanese debut in 2025 with TOKYO MISSION START. Known for their bold concepts, strong vocals, and confident performances.",
    member: [myBias[7]]
  },

  {
    id: 9,
    groupName:"IVE",
    fandomName: "DIVE",
    color: "#F40094",
    aboutThisGroup: "IVE (아이브) is a 6-member K-pop girl group under STARSHIP Entertainment, consisting of Yujin, Gaeul, Rei, Wonyoung, Liz, and Leeseo. They debuted in 2021 with ELEVEN and later expanded globally with their Japanese debut in 2022 and English debut in 2024. Known for their confident concepts and catchy pop hits.",
    member: [myBias[8]]
  },

  {
    id: 10,
    groupName:"TWICE",
    fandomName: "ONCE",
    color: "#7DA5D5",
    aboutThisGroup: "TWICE (트와이스) is a 9-member K-pop girl group under JYP Entertainment, consisting of Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeryeong, and Tzuyu. They debuted in 2015 with their first single album, The Story of Ours. Known for their catchy pop hits and synchronized choreography.",
    member: [myBias[9], myBias[10]]
  },

];

const MemberData = { myBias, columns, theirGroups};

export default MemberData;