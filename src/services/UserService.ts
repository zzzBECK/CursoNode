import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";


class UsersService {

    async create(email: string){
        const userRepository = getCustomRepository(UsersRepository);

        const userExists = await userRepository.findOne({
            email
        });

        if (userExists){
            return userExists;
        }

        const user = userRepository.create({
            email
        });

        await userRepository.save(user);


        return user;


        //verificar se o usuário existe
        //se nao existir, salvar no DB
        //se existir, retornar user
    }

}

export { UsersService }