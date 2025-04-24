export type Maybe<T> = T | null | undefined;

export type RequiredRecursively<T> = Exclude<
	T extends string | number | boolean
		? T
		: {
				[P in keyof T]-?: T[P] extends (infer U)[]
					? RequiredRecursively<U>[]
					: T[P] extends Array<infer U>
						? RequiredRecursively<U>[]
						: RequiredRecursively<T[P]>;
			},
	null | undefined
>;

export type AccessorFunction<T, R> = (object: RequiredRecursively<T>) => R;

export function get<T, R>(object: T, accessorFn: AccessorFunction<T, R>): R | undefined;
export function get<T, R>(
	object: T,
	accessorFn: AccessorFunction<T, R>,
	defaultValue: R,
	executeFn?: boolean,
): R;
export function get<T, R>(
	object: T,
	accessorFn: AccessorFunction<T, R>,
	defaultValue?: R,
	executeFn: boolean = true,
): R | undefined {
	try {
		const result =
			executeFn === true
				? accessorFn(object as unknown as RequiredRecursively<T>)
				: defaultValue;
		return result === undefined || result === null ? defaultValue : result;
	} catch (e) {
		return defaultValue;
	}
}

export type KnownKeys<T> = {
	[K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
	? U
	: never;

export function on<T extends Window | Document | HTMLElement | EventTarget>(
	obj: T | null,
	...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
	if (obj && obj.addEventListener) {
		obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
	}
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
	obj: T | null,
	...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
	if (obj && obj.removeEventListener) {
		obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
	}
}

export const cast = <T>(obj: any) => {
	return obj as unknown as T;
};

export const eventloop = async <T>(executorFn: () => T | Promise<T>) => {
	await new Promise((resolve) => setTimeout(resolve, 0));
	return executorFn();
};

export const requestDelayedAnimationFrame = async (
	executorFn: () => void | Promise<void>,
	delay = 0,
) => {
	requestAnimationFrame(async () => {
		await new Promise((resolve) => setTimeout(resolve, delay));
		await executorFn();
	});
};

export const isSSR = () => typeof window === 'undefined';
export const isCSR = () => typeof window !== 'undefined';

export const isIpfs = (url?: string) => {
	return url?.startsWith('ipfs://');
};

export const ipfsToHttps = (url?: string) => {
	if (!url) {
		return '';
	}

	if (!isIpfs(url)) {
		return url;
	}

	return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
