import { Endpoints } from "@octokit/types";

type Endpoint = Endpoints["GET /repos/{owner}/{repo}"];
type Response = Endpoint["response"];
type Data     = Response["data"];

export interface Repository extends Data { }
