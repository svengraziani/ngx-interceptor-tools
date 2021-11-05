import { HttpRequest } from '@angular/common/http';

export interface RequestMatchStrategy {
  match(request: HttpRequest<any>): boolean;
}
