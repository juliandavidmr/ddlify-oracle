export function toJSON(key: string | number, value: any) {
    return JSON.parse(`{"${key}": ${JSON.stringify(value)}}`);
}