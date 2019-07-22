import Command from '../base';
export default class Train extends Command {
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
