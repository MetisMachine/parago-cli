declare class Config {
    static configFile: string;
    static configTemplate: {
        name: string;
        description: string;
        version: string;
        author: string;
        license: string;
        system: {
            language: string;
        };
        env: {
            example: string;
        };
        commands: {
            data: {
                load: string;
                clean: string;
            };
            train: string;
            export: string;
        };
        tasks: {
            example: string;
        };
    };
    static write(config: any, to?: string): void;
    static read(): object;
}
export default Config;
