import Environment from './environment';
export declare class Python extends Environment {
    version: number;
    check(expectedVersion?: string): boolean;
    setup(directory?: string): Promise<void>;
}
