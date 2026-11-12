export const styles = {

    PAGE: "flex flex-col w-full bg-[#F7F8FA] text-[#151D2C]",

    HERO: `flex flex-col w-full
        px-4 py-10 gap-10
        sm:px-6 sm:py-12 sm:gap-12
        md:px-8 md:py-16 md:gap-14
        lg:flex-row lg:items-center lg:px-12 lg:py-20 lg:gap-12
        xl:px-16 xl:py-24 xl:gap-16
        2xl:px-20 2xl:py-28 2xl:gap-20
        max-w-360 mx-auto`,

    HERO_COPY: `flex flex-col w-full
        gap-5
        sm:gap-6
        md:gap-6
        lg:w-1/2 lg:gap-7
        xl:gap-8
        2xl:gap-10`,

    EYEBROW: `uppercase tracking-widest font-semibold text-[#151D2C]/70
        text-xs
        sm:text-sm
        md:text-sm
        lg:text-sm
        xl:text-base
        2xl:text-lg`,

    TITLE: `flex flex-col font-bold leading-[1.05] text-[#151D2C]
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl`,

    TITLE_ACCENT: "text-[#C9A20F]",

    TEXT: `text-[#151D2C]/80 leading-relaxed max-w-xl
        text-base
        sm:text-lg
        md:text-lg
        lg:text-xl
        xl:text-xl
        2xl:text-2xl`,

    BOTOES: `flex flex-col w-full
        gap-3
        sm:flex-row sm:w-auto sm:gap-4
        md:gap-4
        lg:gap-5
        xl:gap-6
        2xl:gap-8`,

    BTN_LOGIN: `bg-transparent border border-[#151D2C] rounded-lg cursor-pointer font-medium
        px-4 py-2 text-sm
        sm:px-5 sm:py-2.5 sm:text-base
        md:px-5 md:py-2.5 md:text-base
        lg:px-6 lg:py-3 lg:text-base
        xl:px-7 xl:py-3 xl:text-lg
        2xl:px-8 2xl:py-3.5 2xl:text-lg`,

    BTN_REGISTER: `bg-[#FDCD1D] text-[#151D2C] rounded-lg cursor-pointer font-semibold
        px-4 py-2 text-sm
        sm:px-5 sm:py-2.5 sm:text-base
        md:px-5 md:py-2.5 md:text-base
        lg:px-6 lg:py-3 lg:text-base
        xl:px-7 xl:py-3 xl:text-lg
        2xl:px-8 2xl:py-3.5 2xl:text-lg`,

    DASH: `flex flex-col w-full bg-white border border-[#151D2C]/10 rounded-2xl shadow-sm
        p-4 gap-4
        sm:p-5 sm:gap-5
        md:p-6 md:gap-5
        lg:w-1/2 lg:p-6 lg:gap-6
        xl:p-8 xl:gap-6
        2xl:p-10 2xl:gap-8`,

    DASH_HEADER: "flex flex-row items-center justify-between",

    DASH_TITLE: `font-semibold text-[#151D2C]
        text-base
        sm:text-lg
        md:text-lg
        lg:text-xl
        xl:text-xl
        2xl:text-2xl`,

    DASH_BADGE: "text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium text-[#151D2C] bg-[#FDCD1D] rounded-full px-3 py-1",

    DASH_GRID: `grid grid-cols-1
        gap-3
        sm:grid-cols-3 sm:gap-3
        md:gap-4
        lg:gap-4
        xl:gap-5
        2xl:gap-6`,

    DASH_CARD: `flex flex-col rounded-xl bg-[#F7F8FA]
        p-3 gap-1
        sm:p-3 sm:gap-1
        md:p-4 md:gap-2
        lg:p-4 lg:gap-2
        xl:p-5 xl:gap-2
        2xl:p-6 2xl:gap-3`,

    DASH_LABEL: `text-[#151D2C]/60
        text-xs
        sm:text-xs
        md:text-sm
        lg:text-sm
        xl:text-sm
        2xl:text-base`,

    DASH_VALUE: `font-bold text-[#151D2C]
        text-lg
        sm:text-lg
        md:text-xl
        lg:text-xl
        xl:text-2xl
        2xl:text-3xl`,

    DASH_POSITIVE: "text-emerald-600",

    DASH_NEGATIVE: "text-rose-600",

    DASH_LIST: `flex flex-col
        gap-2
        sm:gap-2
        md:gap-3
        lg:gap-3
        xl:gap-3
        2xl:gap-4`,

    DASH_ROW: `flex flex-row items-center justify-between rounded-lg bg-[#F7F8FA]
        px-3 py-2 text-sm
        sm:px-3 sm:py-2 sm:text-sm
        md:px-4 md:py-3 md:text-base
        lg:px-4 lg:py-3 lg:text-base
        xl:px-5 xl:py-3 xl:text-base
        2xl:px-6 2xl:py-4 2xl:text-lg`,

    SECTION: `w-full
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16 xl:py-24
        2xl:px-20 2xl:py-28`,

    SECTION_INNER: `flex flex-col mx-auto w-full
        max-w-xl gap-4
        sm:max-w-2xl sm:gap-5
        md:max-w-3xl md:gap-5
        lg:max-w-5xl lg:gap-6
        xl:max-w-6xl xl:gap-8
        2xl:max-w-7xl 2xl:gap-10`,

    KICKER: `uppercase tracking-widest font-semibold text-[#C9A20F]
        text-xs
        sm:text-sm
        md:text-sm
        lg:text-sm
        xl:text-base
        2xl:text-lg`,

    SECTION_TITLE: `font-bold text-[#151D2C] leading-tight
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-4xl
        xl:text-5xl
        2xl:text-6xl`,

    SECTION_TEXT: `text-[#151D2C]/80 leading-relaxed
        text-base
        sm:text-lg
        md:text-lg
        lg:text-xl
        xl:text-xl
        2xl:text-2xl`,

    SOBRE_GRID: `grid grid-cols-1
        gap-4 mt-2
        sm:gap-4 sm:mt-3
        md:grid-cols-3 md:gap-5 md:mt-4
        lg:gap-6 lg:mt-6
        xl:gap-8 xl:mt-8
        2xl:gap-10 2xl:mt-10`,

    SOBRE_CARD: `flex flex-col bg-white border border-[#151D2C]/10 rounded-2xl
        p-4 gap-2
        sm:p-5 sm:gap-2
        md:p-5 md:gap-3
        lg:p-6 lg:gap-3
        xl:p-8 xl:gap-4
        2xl:p-10 2xl:gap-4`,

    CARD_TITLE: `font-semibold text-[#151D2C]
        text-base
        sm:text-lg
        md:text-lg
        lg:text-xl
        xl:text-xl
        2xl:text-2xl`,

    CARD_TEXT: `text-[#151D2C]/75 leading-relaxed
        text-sm
        sm:text-base
        md:text-base
        lg:text-base
        xl:text-lg
        2xl:text-xl`,

    FEATURES_BAND: "bg-white",

    FEATURES_GRID: `grid grid-cols-1
        gap-4 mt-2
        sm:grid-cols-2 sm:gap-4 sm:mt-3
        md:gap-5 md:mt-4
        lg:gap-6 lg:mt-6
        xl:grid-cols-4 xl:gap-6 xl:mt-8
        2xl:gap-8 2xl:mt-10`,

    FEATURE_CARD: `flex flex-col bg-[#F7F8FA] border border-[#151D2C]/10 rounded-2xl
        p-4 gap-3
        sm:p-5 sm:gap-3
        md:p-5 md:gap-4
        lg:p-6 lg:gap-4
        xl:p-6 xl:gap-4
        2xl:p-8 2xl:gap-5`,

    FEATURE_INDEX: `font-bold text-[#151D2C] bg-[#FDCD1D] rounded-lg w-fit
        text-sm px-2 py-1
        sm:text-sm sm:px-2.5 sm:py-1
        md:text-base md:px-3 md:py-1
        lg:text-base lg:px-3 lg:py-1.5
        xl:text-lg xl:px-3 xl:py-1.5
        2xl:text-lg 2xl:px-3.5 2xl:py-2`,

    CONTATO: `w-full
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16 xl:py-24
        2xl:px-20 2xl:py-28`,

    CONTATO_INNER: `mx-auto w-full bg-[#151D2C] text-white rounded-3xl flex flex-col
        max-w-xl p-6 gap-4
        sm:max-w-2xl sm:p-8 sm:gap-5
        md:max-w-3xl md:p-10 md:gap-5
        lg:max-w-5xl lg:p-12 lg:gap-6 lg:flex-row lg:items-center lg:justify-between
        xl:max-w-6xl xl:p-14 xl:gap-8
        2xl:max-w-7xl 2xl:p-16 2xl:gap-10`,

    CONTATO_COPY: `flex flex-col
        gap-3
        sm:gap-3
        md:gap-4
        lg:max-w-2xl lg:gap-4
        xl:gap-5
        2xl:gap-6`,

    CONTATO_TITLE: `font-bold leading-tight
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-4xl
        xl:text-5xl
        2xl:text-6xl`,

    CONTATO_TEXT: `text-white/80 leading-relaxed
        text-base
        sm:text-lg
        md:text-lg
        lg:text-lg
        xl:text-xl
        2xl:text-2xl`,

    BTN_CONTATO: `bg-[#FDCD1D] text-[#151D2C] rounded-lg cursor-pointer font-semibold w-fit shrink-0
        px-4 py-2 text-sm
        sm:px-5 sm:py-2.5 sm:text-base
        md:px-5 md:py-2.5 md:text-base
        lg:px-6 lg:py-3 lg:text-base
        xl:px-7 xl:py-3 xl:text-lg
        2xl:px-8 2xl:py-3.5 2xl:text-lg`,

    FOOTER: `w-full border-t border-[#151D2C]/10 bg-white
        px-4 py-8
        sm:px-6 sm:py-8
        md:px-8 md:py-10
        lg:px-12 lg:py-10
        xl:px-16 xl:py-12
        2xl:px-20 2xl:py-14`,

    FOOTER_INNER: `mx-auto w-full flex flex-col
        max-w-xl gap-4
        sm:max-w-2xl sm:gap-4
        md:max-w-3xl md:gap-5
        lg:max-w-5xl lg:flex-row lg:items-center lg:justify-between lg:gap-6
        xl:max-w-6xl xl:gap-8
        2xl:max-w-7xl 2xl:gap-10`,

    FOOTER_BRAND: `font-bold
        text-lg
        sm:text-xl
        md:text-xl
        lg:text-2xl
        xl:text-2xl
        2xl:text-3xl`,

    FOOTER_NAVY: "text-[#151D2C]",

    FOOTER_GOLD: "text-[#C9A20F]",

    FOOTER_STACK: `text-[#151D2C]/70 leading-relaxed
        text-xs
        sm:text-sm
        md:text-sm
        lg:text-sm lg:text-right lg:max-w-md
        xl:text-base xl:max-w-lg
        2xl:text-lg 2xl:max-w-xl`,

}
