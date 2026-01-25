import { atom, useAtom } from 'jotai';

const isAppLoaded = atom(false);

export const useMainPageLoaded = () => {
	const [appLoaded, setAppLoaded] = useAtom(isAppLoaded);
	return { appLoaded, setAppLoaded };
}