import {NextApiRequest, NextApiResponse} from "next";
import {ISearchRepo, ISearchUser} from "../interfaces/searchData";

async function getSearchRepo(req: NextApiRequest) {
    const res = await fetch(`https://api.github.com/search/repositories?q=${req.query.search}`);
    const data = await res.json();
    return data.items;
}
async function getSearchUser(req: NextApiRequest) {
    const res = await fetch(`https://api.github.com/search/users?q=${req.query.search}`);
    const data = await res.json();
    return data.items;
}

async function randomData (dataR: any, dataU: any) {
    let combineData: (ISearchUser | ISearchRepo)[] = [];
    let i = 0;
    while(dataR[i] != null || dataU[i] != null) {
        const rand = Math.floor(Math.random() * (10 - 1 +1) + 1);
        if(rand%2 === 0){
            const data0: ISearchRepo = {
                name: dataR[i].name,
                full_name: dataR[i].full_name,
                description: dataR[i].description,
                url: dataR[i].url,
                stargazers_count: dataR[i].stargazers_count,
                updated_at: dataR[i].updated_at,
                language: dataR[i].language,
                has_issues: dataR[i].has_issues,
                open_issues_count: dataR[i].open_issues_count,
                repo: true,
            }
            combineData.push(data0)
        } else {
            const user = await fetch(dataU[i].url).then()
            const userJ = await user.json()
            const data1: ISearchUser = {
                full_name: dataU[i].full_name,
                bio: userJ.bio,
                followers: userJ.followers,
                following: userJ.following,
                url: dataU[i].url,
                avatar_url: dataU[i].avatar_url,
                repo: false,
            }
            combineData.push(data1)
        }
        i++;
    }
    return combineData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<(ISearchUser | ISearchRepo) [] | undefined>) {
    const dataR = await getSearchRepo(req).then();
    const dataU = await getSearchUser(req).then();
    if (req.method === 'GET') {
        res.status(200).json(await randomData(dataR, dataU));
    } else {
        res.status(400);
    }
}