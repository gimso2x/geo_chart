import sido from "@/services/api/sido";
import sig from "@/services/api/sig";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Canvas = dynamic(() => import("@/components/geo"), {
  ssr: false,
});

interface APIResponseType {
  code: string;
  name: string;
}

const Index = () => {
  const [sidoValue, setSidoValue] = useState<string>();
  const [sigValue, setSigValue] = useState<string>();
  const [sidoList, setSidoList] = useState<APIResponseType[]>([]);
  const [sigList, setSigList] = useState<APIResponseType[]>([]);

  // 1. 시도 import
  useEffect(() => {
    try {
      sido().then((data) => {
        setSidoList(data);
        setSidoValue(data[0].code);
      });
    } catch (error) {
      console.error(error);
      throw new Error("error");
    }
  }, []);

  // 2. 시군 import
  useEffect(() => {
    if (sidoValue) {
      setSigValue(undefined);
      try {
        sig(sidoValue).then((data) => {
          console.log("sig", data);
          setSigList(data);
        });
      } catch (error) {
        console.error(error);
        throw new Error("error");
      }
    }
  }, [sidoValue]);

  return (
    <div>
      <div>
        <select
          value={sidoValue}
          onChange={(event) => setSidoValue(event.target.value)}
        >
          {sidoList.map((sido) => (
            <option key={`sido${sido.code}`} value={sido.code}>
              {sido.name}
            </option>
          ))}
        </select>
        <select
          value={sigValue}
          onChange={(event) =>
            setSigValue(
              isNaN(+event.target.value) ? undefined : event.target.value
            )
          }
        >
          <option>--- 선택 ---</option>
          {sigList.map((sig) => (
            <option key={`sig${sig.code}`} value={sig.code}>
              {sig.name}
            </option>
          ))}
        </select>
      </div>
      <Canvas sido={sidoValue} sig={sigValue} />
    </div>
  );
};

export default Index;
