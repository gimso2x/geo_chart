const sido = async () => {
  // const response = await fetch(
  //   `openApi/admCodeList.json?authkey=8349342c5fb7b32771547d`
  // );
  // const { admVOList } = await response.json();

  // return admVOList.admVOList.map(
  //   (siDos: { admCode: string; admCodeNm: string }) => {
  //     return {
  //       code: siDos.admCode,
  //       name: siDos.admCodeNm,
  //     };
  //   }
  // );
  return [
    {
      code: "11",
      name: "서울특별시",
    },
    {
      code: "26",
      name: "부산광역시",
    },
    {
      code: "27",
      name: "대구광역시",
    },
    {
      code: "28",
      name: "인천광역시",
    },
    {
      code: "29",
      name: "광주광역시",
    },
    {
      code: "30",
      name: "대전광역시",
    },
    {
      code: "31",
      name: "울산광역시",
    },
    {
      code: "36",
      name: "세종특별자치시",
    },
    {
      code: "41",
      name: "경기도",
    },
    {
      code: "42",
      name: "강원도",
    },
    {
      code: "43",
      name: "충청북도",
    },
    {
      code: "44",
      name: "충청남도",
    },
    {
      code: "45",
      name: "전라북도",
    },
    {
      code: "46",
      name: "전라남도",
    },
    {
      code: "47",
      name: "경상북도",
    },
    {
      code: "48",
      name: "경상남도",
    },
    {
      code: "50",
      name: "제주특별자치도",
    },
  ];
};

export default sido;
