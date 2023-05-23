import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { NavermapsProvider } from "react-naver-maps";

const ulStyle = { display: "flex", listStyle: "none" };
const liStyle = { padding: "5px" };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavermapsProvider
      ncpClientId="0cuajolq0z"
      // or finClientId, govClientId
    >
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link href="/">shp지도</Link>
        </li>
        <li style={liStyle}>
          <Link href="/map">카카오맵</Link>
        </li>
        <li style={liStyle}>
          <Link href="/naverMap">네이버맵</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </NavermapsProvider>
  );
}
