const sido = async () => {
  const response = await fetch(
    `/openApi/admCodeList.json?authkey=8349342c5fb7b32771547d`
  );
  const { admVOList } = await response.json();

  return admVOList.admVOList.map(
    (siDos: { admCode: string; admCodeNm: string }) => {
      return {
        code: siDos.admCode,
        name: siDos.admCodeNm,
      };
    }
  );
};

export default sido;
