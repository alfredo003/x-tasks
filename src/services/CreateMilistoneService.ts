import { Repository } from "typeorm";
import Milistone from "../models/Milistone";

interface CreateMilistoneDTO {
    title: string;
    dueDate: Date;
}

export class CreateMilestoneService {
    private milestoneRepository: Repository<Milistone>;

    constructor(milestoneRepository: Repository<Milistone>) {
        this.milestoneRepository = milestoneRepository;
    }

    async execute({ title, dueDate }: CreateMilistoneDTO): Promise<Milistone> {
        // Validações
        if (!title) {
            throw new Error("Title is required.");
        }

        if (!dueDate) {
            throw new Error("Due date is required.");
        }

        // Criação do objeto de milestone
        const milestone = this.milestoneRepository.create({
            title,
            dueDate
     });

        // Salva no banco de dados
        await this.milestoneRepository.save(milestone);

        return milestone;
    }
}

export default CreateMilestoneService;