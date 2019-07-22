import Command from '../base';
export default class Data extends Command {
    static description: string;
    static examples: string[];
    static args: {
        name: string;
        description: string;
    }[];
    runLoad(): any;
    runClean(): any;
    run(): Promise<void>;
}
