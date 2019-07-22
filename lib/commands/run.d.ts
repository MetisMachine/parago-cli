import Command from '../base';
export default class Run extends Command {
    static description: string;
    static strict: boolean;
    static examples: string[];
    run(): Promise<void>;
}
