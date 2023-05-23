const sig = async (sidoCode: string) => {
  const response = await fetch(
    `openApi/admSiList.json?authkey=f078764bc84268a4fb0ed3&admCode=${sidoCode}`
  );
  const { admVOList } = await response.json();

  return admVOList.admVOList.map(
    (sigs: { admCode: string; lowestAdmCodeNm: string }) => {
      return {
        code: sigs.admCode,
        name: sigs.lowestAdmCodeNm,
      };
    }
  );
};

export default sig;
