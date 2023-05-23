import NaverMapComponent from "@/components/naverMap";
import dynamic from "next/dynamic";

// const NaverMapComponent = dynamic(() => import("@/components/naverMap"), {
//   ssr: false,
// });

const NaverPages = () => <NaverMapComponent />;

export default NaverPages;
