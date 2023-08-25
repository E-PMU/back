import { Pari, sModelPari } from "../models/Pari";
import { Rapports } from "../models/Rapports";
import { dateParams } from "../utils/models";
import { ProgrammeRepository } from "./Programme";

export class PariRepository {
    static async postPari(reqParams: dateParams, pari: sModelPari) {
        //Permet de récupérer l'id de la course pour la fournir en tant que clé étrangère au cheval
        return await ProgrammeRepository.getCourseId(reqParams).then((courseId: number) => {
            Pari.create({
                ...pari, "id_course": courseId
            },
            {
                include: [{ model: Rapports }]
            })
        }).catch(() => console.log("Error !"));;
    }
}
