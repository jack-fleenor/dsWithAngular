import { Component, Input } from '@angular/core';
import { DoublePointedNode } from '../shared/models/DoublePointedNode';

@Component({
  selector: 'app-double-pointed-node',
  templateUrl: './double-pointed-node.component.html',
  styleUrls: ['./double-pointed-node.component.scss']
})
export class DoublePointedNodeComponent {
  @Input() node: DoublePointedNode = new DoublePointedNode(0);
}
