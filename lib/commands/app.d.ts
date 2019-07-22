import { flags } from '@oclif/command';
import Command from '../base';
export default class App extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        port: flags.IOptionFlag<string>;
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        env: flags.IOptionFlag<string>;
    };
    run(): Promise<void>;
}
