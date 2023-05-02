import {reactive} from 'vue';

export const store = reactive ({
  api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardList: [],
  load: false
});