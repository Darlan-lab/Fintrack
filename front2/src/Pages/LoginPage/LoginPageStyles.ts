
export const styles = {

    PAGE: `flex flex-col w-full min-h-[calc(100vh-4rem)]
        bg-[#F7F8FA] text-[#151D2C]
        px-4 py-8
        sm:px-6 sm:py-10
        md:px-8 md:py-12
        lg:px-12 lg:py-14
        xl:px-16 xl:py-16
        2xl:px-20 2xl:py-20`,

    CONTAINER: `flex flex-col items-center justify-center mx-auto w-full
        max-w-sm
        sm:max-w-md
        md:max-w-md
        lg:max-w-lg
        xl:max-w-lg
        2xl:max-w-xl`,

    CARD: `flex flex-col w-full bg-white border border-[#151D2C]/10 rounded-2xl shadow-sm
        p-5 gap-5
        sm:p-7 sm:gap-6
        md:p-8 md:gap-6
        lg:p-10 lg:gap-7
        xl:p-10 xl:gap-8
        2xl:p-12 2xl:gap-10`,

    HEADER: `flex flex-col items-center text-center
        gap-2
        sm:gap-3
        md:gap-3
        lg:gap-4
        xl:gap-4
        2xl:gap-5`,

    TITLE: `font-bold text-[#151D2C]
        text-2xl
        sm:text-3xl
        md:text-3xl
        lg:text-4xl
        xl:text-4xl
        2xl:text-5xl`,

    SUBTITLE: `text-[#151D2C]/60
        text-sm
        sm:text-base
        md:text-base
        lg:text-base
        xl:text-lg
        2xl:text-xl`,

    FORM: `flex flex-col w-full
        gap-4
        sm:gap-5
        md:gap-5
        lg:gap-6
        xl:gap-6
        2xl:gap-7`,

    FIELD: `flex flex-col w-full
        gap-1.5
        sm:gap-2
        md:gap-2
        lg:gap-2
        xl:gap-2
        2xl:gap-3`,

    LABEL: `font-medium text-[#151D2C]
        text-sm
        sm:text-sm
        md:text-base
        lg:text-base
        xl:text-base
        2xl:text-lg`,

    INPUT: `w-full bg-[#F7F8FA] border border-[#151D2C]/15 rounded-lg outline-none transition
        px-3 py-2.5 text-sm
        sm:px-4 sm:py-3 sm:text-base
        md:px-4 md:py-3 md:text-base
        lg:px-4 lg:py-3 lg:text-base
        xl:px-5 xl:py-3.5 xl:text-lg
        2xl:px-5 2xl:py-4 2xl:text-xl
        focus:border-[#C9A20F] focus:ring-2 focus:ring-[#FDCD1D]/20`,

    ERROR: `text-rose-600
        text-xs
        sm:text-sm
        md:text-sm
        lg:text-sm
        xl:text-sm
        2xl:text-base`,

    BUTTON: `w-full bg-[#FDCD1D] text-[#151D2C] rounded-lg cursor-pointer font-semibold transition
        py-2.5 text-sm
        sm:py-3 sm:text-base
        md:py-3 md:text-base
        lg:py-3.5 lg:text-base
        xl:py-3.5 xl:text-lg
        2xl:py-4 2xl:text-xl
        hover:bg-[#EAC019] active:scale-[0.99]`,

    FOOTER: `text-center text-[#151D2C]/70
        text-xs
        sm:text-sm
        md:text-sm
        lg:text-sm
        xl:text-base
        2xl:text-lg`,

    LINK: `text-[#B18D08] font-semibold hover:underline cursor-pointer`,

}
