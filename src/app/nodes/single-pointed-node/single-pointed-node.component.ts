import { Component, Input } from '@angular/core';
import { Node } from '../../shared/models/Node';

@Component({
  selector: 'app-single-pointed-node',
  templateUrl: './single-pointed-node.component.html',
  styleUrls: ['./single-pointed-node.component.scss'],
})
export class SinglePointedNodeComponent {
  @Input() node: Node | null = null;
}
