import Command, { flags } from '@oclif/command';
import EnvVars from './env/vars';
export default abstract class CommandBase extends Command {
    static strict: boolean;
    paths: {
        root: string;
        generators: string;
    };
    parago: object;
    envVars: EnvVars;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        env: flags.IOptionFlag<string>;
    };
    static args: any[];
    flags: {};
    args: any[];
    processAdhocEnv(args?: string): void;
    processEnv(): void;
    init(): Promise<void>;
}
