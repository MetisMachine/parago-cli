export default class EnvVars {
    _all: object;
    get(name: string): string;
    set(name: string, value: any): void;
}
