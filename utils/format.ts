// Fixed locale and time zone so server and client render the same string.
const monthYear = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const formatMonthYear = (value?: string) => (value ? monthYear.format(new Date(value)) : "");
export const formatFullDate = (value?: string) => (value ? fullDate.format(new Date(value)) : "");

const DIGITS = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

/** 1 → 一, 12 → 十二, 40 → 四十. Posts are numbered in kanji, oldest first. */
export const kanjiNumeral = (n: number): string => {
	if (n < 1 || n > 99) return String(n);
	const tens = Math.floor(n / 10);
	const ones = n % 10;
	return `${tens > 1 ? DIGITS[tens] : ""}${tens ? "十" : ""}${DIGITS[ones]}`;
};
