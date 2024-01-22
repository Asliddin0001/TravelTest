
import { styles } from "../util/style";

export default function Header() {
  return (
    <div className="header flex flex-col justify-center pl-[9vw] sm:items-center sm:px-[10px] md:pl-[40px] lg:pl-8">
      <h1 className="w-[70%] lg:w-[100%] text-[84px] lg:text-[60px] leading-[110px] font-bold md:text-[50px] sm:text-[35px] md:leading-normal align-middle sm:text-center">
        <span className="text_gradient"> It’s Time</span> To Explore The World
      </h1>
      <button className={`w-[200px] h-[60px] mt-[50px] sm:mt-[30px] lg:mt-[40px] sm:w-[150px] md:h-[45px] btn ${styles.informationText}`}>Plan Your Trip</button>
    </div>
  );
}
