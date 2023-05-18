import { APIResponseType, API_URL } from "./api";

const sido = async () => {
  const response = await fetch(`${API_URL}?regcode_pattern=*00000000`);
  const siDoData: { regcodes: APIResponseType[] } = await response.json();

  return siDoData.regcodes.map((siDos: APIResponseType) => {
    return {
      code: siDos.code.substring(0, 2),
      name: siDos.name,
    };
  });
};

export default sido;
