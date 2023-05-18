import { APIResponseType, API_URL } from "./api";

const sig = async (sidoCode: string) => {
  const response = await fetch(
    `${API_URL}?regcode_pattern=${sidoCode}*000000&is_ignore_zero=true`
  );
  const sigData: { regcodes: APIResponseType[] } = await response.json();

  return sigData.regcodes.map((sigs: APIResponseType) => {
    return {
      code: sigs.code.substring(0, 5),
      name: sigs.name.split(" ")[1],
    };
  });
};

export default sig;
