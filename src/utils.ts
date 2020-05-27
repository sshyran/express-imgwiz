export function lastModifiedFormat(date: Date) {
    return `${date.toLocaleString("en-us", { weekday: 'short' })}, ${date.getDate()} ${date.toLocaleString("en-us", { month: 'short' })} ${date.getFullYear()} ${date.toLocaleString("en-us", { hour: '2-digit', minute: '2-digit', hour12: false, second: '2-digit' })} GTM`;
}

// Get backgroundcolor value
// Return hex as string or rgba as object
// Example: #000000 => hex, (0,0,0,.4) => rgba
export function extractBackground(value: string) {
    if (value[0] === '(') {
        let [r, g, b, alpha] = value
            .substr(1, value.length - 2).split(`,`)
            .map(out => parseFloat(out));
        return { r, g, b, alpha }
    }
    return value;
}