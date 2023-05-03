import {reactive} from 'vue';

export const store = reactive ({
  api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardList: [],
  load: false,
  // counter: 0,
  numCard: 10,
  offsetCard: 0,
  typeList: [],
  typeValue: null
});