import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../respositories/SurveysUsersRepository";
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";

class AnswerController {
  //http://localhost:3333/answers/1?u=2f98c8f3-65a2-4110-9f80-5ad2d40c4a24
  /**
     * 
     Route Params => Parametros que compõe a rota
     routes.get("/answers/:value") 

     Query Params => Busca, paginação, não obrigatórios
     ?
     chave = valor
     */
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveyUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("Survey User does not Exists!");
    }

    surveyUser.value = Number(value);

    await surveyUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController };
