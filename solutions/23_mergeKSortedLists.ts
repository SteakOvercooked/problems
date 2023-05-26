import { ListNode } from '@task-types/listNode';

export default function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let prevNode: ListNode | null = null;
  let head: ListNode | null = null;

  while (!lists.every((node) => node === null)) {
    const [value, idx] = lists.reduce(
      (min, node, idx) => (node && node.val < min[0] ? [node.val, idx] : min),
      [Number.MAX_SAFE_INTEGER, -1]
    );

    lists[idx] = lists[idx].next;

    const node = new ListNode(value);
    if (!head) head = node;
    if (prevNode) prevNode.next = node;
    prevNode = node;
  }

  return head;
}
