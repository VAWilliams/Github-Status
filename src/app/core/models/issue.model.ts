import { Endpoints } from "@octokit/types";

type Endpoint = Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"];
type Response = Endpoint["response"];
type Data     = Response["data"];

export interface Issue extends Data { }
