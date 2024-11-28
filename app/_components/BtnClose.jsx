export default function BtnClose() {
  return (
    <button className="group hover:bg-dangerColor hover:text-neutralColor_2 flex items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[5px] cursor-pointer border border-dangerColor outline-none focus-visible:outline-0">
      <svg
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 overflow-visible [transition:transform_.35s_ease] group-hover:[transition-delay:.25s] [&amp;_path]:[transition:transform_.35s_ease] group-hover:rotate-45">
        <path
          className="group-hover:[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]"
          d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"></path>
        <path
          className="group-hover:[transform:rotate(22.5deg)_translate(15.5%,-23%)]"
          d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"></path>
        <path
          className="group-hover:[transform:rotate(112.5deg)_translate(-15%,-149.5%)]"
          d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"></path>
      </svg>
    </button>
  );
}
