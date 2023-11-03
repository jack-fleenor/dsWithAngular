import { Component, Input } from '@angular/core';
import { SinglePointedNode } from '../shared/newModels/models/SinglePointedNode';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() node: SinglePointedNode = new SinglePointedNode(0);
}
