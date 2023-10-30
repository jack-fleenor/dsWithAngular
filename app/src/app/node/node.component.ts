import { Component, Input } from '@angular/core';
import { Node } from '../shared/models/Node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() node: Node = new Node(0);
}
