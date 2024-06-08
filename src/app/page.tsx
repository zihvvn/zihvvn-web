import { VerificationBadge } from "../../public";

export default function Home() {
  return (
    <div className="md:p-[200px] pl-[40px] pr-[40px] pt-[100px]">
      <div className="flex items-center">
        <p className="text-white text-[25px] pr-[10px] font-extrabold md:text-[30px] selection:bg-[#202020] selection:text-[#ffffff]">
          Abdulla Zihaan
        </p>
        <VerificationBadge className="text-[22px] md:text-[30px] bg-none"/>
      </div>

      <div>
        <p className="text-[#979797] pt-[20px] font-normal selection:bg-[#202020] selection:text-[#979797] text-[15px]">
          <span className="text-white font-semibold selection:text-[white]">Hello!</span> I am a <span className="text-white font-semibold selection:text-[white]">Backend Developer</span> based in the serene Beauty of Maldives. <br />
          So yeah, that&apos;s it.
        </p>
      </div>

      <div className="flex items-center justify-center mt-[40px] mb-[40px]">
        <div className="bg-[#101010] h-[2px] w-[70%] rounded">
        </div>
      </div>

      <div className="flex gap-5">
        <a href="https://www.github.com/zihvvn" className="text-[#979797] font-normal underline selection:bg-[#202020] selection:text-[#979797] text-[15px] text-underline-offset hover:text-white transition duration-300">Github</a>
        <a href="https://t.me/zihvvn" className="text-[#979797] font-normal underline selection:bg-[#202020] selection:text-[#979797] text-[15px] text-underline-offset hover:text-white transition duration-300">Telegram</a>
      </div>
    </div>
  );
}
