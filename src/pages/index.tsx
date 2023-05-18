import { APIResponseType } from "@/services/api/api";
import sido from "@/services/api/sido";
import sig from "@/services/api/sig";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MyResponsiveChoroplethCanvas = dynamic(() => import("@/components/geo"), {
  ssr: false,
});

const Index = () => {
  const [sidoValue, setSidoValue] = useState<string>();
  const [sigValue, setSigValue] = useState<string>();
  const [sidoList, setSidoList] = useState<APIResponseType[]>([]);
  const [sigList, setSigList] = useState<APIResponseType[]>([]);

  useEffect(() => {
    try {
      sido().then((data) => setSidoList(data));
    } catch (error) {
      console.error(error);
      throw new Error("error");
    }
  }, []);

  useEffect(() => {
    if (sidoValue && sidoValue !== "false") {
      console.log("sidoValue", sidoValue);
      console.log(Boolean(sidoValue));
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
          <option value={"false"}>--- 선택 ---</option>
          {sidoList.map((sido) => (
            <option key={`sido${sido.code}`} value={sido.code}>
              {sido.name}
            </option>
          ))}
        </select>
        <select
          value={sigValue}
          onChange={(event) => setSigValue(event.target.value)}
        >
          <option value={"false"}>--- 선택 ---</option>
          {sigList.map((sig) => (
            <option key={`sig${sig.code}`} value={sig.code}>
              {sig.name}
            </option>
          ))}
        </select>
      </div>
      <MyResponsiveChoroplethCanvas />
    </div>
  );
};

export default Index;
