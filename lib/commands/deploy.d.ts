import Command from '../base';
export default class Deploy extends Command {
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
