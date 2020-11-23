<script>
export let OLSKModalViewTitleText;
export let OLSKWebViewURL;

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
		<iframe class="OLSKWebViewFrame" src={ OLSKWebViewURL }></iframe>
	</div>

	<div slot="OLSKStandardViewTail">
		<a class="OLSKWebViewWindowButton" href={ OLSKWebViewURL } target="_blank">{ OLSKLocalized('OLSKWebViewWindowButtonText') }</a>
	</div>
</OLSKModalView>

<style>
</style>
