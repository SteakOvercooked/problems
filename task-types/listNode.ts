export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(arr: any[]): ListNode | null {
  if (arr.length === 0) return null;

  let head: ListNode | null = null;
  let prevNode: ListNode | null = null;

  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    if (!prevNode) head = node;
    if (prevNode) prevNode.next = node;
    prevNode = node;
  }

  return head;
}

export function fromList(head: ListNode | null): any[] {
  let node = head;
  let arr = [];

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}
