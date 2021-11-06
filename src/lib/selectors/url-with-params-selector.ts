import {HttpRequest} from "@angular/common/http";
import {RequestSelectorStrategy} from "../interfaces/request-selector-strategy";
import {sanitizeUrlOrFragment} from "../utils/sanitize-url-or-fragment";

export const URL_WITH_PARAMS_SELECTOR: RequestSelectorStrategy = (request: HttpRequest<any>) => {
  return sanitizeUrlOrFragment(request.urlWithParams);
}
