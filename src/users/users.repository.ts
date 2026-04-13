import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string){
        const user = await this.prisma.user.findUnique({
            where: {id: id}
        })

        return user
    }
}