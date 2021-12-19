import { classNames } from '@ember-decorators/component';
import Component from '@ember/component';
import { styleNamespace } from './test-two.scss';

@classNames(styleNamespace)
export default class SomeComponent extends Component {

}