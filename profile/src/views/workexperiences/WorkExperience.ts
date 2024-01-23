export type WorkExperience = {
    company: string;
    roles: {
        role: string;
        startDate: Date;
        endDate?: Date;
        description: string;
    }[];
}