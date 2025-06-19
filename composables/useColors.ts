type color = string

type tema = 'light' | 'dark'
export interface Colors {
    background?: Record<string, color>;
    actions?: Record<string, color>;
    text?: Record<string, color>;
}

export function useColors(colorMode?: tema) {
    const colorsJson: Colors = {
        background: {
            primary: '#FFFFFF',
            secondary: '#F7FAF9',
            tertiary: '#DEEDE4',
        },
        actions: {
            primary: '#38E07B',
            secondary: '#E5E7EB',
            tertiary: '#E8F2EC',
            'primary-60': '#38E07B',
        },
        text: {
            primary: '#0E1A13',
            secondary: '#6CA583',
            tertiary: '#adb5bd',
        }
    };

    const extractValues = (prefixo: keyof Colors): Record<string, color> => {
        return Object.fromEntries(
            Object.entries(colorsJson[prefixo] as Colors || {}).map(([key, cor]) => [key, cor])
        );
    };

    const setCssVar = (prefixo: keyof Colors): void => {
        const colors = extractValues(prefixo);
        return Object.entries(colors).forEach(([nomeDaCor, hexadecimal]) => {
            document.documentElement.style.setProperty(`--${prefixo.toLowerCase()}-${nomeDaCor}`, hexToRgb(hexadecimal));

            if (Number(nomeDaCor.slice(-2))) {
                let opacity = Number(nomeDaCor.slice(-2)) / 100
                document.documentElement.style.setProperty(`--${prefixo.toLowerCase()}-${nomeDaCor}`, hexToRgb(hexadecimal, opacity));
            }
        });
    };


    Object.keys(colorsJson).forEach((prefixo: any) => {
        setCssVar(prefixo)
    })
}

function hexToRgb(hex: string, opacity = 1) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return opacity < 1 ? `rgba(${r}, ${g}, ${b}, ${opacity})` : `rgb(${r}, ${g}, ${b})`;
}