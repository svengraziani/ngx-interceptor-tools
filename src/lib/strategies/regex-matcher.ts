import {RequestMatchStrategy} from "../interfaces/request-match-strategy";
import {HttpRequest} from "@angular/common/http";
import {RequestMatchSelectorStrategy} from "../interfaces/request-match-selector-strategy";
import {URL_WITH_PARAMS_SELECTOR} from "../selectors/url-with-params-selector";


export class RegExMatcher implements RequestMatchStrategy {
  public constructor(
    public patterns: RegExp[],
    public selector: RequestMatchSelectorStrategy = URL_WITH_PARAMS_SELECTOR) {
  }

  public match(request: HttpRequest<any>): boolean {
    const selector = this.selector? this.selector(request) : '';
    return Boolean(this.patterns.filter(pattern => Boolean(pattern.exec(selector))).length);
  }
}
