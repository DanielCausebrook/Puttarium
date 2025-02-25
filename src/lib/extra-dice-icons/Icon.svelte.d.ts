import { SvelteComponentTyped } from "svelte";
import type { IconNode } from '@tabler/icons-svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        type: "outline" | "filled";
        name: string;
        color?: string | undefined;
        size?: number | string | undefined;
        stroke?: number | string | undefined;
        iconNode: IconNode;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
