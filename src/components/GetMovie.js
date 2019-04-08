import goonies from '../img/goonies.jpg';
import brother from '../img/brothers.jpg';
import wargames from '../img/wargames.jpg';
import strangeThings from '../img/strange_things.jpg';
import firstMan from '../img/first_man.jpg';
import backtothefuture from '../img/backtothefuture.jpg';

function getMovie() {
    return [
      {id:'goonies', name:'The Goonies', cover: goonies},
      {id:'brotherwht', name:'Brother Where are Thou', cover: brother},
      {id:'warganmes', name:'WarGames', cover: wargames},
      {id:'backtothefuture', name:'Back To The Future', cover: backtothefuture},
      {id:'strangethings', name:'Strange Things', cover: strangeThings},
      {id:'firstman', name:'First Man', cover: firstMan}
    ]
  }

export default getMovie