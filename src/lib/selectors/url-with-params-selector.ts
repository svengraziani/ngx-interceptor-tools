import {RequestMatchSelectorStrategy} from "../interfaces/request-match-selector-strategy";
import {HttpRequest} from "@angular/common/http";

export const URL_WITH_PARAMS_SELECTOR: RequestMatchSelectorStrategy = (request: HttpRequest<any>) => request.urlWithParams;
