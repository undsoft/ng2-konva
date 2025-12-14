export type Listener = (value?: unknown) => void;
export type ListenerRecord = Record<string, Listener>;
export type PropsType = Record<string, unknown>;
