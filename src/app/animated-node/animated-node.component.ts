import { Component, Input } from '@angular/core';
import { CircularlyLinkedList } from '../shared/models/CircularlyLinkedList';
import { DoublePointedNode } from '../shared/models/DoublePointedNode';

@Component({
  selector: 'app-animated-node',
  templateUrl: './animated-node.component.html',
  styleUrls: ['./animated-node.component.scss']
})
export class AnimatedNodeComponent {
  @Input() node: DoublePointedNode = new DoublePointedNode(0);
}
