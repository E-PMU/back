import axios from "axios";
import { Participant } from "../../common/models/participant.js";
import { CourseRepository } from "../../repositories/Course.js";

export async function getPredictions(id_course: string, data: any) {
    const specialite = await CourseRepository.getSpecialite(id_course);
    return await axios.post(`http://${process.env.HOST_API_PYTHON}:${process.env.PORT_API_PYTHON}/ia/prediction/plat`, {specialite: specialite, participants: data}).then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}