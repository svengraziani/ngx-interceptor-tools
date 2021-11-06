import {HttpRequest} from "@angular/common/http";

export type RequestSelectorStrategy = (request: HttpRequest<any>, ...params: any) => string;
