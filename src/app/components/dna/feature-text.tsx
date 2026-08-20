import Image from "next/image";

interface FeatureTextProps {
  iconPath: string;
  title: string;
  description: string;
}

export const FeatureText = ({
  iconPath,
  title,
  description,
}: FeatureTextProps) => {
  return (
    <div className="flex items-start gap-3 flex-shrink-0">
      <div className="flex-shrink-0 mt-[2px]">
        <Image
          src={iconPath}
          alt=""
          width={20}
          height={20}
          className="object-contain w-4 h-4 md:w-6 md:h-6"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <h4 className="font-sans text-sm md:text-[18px] font-bold leading-normal text-[#F5F5F5]">
          {title}
        </h4>
        <p className="font-sans text-xs md:text-[14px] font-medium leading-normal text-[#F5F5F5]/70">
          {description}
        </p>
      </div>
    </div>
  );
};
