import {NextApiRequest, NextApiResponse} from "next";
// import { ISearchData } from "../interfaces/searchData";
import {formatResults} from "next/dist/lib/eslint/customFormatter";
import {ISearchRepo} from "../interfaces/searchData";

class Search {
    data: any;
    constructor(data: any) {
        this.data = data;
    }
    searchData: any = [];
    addData(data: any): void {
        for(let res of data){
            this.data.push(res)
        }
        this.searchData.push({ data });
    }

    // searchData(
    //     data: ISearchData,
    //     keywords: ISearchData,
    // ) {
    //     for (const prop in data) {
    //         if (typeof data[prop] == 'object' && data[prop] !== null) {
    //             this.searchData(data[prop], keywords);
    //         }
    //         if (Object.keys(keywords).includes(prop)) {
    //             this.weatherKeywords[keywords[prop]](data[prop]);
    //         }
    //     }
    // }

}

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

let dataRepo: any = []
let dataUsers: any = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const data1 = {
    //     name: rdat.items[0].name,
    //     fullName: rdat.items[0].full_name,
    //     description: rdat.items[0].description,
    //     url: rdat.items[0].url,
    //     stars: rdat.items[0].stargazers_count,
    //     lastModify: rdat.items[0].updated_at,
    //     lang: rdat.items[0].language
    // }
    const data = await getSearchRepo(req).then();
    if (req.method === 'GET') {
        for(let i=0; i<data.length; i++) {
            const data1: ISearchRepo = {
                name: data[i].name,
                full_name: data[i].full_name,
                description: data[i].description,
                url: data[i].url,
                stargazers_count: data[i].stargazers_count,
                updated_at: data[i].updated_at,
                language: data[i].language
            }
            dataRepo.push(data1)
        }
        res.status(200).json(dataRepo);
    } else {
        res.status(400);
    }
}