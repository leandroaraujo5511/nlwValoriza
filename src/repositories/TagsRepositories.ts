import { EntityRepository, Repository } from "typeorm";
import { tag } from "../entities/tag";


@EntityRepository(tag)
class TagsRepositories extends Repository<tag> {
    
}

export { TagsRepositories }