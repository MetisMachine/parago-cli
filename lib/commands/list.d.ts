import Command from '../base';
export default class List extends Command {
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
