/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element
} from "svelte/internal";

function create_fragment(ctx) {
	var svg, g0, g1;

	return {
		c() {
			svg = svg_element("svg");
			g0 = svg_element("g");
			g1 = svg_element("g");
			attr(g0, "data-foo", "bar");
			attr(g1, "data-foo", ctx.bar);
		},

		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, g0);
			append(svg, g1);
		},

		p(changed, ctx) {
			if (changed.bar) {
				attr(g1, "data-foo", ctx.bar);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { bar } = $$props;

	$$self.$set = $$props => {
		if ('bar' in $$props) $$invalidate('bar', bar = $$props.bar);
	};

	return { bar };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["bar"]);
	}
}

export default Component;