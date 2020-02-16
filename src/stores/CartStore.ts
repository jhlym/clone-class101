import { observable, action } from "mobx";
import { item } from "../interfaces";

export default class CartStore {
  @observable
  items: item[] = [];

  /**
   * @returns boolean
   */
  check(): boolean {
    if (this.items.length === 3) {
      window.alert("장바구니에는 상품을 최대 3개까지 담을 수 있습니다.");
      return false;
    }
    return true;
  }

  /**
   * @description
   * 장바구니에 item을 추가합니다.
   * 장바구니에는 상품을 최대 3개까지 담을 수 있습니다.
   * @param  {item} item
   */
  @action
  add(item: item) {
    if (this.check()) {
      this.items.push(item);
    }
  }

  /**
   * @description 장바구니에서 item을 삭제합니다.
   * @param  {item} item
   */
  @action
  remove(item: item) {
    const index = this.getCartItemIndex(item);
    this.items.splice(index, 1);
  }

  /**
   * @param  {item} item
   * @returns boolean
   */
  isCart(item: item): boolean {
    return this.getCartItemIndex(item) > -1;
  }

  /**
   * @param  {item} item
   * @returns number 인덱스를 찾지 못하면 -1 반환
   */
  getCartItemIndex(item: item): number {
    return this.items.findIndex(cart => cart.id === item.id);
  }
}