<script>
export let OLSKModalViewTitleText;
export let OLSKWebViewURL;
export let DEBUG_OLSKWebViewDataSource = false;

export const modPublic = {};

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	_OLSKModalView: null,

	// LIFECYCLE

	LifecycleModuleDidMount() {
		Object.assign(modPublic, mod._OLSKModalView.modPublic);
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidMount);

import OLSKModalView from 'OLSKModalView';
</script>

<OLSKModalView bind:this={ mod._OLSKModalView } OLSKModalViewTitleText={ OLSKModalViewTitleText }>
	<div class="OLSKWebView">
		<iframe class="OLSKWebViewFrame" data-src={ DEBUG_OLSKWebViewDataSource ? OLSKWebViewURL : '' } src={ DEBUG_OLSKWebViewDataSource ? '' : OLSKWebViewURL } title={ OLSKModalViewTitleText } frameborder="0"></iframe>
	</div>

	<div class="OLSKWebViewTail OLSKToolbar OLSKCommonEdgeTop" slot="OLSKStandardViewTail">
		<div class="OLSKToolbarElementGroup">
			<a class="OLSKWebViewWindowButton" href={ OLSKWebViewURL } target="_blank">{ OLSKLocalized('OLSKWebViewWindowButtonText') }</a>
		</div>
	</div>
</OLSKModalView>

<style>
.OLSKWebViewFrame {
	width: 100%;
	height: 100%;

	background: white;
}

.OLSKWebViewTail {
	flex-direction: column;
}

.OLSKWebViewTail {
	min-height: unset !important;
}

.OLSKWebViewWindowButton {
	display: block;
	padding: 5px;
}
</style>
