import {HttpRequest} from "@angular/common/http";

export function requestBodySerializer(request: HttpRequest<any>, bodyParams: string[]): string {
  const postBody: string[] = [];
  bodyParams.forEach(param => {
    if (request.body.hasOwnProperty(param)) {
      postBody.push(request.body[param]);
    }
  });
  return [postBody.join('_')].join('_');
}
