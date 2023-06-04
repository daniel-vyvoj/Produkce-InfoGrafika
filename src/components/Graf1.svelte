<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chart: Chart;
  let selectedInterval: string = 'day'; // Výchozí časový interval je den

  const intervals = ['hour', 'day', 'week', 'month']; // Dostupné časové intervaly pro výběr

  interface DataItem {
    UID: string;
    date: string;
    notes: string;
    reference_id: string;
    tokens: string;
    type: string;
    user: string;
  }

  const data: DataItem[] = [
   
      {
        "UID": "1",
        "date": "2021-05-31 23:59:00",
        "notes": "Miss MyFreeCams award for 2021-05\r\n",
        "reference_id": "1353679685",
        "tokens": "2000",
        "type": "Tip",
        "user": "MissMyFreeCams"
      },
      {
        "UID": "2",
        "date": "2021-05-29 23:37:00",
        "notes": "For: Naughty fun in shower 16/6/2019 (ID #10967069)\r\n",
        "reference_id": "1352370056",
        "tokens": "200",
        "type": "MFC Share",
        "user": "Cotterxxx"
      },
      {
        "UID": "3",
        "date": "2021-05-29 16:25:00",
        "notes": "goign away song\r\n",
        "reference_id": "1352163416",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "4",
        "date": "2021-05-29 16:20:00",
        "notes": "wb:perfecto winner????????\r\n",
        "reference_id": "1352160622",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "5",
        "date": "2021-05-29 16:16:00",
        "notes": "\r\n",
        "reference_id": "1352158858",
        "tokens": "2",
        "type": "Group Show",
        "user": "JENtlemanMike"
      },
      {
        "UID": "6",
        "date": "2021-05-29 16:16:00",
        "notes": "\r\n",
        "reference_id": "1352158652",
        "tokens": "7",
        "type": "Group Show",
        "user": "dawgfan999"
      },
      {
        "UID": "7",
        "date": "2021-05-29 16:14:00",
        "notes": "\r\n",
        "reference_id": "1352157752",
        "tokens": "5",
        "type": "Group Show",
        "user": "hogrider03"
      },
      {
        "UID": "8",
        "date": "2021-05-29 16:11:00",
        "notes": "\r\n",
        "reference_id": "1352156289",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "9",
        "date": "2021-05-29 16:10:00",
        "notes": "\r\n",
        "reference_id": "1352156220",
        "tokens": "63",
        "type": "Group Show",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "10",
        "date": "2021-05-29 16:08:00",
        "notes": "\r\n",
        "reference_id": "1352155124",
        "tokens": "2",
        "type": "Group Show",
        "user": "tangy4"
      },
      {
        "UID": "11",
        "date": "2021-05-29 16:01:00",
        "notes": "\r\n",
        "reference_id": "1352151468",
        "tokens": "10",
        "type": "Group Show",
        "user": "Hornyjester1"
      },
      {
        "UID": "12",
        "date": "2021-05-29 15:59:00",
        "notes": "\r\n",
        "reference_id": "1352150908",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "13",
        "date": "2021-05-29 15:59:00",
        "notes": "\r\n",
        "reference_id": "1352150880",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "14",
        "date": "2021-05-29 15:59:00",
        "notes": "\r\n",
        "reference_id": "1352150609",
        "tokens": "10",
        "type": "Group Show",
        "user": "Bigboy1on1"
      },
      {
        "UID": "15",
        "date": "2021-05-29 15:57:00",
        "notes": "\r\n",
        "reference_id": "1352149970",
        "tokens": "13",
        "type": "Group Show",
        "user": "Nobunaga20"
      },
      {
        "UID": "16",
        "date": "2021-05-29 15:57:00",
        "notes": "\r\n",
        "reference_id": "1352149951",
        "tokens": "10",
        "type": "Group Show",
        "user": "moreno_90"
      },
      {
        "UID": "17",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149203",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "18",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149175",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "19",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149137",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "20",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149138",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "21",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149127",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "22",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149132",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "23",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149136",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "24",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149123",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "25",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149115",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "26",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149092",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "27",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149093",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "28",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149096",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "29",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149099",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "30",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149081",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "31",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149085",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "32",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149088",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "33",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149090",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "34",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149076",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "35",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149050",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "36",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149053",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "37",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149055",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "38",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149062",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "39",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149039",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "40",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149042",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "41",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149033",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "42",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352149013",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "43",
        "date": "2021-05-29 15:55:00",
        "notes": "\r\n",
        "reference_id": "1352148989",
        "tokens": "1",
        "type": "Group Show",
        "user": "EagerLicker21"
      },
      {
        "UID": "44",
        "date": "2021-05-29 15:54:00",
        "notes": "\r\n",
        "reference_id": "1352148659",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "45",
        "date": "2021-05-29 15:54:00",
        "notes": "\r\n",
        "reference_id": "1352148485",
        "tokens": "21",
        "type": "Group Show",
        "user": "GxMax"
      },
      {
        "UID": "46",
        "date": "2021-05-29 15:54:00",
        "notes": "\r\n",
        "reference_id": "1352148468",
        "tokens": "2",
        "type": "Group Show",
        "user": "Titans_420"
      },
      {
        "UID": "47",
        "date": "2021-05-29 15:53:00",
        "notes": "\r\n",
        "reference_id": "1352148025",
        "tokens": "2",
        "type": "Group Show",
        "user": "JonnySwiss98"
      },
      {
        "UID": "48",
        "date": "2021-05-29 15:51:00",
        "notes": "\r\n",
        "reference_id": "1352147423",
        "tokens": "20",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "49",
        "date": "2021-05-29 15:51:00",
        "notes": "\r\n",
        "reference_id": "1352147215",
        "tokens": "113",
        "type": "Group Show",
        "user": "OneSavFan"
      },
      {
        "UID": "50",
        "date": "2021-05-29 15:49:00",
        "notes": "\r\n",
        "reference_id": "1352146232",
        "tokens": "17",
        "type": "Group Show",
        "user": "OneSavFan"
      },
      {
        "UID": "51",
        "date": "2021-05-29 15:49:00",
        "notes": "\r\n",
        "reference_id": "1352146170",
        "tokens": "15",
        "type": "Group Show",
        "user": "Lionking2306"
      },
      {
        "UID": "52",
        "date": "2021-05-29 15:48:00",
        "notes": "\r\n",
        "reference_id": "1352145782",
        "tokens": "3",
        "type": "Group Show",
        "user": "Easy_a1"
      },
      {
        "UID": "53",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145527",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "54",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145504",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "55",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145488",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "56",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145401",
        "tokens": "269",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "57",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145402",
        "tokens": "10",
        "type": "Group Show",
        "user": "wowthatsace"
      },
      {
        "UID": "58",
        "date": "2021-05-29 15:47:00",
        "notes": "\r\n",
        "reference_id": "1352145403",
        "tokens": "136",
        "type": "Group Show",
        "user": "Jazzman04"
      },
      {
        "UID": "59",
        "date": "2021-05-29 15:42:00",
        "notes": "I hope you enjoy honey!\r\n",
        "reference_id": "1352143754",
        "tokens": "111",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "60",
        "date": "2021-05-29 15:36:00",
        "notes": "Shama Lama Ding Dong!!\r\n",
        "reference_id": "1352140834",
        "tokens": "300",
        "type": "Tip",
        "user": "mactt99"
      },
      {
        "UID": "61",
        "date": "2021-05-29 15:36:00",
        "notes": "\r\n",
        "reference_id": "1352140817",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "62",
        "date": "2021-05-29 15:35:00",
        "notes": "Bada Bing!!\r\n",
        "reference_id": "1352140295",
        "tokens": "200",
        "type": "Tip",
        "user": "mactt99"
      },
      {
        "UID": "63",
        "date": "2021-05-29 15:34:00",
        "notes": "\r\n",
        "reference_id": "1352139800",
        "tokens": "10",
        "type": "Tip",
        "user": "Slipsdictome2"
      },
      {
        "UID": "64",
        "date": "2021-05-29 15:33:00",
        "notes": "For: ",
        "reference_id": "1352139574",
        "tokens": "9",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "65",
        "date": "2021-05-29 15:31:00",
        "notes": "all right\r\n",
        "reference_id": "1352138584",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "66",
        "date": "2021-05-29 15:31:00",
        "notes": "all right\r\n",
        "reference_id": "1352138574",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "67",
        "date": "2021-05-29 15:31:00",
        "notes": "all right\r\n",
        "reference_id": "1352138579",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "68",
        "date": "2021-05-29 15:31:00",
        "notes": "all right\r\n",
        "reference_id": "1352138570",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "69",
        "date": "2021-05-29 15:31:00",
        "notes": "all right\r\n",
        "reference_id": "1352138560",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "70",
        "date": "2021-05-29 15:28:00",
        "notes": "It's not just that fantastic body that attracts me to you but it is a center piece. Your beautiful face and intellect complete the trisad that attracts me!\r\n",
        "reference_id": "1352137110",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "71",
        "date": "2021-05-29 15:27:00",
        "notes": "Surrender,,,,,,Cheap Trick\r\n",
        "reference_id": "1352136429",
        "tokens": "36",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "72",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135645",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "73",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135633",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "74",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135635",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "75",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135637",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "76",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135638",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "77",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135642",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "78",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135627",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "79",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135630",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "80",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135607",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "81",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135609",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "82",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135612",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "83",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135614",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "84",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135615",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "85",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135598",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "86",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135584",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "87",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135587",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "88",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135591",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "89",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135593",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "90",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135596",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "91",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135577",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "92",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135578",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "93",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135579",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "94",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135581",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "95",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135570",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "96",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135558",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "97",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135561",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "98",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135564",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "99",
        "date": "2021-05-29 15:25:00",
        "notes": "\r\n",
        "reference_id": "1352135566",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "100",
        "date": "2021-05-29 15:24:00",
        "notes": "For: Rainbow tip top MENU | You are delicious ! (ID #10960524)\r\n",
        "reference_id": "1352134998",
        "tokens": "7",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "101",
        "date": "2021-05-29 15:21:00",
        "notes": "You really keep that body of yours in good shape. PUSA!!\r\n",
        "reference_id": "1352133438",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "102",
        "date": "2021-05-29 15:18:00",
        "notes": ":lotionass\r\n",
        "reference_id": "1352132475",
        "tokens": "110",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "103",
        "date": "2021-05-29 15:16:00",
        "notes": "\r\n",
        "reference_id": "1352131486",
        "tokens": "50",
        "type": "Tip",
        "user": "hornyboyy232"
      },
      {
        "UID": "104",
        "date": "2021-05-29 15:14:00",
        "notes": "For: Rainbow tip top MENU | SHIT SHIT SHIT (ID #10960456)\r\nIncluded Message: Be home in 15mins\r\n",
        "reference_id": "1352130552",
        "tokens": "222",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "105",
        "date": "2021-05-29 15:12:00",
        "notes": "\r\n",
        "reference_id": "1352129269",
        "tokens": "20",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "106",
        "date": "2021-05-29 15:12:00",
        "notes": "\r\n",
        "reference_id": "1352129261",
        "tokens": "20",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "107",
        "date": "2021-05-29 15:12:00",
        "notes": "\r\n",
        "reference_id": "1352129250",
        "tokens": "20",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "108",
        "date": "2021-05-29 15:12:00",
        "notes": "\r\n",
        "reference_id": "1352129242",
        "tokens": "20",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "109",
        "date": "2021-05-29 15:12:00",
        "notes": "\r\n",
        "reference_id": "1352129229",
        "tokens": "20",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "110",
        "date": "2021-05-29 15:10:00",
        "notes": "\r\n",
        "reference_id": "1352128458",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "111",
        "date": "2021-05-29 15:10:00",
        "notes": "\r\n",
        "reference_id": "1352128452",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "112",
        "date": "2021-05-29 15:10:00",
        "notes": "\r\n",
        "reference_id": "1352128447",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "113",
        "date": "2021-05-29 15:10:00",
        "notes": "\r\n",
        "reference_id": "1352128439",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "114",
        "date": "2021-05-29 15:08:00",
        "notes": "For: Rainbow tip top MENU | I love your boobees (ID #10960411)\r\n",
        "reference_id": "1352127623",
        "tokens": "4",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "115",
        "date": "2021-05-29 15:08:00",
        "notes": "hitachi ... maybe\r\n",
        "reference_id": "1352127330",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "116",
        "date": "2021-05-29 15:03:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10960353)\r\n",
        "reference_id": "1352124615",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "117",
        "date": "2021-05-29 15:00:00",
        "notes": "I love you way more than I imagine\r\n",
        "reference_id": "1352123123",
        "tokens": "50",
        "type": "Tip",
        "user": "pehan"
      },
      {
        "UID": "118",
        "date": "2021-05-29 14:50:00",
        "notes": "\r\n",
        "reference_id": "1352118500",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "119",
        "date": "2021-05-29 14:49:00",
        "notes": "\r\n",
        "reference_id": "1352118127",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "120",
        "date": "2021-05-29 14:48:00",
        "notes": "Thode breasts of yours are ripe and should befondled, licked and sucked!\r\n",
        "reference_id": "1352117645",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "121",
        "date": "2021-05-29 14:43:00",
        "notes": "love you more than you understand ....\r\n",
        "reference_id": "1352115039",
        "tokens": "10",
        "type": "Tip",
        "user": "pehan"
      },
      {
        "UID": "122",
        "date": "2021-05-29 14:42:00",
        "notes": "come out\r\n",
        "reference_id": "1352114492",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "123",
        "date": "2021-05-29 14:39:00",
        "notes": "dua nipa alert\r\n",
        "reference_id": "1352112749",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "124",
        "date": "2021-05-29 14:37:00",
        "notes": "nipple alert\r\n",
        "reference_id": "1352111578",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "125",
        "date": "2021-05-29 14:36:00",
        "notes": "mmmmm That body of yours is magic\r\n",
        "reference_id": "1352110698",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "126",
        "date": "2021-05-29 14:26:00",
        "notes": "I love all your mveshoney\r\n",
        "reference_id": "1352106014",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "127",
        "date": "2021-05-29 14:23:00",
        "notes": "36 token BJ :yess\r\n",
        "reference_id": "1352104555",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "128",
        "date": "2021-05-29 14:22:00",
        "notes": "mamm I love you welcome to Hansen family :d\r\n",
        "reference_id": "1352104320",
        "tokens": "10",
        "type": "Tip",
        "user": "pehan"
      },
      {
        "UID": "129",
        "date": "2021-05-29 14:21:00",
        "notes": "You reakky do look HOT\r\n",
        "reference_id": "1352104050",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "130",
        "date": "2021-05-29 14:15:00",
        "notes": ":lool\r\n",
        "reference_id": "1352101420",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "131",
        "date": "2021-05-29 14:04:00",
        "notes": "\r\n",
        "reference_id": "1352097404",
        "tokens": "20",
        "type": "Tip",
        "user": "sk1113615"
      },
      {
        "UID": "132",
        "date": "2021-05-29 13:53:00",
        "notes": "\r\n",
        "reference_id": "1352092459",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "133",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090494",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "134",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090475",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "135",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090468",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "136",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090449",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "137",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090438",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "138",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090430",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "139",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090427",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "140",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090419",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "141",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090413",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "142",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090407",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "143",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090403",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "144",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090399",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "145",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090393",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "146",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090382",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "147",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090381",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "148",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090371",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "149",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090367",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "150",
        "date": "2021-05-29 13:48:00",
        "notes": "\r\n",
        "reference_id": "1352090359",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "151",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090231",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "152",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090226",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "153",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090217",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "154",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090214",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "155",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090208",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "156",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090194",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "157",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090188",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "158",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090182",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "159",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090177",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "160",
        "date": "2021-05-29 13:47:00",
        "notes": "\r\n",
        "reference_id": "1352090150",
        "tokens": "1",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "161",
        "date": "2021-05-29 13:46:00",
        "notes": "\r\n",
        "reference_id": "1352089913",
        "tokens": "11",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "162",
        "date": "2021-05-29 13:46:00",
        "notes": "\r\n",
        "reference_id": "1352089910",
        "tokens": "11",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "163",
        "date": "2021-05-29 13:46:00",
        "notes": "\r\n",
        "reference_id": "1352089906",
        "tokens": "11",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "164",
        "date": "2021-05-29 13:46:00",
        "notes": "\r\n",
        "reference_id": "1352089787",
        "tokens": "11",
        "type": "Tip",
        "user": "miseryy"
      },
      {
        "UID": "165",
        "date": "2021-05-29 08:27:00",
        "notes": "\r\n",
        "reference_id": "1351944636",
        "tokens": "20",
        "type": "Tip",
        "user": "mongoweenie"
      },
      {
        "UID": "166",
        "date": "2021-05-29 08:27:00",
        "notes": "\r\n",
        "reference_id": "1351944590",
        "tokens": "10",
        "type": "Tip",
        "user": "mongoweenie"
      },
      {
        "UID": "167",
        "date": "2021-05-29 08:26:00",
        "notes": "\r\n",
        "reference_id": "1351944144",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "168",
        "date": "2021-05-29 08:24:00",
        "notes": "\r\n",
        "reference_id": "1351943160",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "169",
        "date": "2021-05-29 08:22:00",
        "notes": ":yess\r\n",
        "reference_id": "1351941936",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "170",
        "date": "2021-05-29 08:19:00",
        "notes": "\r\n",
        "reference_id": "1351940912",
        "tokens": "1",
        "type": "Tip",
        "user": "bonerboy6986"
      },
      {
        "UID": "171",
        "date": "2021-05-29 08:19:00",
        "notes": "\r\n",
        "reference_id": "1351940905",
        "tokens": "1",
        "type": "Tip",
        "user": "bonerboy6986"
      },
      {
        "UID": "172",
        "date": "2021-05-29 08:19:00",
        "notes": "\r\n",
        "reference_id": "1351940891",
        "tokens": "1",
        "type": "Tip",
        "user": "bonerboy6986"
      },
      {
        "UID": "173",
        "date": "2021-05-29 08:19:00",
        "notes": "\r\n",
        "reference_id": "1351940884",
        "tokens": "1",
        "type": "Tip",
        "user": "bonerboy6986"
      },
      {
        "UID": "174",
        "date": "2021-05-29 08:16:00",
        "notes": "watch i will guess wrong......video???????\r\n",
        "reference_id": "1351939514",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "175",
        "date": "2021-05-29 08:11:00",
        "notes": "\r\n",
        "reference_id": "1351937519",
        "tokens": "16",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "176",
        "date": "2021-05-29 08:10:00",
        "notes": "\r\n",
        "reference_id": "1351937144",
        "tokens": "3",
        "type": "Group Show",
        "user": "MFCspyking"
      },
      {
        "UID": "177",
        "date": "2021-05-29 08:07:00",
        "notes": "\r\n",
        "reference_id": "1351935693",
        "tokens": "37",
        "type": "Group Show",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "178",
        "date": "2021-05-29 08:06:00",
        "notes": "\r\n",
        "reference_id": "1351935359",
        "tokens": "7",
        "type": "Group Show",
        "user": "Lord_Edward"
      },
      {
        "UID": "179",
        "date": "2021-05-29 08:06:00",
        "notes": "\r\n",
        "reference_id": "1351935047",
        "tokens": "13",
        "type": "Group Show",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "180",
        "date": "2021-05-29 08:06:00",
        "notes": "\r\n",
        "reference_id": "1351935048",
        "tokens": "14",
        "type": "Group Show",
        "user": "HottoKollo"
      },
      {
        "UID": "181",
        "date": "2021-05-29 08:06:00",
        "notes": "\r\n",
        "reference_id": "1351935049",
        "tokens": "4",
        "type": "Group Show",
        "user": "Lord_Edward"
      },
      {
        "UID": "182",
        "date": "2021-05-29 08:00:00",
        "notes": "Always lov the view :p\r\n",
        "reference_id": "1351932831",
        "tokens": "30",
        "type": "Tip",
        "user": "QueesHermosa"
      },
      {
        "UID": "183",
        "date": "2021-05-29 08:00:00",
        "notes": "for crazy\r\n",
        "reference_id": "1351932816",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "184",
        "date": "2021-05-29 07:58:00",
        "notes": "\r\n",
        "reference_id": "1351931634",
        "tokens": "20",
        "type": "Tip",
        "user": "madden2067"
      },
      {
        "UID": "185",
        "date": "2021-05-29 07:54:00",
        "notes": "\r\n",
        "reference_id": "1351930113",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "186",
        "date": "2021-05-29 07:54:00",
        "notes": "\r\n",
        "reference_id": "1351930108",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "187",
        "date": "2021-05-29 07:54:00",
        "notes": "\r\n",
        "reference_id": "1351930101",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "188",
        "date": "2021-05-29 07:51:00",
        "notes": "For: Rainbow tip top MENU | Fap Tax (ID #10957138)\r\n",
        "reference_id": "1351929094",
        "tokens": "15",
        "type": "MFC Share",
        "user": "Charley3140"
      },
      {
        "UID": "189",
        "date": "2021-05-29 07:51:00",
        "notes": "\r\n",
        "reference_id": "1351928698",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "190",
        "date": "2021-05-29 07:51:00",
        "notes": "\r\n",
        "reference_id": "1351928674",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "191",
        "date": "2021-05-29 07:51:00",
        "notes": "\r\n",
        "reference_id": "1351928659",
        "tokens": "5",
        "type": "Tip",
        "user": "Beatlesfan77"
      },
      {
        "UID": "192",
        "date": "2021-05-29 07:49:00",
        "notes": "\r\n",
        "reference_id": "1351927587",
        "tokens": "5",
        "type": "Tip",
        "user": "badstuff1967"
      },
      {
        "UID": "193",
        "date": "2021-05-29 07:48:00",
        "notes": "\r\n",
        "reference_id": "1351927571",
        "tokens": "5",
        "type": "Tip",
        "user": "badstuff1967"
      },
      {
        "UID": "194",
        "date": "2021-05-29 07:48:00",
        "notes": "\r\n",
        "reference_id": "1351927553",
        "tokens": "5",
        "type": "Tip",
        "user": "badstuff1967"
      },
      {
        "UID": "195",
        "date": "2021-05-29 07:43:00",
        "notes": "\r\n",
        "reference_id": "1351925257",
        "tokens": "111",
        "type": "Tip",
        "user": "PIMP_JUICE_"
      },
      {
        "UID": "196",
        "date": "2021-05-29 07:42:00",
        "notes": "\r\n",
        "reference_id": "1351925047",
        "tokens": "35",
        "type": "Tip",
        "user": "madden2067"
      },
      {
        "UID": "197",
        "date": "2021-05-29 07:42:00",
        "notes": "love you MY WIFE\r\n",
        "reference_id": "1351924966",
        "tokens": "100",
        "type": "Tip",
        "user": "pehan"
      },
      {
        "UID": "198",
        "date": "2021-05-29 07:41:00",
        "notes": "ð³\r\n",
        "reference_id": "1351924606",
        "tokens": "200",
        "type": "Tip",
        "user": "PIMP_JUICE_"
      },
      {
        "UID": "199",
        "date": "2021-05-29 07:39:00",
        "notes": "\r\n",
        "reference_id": "1351924000",
        "tokens": "15",
        "type": "Tip",
        "user": "greatguy300a"
      },
      {
        "UID": "200",
        "date": "2021-05-29 07:38:00",
        "notes": "\r\n",
        "reference_id": "1351923762",
        "tokens": "25",
        "type": "Tip",
        "user": "PIMP_JUICE_"
      },
      {
        "UID": "201",
        "date": "2021-05-29 07:38:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10957080)\r\n",
        "reference_id": "1351923690",
        "tokens": "9",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "202",
        "date": "2021-05-29 07:38:00",
        "notes": "\r\n",
        "reference_id": "1351923667",
        "tokens": "25",
        "type": "Tip",
        "user": "PIMP_JUICE_"
      },
      {
        "UID": "203",
        "date": "2021-05-29 07:38:00",
        "notes": "Hi\r\n",
        "reference_id": "1351923386",
        "tokens": "25",
        "type": "Tip",
        "user": "PIMP_JUICE_"
      },
      {
        "UID": "204",
        "date": "2021-05-29 07:35:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1351922301",
        "tokens": "5",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "205",
        "date": "2021-05-29 07:33:00",
        "notes": "\r\n",
        "reference_id": "1351921716",
        "tokens": "25",
        "type": "Tip",
        "user": "biker54321"
      },
      {
        "UID": "206",
        "date": "2021-05-29 07:31:00",
        "notes": "\r\n",
        "reference_id": "1351921026",
        "tokens": "252",
        "type": "Tip",
        "user": "biker54321"
      },
      {
        "UID": "207",
        "date": "2021-05-29 07:31:00",
        "notes": "\r\n",
        "reference_id": "1351920991",
        "tokens": "5",
        "type": "Tip",
        "user": "biker54321"
      },
      {
        "UID": "208",
        "date": "2021-05-29 07:31:00",
        "notes": "\r\n",
        "reference_id": "1351920928",
        "tokens": "10",
        "type": "Tip",
        "user": "biker54321"
      },
      {
        "UID": "209",
        "date": "2021-05-29 07:28:00",
        "notes": "\r\n",
        "reference_id": "1351919819",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "210",
        "date": "2021-05-29 07:28:00",
        "notes": "video????????\r\n",
        "reference_id": "1351919764",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "211",
        "date": "2021-05-29 07:26:00",
        "notes": "\r\n",
        "reference_id": "1351919293",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "212",
        "date": "2021-05-29 07:26:00",
        "notes": "\r\n",
        "reference_id": "1351919165",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "213",
        "date": "2021-05-29 07:26:00",
        "notes": "again?\r\n",
        "reference_id": "1351919123",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "214",
        "date": "2021-05-29 07:23:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1351918000",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "215",
        "date": "2021-05-29 07:11:00",
        "notes": "\r\n",
        "reference_id": "1351912390",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "216",
        "date": "2021-05-29 07:09:00",
        "notes": "\r\n",
        "reference_id": "1351911389",
        "tokens": "2",
        "type": "Group Show",
        "user": "Hulshoofd"
      },
      {
        "UID": "217",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909973",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "218",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909975",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "219",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909977",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "220",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909957",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "221",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909959",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "222",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909964",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "223",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909966",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "224",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909942",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "225",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909943",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "226",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909948",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "227",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909949",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "228",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909955",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "229",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909933",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "230",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909937",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "231",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909939",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "232",
        "date": "2021-05-29 07:05:00",
        "notes": "\r\n",
        "reference_id": "1351909929",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "233",
        "date": "2021-05-29 07:02:00",
        "notes": "\r\n",
        "reference_id": "1351908577",
        "tokens": "111",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "234",
        "date": "2021-05-29 07:01:00",
        "notes": "close window\r\n",
        "reference_id": "1351908332",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "235",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908106",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "236",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908108",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "237",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908109",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "238",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908111",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "239",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908113",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "240",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908092",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "241",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908094",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "242",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908098",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "243",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908102",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "244",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908080",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "245",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908083",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "246",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908085",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "247",
        "date": "2021-05-29 07:01:00",
        "notes": "\r\n",
        "reference_id": "1351908045",
        "tokens": "111",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "248",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907974",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "249",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907975",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "250",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907977",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "251",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907958",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "252",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907965",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "253",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907966",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "254",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907968",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "255",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907947",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "256",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907949",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "257",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907951",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "258",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907953",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "259",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907955",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "260",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907927",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "261",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907932",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "262",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907936",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "263",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907939",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "264",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907925",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "265",
        "date": "2021-05-29 07:00:00",
        "notes": "\r\n",
        "reference_id": "1351907758",
        "tokens": "129",
        "type": "Group Show",
        "user": "fuckupaym3"
      },
      {
        "UID": "266",
        "date": "2021-05-29 07:00:00",
        "notes": "3rd shit\r\n",
        "reference_id": "1351907467",
        "tokens": "222",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "267",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907297",
        "tokens": "6",
        "type": "Group Show",
        "user": "Beck1369"
      },
      {
        "UID": "268",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907111",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "269",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907101",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "270",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907105",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "271",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907107",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "272",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907109",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "273",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907090",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "274",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907091",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "275",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907092",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "276",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907095",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "277",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907098",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "278",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907075",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "279",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907079",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "280",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907083",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "281",
        "date": "2021-05-29 06:59:00",
        "notes": "\r\n",
        "reference_id": "1351907085",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "282",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906911",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "283",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906851",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "284",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906854",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "285",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906831",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "286",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906834",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "287",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906837",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "288",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906846",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "289",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906816",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "290",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906819",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "291",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906822",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "292",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906826",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "293",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906828",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "294",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906830",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "295",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906812",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "296",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906813",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "297",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906814",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "298",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906815",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "299",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906803",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "300",
        "date": "2021-05-29 06:58:00",
        "notes": "\r\n",
        "reference_id": "1351906588",
        "tokens": "4",
        "type": "Group Show",
        "user": "djstouch"
      },
      {
        "UID": "301",
        "date": "2021-05-29 06:57:00",
        "notes": "fuck pussy trill i cum\r\n",
        "reference_id": "1351905968",
        "tokens": "100",
        "type": "Tip",
        "user": "fuckupaym3"
      },
      {
        "UID": "302",
        "date": "2021-05-29 06:57:00",
        "notes": "\r\n",
        "reference_id": "1351905738",
        "tokens": "86",
        "type": "Group Show",
        "user": "MFCspyking"
      },
      {
        "UID": "303",
        "date": "2021-05-29 06:56:00",
        "notes": "\r\n",
        "reference_id": "1351905381",
        "tokens": "5",
        "type": "Group Show",
        "user": "RedHotCockPep"
      },
      {
        "UID": "304",
        "date": "2021-05-29 06:55:00",
        "notes": "second shit\r\n",
        "reference_id": "1351905119",
        "tokens": "222",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "305",
        "date": "2021-05-29 06:55:00",
        "notes": "\r\n",
        "reference_id": "1351904853",
        "tokens": "5",
        "type": "Group Show",
        "user": "Talzecutive"
      },
      {
        "UID": "306",
        "date": "2021-05-29 06:54:00",
        "notes": "no u can continue\r\n",
        "reference_id": "1351904803",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "307",
        "date": "2021-05-29 06:54:00",
        "notes": "oki sorry crazy i will stop tipping :)\r\n",
        "reference_id": "1351904629",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "308",
        "date": "2021-05-29 06:54:00",
        "notes": "again he beat me to it. just say shit shit shit\r\n",
        "reference_id": "1351904315",
        "tokens": "222",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "309",
        "date": "2021-05-29 06:53:00",
        "notes": "\r\n",
        "reference_id": "1351904200",
        "tokens": "19",
        "type": "Group Show",
        "user": "MFCspyking"
      },
      {
        "UID": "310",
        "date": "2021-05-29 06:53:00",
        "notes": "\r\n",
        "reference_id": "1351904169",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "311",
        "date": "2021-05-29 06:53:00",
        "notes": "\r\n",
        "reference_id": "1351904158",
        "tokens": "65",
        "type": "Group Show",
        "user": "fuckupaym3"
      },
      {
        "UID": "312",
        "date": "2021-05-29 06:52:00",
        "notes": "\r\n",
        "reference_id": "1351903707",
        "tokens": "7",
        "type": "Group Show",
        "user": "Beck1369"
      },
      {
        "UID": "313",
        "date": "2021-05-29 06:52:00",
        "notes": "\r\n",
        "reference_id": "1351903506",
        "tokens": "3",
        "type": "Group Show",
        "user": "JonSnow99"
      },
      {
        "UID": "314",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903350",
        "tokens": "37",
        "type": "Group Show",
        "user": "skyzofred"
      },
      {
        "UID": "315",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903321",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "316",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903299",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "317",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903284",
        "tokens": "2",
        "type": "Group Show",
        "user": "The_Giggly"
      },
      {
        "UID": "318",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903238",
        "tokens": "232",
        "type": "Group Show",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "319",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903091",
        "tokens": "223",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "320",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903092",
        "tokens": "184",
        "type": "Group Show",
        "user": "fitzthecat63"
      },
      {
        "UID": "321",
        "date": "2021-05-29 06:51:00",
        "notes": "\r\n",
        "reference_id": "1351903093",
        "tokens": "152",
        "type": "Group Show",
        "user": "Jazzman04"
      },
      {
        "UID": "322",
        "date": "2021-05-29 06:50:00",
        "notes": "who is nicole24?\r\n",
        "reference_id": "1351902869",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "323",
        "date": "2021-05-29 06:50:00",
        "notes": "tahw eht kcuf??\r\n",
        "reference_id": "1351902701",
        "tokens": "5",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "324",
        "date": "2021-05-29 06:50:00",
        "notes": "?erac gnikcuf ehs seod\r\n",
        "reference_id": "1351902654",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "325",
        "date": "2021-05-29 06:50:00",
        "notes": "\r\n",
        "reference_id": "1351902530",
        "tokens": "10",
        "type": "Tip",
        "user": "skyzofred"
      },
      {
        "UID": "326",
        "date": "2021-05-29 06:50:00",
        "notes": "Love Nicole 24!australian\r\n",
        "reference_id": "1351902487",
        "tokens": "20",
        "type": "Tip",
        "user": "nickncraig"
      },
      {
        "UID": "327",
        "date": "2021-05-29 06:49:00",
        "notes": "?siht daer ehs dluoc\r\n",
        "reference_id": "1351902311",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "328",
        "date": "2021-05-29 06:49:00",
        "notes": "what if we type words backwards?\r\n",
        "reference_id": "1351901890",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "329",
        "date": "2021-05-29 06:48:00",
        "notes": "what did i do?\r\n",
        "reference_id": "1351901690",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "330",
        "date": "2021-05-29 06:48:00",
        "notes": "sure kitty blames everyone else but himself\r\n",
        "reference_id": "1351901504",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "331",
        "date": "2021-05-29 06:48:00",
        "notes": "aint that right fritz\r\n",
        "reference_id": "1351901268",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "332",
        "date": "2021-05-29 06:47:00",
        "notes": "Okay we stop\r\n",
        "reference_id": "1351901219",
        "tokens": "5",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "333",
        "date": "2021-05-29 06:47:00",
        "notes": "she has enough to worry about than reading our stuff in tip notes\r\n",
        "reference_id": "1351901107",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "334",
        "date": "2021-05-29 06:47:00",
        "notes": "stop writing in tip notes\r\n",
        "reference_id": "1351900938",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "335",
        "date": "2021-05-29 06:47:00",
        "notes": "toffi pantiesssssssssss fetch boy\r\n",
        "reference_id": "1351900914",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "336",
        "date": "2021-05-29 06:46:00",
        "notes": "below what?\r\n",
        "reference_id": "1351900742",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "337",
        "date": "2021-05-29 06:46:00",
        "notes": "u ever want to just give her vibes and ignore her so she can enjoy?\r\n",
        "reference_id": "1351900489",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "338",
        "date": "2021-05-29 06:43:00",
        "notes": "what?\r\n",
        "reference_id": "1351899100",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "339",
        "date": "2021-05-29 06:43:00",
        "notes": "and one bush ofc\r\n",
        "reference_id": "1351898914",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "340",
        "date": "2021-05-29 06:43:00",
        "notes": ":mme only like 2 mountains\r\n",
        "reference_id": "1351898783",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "341",
        "date": "2021-05-29 06:29:00",
        "notes": "you have 3 seconds :algebra\r\n",
        "reference_id": "1351892140",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "342",
        "date": "2021-05-29 06:29:00",
        "notes": "When I See You Smile....Bad English\r\n",
        "reference_id": "1351891966",
        "tokens": "36",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "343",
        "date": "2021-05-29 06:26:00",
        "notes": "5+8+4-9*8+1+2{=}? u have 60sec :)\r\n",
        "reference_id": "1351891042",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "344",
        "date": "2021-05-29 06:19:00",
        "notes": "https://www.youtube.com/watch?v{=}JkK8g6FMEXE\r\n",
        "reference_id": "1351887790",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "345",
        "date": "2021-05-29 06:15:00",
        "notes": ":tickle\r\n",
        "reference_id": "1351885639",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "346",
        "date": "2021-05-29 06:14:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1351885318",
        "tokens": "5",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "347",
        "date": "2021-05-29 06:13:00",
        "notes": "For: Toffi and Cookie pig ears treat CLUB :) (ID #10956745)\r\n",
        "reference_id": "1351884562",
        "tokens": "60",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "348",
        "date": "2021-05-29 06:10:00",
        "notes": "For: Will you my BEE my Valentine ?",
        "reference_id": "1351883587",
        "tokens": "14",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "349",
        "date": "2021-05-29 06:08:00",
        "notes": "For: ",
        "reference_id": "1351882984",
        "tokens": "9",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "350",
        "date": "2021-05-29 06:07:00",
        "notes": "\r\n",
        "reference_id": "1351882539",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "351",
        "date": "2021-05-29 06:02:00",
        "notes": "\r\n",
        "reference_id": "1351880387",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "352",
        "date": "2021-05-29 06:02:00",
        "notes": "\r\n",
        "reference_id": "1351880369",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "353",
        "date": "2021-05-29 06:02:00",
        "notes": "\r\n",
        "reference_id": "1351880363",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "354",
        "date": "2021-05-29 06:02:00",
        "notes": "\r\n",
        "reference_id": "1351880355",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "355",
        "date": "2021-05-29 05:58:00",
        "notes": "\r\n",
        "reference_id": "1351878487",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "356",
        "date": "2021-05-29 05:58:00",
        "notes": "\r\n",
        "reference_id": "1351878480",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "357",
        "date": "2021-05-29 05:58:00",
        "notes": "\r\n",
        "reference_id": "1351878468",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "358",
        "date": "2021-05-29 05:48:00",
        "notes": "\r\n",
        "reference_id": "1351875066",
        "tokens": "30",
        "type": "Tip",
        "user": "billbill82"
      },
      {
        "UID": "359",
        "date": "2021-05-29 05:46:00",
        "notes": "\r\n",
        "reference_id": "1351874478",
        "tokens": "1",
        "type": "Tip",
        "user": "Hgraner361"
      },
      {
        "UID": "360",
        "date": "2021-05-29 05:45:00",
        "notes": "F\r\n",
        "reference_id": "1351874266",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "361",
        "date": "2021-05-29 05:45:00",
        "notes": "T\r\n",
        "reference_id": "1351874201",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "362",
        "date": "2021-05-29 05:45:00",
        "notes": "W\r\n",
        "reference_id": "1351874167",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "363",
        "date": "2021-05-29 05:44:00",
        "notes": "K\r\n",
        "reference_id": "1351873997",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "364",
        "date": "2021-05-29 05:44:00",
        "notes": "O\r\n",
        "reference_id": "1351873966",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "365",
        "date": "2021-05-29 05:43:00",
        "notes": "U\r\n",
        "reference_id": "1351873698",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "366",
        "date": "2021-05-29 05:43:00",
        "notes": "R\r\n",
        "reference_id": "1351873679",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "367",
        "date": "2021-05-29 05:43:00",
        "notes": "H\r\n",
        "reference_id": "1351873659",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "368",
        "date": "2021-05-29 05:42:00",
        "notes": ":whi\r\n",
        "reference_id": "1351873293",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "369",
        "date": "2021-05-28 16:06:00",
        "notes": "\r\n",
        "reference_id": "1351478078",
        "tokens": "801",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "370",
        "date": "2021-05-28 15:25:00",
        "notes": "\r\n",
        "reference_id": "1351456735",
        "tokens": "5650",
        "type": "Private",
        "user": "fitzthecat63"
      },
      {
        "UID": "371",
        "date": "2021-05-28 15:23:00",
        "notes": "\r\n",
        "reference_id": "1351455160",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "372",
        "date": "2021-05-28 15:20:00",
        "notes": "\r\n",
        "reference_id": "1351454067",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "373",
        "date": "2021-05-28 15:18:00",
        "notes": "\r\n",
        "reference_id": "1351452952",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "374",
        "date": "2021-05-28 15:18:00",
        "notes": "\r\n",
        "reference_id": "1351452933",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "375",
        "date": "2021-05-28 15:18:00",
        "notes": "\r\n",
        "reference_id": "1351452917",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "376",
        "date": "2021-05-28 15:18:00",
        "notes": "\r\n",
        "reference_id": "1351452883",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "377",
        "date": "2021-05-28 15:17:00",
        "notes": ":tickle\r\n",
        "reference_id": "1351452118",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "378",
        "date": "2021-05-28 15:16:00",
        "notes": "\r\n",
        "reference_id": "1351451682",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "379",
        "date": "2021-05-28 15:15:00",
        "notes": ":tickle\r\n",
        "reference_id": "1351451256",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "380",
        "date": "2021-05-28 15:13:00",
        "notes": "ok last mushy song https://www.youtube.com/watch?v{=}COiIC3A0ROM\r\n",
        "reference_id": "1351449826",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "381",
        "date": "2021-05-28 15:09:00",
        "notes": ":yess https://www.youtube.com/watch?v{=}DRd-bjFfjNc\r\n",
        "reference_id": "1351447411",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "382",
        "date": "2021-05-28 15:08:00",
        "notes": "\r\n",
        "reference_id": "1351446549",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "383",
        "date": "2021-05-28 15:04:00",
        "notes": ":kis you\r\n",
        "reference_id": "1351444308",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "384",
        "date": "2021-05-28 14:59:00",
        "notes": "\r\n",
        "reference_id": "1351441249",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "385",
        "date": "2021-05-28 14:56:00",
        "notes": ":yess https://www.youtube.com/watch?v{=}Mzat6tlcmoQ\r\n",
        "reference_id": "1351438645",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "386",
        "date": "2021-05-28 14:43:00",
        "notes": "https://www.youtube.com/watch?v{=}96MiYk9VYvc\r\n",
        "reference_id": "1351430157",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "387",
        "date": "2021-05-28 14:35:00",
        "notes": "my special song for you and me... https://www.youtube.com/watch?v{=}ujNeHIo7oTE\r\n",
        "reference_id": "1351425432",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "388",
        "date": "2021-05-28 14:31:00",
        "notes": "\r\n",
        "reference_id": "1351423175",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "389",
        "date": "2021-05-28 14:31:00",
        "notes": ":peace\r\n",
        "reference_id": "1351423097",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "390",
        "date": "2021-05-28 14:27:00",
        "notes": "https://www.youtube.com/watch?v{=}TiRa_DwalQc\r\n",
        "reference_id": "1351421409",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "391",
        "date": "2021-05-28 14:19:00",
        "notes": ":kiss https://www.youtube.com/watch?v{=}NAtwI2poXXg\r\n",
        "reference_id": "1351416779",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "392",
        "date": "2021-05-28 14:15:00",
        "notes": "I want to drink your nectar\r\n",
        "reference_id": "1351414454",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "393",
        "date": "2021-05-28 14:12:00",
        "notes": ":yess\r\n",
        "reference_id": "1351413209",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "394",
        "date": "2021-05-28 14:11:00",
        "notes": "MMmmmmmmmm\r\n",
        "reference_id": "1351412640",
        "tokens": "5",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "395",
        "date": "2021-05-28 14:08:00",
        "notes": "\r\n",
        "reference_id": "1351411058",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "396",
        "date": "2021-05-28 14:03:00",
        "notes": "just mean of me\r\n",
        "reference_id": "1351408874",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "397",
        "date": "2021-05-28 13:59:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (x4) (ID #10945131)\r\n",
        "reference_id": "1351407060",
        "tokens": "276",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "398",
        "date": "2021-05-28 13:58:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10945124)\r\n",
        "reference_id": "1351406580",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "399",
        "date": "2021-05-28 13:57:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10945121)\r\n",
        "reference_id": "1351406242",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "400",
        "date": "2021-05-28 13:53:00",
        "notes": "for other side\r\n",
        "reference_id": "1351404609",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "401",
        "date": "2021-05-28 13:47:00",
        "notes": ":whi is it friday?\r\n",
        "reference_id": "1351401984",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "402",
        "date": "2021-05-28 08:21:00",
        "notes": "For: Hairy pussy 55 days no shave (ID #10942550)\r\n",
        "reference_id": "1351252076",
        "tokens": "99",
        "type": "MFC Share",
        "user": "cute4ubabe725"
      },
      {
        "UID": "403",
        "date": "2021-05-27 15:36:00",
        "notes": "\r\n",
        "reference_id": "1350833581",
        "tokens": "1188",
        "type": "Private",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "404",
        "date": "2021-05-27 15:29:00",
        "notes": "Love a woman with a bush ðð\r\n",
        "reference_id": "1350829921",
        "tokens": "5",
        "type": "Tip",
        "user": "JENtlemanMike"
      },
      {
        "UID": "405",
        "date": "2021-05-27 15:25:00",
        "notes": "but...\r\n",
        "reference_id": "1350827481",
        "tokens": "800",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "406",
        "date": "2021-05-27 15:23:00",
        "notes": "\r\n",
        "reference_id": "1350826083",
        "tokens": "2",
        "type": "Tip",
        "user": "sparky1xx"
      },
      {
        "UID": "407",
        "date": "2021-05-27 15:23:00",
        "notes": "\r\n",
        "reference_id": "1350826054",
        "tokens": "2",
        "type": "Tip",
        "user": "sparky1xx"
      },
      {
        "UID": "408",
        "date": "2021-05-27 15:23:00",
        "notes": "\r\n",
        "reference_id": "1350826034",
        "tokens": "2",
        "type": "Tip",
        "user": "sparky1xx"
      },
      {
        "UID": "409",
        "date": "2021-05-27 15:23:00",
        "notes": "\r\n",
        "reference_id": "1350826014",
        "tokens": "2",
        "type": "Tip",
        "user": "sparky1xx"
      },
      {
        "UID": "410",
        "date": "2021-05-27 15:22:00",
        "notes": "\r\n",
        "reference_id": "1350825895",
        "tokens": "2",
        "type": "Tip",
        "user": "sparky1xx"
      },
      {
        "UID": "411",
        "date": "2021-05-27 15:20:00",
        "notes": "\r\n",
        "reference_id": "1350824131",
        "tokens": "1",
        "type": "Tip",
        "user": "chief421"
      },
      {
        "UID": "412",
        "date": "2021-05-27 15:20:00",
        "notes": "\r\n",
        "reference_id": "1350824104",
        "tokens": "1",
        "type": "Tip",
        "user": "chief421"
      },
      {
        "UID": "413",
        "date": "2021-05-27 15:20:00",
        "notes": "\r\n",
        "reference_id": "1350824079",
        "tokens": "1",
        "type": "Tip",
        "user": "chief421"
      },
      {
        "UID": "414",
        "date": "2021-05-27 15:19:00",
        "notes": "\r\n",
        "reference_id": "1350823851",
        "tokens": "2",
        "type": "Tip",
        "user": "chief421"
      },
      {
        "UID": "415",
        "date": "2021-05-27 15:19:00",
        "notes": "\r\n",
        "reference_id": "1350823836",
        "tokens": "2",
        "type": "Tip",
        "user": "chief421"
      },
      {
        "UID": "416",
        "date": "2021-05-27 15:07:00",
        "notes": "do what i do, lose it permanently :dohh\r\n",
        "reference_id": "1350817152",
        "tokens": "800",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "417",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815537",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "418",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815539",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "419",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815530",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "420",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815533",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "421",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815534",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "422",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815535",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "423",
        "date": "2021-05-27 15:04:00",
        "notes": "\r\n",
        "reference_id": "1350815536",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "424",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815521",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "425",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815522",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "426",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815523",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "427",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815525",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "428",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815528",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "429",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815511",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "430",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815513",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "431",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815516",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "432",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815518",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "433",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815503",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "434",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815505",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "435",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815508",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "436",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815509",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "437",
        "date": "2021-05-27 15:03:00",
        "notes": "\r\n",
        "reference_id": "1350815496",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "438",
        "date": "2021-05-27 14:49:00",
        "notes": "my turn :hides\r\n",
        "reference_id": "1350809580",
        "tokens": "800",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "439",
        "date": "2021-05-27 14:48:00",
        "notes": "For: Rainbow tip top MENU | Oh my Gina !!! (ID #10933479)\r\n",
        "reference_id": "1350809071",
        "tokens": "8",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "440",
        "date": "2021-05-27 14:47:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10933475)\r\n",
        "reference_id": "1350808771",
        "tokens": "1",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "441",
        "date": "2021-05-27 14:46:00",
        "notes": "Mmmmmm yummy pink pussy\r\n",
        "reference_id": "1350808293",
        "tokens": "5",
        "type": "Tip",
        "user": "CrazyforPink"
      },
      {
        "UID": "442",
        "date": "2021-05-27 14:45:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10933455)\r\n",
        "reference_id": "1350807917",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "443",
        "date": "2021-05-27 14:43:00",
        "notes": "\r\n",
        "reference_id": "1350807155",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "444",
        "date": "2021-05-27 14:43:00",
        "notes": "\r\n",
        "reference_id": "1350807032",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "445",
        "date": "2021-05-27 14:43:00",
        "notes": "\r\n",
        "reference_id": "1350806958",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "446",
        "date": "2021-05-27 14:43:00",
        "notes": "\r\n",
        "reference_id": "1350806837",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "447",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806565",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "448",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806545",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "449",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806533",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "450",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806514",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "451",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806501",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "452",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806400",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "453",
        "date": "2021-05-27 14:42:00",
        "notes": "\r\n",
        "reference_id": "1350806299",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "454",
        "date": "2021-05-27 14:41:00",
        "notes": "\r\n",
        "reference_id": "1350806270",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "455",
        "date": "2021-05-27 14:41:00",
        "notes": "\r\n",
        "reference_id": "1350806249",
        "tokens": "1",
        "type": "Tip",
        "user": "foursnaps"
      },
      {
        "UID": "456",
        "date": "2021-05-27 14:38:00",
        "notes": "\r\n",
        "reference_id": "1350804194",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "457",
        "date": "2021-05-27 14:35:00",
        "notes": "\r\n",
        "reference_id": "1350803090",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "458",
        "date": "2021-05-27 14:35:00",
        "notes": "\r\n",
        "reference_id": "1350802569",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "459",
        "date": "2021-05-27 14:34:00",
        "notes": "Charles told me :yes\r\n",
        "reference_id": "1350802526",
        "tokens": "800",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "460",
        "date": "2021-05-27 14:34:00",
        "notes": "\r\n",
        "reference_id": "1350802300",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "461",
        "date": "2021-05-27 14:33:00",
        "notes": "\r\n",
        "reference_id": "1350801966",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "462",
        "date": "2021-05-27 14:32:00",
        "notes": "mmmmm yeah..\r\n",
        "reference_id": "1350801370",
        "tokens": "5",
        "type": "Tip",
        "user": "peter275"
      },
      {
        "UID": "463",
        "date": "2021-05-27 14:31:00",
        "notes": "aaaaaaahhh ! just kdding..\r\n",
        "reference_id": "1350800936",
        "tokens": "5",
        "type": "Tip",
        "user": "peter275"
      },
      {
        "UID": "464",
        "date": "2021-05-27 14:31:00",
        "notes": "\r\n",
        "reference_id": "1350800723",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "465",
        "date": "2021-05-27 14:31:00",
        "notes": "\r\n",
        "reference_id": "1350800711",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "466",
        "date": "2021-05-27 14:31:00",
        "notes": "\r\n",
        "reference_id": "1350800718",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "467",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800698",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "468",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800705",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "469",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800684",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "470",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800691",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "471",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800677",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "472",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800664",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "473",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800673",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "474",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800652",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "475",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800660",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "476",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800642",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "477",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800647",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "478",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800634",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "479",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800616",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "480",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800626",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "481",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800597",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "482",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800602",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "483",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800584",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "484",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800591",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "485",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800568",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "486",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800576",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "487",
        "date": "2021-05-27 14:30:00",
        "notes": "\r\n",
        "reference_id": "1350800556",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "488",
        "date": "2021-05-27 14:30:00",
        "notes": "Oh, sweetie,.. so nice..\r\n",
        "reference_id": "1350800426",
        "tokens": "5",
        "type": "Tip",
        "user": "peter275"
      },
      {
        "UID": "489",
        "date": "2021-05-27 14:28:00",
        "notes": "For: Rainbow tip top MENU | You are delicious ! (ID #10933285)\r\n",
        "reference_id": "1350799355",
        "tokens": "7",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "490",
        "date": "2021-05-27 14:27:00",
        "notes": "For: Rainbow tip top MENU | Vibes make Savi eyes crossed ! (ID #10933276)\r\n",
        "reference_id": "1350798690",
        "tokens": "20",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "491",
        "date": "2021-05-27 14:26:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10933270)\r\n",
        "reference_id": "1350798377",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "492",
        "date": "2021-05-27 14:24:00",
        "notes": ":lovee\r\n",
        "reference_id": "1350797068",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "493",
        "date": "2021-05-27 14:24:00",
        "notes": "\r\n",
        "reference_id": "1350796865",
        "tokens": "10",
        "type": "Tip",
        "user": "Badboy97365"
      },
      {
        "UID": "494",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796027",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "495",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796030",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "496",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796017",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "497",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796021",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "498",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796022",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "499",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796023",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "500",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796007",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "501",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796010",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "502",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796013",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "503",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796016",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "504",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796000",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "505",
        "date": "2021-05-27 14:22:00",
        "notes": "\r\n",
        "reference_id": "1350796005",
        "tokens": "1",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "506",
        "date": "2021-05-27 14:18:00",
        "notes": "\r\n",
        "reference_id": "1350793942",
        "tokens": "1",
        "type": "Tip",
        "user": "booky"
      },
      {
        "UID": "507",
        "date": "2021-05-27 14:18:00",
        "notes": "\r\n",
        "reference_id": "1350793901",
        "tokens": "1",
        "type": "Tip",
        "user": "booky"
      },
      {
        "UID": "508",
        "date": "2021-05-27 14:18:00",
        "notes": "\r\n",
        "reference_id": "1350793786",
        "tokens": "1",
        "type": "Tip",
        "user": "booky"
      },
      {
        "UID": "509",
        "date": "2021-05-27 14:18:00",
        "notes": "\r\n",
        "reference_id": "1350793640",
        "tokens": "1",
        "type": "Tip",
        "user": "booky"
      },
      {
        "UID": "510",
        "date": "2021-05-27 14:16:00",
        "notes": "{=} {=} {=} {=} :tounge\r\n",
        "reference_id": "1350792920",
        "tokens": "50",
        "type": "Tip",
        "user": "arrebal"
      },
      {
        "UID": "511",
        "date": "2021-05-27 14:16:00",
        "notes": "For: Toffi and Cookie pig ears treat CLUB :) (ID #10933189)\r\n",
        "reference_id": "1350792671",
        "tokens": "60",
        "type": "MFC Share",
        "user": "NotTom"
      },
      {
        "UID": "512",
        "date": "2021-05-27 14:15:00",
        "notes": ":pervy\r\n",
        "reference_id": "1350792207",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "513",
        "date": "2021-05-27 14:14:00",
        "notes": "{=}\r\n",
        "reference_id": "1350791484",
        "tokens": "100",
        "type": "Tip",
        "user": "arrebal"
      },
      {
        "UID": "514",
        "date": "2021-05-27 14:13:00",
        "notes": ":mmmmh\r\n",
        "reference_id": "1350791386",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "515",
        "date": "2021-05-27 14:12:00",
        "notes": "\r\n",
        "reference_id": "1350790731",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "516",
        "date": "2021-05-27 14:10:00",
        "notes": "Enjoy Daniela! Pusinka!\r\n",
        "reference_id": "1350790149",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "517",
        "date": "2021-05-27 14:10:00",
        "notes": ":hieyebrows\r\n",
        "reference_id": "1350790133",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "518",
        "date": "2021-05-27 14:07:00",
        "notes": "\r\n",
        "reference_id": "1350788916",
        "tokens": "20",
        "type": "Tip",
        "user": "Sinbad61"
      },
      {
        "UID": "519",
        "date": "2021-05-27 14:05:00",
        "notes": ":whisper dice\r\n",
        "reference_id": "1350787943",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "520",
        "date": "2021-05-27 14:03:00",
        "notes": "\r\n",
        "reference_id": "1350787225",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "521",
        "date": "2021-05-27 14:01:00",
        "notes": "For: Rainbow tip top MENU | I love your boobees (ID #10933071)\r\n",
        "reference_id": "1350786182",
        "tokens": "4",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "522",
        "date": "2021-05-27 14:00:00",
        "notes": "\r\n",
        "reference_id": "1350785724",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "523",
        "date": "2021-05-27 13:58:00",
        "notes": "shits broke\r\n",
        "reference_id": "1350785184",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "524",
        "date": "2021-05-27 13:58:00",
        "notes": "finger\r\n",
        "reference_id": "1350785094",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "525",
        "date": "2021-05-27 13:58:00",
        "notes": "\r\n",
        "reference_id": "1350784998",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "526",
        "date": "2021-05-27 13:58:00",
        "notes": "winnerrrrrrrrrrrrrrr 'peace\r\n",
        "reference_id": "1350784854",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "527",
        "date": "2021-05-27 13:57:00",
        "notes": "For: Rainbow tip top MENU | Oh girl (ID #10933038)\r\n",
        "reference_id": "1350784621",
        "tokens": "6",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "528",
        "date": "2021-05-27 13:56:00",
        "notes": "\r\n",
        "reference_id": "1350784038",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "529",
        "date": "2021-05-27 13:55:00",
        "notes": "You are always beautifuil and delicious honey\r\n",
        "reference_id": "1350783363",
        "tokens": "111",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "530",
        "date": "2021-05-27 13:52:00",
        "notes": "\r\n",
        "reference_id": "1350781959",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "531",
        "date": "2021-05-27 13:49:00",
        "notes": "Pusinka Daniela!\r\n",
        "reference_id": "1350780707",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "532",
        "date": "2021-05-27 13:48:00",
        "notes": "\r\n",
        "reference_id": "1350780104",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "533",
        "date": "2021-05-27 13:47:00",
        "notes": "You do look delicious honey and you make my mouth water!\r\n",
        "reference_id": "1350779734",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "534",
        "date": "2021-05-27 13:44:00",
        "notes": "happy fucking friday!!!!!!!!!!!!!\r\n",
        "reference_id": "1350778582",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "535",
        "date": "2021-05-27 07:46:00",
        "notes": "For: Rainbow tip top MENU | Oh boy ! (ID #10930359)\r\n",
        "reference_id": "1350629971",
        "tokens": "3",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "536",
        "date": "2021-05-27 07:44:00",
        "notes": "wb :perfecto its evening already?????\r\n",
        "reference_id": "1350629198",
        "tokens": "10",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "537",
        "date": "2021-05-27 07:37:00",
        "notes": "\r\n",
        "reference_id": "1350626351",
        "tokens": "36",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "538",
        "date": "2021-05-27 07:18:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10930280)\r\n",
        "reference_id": "1350619005",
        "tokens": "9",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "539",
        "date": "2021-05-27 07:18:00",
        "notes": "For: Rainbow tip top MENU | I love your boobees (ID #10930279)\r\n",
        "reference_id": "1350618964",
        "tokens": "4",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "540",
        "date": "2021-05-27 07:15:00",
        "notes": "\r\n",
        "reference_id": "1350617743",
        "tokens": "50",
        "type": "Tip",
        "user": "Sexy7771"
      },
      {
        "UID": "541",
        "date": "2021-05-27 07:14:00",
        "notes": "\r\n",
        "reference_id": "1350617554",
        "tokens": "50",
        "type": "Tip",
        "user": "Sexy7771"
      },
      {
        "UID": "542",
        "date": "2021-05-27 07:14:00",
        "notes": "\r\n",
        "reference_id": "1350617471",
        "tokens": "50",
        "type": "Tip",
        "user": "Sexy7771"
      },
      {
        "UID": "543",
        "date": "2021-05-27 07:10:00",
        "notes": "Can you finger your pussy for me\r\n",
        "reference_id": "1350616089",
        "tokens": "50",
        "type": "Tip",
        "user": "Sexy7771"
      },
      {
        "UID": "544",
        "date": "2021-05-27 07:09:00",
        "notes": "\r\n",
        "reference_id": "1350615688",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "545",
        "date": "2021-05-27 07:06:00",
        "notes": "for fan\r\n",
        "reference_id": "1350614753",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "546",
        "date": "2021-05-27 07:06:00",
        "notes": "For: Rainbow tip top MENU | Oh boy ! (ID #10930070)\r\n",
        "reference_id": "1350614539",
        "tokens": "3",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "547",
        "date": "2021-05-27 07:06:00",
        "notes": "how dumb u think i am to keep trying?\r\n",
        "reference_id": "1350614495",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "548",
        "date": "2021-05-27 07:05:00",
        "notes": "why u always trying to trick me?\r\n",
        "reference_id": "1350614400",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "549",
        "date": "2021-05-27 07:05:00",
        "notes": "i want to win nothing pls\r\n",
        "reference_id": "1350614215",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "550",
        "date": "2021-05-27 07:04:00",
        "notes": "\r\n",
        "reference_id": "1350613923",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "551",
        "date": "2021-05-27 06:43:00",
        "notes": "\r\n",
        "reference_id": "1350607767",
        "tokens": "50",
        "type": "Tip",
        "user": "DSWAG500"
      },
      {
        "UID": "552",
        "date": "2021-05-27 06:31:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10929595)\r\n",
        "reference_id": "1350604735",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "553",
        "date": "2021-05-27 06:20:00",
        "notes": "\r\n",
        "reference_id": "1350601871",
        "tokens": "1",
        "type": "Group Show",
        "user": "jordin72"
      },
      {
        "UID": "554",
        "date": "2021-05-27 06:20:00",
        "notes": "\r\n",
        "reference_id": "1350601630",
        "tokens": "5",
        "type": "Group Show",
        "user": "HiroshiShiba"
      },
      {
        "UID": "555",
        "date": "2021-05-27 06:16:00",
        "notes": "\r\n",
        "reference_id": "1350600345",
        "tokens": "2",
        "type": "Group Show",
        "user": "hurtzy"
      },
      {
        "UID": "556",
        "date": "2021-05-27 06:15:00",
        "notes": "\r\n",
        "reference_id": "1350600088",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "557",
        "date": "2021-05-27 06:14:00",
        "notes": "\r\n",
        "reference_id": "1350599650",
        "tokens": "25",
        "type": "Group Show",
        "user": "sabres55"
      },
      {
        "UID": "558",
        "date": "2021-05-27 06:14:00",
        "notes": "\r\n",
        "reference_id": "1350599549",
        "tokens": "222",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "559",
        "date": "2021-05-27 06:14:00",
        "notes": "\r\n",
        "reference_id": "1350599437",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "560",
        "date": "2021-05-27 06:13:00",
        "notes": "\r\n",
        "reference_id": "1350599336",
        "tokens": "5",
        "type": "Group Show",
        "user": "David_5"
      },
      {
        "UID": "561",
        "date": "2021-05-27 06:13:00",
        "notes": "\r\n",
        "reference_id": "1350599137",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "562",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598263",
        "tokens": "222",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "563",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598237",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "564",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598229",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "565",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598210",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "566",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598213",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "567",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598207",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "568",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598209",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "569",
        "date": "2021-05-27 06:10:00",
        "notes": "\r\n",
        "reference_id": "1350598194",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "570",
        "date": "2021-05-27 06:08:00",
        "notes": "\r\n",
        "reference_id": "1350597679",
        "tokens": "40",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "571",
        "date": "2021-05-27 06:08:00",
        "notes": "\r\n",
        "reference_id": "1350597669",
        "tokens": "40",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "572",
        "date": "2021-05-27 06:07:00",
        "notes": "\r\n",
        "reference_id": "1350597498",
        "tokens": "3",
        "type": "Group Show",
        "user": "OrionUM"
      },
      {
        "UID": "573",
        "date": "2021-05-27 06:06:00",
        "notes": "\r\n",
        "reference_id": "1350597247",
        "tokens": "64",
        "type": "Group Show",
        "user": "Old_Bastard1"
      },
      {
        "UID": "574",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350596140",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "575",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350596126",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "576",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350596086",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "577",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350596065",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "578",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350596049",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "579",
        "date": "2021-05-27 06:03:00",
        "notes": "\r\n",
        "reference_id": "1350595851",
        "tokens": "2",
        "type": "Group Show",
        "user": "Amazingly2"
      },
      {
        "UID": "580",
        "date": "2021-05-27 06:02:00",
        "notes": "\r\n",
        "reference_id": "1350595501",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "581",
        "date": "2021-05-27 06:02:00",
        "notes": "\r\n",
        "reference_id": "1350595495",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "582",
        "date": "2021-05-27 06:01:00",
        "notes": "yayyyy\r\n",
        "reference_id": "1350595382",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "583",
        "date": "2021-05-27 06:01:00",
        "notes": "\r\n",
        "reference_id": "1350595227",
        "tokens": "222",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "584",
        "date": "2021-05-27 06:01:00",
        "notes": "\r\n",
        "reference_id": "1350595228",
        "tokens": "16",
        "type": "Group Show",
        "user": "bigmac307"
      },
      {
        "UID": "585",
        "date": "2021-05-27 06:01:00",
        "notes": "\r\n",
        "reference_id": "1350595229",
        "tokens": "223",
        "type": "Group Show",
        "user": "OneSavFan"
      },
      {
        "UID": "586",
        "date": "2021-05-27 05:54:00",
        "notes": "\r\n",
        "reference_id": "1350593088",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "587",
        "date": "2021-05-27 05:54:00",
        "notes": "\r\n",
        "reference_id": "1350593081",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "588",
        "date": "2021-05-27 05:54:00",
        "notes": "\r\n",
        "reference_id": "1350593064",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "589",
        "date": "2021-05-27 05:54:00",
        "notes": "\r\n",
        "reference_id": "1350593074",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "590",
        "date": "2021-05-27 05:54:00",
        "notes": "\r\n",
        "reference_id": "1350593049",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "591",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592795",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "592",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592752",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "593",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592744",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "594",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592738",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "595",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592725",
        "tokens": "1",
        "type": "Tip",
        "user": "ruffi"
      },
      {
        "UID": "596",
        "date": "2021-05-27 05:53:00",
        "notes": "\r\n",
        "reference_id": "1350592664",
        "tokens": "20",
        "type": "Tip",
        "user": "fjupe"
      },
      {
        "UID": "597",
        "date": "2021-05-27 05:47:00",
        "notes": "brb again 5 mins :)\r\n",
        "reference_id": "1350590819",
        "tokens": "5",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "598",
        "date": "2021-05-27 05:47:00",
        "notes": "\r\n",
        "reference_id": "1350590688",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "599",
        "date": "2021-05-27 05:47:00",
        "notes": "\r\n",
        "reference_id": "1350590672",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "600",
        "date": "2021-05-27 05:47:00",
        "notes": "\r\n",
        "reference_id": "1350590656",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "601",
        "date": "2021-05-27 05:47:00",
        "notes": "\r\n",
        "reference_id": "1350590644",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "602",
        "date": "2021-05-27 05:47:00",
        "notes": "\r\n",
        "reference_id": "1350590629",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "603",
        "date": "2021-05-27 05:46:00",
        "notes": "this isnt good things?\r\n",
        "reference_id": "1350590320",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "604",
        "date": "2021-05-27 05:45:00",
        "notes": "why?\r\n",
        "reference_id": "1350590211",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "605",
        "date": "2021-05-27 05:40:00",
        "notes": "i will be back in 5mins :) so relax\r\n",
        "reference_id": "1350588179",
        "tokens": "801",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "606",
        "date": "2021-05-27 05:37:00",
        "notes": "yeah yeah\r\n",
        "reference_id": "1350587142",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "607",
        "date": "2021-05-27 05:35:00",
        "notes": ":pft\r\n",
        "reference_id": "1350586745",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "608",
        "date": "2021-05-27 05:32:00",
        "notes": ":whi\r\n",
        "reference_id": "1350585523",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "609",
        "date": "2021-05-26 16:11:00",
        "notes": "\r\n",
        "reference_id": "1350276723",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "610",
        "date": "2021-05-26 16:04:00",
        "notes": "https://www.youtube.com/watch?v{=}HaA3YZ6QdJU\r\n",
        "reference_id": "1350273880",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "611",
        "date": "2021-05-26 15:58:00",
        "notes": ":pervy :p https://www.youtube.com/watch?v{=}sjrdanK4LSY\r\n",
        "reference_id": "1350271161",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "612",
        "date": "2021-05-26 15:53:00",
        "notes": "https://www.youtube.com/watch?v{=}Ae829mFAGGE :pervy\r\n",
        "reference_id": "1350268796",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "613",
        "date": "2021-05-26 15:52:00",
        "notes": "\r\n",
        "reference_id": "1350268211",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "614",
        "date": "2021-05-26 15:52:00",
        "notes": "\r\n",
        "reference_id": "1350268200",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "615",
        "date": "2021-05-26 15:52:00",
        "notes": "\r\n",
        "reference_id": "1350268181",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "616",
        "date": "2021-05-26 15:52:00",
        "notes": "\r\n",
        "reference_id": "1350268173",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "617",
        "date": "2021-05-26 15:51:00",
        "notes": "\r\n",
        "reference_id": "1350268159",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "618",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267590",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "619",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267582",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "620",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267566",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "621",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267556",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "622",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267544",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "623",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267370",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "624",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267358",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "625",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267360",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "626",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267365",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "627",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267367",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "628",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267350",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "629",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267354",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "630",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267357",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "631",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267337",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "632",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267345",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "633",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267346",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "634",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267323",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "635",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267327",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "636",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267334",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "637",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267308",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "638",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267311",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "639",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267318",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "640",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267296",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "641",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267299",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "642",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267304",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "643",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267286",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "644",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267287",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "645",
        "date": "2021-05-26 15:50:00",
        "notes": "\r\n",
        "reference_id": "1350267294",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "646",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267278",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "647",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267283",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "648",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267272",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "649",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267275",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "650",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267276",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "651",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267266",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "652",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267269",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "653",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267271",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "654",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267255",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "655",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267258",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "656",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267263",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "657",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267242",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "658",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267244",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "659",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267248",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "660",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267237",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "661",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267240",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "662",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350267230",
        "tokens": "1",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "663",
        "date": "2021-05-26 15:49:00",
        "notes": "\r\n",
        "reference_id": "1350266841",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "664",
        "date": "2021-05-26 15:48:00",
        "notes": "\r\n",
        "reference_id": "1350266833",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "665",
        "date": "2021-05-26 15:48:00",
        "notes": "\r\n",
        "reference_id": "1350266825",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "666",
        "date": "2021-05-26 15:48:00",
        "notes": "\r\n",
        "reference_id": "1350266814",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "667",
        "date": "2021-05-26 15:48:00",
        "notes": "\r\n",
        "reference_id": "1350266800",
        "tokens": "1",
        "type": "Tip",
        "user": "Barney_Rub"
      },
      {
        "UID": "668",
        "date": "2021-05-26 15:48:00",
        "notes": "I wish you could feel my tongue on your pouty mound between your legs! mmm\r\n",
        "reference_id": "1350266693",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "669",
        "date": "2021-05-26 15:47:00",
        "notes": "For: Rainbow tip top MENU | Spank my ass until its red (ID #10922407)\r\n",
        "reference_id": "1350266319",
        "tokens": "55",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "670",
        "date": "2021-05-26 15:45:00",
        "notes": "https://www.youtube.com/watch?v{=}s8VNB2vfHuY\r\n",
        "reference_id": "1350265461",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "671",
        "date": "2021-05-26 15:40:00",
        "notes": "\r\n",
        "reference_id": "1350263143",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "672",
        "date": "2021-05-26 15:30:00",
        "notes": "https://www.youtube.com/watch?v{=}fRmbCIAz4c8\r\n",
        "reference_id": "1350259052",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "673",
        "date": "2021-05-26 15:27:00",
        "notes": "\r\n",
        "reference_id": "1350257437",
        "tokens": "1",
        "type": "Tip",
        "user": "Klaatumann"
      },
      {
        "UID": "674",
        "date": "2021-05-26 15:27:00",
        "notes": "You really are stunning\r\n",
        "reference_id": "1350257286",
        "tokens": "20",
        "type": "Tip",
        "user": "janeagain"
      },
      {
        "UID": "675",
        "date": "2021-05-26 15:25:00",
        "notes": "\r\n",
        "reference_id": "1350256661",
        "tokens": "1",
        "type": "Tip",
        "user": "Klaatumann"
      },
      {
        "UID": "676",
        "date": "2021-05-26 15:25:00",
        "notes": "\r\n",
        "reference_id": "1350256586",
        "tokens": "1",
        "type": "Tip",
        "user": "Klaatumann"
      },
      {
        "UID": "677",
        "date": "2021-05-26 15:25:00",
        "notes": "\r\n",
        "reference_id": "1350256487",
        "tokens": "1",
        "type": "Tip",
        "user": "Klaatumann"
      },
      {
        "UID": "678",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256103",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "679",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256080",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "680",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256087",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "681",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256092",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "682",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256075",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "683",
        "date": "2021-05-26 15:24:00",
        "notes": "\r\n",
        "reference_id": "1350256076",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "684",
        "date": "2021-05-26 15:23:00",
        "notes": "Ty si velmi krasna Daniela!\r\n",
        "reference_id": "1350255887",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "685",
        "date": "2021-05-26 15:20:00",
        "notes": "\r\n",
        "reference_id": "1350254572",
        "tokens": "1",
        "type": "Tip",
        "user": "SirHoplophile"
      },
      {
        "UID": "686",
        "date": "2021-05-26 15:18:00",
        "notes": "\r\n",
        "reference_id": "1350253898",
        "tokens": "430",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "687",
        "date": "2021-05-26 15:15:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10922107)\r\n",
        "reference_id": "1350252648",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "688",
        "date": "2021-05-26 15:12:00",
        "notes": "Perfect face and body Savannah\r\n",
        "reference_id": "1350251208",
        "tokens": "5",
        "type": "Tip",
        "user": "Klaatumann"
      },
      {
        "UID": "689",
        "date": "2021-05-26 15:09:00",
        "notes": "just carry on being HOT! X\r\n",
        "reference_id": "1350249604",
        "tokens": "20",
        "type": "Tip",
        "user": "coppafeel57"
      },
      {
        "UID": "690",
        "date": "2021-05-26 15:06:00",
        "notes": "Looking SUPER HOT, can we see those panties up close please? X\r\n",
        "reference_id": "1350248325",
        "tokens": "20",
        "type": "Tip",
        "user": "coppafeel57"
      },
      {
        "UID": "691",
        "date": "2021-05-26 14:28:00",
        "notes": "\r\n",
        "reference_id": "1350231523",
        "tokens": "2346",
        "type": "Private",
        "user": "bbigzeus"
      },
      {
        "UID": "692",
        "date": "2021-05-26 14:23:00",
        "notes": "You are magnificent honey!\r\n",
        "reference_id": "1350228889",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "693",
        "date": "2021-05-26 14:18:00",
        "notes": "this is my only weapon!!!\r\n",
        "reference_id": "1350226130",
        "tokens": "111",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "694",
        "date": "2021-05-26 14:14:00",
        "notes": "leave that alone.... :kis4\r\n",
        "reference_id": "1350224370",
        "tokens": "22",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "695",
        "date": "2021-05-26 14:13:00",
        "notes": "mmmmmmmmm Love your bush and all those luscious courves honey0D\r\n",
        "reference_id": "1350224206",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "696",
        "date": "2021-05-26 14:13:00",
        "notes": "mmmmmmmmm Love your bush and all those luscious courves honey!\r\n",
        "reference_id": "1350224075",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "697",
        "date": "2021-05-26 14:13:00",
        "notes": "why do you always seduce me like this??? first, tits and hair.... then this??? :pervy lol\r\n",
        "reference_id": "1350223732",
        "tokens": "111",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "698",
        "date": "2021-05-26 14:09:00",
        "notes": ":heart Ben :hug Dani :heart ..... and love vibing you!!!\r\n",
        "reference_id": "1350222127",
        "tokens": "111",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "699",
        "date": "2021-05-26 14:08:00",
        "notes": "Hi Sav!!\r\n",
        "reference_id": "1350221792",
        "tokens": "22",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "700",
        "date": "2021-05-26 14:06:00",
        "notes": "You arealways so SEXY aswell as beautiful!\r\n",
        "reference_id": "1350220894",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "701",
        "date": "2021-05-26 14:05:00",
        "notes": "Delicious Daniela! A votre sante ma cher!\r\n",
        "reference_id": "1350220384",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "702",
        "date": "2021-05-26 14:04:00",
        "notes": "\r\n",
        "reference_id": "1350220084",
        "tokens": "5",
        "type": "Tip",
        "user": "Tommy_Tokens"
      },
      {
        "UID": "703",
        "date": "2021-05-26 14:04:00",
        "notes": "\r\n",
        "reference_id": "1350220077",
        "tokens": "5",
        "type": "Tip",
        "user": "Tommy_Tokens"
      },
      {
        "UID": "704",
        "date": "2021-05-26 13:54:00",
        "notes": ":peace u kids have fun\r\n",
        "reference_id": "1350215617",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "705",
        "date": "2021-05-26 13:54:00",
        "notes": "\r\n",
        "reference_id": "1350215470",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "706",
        "date": "2021-05-26 13:50:00",
        "notes": "\r\n",
        "reference_id": "1350213795",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "707",
        "date": "2021-05-26 13:47:00",
        "notes": "\r\n",
        "reference_id": "1350212576",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "708",
        "date": "2021-05-26 13:46:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10921217)\r\n",
        "reference_id": "1350211998",
        "tokens": "9",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "709",
        "date": "2021-05-26 13:46:00",
        "notes": "For: Rainbow tip top MENU | I love your boobees (ID #10921216)\r\n",
        "reference_id": "1350211959",
        "tokens": "4",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "710",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211276",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "711",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211266",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "712",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211260",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "713",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211252",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "714",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211241",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "715",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211232",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "716",
        "date": "2021-05-26 13:45:00",
        "notes": "\r\n",
        "reference_id": "1350211229",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "717",
        "date": "2021-05-26 13:43:00",
        "notes": "\r\n",
        "reference_id": "1350210611",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "718",
        "date": "2021-05-26 13:42:00",
        "notes": ":whi\r\n",
        "reference_id": "1350210153",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "719",
        "date": "2021-05-23 16:40:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10892522)\r\n",
        "reference_id": "1348630670",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "720",
        "date": "2021-05-23 16:35:00",
        "notes": "my favorite\r\n",
        "reference_id": "1348628037",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "721",
        "date": "2021-05-23 16:30:00",
        "notes": "i almost sent this song, but am doing it now :lol\r\n",
        "reference_id": "1348625844",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "722",
        "date": "2021-05-23 16:20:00",
        "notes": "topic done\r\n",
        "reference_id": "1348620992",
        "tokens": "233",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "723",
        "date": "2021-05-23 16:18:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10892235)\r\nIncluded Message: Does kitty? :hmmm\r\n",
        "reference_id": "1348620278",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "724",
        "date": "2021-05-23 16:18:00",
        "notes": "For: Rainbow tip top MENU | I need nap on your pillows (ID #10892229)\r\n",
        "reference_id": "1348620195",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "725",
        "date": "2021-05-23 16:17:00",
        "notes": "For: Rainbow tip top MENU | Crazy and Kitty doing mmmm under bridge lol (ID #10892218)\r\n",
        "reference_id": "1348620043",
        "tokens": "5",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "726",
        "date": "2021-05-23 16:16:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10892202)\r\n",
        "reference_id": "1348619340",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "727",
        "date": "2021-05-23 16:11:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10892144)\r\n",
        "reference_id": "1348617086",
        "tokens": "9",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "728",
        "date": "2021-05-23 16:02:00",
        "notes": "oh boy\r\n",
        "reference_id": "1348613130",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "729",
        "date": "2021-05-23 15:53:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1348608818",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "730",
        "date": "2021-05-23 15:38:00",
        "notes": "\r\n",
        "reference_id": "1348603614",
        "tokens": "50",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "731",
        "date": "2021-05-23 15:37:00",
        "notes": "fake also?\r\n",
        "reference_id": "1348602835",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "732",
        "date": "2021-05-23 15:31:00",
        "notes": "You are too beautiful To let you go unfulfilled!\r\n",
        "reference_id": "1348599943",
        "tokens": "300",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "733",
        "date": "2021-05-23 15:28:00",
        "notes": ":mme right hand\r\n",
        "reference_id": "1348599056",
        "tokens": "45",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "734",
        "date": "2021-05-23 15:27:00",
        "notes": "those fake? im asking for a friend\r\n",
        "reference_id": "1348598695",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "735",
        "date": "2021-05-23 15:16:00",
        "notes": "I hope you enjoy hon edy!\r\n",
        "reference_id": "1348594260",
        "tokens": "111",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "736",
        "date": "2021-05-23 15:14:00",
        "notes": "for fan part 2\r\n",
        "reference_id": "1348593137",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "737",
        "date": "2021-05-23 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348593095",
        "tokens": "20",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "738",
        "date": "2021-05-23 15:13:00",
        "notes": "for fan....since im not tipping for this anymore\r\n",
        "reference_id": "1348592760",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "739",
        "date": "2021-05-23 15:12:00",
        "notes": "\r\n",
        "reference_id": "1348592201",
        "tokens": "20",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "740",
        "date": "2021-05-23 15:05:00",
        "notes": "\r\n",
        "reference_id": "1348589265",
        "tokens": "20",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "741",
        "date": "2021-05-23 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348587482",
        "tokens": "20",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "742",
        "date": "2021-05-23 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348586302",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "743",
        "date": "2021-05-23 14:56:00",
        "notes": "\r\n",
        "reference_id": "1348584920",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "744",
        "date": "2021-05-23 14:56:00",
        "notes": "\r\n",
        "reference_id": "1348584707",
        "tokens": "10",
        "type": "Tip",
        "user": "Memyselfandbd"
      },
      {
        "UID": "745",
        "date": "2021-05-23 14:54:00",
        "notes": "\r\n",
        "reference_id": "1348584017",
        "tokens": "36",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "746",
        "date": "2021-05-23 14:53:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10891338)\r\n",
        "reference_id": "1348583267",
        "tokens": "69",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "747",
        "date": "2021-05-23 14:52:00",
        "notes": "You are always BEAIUTIFUL and a delicious sight! I reall like to taste you howsvever\r\n",
        "reference_id": "1348583017",
        "tokens": "111",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "748",
        "date": "2021-05-23 14:48:00",
        "notes": "Pusinka a vela stastia sexy!!\r\n",
        "reference_id": "1348581573",
        "tokens": "8",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "749",
        "date": "2021-05-23 14:46:00",
        "notes": "nope she added sneezing back to dice and some assholes keeps tipping and not winning\r\n",
        "reference_id": "1348580480",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "750",
        "date": "2021-05-23 14:45:00",
        "notes": "Pusinka moje krasna slovenka!!\r\n",
        "reference_id": "1348580333",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "751",
        "date": "2021-05-23 14:42:00",
        "notes": "just need a video and im done\r\n",
        "reference_id": "1348579146",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "752",
        "date": "2021-05-23 14:41:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1348578803",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "753",
        "date": "2021-05-23 14:39:00",
        "notes": "\r\n",
        "reference_id": "1348578063",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "754",
        "date": "2021-05-23 14:38:00",
        "notes": "u removed lotion show?\r\n",
        "reference_id": "1348577474",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "755",
        "date": "2021-05-23 14:32:00",
        "notes": "\r\n",
        "reference_id": "1348574835",
        "tokens": "14",
        "type": "Voyeur",
        "user": "Nirlesh"
      },
      {
        "UID": "756",
        "date": "2021-05-23 14:29:00",
        "notes": "\r\n",
        "reference_id": "1348573829",
        "tokens": "3",
        "type": "Voyeur",
        "user": "Izzy1024"
      },
      {
        "UID": "757",
        "date": "2021-05-23 14:28:00",
        "notes": "\r\n",
        "reference_id": "1348573278",
        "tokens": "14",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "758",
        "date": "2021-05-23 14:26:00",
        "notes": "\r\n",
        "reference_id": "1348572346",
        "tokens": "4",
        "type": "Voyeur",
        "user": "Izzy1024"
      },
      {
        "UID": "759",
        "date": "2021-05-23 14:22:00",
        "notes": "\r\n",
        "reference_id": "1348570408",
        "tokens": "8",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "760",
        "date": "2021-05-23 14:19:00",
        "notes": "\r\n",
        "reference_id": "1348569210",
        "tokens": "4",
        "type": "Voyeur",
        "user": "JENtlemanMike"
      },
      {
        "UID": "761",
        "date": "2021-05-23 14:18:00",
        "notes": "\r\n",
        "reference_id": "1348568776",
        "tokens": "3",
        "type": "Voyeur",
        "user": "EdiRama"
      },
      {
        "UID": "762",
        "date": "2021-05-23 14:17:00",
        "notes": "\r\n",
        "reference_id": "1348568446",
        "tokens": "10",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "763",
        "date": "2021-05-23 14:12:00",
        "notes": "\r\n",
        "reference_id": "1348566536",
        "tokens": "3",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "764",
        "date": "2021-05-23 14:09:00",
        "notes": "\r\n",
        "reference_id": "1348565614",
        "tokens": "2",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "765",
        "date": "2021-05-23 14:06:00",
        "notes": "\r\n",
        "reference_id": "1348564357",
        "tokens": "1",
        "type": "Voyeur",
        "user": "alldeveryd"
      },
      {
        "UID": "766",
        "date": "2021-05-23 14:02:00",
        "notes": "\r\n",
        "reference_id": "1348563081",
        "tokens": "5",
        "type": "Voyeur",
        "user": "kroun790"
      },
      {
        "UID": "767",
        "date": "2021-05-23 13:58:00",
        "notes": "\r\n",
        "reference_id": "1348561455",
        "tokens": "8",
        "type": "Voyeur",
        "user": "Vaquero51"
      },
      {
        "UID": "768",
        "date": "2021-05-23 13:55:00",
        "notes": "\r\n",
        "reference_id": "1348560266",
        "tokens": "4",
        "type": "Voyeur",
        "user": "Carramrod5"
      },
      {
        "UID": "769",
        "date": "2021-05-23 13:52:00",
        "notes": "\r\n",
        "reference_id": "1348559197",
        "tokens": "7",
        "type": "Voyeur",
        "user": "XerxKing"
      },
      {
        "UID": "770",
        "date": "2021-05-23 13:46:00",
        "notes": "\r\n",
        "reference_id": "1348557152",
        "tokens": "319",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "771",
        "date": "2021-05-23 13:46:00",
        "notes": "\r\n",
        "reference_id": "1348557034",
        "tokens": "3",
        "type": "Voyeur",
        "user": "Fleadip"
      },
      {
        "UID": "772",
        "date": "2021-05-23 13:45:00",
        "notes": "\r\n",
        "reference_id": "1348556666",
        "tokens": "4",
        "type": "Voyeur",
        "user": "GentlemanW1"
      },
      {
        "UID": "773",
        "date": "2021-05-23 13:44:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10890791)\r\n",
        "reference_id": "1348556378",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "774",
        "date": "2021-05-23 13:44:00",
        "notes": "\r\n",
        "reference_id": "1348556287",
        "tokens": "3",
        "type": "Voyeur",
        "user": "calviniano"
      },
      {
        "UID": "775",
        "date": "2021-05-23 13:44:00",
        "notes": "\r\n",
        "reference_id": "1348555999",
        "tokens": "2984",
        "type": "Private",
        "user": "sleepykitty"
      },
      {
        "UID": "776",
        "date": "2021-05-23 13:42:00",
        "notes": "can i tip for next topic also?\r\n",
        "reference_id": "1348555559",
        "tokens": "888",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "777",
        "date": "2021-05-23 13:41:00",
        "notes": "make up my mind :pft\r\n",
        "reference_id": "1348555220",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "778",
        "date": "2021-05-23 13:41:00",
        "notes": "so u want me to stop? oki doki\r\n",
        "reference_id": "1348554984",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "779",
        "date": "2021-05-23 13:40:00",
        "notes": ":pft u keep this up and u will have wet panties\r\n",
        "reference_id": "1348554810",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "780",
        "date": "2021-05-23 13:39:00",
        "notes": ":whi niplee\r\n",
        "reference_id": "1348554328",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "781",
        "date": "2021-05-23 13:38:00",
        "notes": "what u did with free day?\r\n",
        "reference_id": "1348554001",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "782",
        "date": "2021-05-23 13:37:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1348553630",
        "tokens": "5",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "783",
        "date": "2021-05-23 13:36:00",
        "notes": "a nice kiss for gina :wlove\r\n",
        "reference_id": "1348553326",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "784",
        "date": "2021-05-23 13:35:00",
        "notes": ":whi\r\n",
        "reference_id": "1348552771",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "785",
        "date": "2021-05-22 16:02:00",
        "notes": "\r\n",
        "reference_id": "1348032538",
        "tokens": "10",
        "type": "Tip",
        "user": "Amanforyou2"
      },
      {
        "UID": "786",
        "date": "2021-05-22 15:39:00",
        "notes": "you have a top five room right now! nice! :yipee\r\n",
        "reference_id": "1348021798",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "787",
        "date": "2021-05-22 15:36:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1348020704",
        "tokens": "5",
        "type": "MFC Share",
        "user": "JamesJava"
      },
      {
        "UID": "788",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017910",
        "tokens": "10",
        "type": "Tip",
        "user": "TopRockie"
      },
      {
        "UID": "789",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017892",
        "tokens": "10",
        "type": "Tip",
        "user": "TopRockie"
      },
      {
        "UID": "790",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017882",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "791",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017866",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "792",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017863",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "793",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017857",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "794",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017852",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "795",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017844",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "796",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017833",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "797",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017826",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "798",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017816",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "799",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017807",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "800",
        "date": "2021-05-22 15:30:00",
        "notes": "\r\n",
        "reference_id": "1348017796",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "801",
        "date": "2021-05-22 15:27:00",
        "notes": ":akakisscouple\r\n",
        "reference_id": "1348016593",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "802",
        "date": "2021-05-22 15:27:00",
        "notes": "\r\n",
        "reference_id": "1348016588",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "803",
        "date": "2021-05-22 15:27:00",
        "notes": "\r\n",
        "reference_id": "1348016578",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "804",
        "date": "2021-05-22 15:27:00",
        "notes": "\r\n",
        "reference_id": "1348016570",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "805",
        "date": "2021-05-22 15:26:00",
        "notes": "\r\n",
        "reference_id": "1348016417",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "806",
        "date": "2021-05-22 15:26:00",
        "notes": "what happedned to fitz ipps?\r\n",
        "reference_id": "1348016337",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "807",
        "date": "2021-05-22 15:26:00",
        "notes": "\r\n",
        "reference_id": "1348016174",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "808",
        "date": "2021-05-22 15:25:00",
        "notes": "\r\n",
        "reference_id": "1348016123",
        "tokens": "2",
        "type": "Tip",
        "user": "ritong"
      },
      {
        "UID": "809",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015202",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "810",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015198",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "811",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015196",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "812",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015192",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "813",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015185",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "814",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015178",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "815",
        "date": "2021-05-22 15:23:00",
        "notes": "\r\n",
        "reference_id": "1348015173",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "816",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014562",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "817",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014543",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "818",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014534",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "819",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014530",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "820",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014520",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "821",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014512",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "822",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014506",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "823",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014498",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "824",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014492",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "825",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014483",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "826",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014457",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "827",
        "date": "2021-05-22 15:21:00",
        "notes": "\r\n",
        "reference_id": "1348014449",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "828",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013858",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "829",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013830",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "830",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013821",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "831",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013809",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "832",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013794",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "833",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013784",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "834",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013775",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "835",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013768",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "836",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013753",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "837",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013738",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "838",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013725",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "839",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013713",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "840",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013702",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "841",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013689",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "842",
        "date": "2021-05-22 15:20:00",
        "notes": "\r\n",
        "reference_id": "1348013679",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "843",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013665",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "844",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013649",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "845",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013639",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "846",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013628",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "847",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013604",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "848",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013591",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "849",
        "date": "2021-05-22 15:19:00",
        "notes": "\r\n",
        "reference_id": "1348013394",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "850",
        "date": "2021-05-22 15:19:00",
        "notes": "For: Offline Tip Menu | Have dinner & drink ! (ID #10879790)\r\n",
        "reference_id": "1348013154",
        "tokens": "400",
        "type": "MFC Share",
        "user": "fitzthecat63"
      },
      {
        "UID": "851",
        "date": "2021-05-22 15:18:00",
        "notes": "For: Offline Tip Menu | Teasing body tour snap video (ID #10879785)\r\n",
        "reference_id": "1348013009",
        "tokens": "100",
        "type": "MFC Share",
        "user": "fitzthecat63"
      },
      {
        "UID": "852",
        "date": "2021-05-22 15:18:00",
        "notes": "\r\n",
        "reference_id": "1348012766",
        "tokens": "100",
        "type": "Tip",
        "user": "lashlarue1"
      },
      {
        "UID": "853",
        "date": "2021-05-22 15:17:00",
        "notes": "I see you're up to no good . I approve :perv1\r\n",
        "reference_id": "1348012516",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "854",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012498",
        "tokens": "100",
        "type": "Tip",
        "user": "lashlarue1"
      },
      {
        "UID": "855",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012438",
        "tokens": "111",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "856",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012372",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "857",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012369",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "858",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012360",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "859",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012348",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "860",
        "date": "2021-05-22 15:17:00",
        "notes": "\r\n",
        "reference_id": "1348012340",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "861",
        "date": "2021-05-22 15:16:00",
        "notes": "Love you :heart3\r\n",
        "reference_id": "1348011913",
        "tokens": "111",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "862",
        "date": "2021-05-22 15:16:00",
        "notes": "\r\n",
        "reference_id": "1348011903",
        "tokens": "100",
        "type": "Tip",
        "user": "lashlarue1"
      },
      {
        "UID": "863",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011241",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "864",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011211",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "865",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011119",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "866",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011112",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "867",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011103",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "868",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011096",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "869",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011100",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "870",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011089",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "871",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011082",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "872",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348011041",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "873",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348010980",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "874",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348010973",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "875",
        "date": "2021-05-22 15:14:00",
        "notes": "\r\n",
        "reference_id": "1348010968",
        "tokens": "1",
        "type": "Tip",
        "user": "Caoimhin1961"
      },
      {
        "UID": "876",
        "date": "2021-05-22 15:04:00",
        "notes": "\r\n",
        "reference_id": "1348007289",
        "tokens": "200",
        "type": "Tip",
        "user": "lashlarue1"
      },
      {
        "UID": "877",
        "date": "2021-05-22 15:02:00",
        "notes": "For: Rainbow tip top MENU | Oh my Gina !!! (ID #10879655)\r\n",
        "reference_id": "1348006074",
        "tokens": "8",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "878",
        "date": "2021-05-22 15:02:00",
        "notes": "\r\n",
        "reference_id": "1348005807",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "879",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005796",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "880",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005782",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "881",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005763",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "882",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005746",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "883",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005727",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "884",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005714",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "885",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005696",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "886",
        "date": "2021-05-22 15:01:00",
        "notes": "\r\n",
        "reference_id": "1348005685",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "887",
        "date": "2021-05-22 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348004578",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "888",
        "date": "2021-05-22 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348004511",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "889",
        "date": "2021-05-22 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348004487",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "890",
        "date": "2021-05-22 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348004452",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "891",
        "date": "2021-05-22 14:59:00",
        "notes": "\r\n",
        "reference_id": "1348004321",
        "tokens": "50",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "892",
        "date": "2021-05-22 14:57:00",
        "notes": "for spider if video :)\r\n",
        "reference_id": "1348003519",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "893",
        "date": "2021-05-22 14:51:00",
        "notes": "\r\n",
        "reference_id": "1347999856",
        "tokens": "20",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "894",
        "date": "2021-05-22 14:50:00",
        "notes": "\r\n",
        "reference_id": "1347999333",
        "tokens": "20",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "895",
        "date": "2021-05-22 14:50:00",
        "notes": "\r\n",
        "reference_id": "1347999337",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "896",
        "date": "2021-05-22 14:49:00",
        "notes": "\r\n",
        "reference_id": "1347999047",
        "tokens": "20",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "897",
        "date": "2021-05-22 14:49:00",
        "notes": "\r\n",
        "reference_id": "1347998995",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "898",
        "date": "2021-05-22 14:49:00",
        "notes": "\r\n",
        "reference_id": "1347998971",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "899",
        "date": "2021-05-22 14:47:00",
        "notes": "\r\n",
        "reference_id": "1347998046",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "900",
        "date": "2021-05-22 14:47:00",
        "notes": "\r\n",
        "reference_id": "1347997999",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "901",
        "date": "2021-05-22 14:47:00",
        "notes": "\r\n",
        "reference_id": "1347997974",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "902",
        "date": "2021-05-22 14:47:00",
        "notes": "\r\n",
        "reference_id": "1347997960",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "903",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997873",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "904",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997849",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "905",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997828",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "906",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997807",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "907",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997788",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "908",
        "date": "2021-05-22 14:46:00",
        "notes": "\r\n",
        "reference_id": "1347997665",
        "tokens": "69",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "909",
        "date": "2021-05-22 14:45:00",
        "notes": "For: Black dress & Red heels (ID #10879511)\r\n",
        "reference_id": "1347997415",
        "tokens": "100",
        "type": "MFC Share",
        "user": "spider328"
      },
      {
        "UID": "910",
        "date": "2021-05-22 14:44:00",
        "notes": "\r\n",
        "reference_id": "1347996814",
        "tokens": "111",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "911",
        "date": "2021-05-22 14:44:00",
        "notes": "\r\n",
        "reference_id": "1347996631",
        "tokens": "69",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "912",
        "date": "2021-05-22 14:43:00",
        "notes": "for spider\r\n",
        "reference_id": "1347996158",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "913",
        "date": "2021-05-22 14:41:00",
        "notes": "\r\n",
        "reference_id": "1347995647",
        "tokens": "69",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "914",
        "date": "2021-05-22 14:41:00",
        "notes": "\r\n",
        "reference_id": "1347995480",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "915",
        "date": "2021-05-22 14:41:00",
        "notes": "\r\n",
        "reference_id": "1347995452",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "916",
        "date": "2021-05-22 14:41:00",
        "notes": "\r\n",
        "reference_id": "1347995439",
        "tokens": "1",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "917",
        "date": "2021-05-22 14:39:00",
        "notes": "\r\n",
        "reference_id": "1347994920",
        "tokens": "50",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "918",
        "date": "2021-05-22 14:36:00",
        "notes": "For: Purple dress & Black boots (ID #10879443)\r\n",
        "reference_id": "1347993600",
        "tokens": "150",
        "type": "MFC Share",
        "user": "spider328"
      },
      {
        "UID": "919",
        "date": "2021-05-22 14:35:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10879437)\r\n",
        "reference_id": "1347993086",
        "tokens": "9",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "920",
        "date": "2021-05-22 14:34:00",
        "notes": "\r\n",
        "reference_id": "1347992409",
        "tokens": "50",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "921",
        "date": "2021-05-22 14:32:00",
        "notes": "\r\n",
        "reference_id": "1347991575",
        "tokens": "50",
        "type": "Tip",
        "user": "spider328"
      },
      {
        "UID": "922",
        "date": "2021-05-22 14:29:00",
        "notes": "well i covered half :)\r\n",
        "reference_id": "1347990489",
        "tokens": "444",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "923",
        "date": "2021-05-22 14:25:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1347988353",
        "tokens": "5",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "924",
        "date": "2021-05-22 14:23:00",
        "notes": "For: Rainbow tip top MENU | luv2luvUbb....yes the long one!!!! (ID #10879342)\r\n",
        "reference_id": "1347987496",
        "tokens": "36",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "925",
        "date": "2021-05-22 14:19:00",
        "notes": "only if and when its needed :)\r\n",
        "reference_id": "1347985558",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "926",
        "date": "2021-05-22 14:18:00",
        "notes": "Dob't worry the guys will get here!\r\n",
        "reference_id": "1347985301",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "927",
        "date": "2021-05-22 14:18:00",
        "notes": "this also helps i think\r\n",
        "reference_id": "1347985131",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "928",
        "date": "2021-05-22 13:52:00",
        "notes": ":moon\r\n",
        "reference_id": "1347972779",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "929",
        "date": "2021-05-22 13:50:00",
        "notes": "shit dice tonight it seems......video?\r\n",
        "reference_id": "1347972292",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "930",
        "date": "2021-05-22 13:50:00",
        "notes": ":pft\r\n",
        "reference_id": "1347972162",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "931",
        "date": "2021-05-22 13:50:00",
        "notes": "no prize pls\r\n",
        "reference_id": "1347972089",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "932",
        "date": "2021-05-22 13:49:00",
        "notes": "\r\n",
        "reference_id": "1347971539",
        "tokens": "5",
        "type": "Tip",
        "user": "Taylor410"
      },
      {
        "UID": "933",
        "date": "2021-05-22 13:43:00",
        "notes": ":whi\r\n",
        "reference_id": "1347968764",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "934",
        "date": "2021-05-22 08:09:00",
        "notes": "toffie watermelon fund\r\n",
        "reference_id": "1347808902",
        "tokens": "100",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "935",
        "date": "2021-05-22 07:52:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1347800034",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "936",
        "date": "2021-05-22 07:46:00",
        "notes": "\r\n",
        "reference_id": "1347796064",
        "tokens": "1",
        "type": "Group Show",
        "user": "christopher_1"
      },
      {
        "UID": "937",
        "date": "2021-05-22 07:44:00",
        "notes": "\r\n",
        "reference_id": "1347794951",
        "tokens": "9",
        "type": "Group Show",
        "user": "Sayallday2"
      },
      {
        "UID": "938",
        "date": "2021-05-22 07:44:00",
        "notes": "\r\n",
        "reference_id": "1347794689",
        "tokens": "5",
        "type": "Group Show",
        "user": "mikeyshard2"
      },
      {
        "UID": "939",
        "date": "2021-05-22 07:43:00",
        "notes": "\r\n",
        "reference_id": "1347794369",
        "tokens": "9",
        "type": "Group Show",
        "user": "Sayallday2"
      },
      {
        "UID": "940",
        "date": "2021-05-22 07:39:00",
        "notes": "\r\n",
        "reference_id": "1347792518",
        "tokens": "2",
        "type": "Group Show",
        "user": "Cruisin412"
      },
      {
        "UID": "941",
        "date": "2021-05-22 07:36:00",
        "notes": "good fitz isnt here or he would not listen :pft\r\n",
        "reference_id": "1347791076",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "942",
        "date": "2021-05-22 07:36:00",
        "notes": "\r\n",
        "reference_id": "1347790656",
        "tokens": "62",
        "type": "Group Show",
        "user": "MFCspyking"
      },
      {
        "UID": "943",
        "date": "2021-05-22 07:34:00",
        "notes": "not nice u know she hates this one :pft u so damn mean\r\n",
        "reference_id": "1347789760",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "944",
        "date": "2021-05-22 07:32:00",
        "notes": "\r\n",
        "reference_id": "1347788773",
        "tokens": "2",
        "type": "Group Show",
        "user": "Araman6977"
      },
      {
        "UID": "945",
        "date": "2021-05-22 07:32:00",
        "notes": "this is shit shit shit\r\n",
        "reference_id": "1347788465",
        "tokens": "222",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "946",
        "date": "2021-05-22 07:31:00",
        "notes": "shit\r\n",
        "reference_id": "1347788184",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "947",
        "date": "2021-05-22 07:31:00",
        "notes": "\r\n",
        "reference_id": "1347788151",
        "tokens": "11",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "948",
        "date": "2021-05-22 07:31:00",
        "notes": "\r\n",
        "reference_id": "1347788137",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "949",
        "date": "2021-05-22 07:31:00",
        "notes": "\r\n",
        "reference_id": "1347788119",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "950",
        "date": "2021-05-22 07:31:00",
        "notes": "\r\n",
        "reference_id": "1347788107",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "951",
        "date": "2021-05-22 07:29:00",
        "notes": "new fav?\r\n",
        "reference_id": "1347787255",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "952",
        "date": "2021-05-22 07:29:00",
        "notes": "\r\n",
        "reference_id": "1347787147",
        "tokens": "1",
        "type": "Group Show",
        "user": "Confucius27"
      },
      {
        "UID": "953",
        "date": "2021-05-22 07:29:00",
        "notes": "\r\n",
        "reference_id": "1347786916",
        "tokens": "57",
        "type": "Group Show",
        "user": "MFCspyking"
      },
      {
        "UID": "954",
        "date": "2021-05-22 07:29:00",
        "notes": "\r\n",
        "reference_id": "1347786917",
        "tokens": "222",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "955",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347786213",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "956",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347786145",
        "tokens": "1",
        "type": "Group Show",
        "user": "theleroy1"
      },
      {
        "UID": "957",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785992",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "958",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785994",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "959",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785996",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "960",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785975",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "961",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785980",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "962",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785983",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "963",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785985",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "964",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785988",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "965",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785964",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "966",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785969",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "967",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785961",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "968",
        "date": "2021-05-22 07:27:00",
        "notes": "\r\n",
        "reference_id": "1347785844",
        "tokens": "13",
        "type": "Group Show",
        "user": "jpopwwood"
      },
      {
        "UID": "969",
        "date": "2021-05-22 07:26:00",
        "notes": "\r\n",
        "reference_id": "1347785704",
        "tokens": "9",
        "type": "Group Show",
        "user": "CanadaBoy96"
      },
      {
        "UID": "970",
        "date": "2021-05-22 07:26:00",
        "notes": "\r\n",
        "reference_id": "1347785629",
        "tokens": "5",
        "type": "Group Show",
        "user": "soonerstruck"
      },
      {
        "UID": "971",
        "date": "2021-05-22 07:26:00",
        "notes": "\r\n",
        "reference_id": "1347785469",
        "tokens": "200",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "972",
        "date": "2021-05-22 07:26:00",
        "notes": "\r\n",
        "reference_id": "1347785470",
        "tokens": "55",
        "type": "Group Show",
        "user": "superknightt"
      },
      {
        "UID": "973",
        "date": "2021-05-22 07:26:00",
        "notes": "\r\n",
        "reference_id": "1347785471",
        "tokens": "195",
        "type": "Group Show",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "974",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784645",
        "tokens": "6",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "975",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784556",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "976",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784549",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "977",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784542",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "978",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784533",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "979",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784526",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "980",
        "date": "2021-05-22 07:24:00",
        "notes": "\r\n",
        "reference_id": "1347784515",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "981",
        "date": "2021-05-22 07:21:00",
        "notes": "\r\n",
        "reference_id": "1347783153",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "982",
        "date": "2021-05-22 07:21:00",
        "notes": "\r\n",
        "reference_id": "1347783138",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "983",
        "date": "2021-05-22 07:21:00",
        "notes": "\r\n",
        "reference_id": "1347783111",
        "tokens": "1",
        "type": "Tip",
        "user": "jdean12342"
      },
      {
        "UID": "984",
        "date": "2021-05-22 07:20:00",
        "notes": "\r\n",
        "reference_id": "1347782192",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "985",
        "date": "2021-05-22 07:20:00",
        "notes": "i like this lady\r\n",
        "reference_id": "1347782137",
        "tokens": "111",
        "type": "Tip",
        "user": "soonerstruck"
      },
      {
        "UID": "986",
        "date": "2021-05-22 07:19:00",
        "notes": "dont u worry about me\r\n",
        "reference_id": "1347781539",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "987",
        "date": "2021-05-22 07:18:00",
        "notes": "match it\r\n",
        "reference_id": "1347781483",
        "tokens": "111",
        "type": "Tip",
        "user": "soonerstruck"
      },
      {
        "UID": "988",
        "date": "2021-05-22 07:15:00",
        "notes": "\r\n",
        "reference_id": "1347779740",
        "tokens": "1",
        "type": "Tip",
        "user": "asiangirlwow"
      },
      {
        "UID": "989",
        "date": "2021-05-22 07:10:00",
        "notes": ":yess Can I make you more wet and more horny?\r\n",
        "reference_id": "1347777432",
        "tokens": "800",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "990",
        "date": "2021-05-22 07:10:00",
        "notes": "\r\n",
        "reference_id": "1347777135",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "991",
        "date": "2021-05-22 07:00:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1347772575",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "992",
        "date": "2021-05-22 06:52:00",
        "notes": "they can have this prize\r\n",
        "reference_id": "1347768889",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "993",
        "date": "2021-05-22 06:51:00",
        "notes": "\r\n",
        "reference_id": "1347768601",
        "tokens": "50",
        "type": "Tip",
        "user": "HotCock20cm"
      },
      {
        "UID": "994",
        "date": "2021-05-22 06:50:00",
        "notes": "and ofc your nose\r\n",
        "reference_id": "1347767983",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "995",
        "date": "2021-05-22 06:50:00",
        "notes": "For: Rainbow tip top MENU | You are delicious ! (ID #10875855)\r\nIncluded Message: just wanted to let u know ur beautiful\r\n",
        "reference_id": "1347767937",
        "tokens": "7",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "996",
        "date": "2021-05-22 06:49:00",
        "notes": ":lickpussy11\r\n",
        "reference_id": "1347767237",
        "tokens": "5",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "997",
        "date": "2021-05-22 06:49:00",
        "notes": "\r\n",
        "reference_id": "1347767071",
        "tokens": "9",
        "type": "Tip",
        "user": "donatrella"
      },
      {
        "UID": "998",
        "date": "2021-05-22 06:48:00",
        "notes": "\r\n",
        "reference_id": "1347766931",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "999",
        "date": "2021-05-22 06:47:00",
        "notes": "\r\n",
        "reference_id": "1347766409",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "1000",
        "date": "2021-05-22 06:47:00",
        "notes": "\r\n",
        "reference_id": "1347765912",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "1001",
        "date": "2021-05-22 06:46:00",
        "notes": "\r\n",
        "reference_id": "1347765644",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "1002",
        "date": "2021-05-22 06:45:00",
        "notes": "\r\n",
        "reference_id": "1347765233",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "1003",
        "date": "2021-05-22 06:44:00",
        "notes": "\r\n",
        "reference_id": "1347765039",
        "tokens": "5",
        "type": "Tip",
        "user": "rickyg55"
      },
      {
        "UID": "1004",
        "date": "2021-05-22 06:41:00",
        "notes": "take off my :pervy\r\n",
        "reference_id": "1347763663",
        "tokens": "94",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1005",
        "date": "2021-05-22 06:40:00",
        "notes": "https://www.youtube.com/watch?v{=}aid2vMbCNP8\r\n",
        "reference_id": "1347763225",
        "tokens": "36",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "1006",
        "date": "2021-05-22 06:39:00",
        "notes": "for next friday pls\r\n",
        "reference_id": "1347763047",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1007",
        "date": "2021-05-22 06:39:00",
        "notes": "\r\n",
        "reference_id": "1347762892",
        "tokens": "1",
        "type": "Tip",
        "user": "Strokerr2U"
      },
      {
        "UID": "1008",
        "date": "2021-05-22 06:36:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10875792)\r\nIncluded Message: uffff.... thanks and remember to swallow\r\n",
        "reference_id": "1347761610",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1009",
        "date": "2021-05-22 06:36:00",
        "notes": "for crazy\r\n",
        "reference_id": "1347761409",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1010",
        "date": "2021-05-22 06:35:00",
        "notes": "For: Rainbow tip top MENU | Yellow for your sunshine smile (ID #10875773)\r\n",
        "reference_id": "1347760833",
        "tokens": "9",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "1011",
        "date": "2021-05-22 06:33:00",
        "notes": "For: Rainbow tip top MENU | Swallow damn it! (ID #10875759)\r\n",
        "reference_id": "1347760275",
        "tokens": "69",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1012",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759687",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1013",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759654",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1014",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759636",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1015",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759623",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1016",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759610",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1017",
        "date": "2021-05-22 06:32:00",
        "notes": "\r\n",
        "reference_id": "1347759595",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1018",
        "date": "2021-05-22 06:29:00",
        "notes": "For: Rainbow tip top MENU | Custom add rainbow text and color choose (ID #10875739)\r\nIncluded Message: Swallow damn it! for 69 tokens\r\n",
        "reference_id": "1347758530",
        "tokens": "345",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1019",
        "date": "2021-05-22 06:28:00",
        "notes": "special song for rainbow\r\n",
        "reference_id": "1347758034",
        "tokens": "36",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1020",
        "date": "2021-05-22 06:26:00",
        "notes": "and this way better swallow!!!!\r\n",
        "reference_id": "1347757326",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1021",
        "date": "2021-05-22 06:24:00",
        "notes": "u been giving the drinks u dont finish to cam again?\r\n",
        "reference_id": "1347756927",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1022",
        "date": "2021-05-22 06:21:00",
        "notes": ":ok\r\n",
        "reference_id": "1347755772",
        "tokens": "333",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1023",
        "date": "2021-05-22 06:20:00",
        "notes": "\r\n",
        "reference_id": "1347755497",
        "tokens": "111",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1024",
        "date": "2021-05-22 06:20:00",
        "notes": "\r\n",
        "reference_id": "1347755396",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1025",
        "date": "2021-05-22 06:19:00",
        "notes": "\r\n",
        "reference_id": "1347754926",
        "tokens": "111",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1026",
        "date": "2021-05-22 06:11:00",
        "notes": "For: Lotion ass team (ID #10875475)\r\n",
        "reference_id": "1347751681",
        "tokens": "110",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "1027",
        "date": "2021-05-22 06:09:00",
        "notes": "lotion those tits\r\n",
        "reference_id": "1347750596",
        "tokens": "110",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1028",
        "date": "2021-05-22 06:08:00",
        "notes": "special tip for tits\r\n",
        "reference_id": "1347750100",
        "tokens": "109",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1029",
        "date": "2021-05-22 06:01:00",
        "notes": "For: You my VIAGRA Sav ! (ID #10875420)\r\n",
        "reference_id": "1347746976",
        "tokens": "7",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1030",
        "date": "2021-05-22 06:01:00",
        "notes": ":whi\r\n",
        "reference_id": "1347746973",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1031",
        "date": "2021-05-22 05:59:00",
        "notes": "For: Rainbow tip top MENU | I love your boobees (ID #10875408)\r\n",
        "reference_id": "1347746004",
        "tokens": "4",
        "type": "MFC Share",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1032",
        "date": "2021-05-22 05:57:00",
        "notes": "\r\n",
        "reference_id": "1347745169",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1033",
        "date": "2021-05-22 05:48:00",
        "notes": "\r\n",
        "reference_id": "1347741426",
        "tokens": "1",
        "type": "Tip",
        "user": "JustCrazy4Sav"
      },
      {
        "UID": "1034",
        "date": "2021-05-21 16:09:00",
        "notes": "Goodnight\r\n",
        "reference_id": "1347358541",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1035",
        "date": "2021-05-21 15:57:00",
        "notes": "Happy Frida\r\n",
        "reference_id": "1347351763",
        "tokens": "334",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1036",
        "date": "2021-05-21 15:48:00",
        "notes": "\r\n",
        "reference_id": "1347346474",
        "tokens": "5",
        "type": "Tip",
        "user": "1mab1gb0y"
      },
      {
        "UID": "1037",
        "date": "2021-05-21 15:42:00",
        "notes": "What does 110 mean?\r\n",
        "reference_id": "1347342579",
        "tokens": "110",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1038",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341063",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1039",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341051",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1040",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341042",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1041",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341030",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1042",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341015",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1043",
        "date": "2021-05-21 15:39:00",
        "notes": "\r\n",
        "reference_id": "1347341001",
        "tokens": "9",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1044",
        "date": "2021-05-21 15:33:00",
        "notes": "\r\n",
        "reference_id": "1347337892",
        "tokens": "36",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1045",
        "date": "2021-05-21 15:31:00",
        "notes": "https://www.youtube.com/watch?v{=}TxdlbQ79RcM :)\r\n",
        "reference_id": "1347336793",
        "tokens": "36",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1046",
        "date": "2021-05-21 15:14:00",
        "notes": "Hi\r\n",
        "reference_id": "1347326520",
        "tokens": "69",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1047",
        "date": "2021-05-21 15:13:00",
        "notes": "\r\n",
        "reference_id": "1347325850",
        "tokens": "69",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1048",
        "date": "2021-05-21 15:12:00",
        "notes": "\r\n",
        "reference_id": "1347325804",
        "tokens": "69",
        "type": "Tip",
        "user": "MarcoPolo208"
      },
      {
        "UID": "1049",
        "date": "2021-05-21 15:09:00",
        "notes": "You know what I want to do with you.\r\n",
        "reference_id": "1347323671",
        "tokens": "111",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1050",
        "date": "2021-05-21 15:03:00",
        "notes": "\r\n",
        "reference_id": "1347320281",
        "tokens": "1",
        "type": "Tip",
        "user": "lukedstryr"
      },
      {
        "UID": "1051",
        "date": "2021-05-21 14:58:00",
        "notes": "For: Toffi and Cookie pig ears treat CLUB :) (ID #10863695)\r\n",
        "reference_id": "1347317262",
        "tokens": "60",
        "type": "MFC Share",
        "user": "JamesJava"
      },
      {
        "UID": "1052",
        "date": "2021-05-21 14:50:00",
        "notes": "hmmm, something off? :xzgeatass1\r\n",
        "reference_id": "1347312700",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1053",
        "date": "2021-05-21 14:49:00",
        "notes": "\r\n",
        "reference_id": "1347311862",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1054",
        "date": "2021-05-21 14:48:00",
        "notes": ":kisssb22\r\n",
        "reference_id": "1347311404",
        "tokens": "20",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1055",
        "date": "2021-05-21 14:48:00",
        "notes": ":sweetsoftkiss\r\n",
        "reference_id": "1347311239",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1056",
        "date": "2021-05-21 14:43:00",
        "notes": ":nipbite1\r\n",
        "reference_id": "1347308753",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1057",
        "date": "2021-05-21 14:43:00",
        "notes": "pusnka laska! my mouth lips and tonguevwould be anyhere you wanted! mmmmmmmm\r\n",
        "reference_id": "1347308469",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1058",
        "date": "2021-05-21 14:41:00",
        "notes": ":nipplesb\r\n",
        "reference_id": "1347307683",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1059",
        "date": "2021-05-21 14:38:00",
        "notes": ":sucknipples2\r\n",
        "reference_id": "1347306257",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1060",
        "date": "2021-05-21 14:37:00",
        "notes": "For: Rainbow tip top MENU | You are delicious ! (ID #10863474)\r\n",
        "reference_id": "1347305537",
        "tokens": "7",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1061",
        "date": "2021-05-21 14:35:00",
        "notes": ":slowtongue\r\n",
        "reference_id": "1347304914",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1062",
        "date": "2021-05-21 14:31:00",
        "notes": "im not getting tricked again nice try\r\n",
        "reference_id": "1347302754",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1063",
        "date": "2021-05-21 14:29:00",
        "notes": "why u hate this one?\r\n",
        "reference_id": "1347301459",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1064",
        "date": "2021-05-21 14:10:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1347291521",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1065",
        "date": "2021-05-21 14:05:00",
        "notes": "\r\n",
        "reference_id": "1347289318",
        "tokens": "2",
        "type": "Voyeur",
        "user": "Jackster7"
      },
      {
        "UID": "1066",
        "date": "2021-05-21 14:03:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10862982)\r\n",
        "reference_id": "1347288824",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1067",
        "date": "2021-05-21 14:02:00",
        "notes": "\r\n",
        "reference_id": "1347288084",
        "tokens": "5",
        "type": "Voyeur",
        "user": "Jackster7"
      },
      {
        "UID": "1068",
        "date": "2021-05-21 13:54:00",
        "notes": "\r\n",
        "reference_id": "1347284016",
        "tokens": "4",
        "type": "Voyeur",
        "user": "Amichaels"
      },
      {
        "UID": "1069",
        "date": "2021-05-21 13:52:00",
        "notes": "\r\n",
        "reference_id": "1347283223",
        "tokens": "238",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "1070",
        "date": "2021-05-21 13:49:00",
        "notes": "\r\n",
        "reference_id": "1347281844",
        "tokens": "878",
        "type": "Private",
        "user": "sleepykitty"
      },
      {
        "UID": "1071",
        "date": "2021-05-21 13:49:00",
        "notes": "ouch my head\r\n",
        "reference_id": "1347281730",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1072",
        "date": "2021-05-21 13:46:00",
        "notes": "nice\r\n",
        "reference_id": "1347280070",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1073",
        "date": "2021-05-21 13:45:00",
        "notes": "not\r\n",
        "reference_id": "1347280046",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1074",
        "date": "2021-05-21 13:45:00",
        "notes": "\r\n",
        "reference_id": "1347279998",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1075",
        "date": "2021-05-21 13:44:00",
        "notes": "u know if u rub that to much funny things happen?\r\n",
        "reference_id": "1347279156",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1076",
        "date": "2021-05-21 13:41:00",
        "notes": "wtf\r\n",
        "reference_id": "1347277909",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1077",
        "date": "2021-05-21 13:40:00",
        "notes": "\r\n",
        "reference_id": "1347277206",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1078",
        "date": "2021-05-21 13:40:00",
        "notes": "\r\n",
        "reference_id": "1347277196",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1079",
        "date": "2021-05-21 13:38:00",
        "notes": "for water :)\r\n",
        "reference_id": "1347276022",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1080",
        "date": "2021-05-21 13:37:00",
        "notes": ":whi\r\n",
        "reference_id": "1347275903",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1081",
        "date": "2021-05-21 10:04:00",
        "notes": "For: Hot & cold Anal play - 6/30/2019 (ID #10860390)\r\n",
        "reference_id": "1347179227",
        "tokens": "200",
        "type": "MFC Share",
        "user": "seemoo_0"
      },
      {
        "UID": "1082",
        "date": "2021-05-20 16:26:00",
        "notes": "\r\n",
        "reference_id": "1346723921",
        "tokens": "14",
        "type": "Voyeur",
        "user": "yezzzr"
      },
      {
        "UID": "1083",
        "date": "2021-05-20 16:12:00",
        "notes": "\r\n",
        "reference_id": "1346717884",
        "tokens": "836",
        "type": "Private",
        "user": "MrCremeShow"
      },
      {
        "UID": "1084",
        "date": "2021-05-20 16:01:00",
        "notes": "\r\n",
        "reference_id": "1346712280",
        "tokens": "50",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1085",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711995",
        "tokens": "50",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1086",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711957",
        "tokens": "40",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1087",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711920",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1088",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711904",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1089",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711881",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1090",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711870",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1091",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711722",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1092",
        "date": "2021-05-20 16:00:00",
        "notes": "\r\n",
        "reference_id": "1346711700",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1093",
        "date": "2021-05-20 15:59:00",
        "notes": "\r\n",
        "reference_id": "1346711684",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1094",
        "date": "2021-05-20 15:59:00",
        "notes": "\r\n",
        "reference_id": "1346711674",
        "tokens": "30",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1095",
        "date": "2021-05-20 15:53:00",
        "notes": "\r\n",
        "reference_id": "1346708114",
        "tokens": "735",
        "type": "Private",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1096",
        "date": "2021-05-20 15:48:00",
        "notes": "\r\n",
        "reference_id": "1346705626",
        "tokens": "222",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1097",
        "date": "2021-05-20 15:46:00",
        "notes": "\r\n",
        "reference_id": "1346704388",
        "tokens": "111",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1098",
        "date": "2021-05-20 15:46:00",
        "notes": "\r\n",
        "reference_id": "1346704352",
        "tokens": "111",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1099",
        "date": "2021-05-20 15:42:00",
        "notes": "prize for guessing age\r\n",
        "reference_id": "1346702557",
        "tokens": "111",
        "type": "Tip",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1100",
        "date": "2021-05-20 15:03:00",
        "notes": "\r\n",
        "reference_id": "1346683464",
        "tokens": "10",
        "type": "Tip",
        "user": "adulte"
      },
      {
        "UID": "1101",
        "date": "2021-05-20 14:59:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10850746)\r\n",
        "reference_id": "1346681549",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1102",
        "date": "2021-05-20 14:59:00",
        "notes": "\r\n",
        "reference_id": "1346681309",
        "tokens": "10",
        "type": "Tip",
        "user": "adulte"
      },
      {
        "UID": "1103",
        "date": "2021-05-20 14:58:00",
        "notes": "\r\n",
        "reference_id": "1346680930",
        "tokens": "10",
        "type": "Tip",
        "user": "adulte"
      },
      {
        "UID": "1104",
        "date": "2021-05-20 14:58:00",
        "notes": "For: Rainbow tip top MENU | Vibes make Savi eyes crossed ! (ID #10850731)\r\n",
        "reference_id": "1346680832",
        "tokens": "20",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1105",
        "date": "2021-05-20 14:56:00",
        "notes": ":bhorny\r\n",
        "reference_id": "1346679907",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1106",
        "date": "2021-05-20 14:51:00",
        "notes": ":lovee\r\n",
        "reference_id": "1346676779",
        "tokens": "111",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1107",
        "date": "2021-05-20 14:49:00",
        "notes": "For: Rainbow tip top MENU | You are delicious ! (ID #10850590)\r\n",
        "reference_id": "1346675740",
        "tokens": "7",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1108",
        "date": "2021-05-20 14:48:00",
        "notes": "mmmmmmm! Very nice honey!\r\n",
        "reference_id": "1346675590",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1109",
        "date": "2021-05-20 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346671569",
        "tokens": "110",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1110",
        "date": "2021-05-20 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346671560",
        "tokens": "110",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1111",
        "date": "2021-05-20 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346671473",
        "tokens": "36",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1112",
        "date": "2021-05-20 14:37:00",
        "notes": "\r\n",
        "reference_id": "1346669683",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1113",
        "date": "2021-05-20 14:31:00",
        "notes": "As usual you look delicious and very hot!\r\n",
        "reference_id": "1346666396",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1114",
        "date": "2021-05-20 14:29:00",
        "notes": "\r\n",
        "reference_id": "1346665857",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1115",
        "date": "2021-05-20 14:28:00",
        "notes": "\r\n",
        "reference_id": "1346665327",
        "tokens": "50",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1116",
        "date": "2021-05-20 14:14:00",
        "notes": "hot song :lol\r\n",
        "reference_id": "1346659334",
        "tokens": "36",
        "type": "Tip",
        "user": "OneSavFan"
      },
      {
        "UID": "1117",
        "date": "2021-05-20 13:51:00",
        "notes": "i just tip for drink for this\r\n",
        "reference_id": "1346649023",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1118",
        "date": "2021-05-20 13:48:00",
        "notes": "happy monday :whi\r\n",
        "reference_id": "1346647096",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1119",
        "date": "2021-05-20 13:44:00",
        "notes": "\r\n",
        "reference_id": "1346645059",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1120",
        "date": "2021-05-20 07:27:00",
        "notes": "\r\n",
        "reference_id": "1346487667",
        "tokens": "4170",
        "type": "Private",
        "user": "JamesJava"
      },
      {
        "UID": "1121",
        "date": "2021-05-20 07:22:00",
        "notes": ":akakissbelly5353\r\n",
        "reference_id": "1346485949",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1122",
        "date": "2021-05-20 07:22:00",
        "notes": "\r\n",
        "reference_id": "1346485854",
        "tokens": "20",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1123",
        "date": "2021-05-20 07:21:00",
        "notes": "\r\n",
        "reference_id": "1346485777",
        "tokens": "10",
        "type": "Tip",
        "user": "billbill82"
      },
      {
        "UID": "1124",
        "date": "2021-05-20 07:20:00",
        "notes": ":clitmassage\r\n",
        "reference_id": "1346485534",
        "tokens": "20",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1125",
        "date": "2021-05-20 07:19:00",
        "notes": ":akahotsexyhandjob\r\n",
        "reference_id": "1346485080",
        "tokens": "20",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1126",
        "date": "2021-05-20 07:18:00",
        "notes": ":akasexysuckboobs\r\n",
        "reference_id": "1346485021",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1127",
        "date": "2021-05-20 07:14:00",
        "notes": ":kisssb60\r\n",
        "reference_id": "1346483960",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1128",
        "date": "2021-05-20 07:14:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1346483760",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1129",
        "date": "2021-05-20 07:12:00",
        "notes": ":kisssb15\r\n",
        "reference_id": "1346483225",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1130",
        "date": "2021-05-20 07:10:00",
        "notes": ":slowtongue\r\n",
        "reference_id": "1346482594",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1131",
        "date": "2021-05-20 07:08:00",
        "notes": ":heart3\r\n",
        "reference_id": "1346481942",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1132",
        "date": "2021-05-20 07:01:00",
        "notes": "\r\n",
        "reference_id": "1346479374",
        "tokens": "6",
        "type": "Voyeur",
        "user": "Old_Bastard1"
      },
      {
        "UID": "1133",
        "date": "2021-05-20 06:58:00",
        "notes": "\r\n",
        "reference_id": "1346478309",
        "tokens": "7",
        "type": "Voyeur",
        "user": "Hankster9"
      },
      {
        "UID": "1134",
        "date": "2021-05-20 06:58:00",
        "notes": "\r\n",
        "reference_id": "1346478188",
        "tokens": "2",
        "type": "Voyeur",
        "user": "Hankster9"
      },
      {
        "UID": "1135",
        "date": "2021-05-20 06:43:00",
        "notes": "\r\n",
        "reference_id": "1346472307",
        "tokens": "268",
        "type": "Voyeur",
        "user": "MFCspyking"
      },
      {
        "UID": "1136",
        "date": "2021-05-20 06:42:00",
        "notes": "\r\n",
        "reference_id": "1346471935",
        "tokens": "6",
        "type": "Voyeur",
        "user": "kenny983"
      },
      {
        "UID": "1137",
        "date": "2021-05-20 06:40:00",
        "notes": "\r\n",
        "reference_id": "1346471234",
        "tokens": "2",
        "type": "Voyeur",
        "user": "BigDLuffy2"
      },
      {
        "UID": "1138",
        "date": "2021-05-20 06:39:00",
        "notes": "\r\n",
        "reference_id": "1346470950",
        "tokens": "1526",
        "type": "Private",
        "user": "sleepykitty"
      },
      {
        "UID": "1139",
        "date": "2021-05-20 06:29:00",
        "notes": ":you got good moves :pandabum\r\n",
        "reference_id": "1346467697",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1140",
        "date": "2021-05-20 06:25:00",
        "notes": "lets all just get naked :moon\r\n",
        "reference_id": "1346466518",
        "tokens": "888",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1141",
        "date": "2021-05-20 06:16:00",
        "notes": ":pft always teasing\r\n",
        "reference_id": "1346462864",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1142",
        "date": "2021-05-20 06:13:00",
        "notes": ":hmmm is it friday?\r\n",
        "reference_id": "1346462111",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1143",
        "date": "2021-05-20 06:07:00",
        "notes": ":mme like this bra\r\n",
        "reference_id": "1346460121",
        "tokens": "162",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1144",
        "date": "2021-05-20 06:04:00",
        "notes": "I want to be your lover!!!ð¤ªðâ¤ð§¡ðð\r\n",
        "reference_id": "1346459310",
        "tokens": "25",
        "type": "Tip",
        "user": "Jimshirts"
      },
      {
        "UID": "1145",
        "date": "2021-05-20 06:00:00",
        "notes": "to :you\r\n",
        "reference_id": "1346458124",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1146",
        "date": "2021-05-20 06:00:00",
        "notes": "\r\n",
        "reference_id": "1346458111",
        "tokens": "11",
        "type": "Tip",
        "user": "daconman420"
      },
      {
        "UID": "1147",
        "date": "2021-05-20 05:59:00",
        "notes": "\r\n",
        "reference_id": "1346457686",
        "tokens": "11",
        "type": "Tip",
        "user": "daconman420"
      },
      {
        "UID": "1148",
        "date": "2021-05-20 05:58:00",
        "notes": "\r\n",
        "reference_id": "1346457405",
        "tokens": "11",
        "type": "Tip",
        "user": "daconman420"
      },
      {
        "UID": "1149",
        "date": "2021-05-20 05:58:00",
        "notes": "\r\n",
        "reference_id": "1346457391",
        "tokens": "10",
        "type": "Tip",
        "user": "XXXJimmy69XXX"
      },
      {
        "UID": "1150",
        "date": "2021-05-20 05:57:00",
        "notes": "\r\n",
        "reference_id": "1346457159",
        "tokens": "36",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1151",
        "date": "2021-05-20 05:57:00",
        "notes": "\r\n",
        "reference_id": "1346457104",
        "tokens": "11",
        "type": "Tip",
        "user": "daconman420"
      },
      {
        "UID": "1152",
        "date": "2021-05-20 05:53:00",
        "notes": ":mme princess love wearing nice dresses :pervy\r\n",
        "reference_id": "1346455375",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1153",
        "date": "2021-05-20 05:51:00",
        "notes": "wtf happen to all my tokens again?\r\n",
        "reference_id": "1346454979",
        "tokens": "5",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1154",
        "date": "2021-05-20 05:49:00",
        "notes": "fixed?\r\n",
        "reference_id": "1346454286",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1155",
        "date": "2021-05-20 05:47:00",
        "notes": "bad :whi\r\n",
        "reference_id": "1346453614",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1156",
        "date": "2021-05-20 05:46:00",
        "notes": "nice\r\n",
        "reference_id": "1346453587",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1157",
        "date": "2021-05-19 16:20:00",
        "notes": "sladkÃ© sny, Dani moja lÃ¡ska :kisses4u\r\n",
        "reference_id": "1346157756",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1158",
        "date": "2021-05-19 16:14:00",
        "notes": "\r\n",
        "reference_id": "1346155212",
        "tokens": "20",
        "type": "Tip",
        "user": "bigBdick18"
      },
      {
        "UID": "1159",
        "date": "2021-05-19 16:14:00",
        "notes": "mmmm YESS :hearteyes\r\n",
        "reference_id": "1346155192",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1160",
        "date": "2021-05-19 16:12:00",
        "notes": "\r\n",
        "reference_id": "1346154272",
        "tokens": "10",
        "type": "Tip",
        "user": "Longdick0409"
      },
      {
        "UID": "1161",
        "date": "2021-05-19 16:11:00",
        "notes": "I imagine touching your body as we make love :akakiss669\r\n",
        "reference_id": "1346153803",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1162",
        "date": "2021-05-19 16:09:00",
        "notes": "mmmm yesss :shesontop1\r\n",
        "reference_id": "1346152832",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1163",
        "date": "2021-05-19 16:07:00",
        "notes": "\r\n",
        "reference_id": "1346152167",
        "tokens": "10",
        "type": "Tip",
        "user": "Longdick0409"
      },
      {
        "UID": "1164",
        "date": "2021-05-19 16:07:00",
        "notes": "better get busy, then\r\n",
        "reference_id": "1346152055",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1165",
        "date": "2021-05-19 16:06:00",
        "notes": ":akakisscouple\r\n",
        "reference_id": "1346151789",
        "tokens": "111",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1166",
        "date": "2021-05-19 16:05:00",
        "notes": "Hi Sav!!!\r\n",
        "reference_id": "1346151451",
        "tokens": "22",
        "type": "Tip",
        "user": "bbigzeus"
      },
      {
        "UID": "1167",
        "date": "2021-05-19 16:03:00",
        "notes": ":wub\r\n",
        "reference_id": "1346150425",
        "tokens": "9",
        "type": "Tip",
        "user": "JamesJava"
      },
      {
        "UID": "1168",
        "date": "2021-05-19 15:57:00",
        "notes": "only for you\r\n",
        "reference_id": "1346147844",
        "tokens": "1000",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1169",
        "date": "2021-05-19 15:53:00",
        "notes": "I am sure you aremoist and having mini tremors in anticipation of your cumming\r\n",
        "reference_id": "1346145562",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1170",
        "date": "2021-05-19 15:52:00",
        "notes": "\r\n",
        "reference_id": "1346145280",
        "tokens": "20",
        "type": "Tip",
        "user": "TXNcowboy"
      },
      {
        "UID": "1171",
        "date": "2021-05-19 15:51:00",
        "notes": "\r\n",
        "reference_id": "1346144503",
        "tokens": "20",
        "type": "Tip",
        "user": "TXNcowboy"
      },
      {
        "UID": "1172",
        "date": "2021-05-19 15:47:00",
        "notes": "\r\n",
        "reference_id": "1346142211",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1173",
        "date": "2021-05-19 15:47:00",
        "notes": "\r\n",
        "reference_id": "1346142204",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1174",
        "date": "2021-05-19 15:47:00",
        "notes": "\r\n",
        "reference_id": "1346142196",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1175",
        "date": "2021-05-19 15:47:00",
        "notes": "\r\n",
        "reference_id": "1346142185",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1176",
        "date": "2021-05-19 15:47:00",
        "notes": "\r\n",
        "reference_id": "1346142171",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1177",
        "date": "2021-05-19 15:45:00",
        "notes": "\r\n",
        "reference_id": "1346141409",
        "tokens": "20",
        "type": "Tip",
        "user": "FATSAL04"
      },
      {
        "UID": "1178",
        "date": "2021-05-19 15:44:00",
        "notes": "\r\n",
        "reference_id": "1346140925",
        "tokens": "20",
        "type": "Tip",
        "user": "FATSAL04"
      },
      {
        "UID": "1179",
        "date": "2021-05-19 15:41:00",
        "notes": "\r\n",
        "reference_id": "1346139970",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1180",
        "date": "2021-05-19 15:41:00",
        "notes": "\r\n",
        "reference_id": "1346139977",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1181",
        "date": "2021-05-19 15:41:00",
        "notes": "\r\n",
        "reference_id": "1346139963",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1182",
        "date": "2021-05-19 15:41:00",
        "notes": "\r\n",
        "reference_id": "1346139952",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1183",
        "date": "2021-05-19 15:41:00",
        "notes": "\r\n",
        "reference_id": "1346139948",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1184",
        "date": "2021-05-19 15:40:00",
        "notes": "\r\n",
        "reference_id": "1346139182",
        "tokens": "9",
        "type": "Tip",
        "user": "shugwolf"
      },
      {
        "UID": "1185",
        "date": "2021-05-19 15:39:00",
        "notes": "mmmmmmm IO wish that was my cock giving you pleasure!\r\n",
        "reference_id": "1346138835",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1186",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135709",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1187",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135698",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1188",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135691",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1189",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135684",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1190",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135674",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1191",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135669",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1192",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135665",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1193",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135656",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1194",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135650",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1195",
        "date": "2021-05-19 15:32:00",
        "notes": "\r\n",
        "reference_id": "1346135387",
        "tokens": "5",
        "type": "Tip",
        "user": "BigGriff66"
      },
      {
        "UID": "1196",
        "date": "2021-05-19 15:26:00",
        "notes": "for back of knees\r\n",
        "reference_id": "1346132424",
        "tokens": "110",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1197",
        "date": "2021-05-19 15:26:00",
        "notes": "for back of knees\r\n",
        "reference_id": "1346132415",
        "tokens": "110",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1198",
        "date": "2021-05-19 15:26:00",
        "notes": "for back of knees\r\n",
        "reference_id": "1346132406",
        "tokens": "110",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1199",
        "date": "2021-05-19 15:23:00",
        "notes": "\r\n",
        "reference_id": "1346130711",
        "tokens": "50",
        "type": "Tip",
        "user": "coppafeel57"
      },
      {
        "UID": "1200",
        "date": "2021-05-19 15:23:00",
        "notes": "for kitty\r\n",
        "reference_id": "1346130647",
        "tokens": "110",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1201",
        "date": "2021-05-19 15:19:00",
        "notes": "for back of knees\r\n",
        "reference_id": "1346128932",
        "tokens": "110",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1202",
        "date": "2021-05-19 15:15:00",
        "notes": "\r\n",
        "reference_id": "1346127467",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1203",
        "date": "2021-05-19 15:05:00",
        "notes": ":cheers7\r\n",
        "reference_id": "1346122536",
        "tokens": "333",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1204",
        "date": "2021-05-19 15:02:00",
        "notes": "You continue to be xtremely beautiful and HOT! Pusa\r\n",
        "reference_id": "1346120045",
        "tokens": "5",
        "type": "Tip",
        "user": "Cyranose1940"
      },
      {
        "UID": "1205",
        "date": "2021-05-19 15:00:00",
        "notes": "Pusinka krasna! Sorry I am late. Bussy day again!\r\n",
        "reference_id": "1346119114",
        "tokens": "8",
        "type": "Tip",
        "user": "Anonymous"
      },
      {
        "UID": "1206",
        "date": "2021-05-19 14:59:00",
        "notes": ":p\r\n",
        "reference_id": "1346118568",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1207",
        "date": "2021-05-19 14:42:00",
        "notes": "\r\n",
        "reference_id": "1346110006",
        "tokens": "5",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1208",
        "date": "2021-05-19 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346109808",
        "tokens": "25",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1209",
        "date": "2021-05-19 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346109636",
        "tokens": "25",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1210",
        "date": "2021-05-19 14:41:00",
        "notes": "\r\n",
        "reference_id": "1346109427",
        "tokens": "25",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1211",
        "date": "2021-05-19 14:40:00",
        "notes": "\r\n",
        "reference_id": "1346109191",
        "tokens": "50",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1212",
        "date": "2021-05-19 14:40:00",
        "notes": "\r\n",
        "reference_id": "1346109072",
        "tokens": "10",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1213",
        "date": "2021-05-19 14:40:00",
        "notes": "\r\n",
        "reference_id": "1346108950",
        "tokens": "10",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1214",
        "date": "2021-05-19 14:40:00",
        "notes": "\r\n",
        "reference_id": "1346108894",
        "tokens": "5",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1215",
        "date": "2021-05-19 14:39:00",
        "notes": "\r\n",
        "reference_id": "1346108718",
        "tokens": "5",
        "type": "Tip",
        "user": "Rock209"
      },
      {
        "UID": "1216",
        "date": "2021-05-19 14:11:00",
        "notes": "\r\n",
        "reference_id": "1346095337",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "1217",
        "date": "2021-05-19 14:11:00",
        "notes": "\r\n",
        "reference_id": "1346095329",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "1218",
        "date": "2021-05-19 14:11:00",
        "notes": "\r\n",
        "reference_id": "1346095321",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "1219",
        "date": "2021-05-19 14:11:00",
        "notes": "\r\n",
        "reference_id": "1346095307",
        "tokens": "1",
        "type": "Tip",
        "user": "tiger4508"
      },
      {
        "UID": "1220",
        "date": "2021-05-19 14:06:00",
        "notes": "\r\n",
        "reference_id": "1346093171",
        "tokens": "1",
        "type": "Tip",
        "user": "Tulio2323"
      },
      {
        "UID": "1221",
        "date": "2021-05-19 14:06:00",
        "notes": "\r\n",
        "reference_id": "1346093163",
        "tokens": "1",
        "type": "Tip",
        "user": "Tulio2323"
      },
      {
        "UID": "1222",
        "date": "2021-05-19 14:06:00",
        "notes": "\r\n",
        "reference_id": "1346093156",
        "tokens": "1",
        "type": "Tip",
        "user": "Tulio2323"
      },
      {
        "UID": "1223",
        "date": "2021-05-19 14:02:00",
        "notes": "have alot of fun\r\n",
        "reference_id": "1346091318",
        "tokens": "111",
        "type": "Tip",
        "user": "simonnm"
      },
      {
        "UID": "1224",
        "date": "2021-05-19 14:01:00",
        "notes": ":peace have fun\r\n",
        "reference_id": "1346091145",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1225",
        "date": "2021-05-19 13:59:00",
        "notes": "\r\n",
        "reference_id": "1346090156",
        "tokens": "111",
        "type": "Tip",
        "user": "simonnm"
      },
      {
        "UID": "1226",
        "date": "2021-05-19 13:57:00",
        "notes": "\r\n",
        "reference_id": "1346089065",
        "tokens": "50",
        "type": "Tip",
        "user": "simonnm"
      },
      {
        "UID": "1227",
        "date": "2021-05-19 13:56:00",
        "notes": "nope\r\n",
        "reference_id": "1346088910",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1228",
        "date": "2021-05-19 13:56:00",
        "notes": "u fixed this?\r\n",
        "reference_id": "1346088853",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1229",
        "date": "2021-05-19 13:53:00",
        "notes": ":pft lucky bastard\r\n",
        "reference_id": "1346087449",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1230",
        "date": "2021-05-19 13:52:00",
        "notes": "typing love letter to bf?\r\n",
        "reference_id": "1346087348",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1231",
        "date": "2021-05-19 13:52:00",
        "notes": "ur boobs are out\r\n",
        "reference_id": "1346087122",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1232",
        "date": "2021-05-19 13:45:00",
        "notes": "sorry happy friday also\r\n",
        "reference_id": "1346084039",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1233",
        "date": "2021-05-19 13:42:00",
        "notes": "\r\n",
        "reference_id": "1346082655",
        "tokens": "9",
        "type": "Tip",
        "user": "simonnm"
      },
      {
        "UID": "1234",
        "date": "2021-05-19 13:40:00",
        "notes": ":whi shiny ass\r\n",
        "reference_id": "1346081766",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1235",
        "date": "2021-05-16 15:42:00",
        "notes": "For: Rainbow tip top MENU | Im not freeloader anymore ! (ID #10809041)\r\n",
        "reference_id": "1344596205",
        "tokens": "1",
        "type": "MFC Share",
        "user": "OneSavFan"
      },
      {
        "UID": "1236",
        "date": "2021-05-16 15:40:00",
        "notes": "\r\n",
        "reference_id": "1344595542",
        "tokens": "2681",
        "type": "Private",
        "user": "bbigzeus"
      },
      {
        "UID": "1237",
        "date": "2021-05-16 15:38:00",
        "notes": "\r\n",
        "reference_id": "1344594536",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1238",
        "date": "2021-05-16 15:38:00",
        "notes": "\r\n",
        "reference_id": "1344594516",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1239",
        "date": "2021-05-16 15:38:00",
        "notes": "\r\n",
        "reference_id": "1344594467",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1240",
        "date": "2021-05-16 15:38:00",
        "notes": "\r\n",
        "reference_id": "1344594412",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1241",
        "date": "2021-05-16 15:38:00",
        "notes": "\r\n",
        "reference_id": "1344594386",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1242",
        "date": "2021-05-16 15:29:00",
        "notes": "Beautiful lading with icing, yet.\r\n",
        "reference_id": "1344590693",
        "tokens": "20",
        "type": "Tip",
        "user": "Coozey"
      },
      {
        "UID": "1243",
        "date": "2021-05-16 15:23:00",
        "notes": "\r\n",
        "reference_id": "1344587941",
        "tokens": "1",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "1244",
        "date": "2021-05-16 15:20:00",
        "notes": "\r\n",
        "reference_id": "1344586834",
        "tokens": "5",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "1245",
        "date": "2021-05-16 15:20:00",
        "notes": "\r\n",
        "reference_id": "1344586711",
        "tokens": "5",
        "type": "Voyeur",
        "user": "Kavemantaco"
      },
      {
        "UID": "1246",
        "date": "2021-05-16 15:19:00",
        "notes": "\r\n",
        "reference_id": "1344586487",
        "tokens": "350",
        "type": "Tip",
        "user": "MrCremeShow"
      },
      {
        "UID": "1247",
        "date": "2021-05-16 15:18:00",
        "notes": "\r\n",
        "reference_id": "1344585972",
        "tokens": "7",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "1248",
        "date": "2021-05-16 15:16:00",
        "notes": "\r\n",
        "reference_id": "1344584984",
        "tokens": "3",
        "type": "Voyeur",
        "user": "bbigzeus"
      },
      {
        "UID": "1249",
        "date": "2021-05-16 15:14:00",
        "notes": "\r\n",
        "reference_id": "1344584521",
        "tokens": "4",
        "type": "Voyeur",
        "user": "OneSavFan"
      },
      {
        "UID": "1250",
        "date": "2021-05-16 15:13:00",
        "notes": "\r\n",
        "reference_id": "1344583904",
        "tokens": "16",
        "type": "Voyeur",
        "user": "Coozey"
      },
      {
        "UID": "1251",
        "date": "2021-05-16 15:10:00",
        "notes": "\r\n",
        "reference_id": "1344582720",
        "tokens": "252",
        "type": "Voyeur",
        "user": "Vaquero51"
      },
      {
        "UID": "1252",
        "date": "2021-05-16 15:09:00",
        "notes": "\r\n",
        "reference_id": "1344582506",
        "tokens": "782",
        "type": "Private",
        "user": "MrCremeShow"
      },
      {
        "UID": "1253",
        "date": "2021-05-16 15:07:00",
        "notes": "matching all 111 tips from new tippers tonight\r\n",
        "reference_id": "1344581832",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1254",
        "date": "2021-05-16 15:07:00",
        "notes": "\r\n",
        "reference_id": "1344581523",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1255",
        "date": "2021-05-16 15:07:00",
        "notes": "\r\n",
        "reference_id": "1344581499",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1256",
        "date": "2021-05-16 15:07:00",
        "notes": "\r\n",
        "reference_id": "1344581466",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1257",
        "date": "2021-05-16 15:07:00",
        "notes": "\r\n",
        "reference_id": "1344581441",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1258",
        "date": "2021-05-16 15:07:00",
        "notes": "\r\n",
        "reference_id": "1344581411",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1259",
        "date": "2021-05-16 15:04:00",
        "notes": "\r\n",
        "reference_id": "1344580357",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1260",
        "date": "2021-05-16 15:04:00",
        "notes": "\r\n",
        "reference_id": "1344580344",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1261",
        "date": "2021-05-16 15:04:00",
        "notes": "\r\n",
        "reference_id": "1344580318",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1262",
        "date": "2021-05-16 15:04:00",
        "notes": "Always so beautiful\r\n",
        "reference_id": "1344580293",
        "tokens": "50",
        "type": "Tip",
        "user": "Vaquero51"
      },
      {
        "UID": "1263",
        "date": "2021-05-16 15:04:00",
        "notes": "\r\n",
        "reference_id": "1344580298",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1264",
        "date": "2021-05-16 15:04:00",
        "notes": "\r\n",
        "reference_id": "1344580237",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1265",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579646",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1266",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579627",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1267",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579608",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1268",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579592",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1269",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579579",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1270",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579546",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1271",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579503",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1272",
        "date": "2021-05-16 15:03:00",
        "notes": "\r\n",
        "reference_id": "1344579464",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1273",
        "date": "2021-05-16 15:02:00",
        "notes": "\r\n",
        "reference_id": "1344579430",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1274",
        "date": "2021-05-16 15:02:00",
        "notes": "\r\n",
        "reference_id": "1344579401",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1275",
        "date": "2021-05-16 15:02:00",
        "notes": "\r\n",
        "reference_id": "1344579256",
        "tokens": "10",
        "type": "Tip",
        "user": "Scottyb85"
      },
      {
        "UID": "1276",
        "date": "2021-05-16 15:01:00",
        "notes": "\r\n",
        "reference_id": "1344578943",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1277",
        "date": "2021-05-16 15:01:00",
        "notes": "\r\n",
        "reference_id": "1344578866",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1278",
        "date": "2021-05-16 15:01:00",
        "notes": "\r\n",
        "reference_id": "1344578746",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1279",
        "date": "2021-05-16 15:01:00",
        "notes": "\r\n",
        "reference_id": "1344578653",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1280",
        "date": "2021-05-16 15:01:00",
        "notes": "\r\n",
        "reference_id": "1344578526",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1281",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578124",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1282",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578119",
        "tokens": "10",
        "type": "Tip",
        "user": "cpres59"
      },
      {
        "UID": "1283",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578101",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1284",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578089",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1285",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578067",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1286",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578055",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1287",
        "date": "2021-05-16 15:00:00",
        "notes": "\r\n",
        "reference_id": "1344578008",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1288",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577935",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1289",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577906",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1290",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577888",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1291",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577874",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1292",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577882",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1293",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577842",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1294",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577835",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1295",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577798",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1296",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577802",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1297",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577804",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1298",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577776",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1299",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577759",
        "tokens": "1",
        "type": "Tip",
        "user": "talondp86"
      },
      {
        "UID": "1300",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577745",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1301",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577746",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1302",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577703",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1303",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577663",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1304",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577625",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1305",
        "date": "2021-05-16 14:59:00",
        "notes": "\r\n",
        "reference_id": "1344577599",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1306",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577562",
        "tokens": "1",
        "type": "Tip",
        "user": "RyannesMan"
      },
      {
        "UID": "1307",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577449",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1308",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577430",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1309",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577409",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1310",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577384",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1311",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577360",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1312",
        "date": "2021-05-16 14:58:00",
        "notes": "\r\n",
        "reference_id": "1344577363",
        "tokens": "50",
        "type": "Tip",
        "user": "MrCremeShow"
      },
      {
        "UID": "1313",
        "date": "2021-05-16 14:50:00",
        "notes": "\r\n",
        "reference_id": "1344574077",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1314",
        "date": "2021-05-16 14:49:00",
        "notes": "\r\n",
        "reference_id": "1344573980",
        "tokens": "50",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1315",
        "date": "2021-05-16 14:49:00",
        "notes": "\r\n",
        "reference_id": "1344573822",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1316",
        "date": "2021-05-16 14:49:00",
        "notes": "\r\n",
        "reference_id": "1344573816",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1317",
        "date": "2021-05-16 14:49:00",
        "notes": "\r\n",
        "reference_id": "1344573799",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1318",
        "date": "2021-05-16 14:49:00",
        "notes": "\r\n",
        "reference_id": "1344573778",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1319",
        "date": "2021-05-16 14:44:00",
        "notes": "\r\n",
        "reference_id": "1344572081",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1320",
        "date": "2021-05-16 14:43:00",
        "notes": "OIL!!!!!\r\n",
        "reference_id": "1344571815",
        "tokens": "50",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1321",
        "date": "2021-05-16 14:40:00",
        "notes": "\r\n",
        "reference_id": "1344570662",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1322",
        "date": "2021-05-16 14:39:00",
        "notes": "last one for me\r\n",
        "reference_id": "1344570373",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1323",
        "date": "2021-05-16 14:38:00",
        "notes": "oh god she is gonna do math\r\n",
        "reference_id": "1344570068",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1324",
        "date": "2021-05-16 14:38:00",
        "notes": "\r\n",
        "reference_id": "1344570069",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1325",
        "date": "2021-05-16 14:38:00",
        "notes": ":pft\r\n",
        "reference_id": "1344569972",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1326",
        "date": "2021-05-16 14:37:00",
        "notes": "no prize?\r\n",
        "reference_id": "1344569707",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1327",
        "date": "2021-05-16 14:37:00",
        "notes": "\r\n",
        "reference_id": "1344569650",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1328",
        "date": "2021-05-16 14:37:00",
        "notes": "test\r\n",
        "reference_id": "1344569571",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1329",
        "date": "2021-05-16 14:34:00",
        "notes": "\r\n",
        "reference_id": "1344568421",
        "tokens": "50",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1330",
        "date": "2021-05-16 14:24:00",
        "notes": "refil\r\n",
        "reference_id": "1344564984",
        "tokens": "333",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1331",
        "date": "2021-05-16 14:20:00",
        "notes": "for nottom\r\n",
        "reference_id": "1344562695",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1332",
        "date": "2021-05-16 14:20:00",
        "notes": "not for kitty\r\n",
        "reference_id": "1344562614",
        "tokens": "333",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1333",
        "date": "2021-05-16 14:18:00",
        "notes": "ty fitz ur the da man\r\n",
        "reference_id": "1344562016",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1334",
        "date": "2021-05-16 14:17:00",
        "notes": "for kitty\r\n",
        "reference_id": "1344561726",
        "tokens": "222",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1335",
        "date": "2021-05-16 14:17:00",
        "notes": "for fitz\r\n",
        "reference_id": "1344561501",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1336",
        "date": "2021-05-16 14:13:00",
        "notes": "and ur poor gina\r\n",
        "reference_id": "1344559425",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1337",
        "date": "2021-05-16 14:12:00",
        "notes": "my poor ears\r\n",
        "reference_id": "1344559377",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1338",
        "date": "2021-05-16 14:11:00",
        "notes": "\r\n",
        "reference_id": "1344558562",
        "tokens": "222",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "1339",
        "date": "2021-05-16 14:10:00",
        "notes": "lies\r\n",
        "reference_id": "1344558348",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1340",
        "date": "2021-05-16 14:09:00",
        "notes": "\r\n",
        "reference_id": "1344557890",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "1341",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557619",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1342",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557613",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1343",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557606",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1344",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557598",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1345",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557589",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1346",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557581",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1347",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557569",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1348",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557558",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1349",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557551",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1350",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557519",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1351",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557508",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1352",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557501",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1353",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557497",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1354",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557489",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1355",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557478",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1356",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557465",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1357",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557452",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1358",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557441",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1359",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557425",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1360",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557421",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1361",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557413",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1362",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557401",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1363",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557393",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1364",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557384",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1365",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557378",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1366",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557357",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1367",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557344",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1368",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557337",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1369",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557320",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1370",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557309",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1371",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557300",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1372",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557293",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1373",
        "date": "2021-05-16 14:08:00",
        "notes": "\r\n",
        "reference_id": "1344557281",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1374",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557266",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1375",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557261",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1376",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557239",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1377",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557232",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1378",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557229",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1379",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557223",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1380",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557220",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1381",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557214",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1382",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557206",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1383",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557198",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1384",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557186",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1385",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557181",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1386",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557176",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1387",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557077",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1388",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557072",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1389",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557064",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1390",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557057",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1391",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557047",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1392",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557042",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1393",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557031",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1394",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557026",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1395",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557016",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1396",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557012",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1397",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344557006",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1398",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556996",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1399",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556988",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1400",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556980",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1401",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556972",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1402",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556962",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1403",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556952",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1404",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556944",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1405",
        "date": "2021-05-16 14:07:00",
        "notes": "\r\n",
        "reference_id": "1344556930",
        "tokens": "1",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1406",
        "date": "2021-05-16 14:06:00",
        "notes": "love the song and you are beautiful and you have hair down there beautiful\r\n",
        "reference_id": "1344556546",
        "tokens": "10",
        "type": "Tip",
        "user": "thiggins1986"
      },
      {
        "UID": "1407",
        "date": "2021-05-16 14:04:00",
        "notes": "\r\n",
        "reference_id": "1344555678",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "1408",
        "date": "2021-05-16 14:01:00",
        "notes": "mom said no jumping on bed u know\r\n",
        "reference_id": "1344554796",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1409",
        "date": "2021-05-16 13:52:00",
        "notes": "For: Rainbow tip top MENU | SHIT SHIT SHIT (ID #10808006)\r\nIncluded Message: i heard it\r\n",
        "reference_id": "1344551284",
        "tokens": "222",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "1410",
        "date": "2021-05-16 13:51:00",
        "notes": "\r\n",
        "reference_id": "1344551076",
        "tokens": "111",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "1411",
        "date": "2021-05-16 13:51:00",
        "notes": ":pft its not friday\r\n",
        "reference_id": "1344550823",
        "tokens": "333",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1412",
        "date": "2021-05-16 13:50:00",
        "notes": "\r\n",
        "reference_id": "1344550618",
        "tokens": "333",
        "type": "Tip",
        "user": "NotTom"
      },
      {
        "UID": "1413",
        "date": "2021-05-16 13:49:00",
        "notes": ":whi\r\n",
        "reference_id": "1344550228",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1414",
        "date": "2021-05-16 13:13:00",
        "notes": "For: Club Show TICKET ",
        "reference_id": "1344537704",
        "tokens": "100",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "1415",
        "date": "2021-05-16 07:43:00",
        "notes": "For: Toffi and Cookie pig ears treat CLUB :) (ID #10805978)\r\nIncluded Message: he just used all his energy for the day with that jump\r\n",
        "reference_id": "1344409601",
        "tokens": "60",
        "type": "MFC Share",
        "user": "sleepykitty"
      },
      {
        "UID": "1416",
        "date": "2021-05-16 07:35:00",
        "notes": "wb :perfecto\r\n",
        "reference_id": "1344406558",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1417",
        "date": "2021-05-16 07:16:00",
        "notes": "\r\n",
        "reference_id": "1344400603",
        "tokens": "2",
        "type": "Group Show",
        "user": "Krombopulos"
      },
      {
        "UID": "1418",
        "date": "2021-05-16 07:11:00",
        "notes": "\r\n",
        "reference_id": "1344398953",
        "tokens": "3",
        "type": "Group Show",
        "user": "OneSavFan"
      },
      {
        "UID": "1419",
        "date": "2021-05-16 07:11:00",
        "notes": "\r\n",
        "reference_id": "1344398876",
        "tokens": "2",
        "type": "Group Show",
        "user": "pistolpete111"
      },
      {
        "UID": "1420",
        "date": "2021-05-16 07:10:00",
        "notes": "\r\n",
        "reference_id": "1344398661",
        "tokens": "2",
        "type": "Group Show",
        "user": "JENtlemanMike"
      },
      {
        "UID": "1421",
        "date": "2021-05-16 07:08:00",
        "notes": "\r\n",
        "reference_id": "1344398156",
        "tokens": "3",
        "type": "Group Show",
        "user": "Easy_a1"
      },
      {
        "UID": "1422",
        "date": "2021-05-16 07:05:00",
        "notes": "\r\n",
        "reference_id": "1344396896",
        "tokens": "3",
        "type": "Group Show",
        "user": "asb23uk"
      },
      {
        "UID": "1423",
        "date": "2021-05-16 07:05:00",
        "notes": "\r\n",
        "reference_id": "1344396713",
        "tokens": "5",
        "type": "Group Show",
        "user": "HardMinkia"
      },
      {
        "UID": "1424",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344395090",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1425",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344395066",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1426",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344395037",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1427",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344395002",
        "tokens": "7",
        "type": "Group Show",
        "user": "puppydog56560"
      },
      {
        "UID": "1428",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344394956",
        "tokens": "5",
        "type": "Group Show",
        "user": "kevar44"
      },
      {
        "UID": "1429",
        "date": "2021-05-16 07:00:00",
        "notes": "test\r\n",
        "reference_id": "1344394907",
        "tokens": "111",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1430",
        "date": "2021-05-16 07:00:00",
        "notes": "\r\n",
        "reference_id": "1344394890",
        "tokens": "2",
        "type": "Group Show",
        "user": "murkygurky"
      },
      {
        "UID": "1431",
        "date": "2021-05-16 06:58:00",
        "notes": "this is also a test\r\n",
        "reference_id": "1344394253",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1432",
        "date": "2021-05-16 06:57:00",
        "notes": "\r\n",
        "reference_id": "1344393828",
        "tokens": "4",
        "type": "Group Show",
        "user": "dickcummingss"
      },
      {
        "UID": "1433",
        "date": "2021-05-16 06:55:00",
        "notes": "\r\n",
        "reference_id": "1344393164",
        "tokens": "11",
        "type": "Group Show",
        "user": "ITheBeastI"
      },
      {
        "UID": "1434",
        "date": "2021-05-16 06:54:00",
        "notes": "\r\n",
        "reference_id": "1344392720",
        "tokens": "4",
        "type": "Group Show",
        "user": "horatiojunior"
      },
      {
        "UID": "1435",
        "date": "2021-05-16 06:54:00",
        "notes": "\r\n",
        "reference_id": "1344392611",
        "tokens": "1",
        "type": "Group Show",
        "user": "xxShyOnexx"
      },
      {
        "UID": "1436",
        "date": "2021-05-16 06:53:00",
        "notes": "\r\n",
        "reference_id": "1344392558",
        "tokens": "111",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1437",
        "date": "2021-05-16 06:52:00",
        "notes": "this is only a test\r\n",
        "reference_id": "1344392090",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1438",
        "date": "2021-05-16 06:52:00",
        "notes": "\r\n",
        "reference_id": "1344391950",
        "tokens": "133",
        "type": "Group Show",
        "user": "OneSavFan"
      },
      {
        "UID": "1439",
        "date": "2021-05-16 06:49:00",
        "notes": "\r\n",
        "reference_id": "1344391013",
        "tokens": "2",
        "type": "Group Show",
        "user": "lokibc"
      },
      {
        "UID": "1440",
        "date": "2021-05-16 06:49:00",
        "notes": "\r\n",
        "reference_id": "1344390876",
        "tokens": "17",
        "type": "Group Show",
        "user": "HEROmaybe"
      },
      {
        "UID": "1441",
        "date": "2021-05-16 06:45:00",
        "notes": "\r\n",
        "reference_id": "1344389645",
        "tokens": "1",
        "type": "Group Show",
        "user": "Bigboy1on1"
      },
      {
        "UID": "1442",
        "date": "2021-05-16 06:44:00",
        "notes": "\r\n",
        "reference_id": "1344389255",
        "tokens": "3",
        "type": "Group Show",
        "user": "Weedlapin2328"
      },
      {
        "UID": "1443",
        "date": "2021-05-16 06:44:00",
        "notes": "\r\n",
        "reference_id": "1344389185",
        "tokens": "316",
        "type": "Group Show",
        "user": "sleepykitty"
      },
      {
        "UID": "1444",
        "date": "2021-05-16 06:44:00",
        "notes": "\r\n",
        "reference_id": "1344389186",
        "tokens": "316",
        "type": "Group Show",
        "user": "fitzthecat63"
      },
      {
        "UID": "1445",
        "date": "2021-05-16 06:44:00",
        "notes": "\r\n",
        "reference_id": "1344389187",
        "tokens": "273",
        "type": "Group Show",
        "user": "Jazzman04"
      },
      {
        "UID": "1446",
        "date": "2021-05-16 06:42:00",
        "notes": "\r\n",
        "reference_id": "1344388466",
        "tokens": "50",
        "type": "Tip",
        "user": "Seemore_bush"
      },
      {
        "UID": "1447",
        "date": "2021-05-16 06:39:00",
        "notes": "double down\r\n",
        "reference_id": "1344387279",
        "tokens": "802",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1448",
        "date": "2021-05-16 06:36:00",
        "notes": "rubbing them dont help either u know\r\n",
        "reference_id": "1344386297",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1449",
        "date": "2021-05-16 06:35:00",
        "notes": "\r\n",
        "reference_id": "1344386140",
        "tokens": "801",
        "type": "Tip",
        "user": "fitzthecat63"
      },
      {
        "UID": "1450",
        "date": "2021-05-16 06:34:00",
        "notes": "damn nipple in my eye again :pft\r\n",
        "reference_id": "1344385886",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1451",
        "date": "2021-05-16 06:30:00",
        "notes": ":finger jazz u stole my prize trade me\r\n",
        "reference_id": "1344384642",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1452",
        "date": "2021-05-16 06:29:00",
        "notes": "\r\n",
        "reference_id": "1344384405",
        "tokens": "50",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1453",
        "date": "2021-05-16 06:26:00",
        "notes": "\r\n",
        "reference_id": "1344383418",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1454",
        "date": "2021-05-16 06:26:00",
        "notes": "\r\n",
        "reference_id": "1344383398",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1455",
        "date": "2021-05-16 06:26:00",
        "notes": "\r\n",
        "reference_id": "1344383385",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1456",
        "date": "2021-05-16 06:26:00",
        "notes": "\r\n",
        "reference_id": "1344383364",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1457",
        "date": "2021-05-16 06:24:00",
        "notes": "\r\n",
        "reference_id": "1344382350",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1458",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382268",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1459",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382245",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1460",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382246",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1461",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382256",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1462",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382258",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1463",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382259",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1464",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382234",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1465",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382235",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1466",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382237",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1467",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382239",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1468",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382241",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1469",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382242",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1470",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382244",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1471",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382224",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1472",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382225",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1473",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382230",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1474",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382232",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1475",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382215",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1476",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382219",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1477",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382223",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1478",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382202",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1479",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382205",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1480",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382211",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1481",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382197",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1482",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382187",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1483",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382188",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1484",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382190",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1485",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382179",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1486",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382181",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1487",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382185",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1488",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382186",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1489",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382173",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1490",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382175",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1491",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382177",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1492",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382178",
        "tokens": "1",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1493",
        "date": "2021-05-16 06:23:00",
        "notes": "\r\n",
        "reference_id": "1344382155",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1494",
        "date": "2021-05-16 06:22:00",
        "notes": "that was a good year.\r\n",
        "reference_id": "1344381604",
        "tokens": "67",
        "type": "Tip",
        "user": "Seemore_bush"
      },
      {
        "UID": "1495",
        "date": "2021-05-16 06:16:00",
        "notes": "no prize?\r\n",
        "reference_id": "1344379839",
        "tokens": "50",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1496",
        "date": "2021-05-16 06:15:00",
        "notes": "\r\n",
        "reference_id": "1344379551",
        "tokens": "50",
        "type": "Tip",
        "user": "Seemore_bush"
      },
      {
        "UID": "1497",
        "date": "2021-05-16 06:15:00",
        "notes": "Miss you\r\n",
        "reference_id": "1344379424",
        "tokens": "10",
        "type": "Tip",
        "user": "zotjeNL"
      },
      {
        "UID": "1498",
        "date": "2021-05-16 06:13:00",
        "notes": "\r\n",
        "reference_id": "1344378789",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1499",
        "date": "2021-05-16 06:13:00",
        "notes": "\r\n",
        "reference_id": "1344378780",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1500",
        "date": "2021-05-16 06:13:00",
        "notes": "\r\n",
        "reference_id": "1344378770",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1501",
        "date": "2021-05-16 06:13:00",
        "notes": "\r\n",
        "reference_id": "1344378746",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1502",
        "date": "2021-05-16 06:13:00",
        "notes": "\r\n",
        "reference_id": "1344378714",
        "tokens": "1",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1503",
        "date": "2021-05-16 06:11:00",
        "notes": "\r\n",
        "reference_id": "1344378095",
        "tokens": "50",
        "type": "Tip",
        "user": "Seemore_bush"
      },
      {
        "UID": "1504",
        "date": "2021-05-16 06:07:00",
        "notes": "\r\n",
        "reference_id": "1344377121",
        "tokens": "1",
        "type": "Tip",
        "user": "LittleBig4"
      },
      {
        "UID": "1505",
        "date": "2021-05-16 06:07:00",
        "notes": "\r\n",
        "reference_id": "1344377115",
        "tokens": "1",
        "type": "Tip",
        "user": "LittleBig4"
      },
      {
        "UID": "1506",
        "date": "2021-05-16 06:07:00",
        "notes": "\r\n",
        "reference_id": "1344377101",
        "tokens": "1",
        "type": "Tip",
        "user": "LittleBig4"
      },
      {
        "UID": "1507",
        "date": "2021-05-16 06:07:00",
        "notes": "\r\n",
        "reference_id": "1344377090",
        "tokens": "1",
        "type": "Tip",
        "user": "LittleBig4"
      },
      {
        "UID": "1508",
        "date": "2021-05-16 06:07:00",
        "notes": "you are looking so soft, smooth and kissable all over.\r\n",
        "reference_id": "1344377045",
        "tokens": "50",
        "type": "Tip",
        "user": "Seemore_bush"
      },
      {
        "UID": "1509",
        "date": "2021-05-16 06:06:00",
        "notes": "For: ",
        "reference_id": "1344376726",
        "tokens": "9",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "1510",
        "date": "2021-05-16 06:02:00",
        "notes": "\r\n",
        "reference_id": "1344375539",
        "tokens": "111",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1511",
        "date": "2021-05-16 06:01:00",
        "notes": "\r\n",
        "reference_id": "1344375170",
        "tokens": "111",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1512",
        "date": "2021-05-16 06:01:00",
        "notes": "\r\n",
        "reference_id": "1344375173",
        "tokens": "50",
        "type": "Tip",
        "user": "puppydog56560"
      },
      {
        "UID": "1513",
        "date": "2021-05-16 05:58:00",
        "notes": ":whi\r\n",
        "reference_id": "1344374152",
        "tokens": "222",
        "type": "Tip",
        "user": "sleepykitty"
      },
      {
        "UID": "1514",
        "date": "2021-05-16 05:57:00",
        "notes": "You're In My Heart.....Rod Stewart\r\n",
        "reference_id": "1344373882",
        "tokens": "36",
        "type": "Tip",
        "user": "Jazzman04"
      },
      {
        "UID": "1515",
        "date": "2021-05-16 05:55:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1344373199",
        "tokens": "5",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "1516",
        "date": "2021-05-16 05:54:00",
        "notes": "\r\n",
        "reference_id": "1344372826",
        "tokens": "72",
        "type": "Tip",
        "user": "slayer109"
      },
      {
        "UID": "1517",
        "date": "2021-05-16 05:53:00",
        "notes": "For: Will you my BEE my Valentine ?",
        "reference_id": "1344372413",
        "tokens": "14",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "1518",
        "date": "2021-05-16 05:51:00",
        "notes": "For: If you got on your mind MMMM when u see me ",
        "reference_id": "1344371728",
        "tokens": "5",
        "type": "MFC Share",
        "user": "Jazzman04"
      },
      {
        "UID": "1519",
        "date": "2021-05-16 05:49:00",
        "notes": "For: ",
        "reference_id": "1344371012",
        "tokens": "9",
        "type": "MFC Share",
        "user": "Jazzman04"
      }
  ];

  function groupByInterval(data: DataItem[], interval: string): { time: string; tokens: number }[] {
    const groupedData: { [time: string]: number } = {};

    for (const item of data) {
      const time = getTime(item.date, interval);
      groupedData[time] = (groupedData[time] || 0) + parseInt(item.tokens);
    }

    return Object.keys(groupedData).map((time) => ({
      time,
      tokens: groupedData[time],
    }));
  }

  function getTime(dateString: string, interval: string): string {
    const date = new Date(dateString);

    if (interval === 'hour') {
      return `${date.getHours()}:00`;
    } else if (interval === 'day') {
      return date.toISOString().slice(0, 10);
    } else if (interval === 'week') {
      const oneJan = new Date(date.getFullYear(), 0, 1);
      const week = Math.ceil(
        ((date.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7
      );
      return `${date.getFullYear()}-W${week.toString().padStart(2, '0')}`;
    } else if (interval === 'month') {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    }

    return '';
  }

  onMount(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    function updateChart() {
      const intervalData = groupByInterval(data, selectedInterval);

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: intervalData.map((item) => item.time),
          datasets: [
            {
              label: 'Tokens',
              data: intervalData.map((item) => item.tokens),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
            },
          },
        },
      });
    }

    updateChart();

    // Při změně vybraného intervalu obnovíme graf
    function handleIntervalChange(event: Event) {
      selectedInterval = (event.target as HTMLSelectElement).value;
      updateChart();
    }

    const selectElement = document.getElementById('intervalSelect') as HTMLSelectElement;
    selectElement.addEventListener('change', handleIntervalChange);
  });

  function destroyChart() {
    chart.destroy();
  }
</script>

<main>
  <select id="intervalSelect">
    {#each intervals as interval}
      <option value={interval}>{interval}</option>
    {/each}
  </select>
  <canvas id="myChart" width="400" height="200"></canvas>
</main>
