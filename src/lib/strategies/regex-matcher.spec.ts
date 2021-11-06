import {RegExMatcher} from "./regex-matcher";
import {HttpRequest} from "@angular/common/http";


describe('Regex Matcher', () => {
  it('should create an instance', () => {
    expect(new RegExMatcher([/helloMoon/gi])).toBeTruthy();
  });

  it('should create an instance with empty selector', () => {
    expect(new RegExMatcher([/helloPluto/], () => { return ''; })).toBeTruthy();
  })

  it('should match with default params', () => {
    const matcher = new RegExMatcher([/helloWorld/gi]);
    const fakeRequest = new HttpRequest('GET', 'helloWorld');
    expect(matcher.match(fakeRequest)).toBeTruthy();
  })

  it('should match with default params and many', () => {
    const matcher = new RegExMatcher([/helloWold/gi, /helloMars/gi, /helloSailorMoon/gi]);
    const fakeRequest = new HttpRequest('GET', 'helloSailorMoon');
    expect(matcher.match(fakeRequest)).toBeTruthy();
  })

  it('should be case sensitive', () => {
    const matcher = new RegExMatcher([/helloWold/gi, /helloMars/gi, /helloSailormoon/g]);
    const fakeRequest = new HttpRequest('GET', 'helloSailorMoon');
    expect(matcher.match(fakeRequest)).toBeFalsy();
  })


  it('should not match with default params', () => {
    const matcher = new RegExMatcher([/helloWorld/gi]);
    const fakeRequest = new HttpRequest('GET', 'helloMars');
    expect(matcher.match(fakeRequest)).toBeFalsy();
  })

  it('should match with custom selector', () => {
    const fakeRequest = new HttpRequest('GET', 'helloWorld');
    const matcher = new RegExMatcher([/helloWorld/gi], (fakeRequest) => {
      return 'helloWorld';
    })
    expect(matcher.match(fakeRequest)).toBeTruthy();
  })

  it('should not match with custom selector', () => {
    const fakeRequest = new HttpRequest('GET', 'helloWorld');
    const matcher = new RegExMatcher([/helloWorld/gi], (fakeRequest) => {
      return 'helloMars';
    })
    expect(matcher.match(fakeRequest)).toBeFalsy();
  })
});
