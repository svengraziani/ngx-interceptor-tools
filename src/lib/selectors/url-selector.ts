import {RequestSelectorStrategy} from "../interfaces/request-selector-strategy";
import {HttpRequest} from "@angular/common/http";
import {sanitizeUrlOrFragment} from "../utils/sanitize-url-or-fragment";


export const URL_SELECTOR: RequestSelectorStrategy = (request: HttpRequest<any>) => {
  return sanitizeUrlOrFragment(request.url);
}
