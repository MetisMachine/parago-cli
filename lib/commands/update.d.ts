import Command from '../base';
export default class Update extends Command {
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
