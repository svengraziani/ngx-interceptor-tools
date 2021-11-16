import {RequestMatchStrategy} from "../interfaces/request-match-strategy";
import {HttpRequest} from "@angular/common/http";
import {URL_WITH_PARAMS_SELECTOR} from "../selectors/url-with-params-selector";
import {RequestSelectorStrategy} from "../interfaces/request-selector-strategy";


export class RegExMatcher implements RequestMatchStrategy {
  public constructor(
    public patterns: RegExp[],
    public selector: RequestSelectorStrategy = URL_WITH_PARAMS_SELECTOR) {

    if(patterns.length === 0) {
      throw new Error('RegExMatcher provided patterns are empty.');
    }


  }

  public match(request: HttpRequest<any>): boolean {
    const selector = this.selector ? this.selector(request) : '';
    return Boolean(this.patterns.filter(pattern => Boolean(pattern.test(selector))).length);
  }
}
