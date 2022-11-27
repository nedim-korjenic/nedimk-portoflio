import styles from "../styles";

const SkillsComponent = ({ imgUrl, title, description1, description2, description3, description4 }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#697ca6]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {" "}
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0]">
      {description1}
    </p>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0]">
      {description2}
    </p>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0]">
      {description3}
    </p>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0]">
      {description4}
    </p>
  </div>
);

export default SkillsComponent;
