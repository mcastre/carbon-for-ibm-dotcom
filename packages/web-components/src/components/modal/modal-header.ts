/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import BXModalHeader from 'carbon-custom-elements/es/components/modal/modal-header';
import styles from './modal.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Expressive modal header.
 *
 * @element dds-modal-header
 */
@customElement(`${ddsPrefix}-modal-header`)
class DDSModalHeader extends BXModalHeader {
  @property({ reflect: true })
  slot = 'header';

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSModalHeader;
