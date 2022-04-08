export type FlourishData = {
  data: Data<T>;
};

export class Data extends Array {
  column_names<T>(): object;
  metadata<T>(): object;
}
