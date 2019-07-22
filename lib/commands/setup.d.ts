import Command from '../base';
import { flags } from '@oclif/command';
export default class Setup extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        force: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        env: flags.IOptionFlag<string>;
    };
    run(): Promise<void>;
}
