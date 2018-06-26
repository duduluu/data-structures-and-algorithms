/**
 * Stack
 */
// tslint:disable:no-any
export default class Stack<T = any> {
  private readonly items: T[] = [];

  private top: number = 0;

  public push(item: T): this {
    this.items[this.top] = item;
    this.top++;

    return this;
  }

  public pop(): this {
    this.top--;

    return this;
  }

  public get peek(): T {
    return this.items[this.top - 1];
  }

  public get length(): number {
    return this.top;
  }

  public clear(): this {
    this.top = 0;

    return this;
  }
}
