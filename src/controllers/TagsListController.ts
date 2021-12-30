import {Request, Response} from 'express'
import { ListTagsServices } from '../services/ListTagsServices'


class TagsListController {
    async handle(request:Request, response:Response) {
        const listTagsServices = new ListTagsServices();

        const tags = await listTagsServices.execute()

        return response.json(tags)
    }
}

export {TagsListController}