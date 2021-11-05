import {HttpRequest} from "@angular/common/http";

export type RequestMatchSelectorStrategy = (request: HttpRequest<any>) => string;
