export interface IdGeneratorStrategy<ID> {
  createId<FROM>(from: FROM, ...params: any): ID;
}
